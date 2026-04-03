"""
QRollCall Face Service
======================
FastAPI microservice for face registration and verification.
Uses DeepFace (ArcFace model) — supports Python 3.12+.

Endpoints
---------
POST /register
    Body : { "image_b64": "<base64 PNG/JPEG>" }
    Returns: { "descriptor": [512 floats] }

POST /verify
    Body : { "image_b64": "...", "stored_descriptor": [512 floats], "tolerance": 0.40 }
    Returns: { "match": bool, "distance": float }
"""

import base64
import io
import logging
import os
from typing import List

import numpy as np
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from PIL import Image
from pydantic import BaseModel

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger("face_service")

app = FastAPI(title="QRollCall Face Service", version="1.0.0")

# Allow requests from the Vite dev server and any production origin.
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["POST", "GET"],
    allow_headers=["*"],
)

# ── Lazy-load DeepFace so startup is fast ─────────────────────────────────────
_deepface = None

def get_deepface():
    global _deepface
    if _deepface is None:
        logger.info("Loading DeepFace (first call, may take a moment)...")
        from deepface import DeepFace  # noqa: PLC0415
        _deepface = DeepFace
        logger.info("DeepFace ready.")
    return _deepface


# ── Helpers ───────────────────────────────────────────────────────────────────

def b64_to_pil(image_b64: str) -> Image.Image:
    """Decode a base64 image string (with or without data-URL prefix) to PIL."""
    if "," in image_b64:
        image_b64 = image_b64.split(",", 1)[1]
    raw = base64.b64decode(image_b64)
    return Image.open(io.BytesIO(raw)).convert("RGB")


def pil_to_np(img: Image.Image) -> np.ndarray:
    return np.array(img)


def extract_descriptor(image_b64: str) -> List[float]:
    """Return a face embedding using DeepFace / ArcFace."""
    DeepFace = get_deepface()
    img = b64_to_pil(image_b64)
    arr = pil_to_np(img)

    # represent() returns a list of dicts, one per face.
    # We take the first (most prominent) face.
    # Try strict detection first, fall back to lenient if it fails
    try:
        results = DeepFace.represent(
            img_path=arr,
            model_name="ArcFace",
            enforce_detection=True,
            detector_backend="opencv",
        )
    except ValueError:
        logger.warning("Strict face detection failed, retrying with lenient settings...")
        results = DeepFace.represent(
            img_path=arr,
            model_name="ArcFace",
            enforce_detection=False,
            detector_backend="opencv",
        )
    if not results:
        raise ValueError("No face detected in the image.")
    return results[0]["embedding"]


def cosine_distance(a: List[float], b: List[float]) -> float:
    va = np.array(a, dtype=np.float64)
    vb = np.array(b, dtype=np.float64)
    norm_a = np.linalg.norm(va)
    norm_b = np.linalg.norm(vb)
    if norm_a == 0 or norm_b == 0:
        return 1.0
    return float(1.0 - np.dot(va, vb) / (norm_a * norm_b))


# ── Request / Response models ──────────────────────────────────────────────────

class RegisterRequest(BaseModel):
    image_b64: str  # base64-encoded image (PNG/JPEG), data-URL prefix optional


class RegisterResponse(BaseModel):
    descriptor: List[float]
    message: str = "Face registered successfully"


class VerifyRequest(BaseModel):
    image_b64: str
    stored_descriptor: List[float]
    tolerance: float = 0.40   # cosine distance threshold (lower = stricter)


class VerifyResponse(BaseModel):
    match: bool
    distance: float
    message: str


# ── Routes ────────────────────────────────────────────────────────────────────

@app.get("/health")
def health():
    return {"status": "ok", "service": "QRollCall Face Service"}


@app.post("/register", response_model=RegisterResponse)
async def register(req: RegisterRequest):
    """Extract and return a 512-d ArcFace embedding for the supplied face image."""
    try:
        descriptor = extract_descriptor(req.image_b64)
        logger.info(f"Registered face — descriptor length: {len(descriptor)}")
        return RegisterResponse(descriptor=descriptor)
    except ValueError as e:
        raise HTTPException(status_code=422, detail=str(e))
    except Exception as e:
        logger.error(f"Register error: {e}")
        raise HTTPException(status_code=500, detail=f"Face registration failed: {e}")


@app.post("/verify", response_model=VerifyResponse)
async def verify(req: VerifyRequest):
    """Compare a live face image against a stored descriptor."""
    try:
        live_descriptor = extract_descriptor(req.image_b64)
    except ValueError as e:
        raise HTTPException(status_code=422, detail=str(e))
    except Exception as e:
        logger.error(f"Verify — descriptor extraction error: {e}")
        raise HTTPException(status_code=500, detail=f"Face detection failed: {e}")

    dist = cosine_distance(live_descriptor, req.stored_descriptor)
    match = dist <= req.tolerance
    msg = "Face matched" if match else f"Face did not match (distance {dist:.4f} > threshold {req.tolerance})"
    logger.info(f"Verify — distance={dist:.4f}, match={match}")
    return VerifyResponse(match=match, distance=dist, message=msg)
