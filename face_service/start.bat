@echo off
echo ====================================================
echo  QRollCall Face Service (Python / DeepFace)
echo ====================================================
echo.

REM Install dependencies if not already done
py -m pip show deepface >nul 2>&1
IF %ERRORLEVEL% NEQ 0 (
    echo [setup] Installing Python dependencies...
    py -m pip install --pre -r requirements.txt
    echo.
)

echo [start] Launching face service on http://localhost:8001
echo [start] Press Ctrl+C to stop.
echo.
py -m uvicorn app:app --host 0.0.0.0 --port 8001 --reload

pause
