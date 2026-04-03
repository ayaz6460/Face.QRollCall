import { useState, useEffect, useMemo, useCallback } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { worlds } from "@/lib/data";
import { completeLevel } from "@/lib/storage";

type Phase = "entering" | "exploring" | "correct" | "wrong" | "complete" | "failed";

const THEME_PARTICLES: Record<string, string> = {
  forest: "34, 197, 94",
  citadel: "168, 85, 247",
  machine: "59, 130, 246",
  serpent: "16, 185, 129",
  storm: "99, 102, 241",
  temple: "245, 158, 11",
  prismatic: "236, 72, 153",
  labyrinth: "20, 184, 166",
  archive: "217, 119, 6",
  core: "239, 68, 68",
};

const Play = () => {
  const navigate = useNavigate();
  const { subjectId, levelIndex } = useParams<{ subjectId: string; levelIndex: string }>();

  const world = worlds.find((w) => w.id === subjectId);
  const lvl = parseInt(levelIndex || "0");
  const zone = world?.zones[lvl];

  const [roomIdx, setRoomIdx] = useState(0);
  const [phase, setPhase] = useState<Phase>("entering");
  const [corruption, setCorruption] = useState(0);
  const [clickedIdx, setClickedIdx] = useState<number | null>(null);
  const [transitioning, setTransitioning] = useState(false);

  const scenario = zone?.scenarios[roomIdx];
  const particleColor = THEME_PARTICLES[world?.theme || "forest"];

  const particles = useMemo(
    () =>
      Array.from({ length: 25 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: 1 + Math.random() * 3,
        delay: Math.random() * 8,
        duration: 6 + Math.random() * 8,
      })),
    []
  );

  // Reset on level change
  useEffect(() => {
    setRoomIdx(0);
    setCorruption(0);
    setPhase("entering");
    setClickedIdx(null);
    setTransitioning(false);
  }, [subjectId, levelIndex]);

  // Enter animation
  useEffect(() => {
    setPhase("entering");
    setClickedIdx(null);
    const t = setTimeout(() => setPhase("exploring"), 2200);
    return () => clearTimeout(t);
  }, [roomIdx]);

  // Keyboard support
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (phase !== "exploring" || !scenario) return;
      const num = parseInt(e.key);
      if (num >= 1 && num <= scenario.elements.length) {
        handleClick(num - 1);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  });

  const handleClick = useCallback(
    (idx: number) => {
      if (phase !== "exploring" || !scenario || !world || !zone) return;
      const el = scenario.elements[idx];
      setClickedIdx(idx);

      if (el.correct) {
        setPhase("correct");
        setTimeout(() => {
          setTransitioning(true);
          setTimeout(() => {
            if (roomIdx + 1 >= zone.scenarios.length) {
              completeLevel(world.id, lvl);
              setPhase("complete");
              setTransitioning(false);
            } else {
              setRoomIdx((r) => r + 1);
              setTransitioning(false);
            }
          }, 600);
        }, 1400);
      } else {
        setPhase("wrong");
        const next = corruption + 1;
        setCorruption(next);
        if (next >= 3) {
          setTimeout(() => setPhase("failed"), 1000);
        } else {
          setTimeout(() => {
            setPhase("exploring");
            setClickedIdx(null);
          }, 1200);
        }
      }
    },
    [phase, scenario, world, zone, roomIdx, lvl, corruption]
  );

  if (!world || !zone || !scenario) {
    return (
      <div className="fixed inset-0 bg-background flex items-center justify-center gap-4">
        <p className="font-display text-muted-foreground">World not found</p>
        <button onClick={() => navigate("/subjects")} className="text-primary font-body underline">
          Return
        </button>
      </div>
    );
  }

  const isLastLevel = lvl >= world.zones.length - 1;

  return (
    <div
      className={`fixed inset-0 world-${world.theme} overflow-hidden select-none ${phase === "wrong" ? "animate-shake" : ""}`}
      style={{ filter: `brightness(${Math.max(0.4, 1 - corruption * 0.2)})` }}
    >
      {/* Ambient particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {particles.map((p) => (
          <div
            key={p.id}
            className="absolute rounded-full animate-drift"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: p.size,
              height: p.size,
              backgroundColor: `rgba(${particleColor}, 0.25)`,
              animationDelay: `${p.delay}s`,
              animationDuration: `${p.duration}s`,
            }}
          />
        ))}
      </div>

      {/* Vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.7) 100%)" }}
      />

      {/* Corruption overlay */}
      <div
        className="absolute inset-0 pointer-events-none bg-black transition-opacity duration-700"
        style={{ opacity: corruption * 0.15 }}
      />

      {/* Correct flash */}
      {phase === "correct" && (
        <div
          className="absolute inset-0 pointer-events-none animate-scene-brighten"
          style={{ backgroundColor: `rgba(${particleColor}, 0.12)` }}
        />
      )}

      {/* Wrong flash */}
      {phase === "wrong" && <div className="absolute inset-0 pointer-events-none bg-red-900/20 animate-scene-darken" />}

      {/* Transition overlay */}
      <div
        className={`absolute inset-0 bg-black pointer-events-none z-40 transition-opacity duration-500 ${transitioning ? "opacity-100" : "opacity-0"}`}
      />

      {/* HUD */}
      <div className="absolute top-0 left-0 right-0 z-30 flex items-center justify-between px-5 py-4">
        <button
          onClick={() => navigate(`/levels/${world.id}`)}
          className="text-foreground/30 hover:text-foreground/70 font-body text-sm transition-colors"
        >
          ← Retreat
        </button>
        <span className="text-foreground/20 font-display text-[10px] tracking-[0.3em] uppercase">{zone.name}</span>
      </div>

      {/* Scene text */}
      <div
        className={`absolute top-[18%] left-0 right-0 text-center px-8 z-20 transition-all duration-[1200ms] ease-out ${phase === "entering" ? "opacity-0 translate-y-6" : "opacity-100 translate-y-0"}`}
      >
        <p className="text-base sm:text-xl text-foreground/60 font-body max-w-md mx-auto italic leading-relaxed tracking-wide">
          {scenario.scene}
        </p>
      </div>

      {/* Interactive elements */}
      <div
        className={`absolute inset-x-0 top-[40%] flex items-start justify-center gap-6 sm:gap-14 px-6 z-20 transition-all duration-700 ease-out ${phase === "entering" ? "opacity-0 scale-90" : "opacity-100 scale-100"}`}
      >
        {scenario.elements.map((el, i) => {
          const isClicked = clickedIdx === i;
          const isCorrect = isClicked && el.correct && phase === "correct";
          const isWrong = isClicked && !el.correct && phase === "wrong";

          return (
            <button
              key={`${roomIdx}-${i}`}
              onClick={() => handleClick(i)}
              disabled={phase !== "exploring"}
              className={`group flex flex-col items-center gap-3 sm:gap-4 p-4 sm:p-6 rounded-2xl transition-all duration-500 outline-none
                ${phase === "exploring" ? "hover:scale-110 hover:bg-white/[0.03] cursor-pointer active:scale-95" : "cursor-default"}
                ${isCorrect ? "scale-[1.2] bg-white/10 ring-2 ring-primary/30" : ""}
                ${isWrong ? "scale-90 opacity-30" : ""}
              `}
            >
              <span
                className={`text-5xl sm:text-7xl block transition-all duration-500 animate-float
                  ${phase === "exploring" ? "group-hover:drop-shadow-[0_0_25px_rgba(255,255,255,0.35)]" : ""}
                  ${isCorrect ? "drop-shadow-[0_0_35px_rgba(34,197,94,0.8)]" : ""}
                  ${isWrong ? "grayscale blur-[1px]" : ""}
                `}
                style={{ animationDelay: `${i * 0.8}s`, animationDuration: `${3 + i * 0.5}s` }}
              >
                {el.emoji}
              </span>
              <span
                className={`text-xs sm:text-sm font-body tracking-wide transition-all duration-500
                  ${phase === "exploring" ? "text-foreground/40 group-hover:text-foreground/70" : "text-foreground/20"}
                  ${isCorrect ? "text-primary text-glow-primary" : ""}
                `}
              >
                {el.label}
              </span>
              {phase === "exploring" && <span className="text-[10px] text-foreground/15 font-display">{i + 1}</span>}
            </button>
          );
        })}
      </div>

      {/* Progress dots */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2.5 z-30">
        {zone.scenarios.map((_, i) => (
          <div
            key={i}
            className={`rounded-full transition-all duration-500
              ${i < roomIdx ? "w-2 h-2 bg-primary/70" : i === roomIdx ? "w-3 h-3 bg-primary/40 ring-1 ring-primary/20" : "w-2 h-2 bg-foreground/8"}
            `}
          />
        ))}
      </div>

      {/* Corruption bars */}
      <div className="absolute bottom-4 left-5 flex gap-1.5 z-30">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className={`w-1 h-5 rounded-full transition-all duration-700 ${i < corruption ? "bg-destructive/50" : "bg-foreground/8"}`}
          />
        ))}
      </div>

      {/* COMPLETE OVERLAY */}
      {phase === "complete" && (
        <div className="absolute inset-0 bg-background/90 flex items-center justify-center z-50 animate-fade-in">
          <div className="text-center max-w-sm px-8">
            <div className="text-5xl mb-8 animate-float">✨</div>
            <p className="text-2xl sm:text-3xl font-display text-primary text-glow-primary mb-2">You survived.</p>
            <p className="text-foreground/40 font-body text-sm mb-10">{zone.name} has been conquered.</p>

            {isLastLevel ? (
              <div className="space-y-4">
                <p className="text-foreground/60 font-body italic text-sm leading-relaxed mb-6 whitespace-pre-line">
                  {"\"You didn't memorize code.\nYou survived it.\""}
                </p>
                <button
                  onClick={() => navigate("/subjects")}
                  className="px-10 py-3 bg-primary text-primary-foreground font-display rounded-lg box-glow-primary hover:scale-105 transition-transform"
                >
                  Return to Worlds
                </button>
              </div>
            ) : (
              <div className="flex gap-3 justify-center">
                <button
                  onClick={() => navigate(`/levels/${world.id}`)}
                  className="px-6 py-3 border border-border text-foreground/50 font-display text-sm rounded-lg hover:border-foreground/30 transition-colors"
                >
                  Zone Map
                </button>
                <button
                  onClick={() => navigate(`/play/${world.id}/${lvl + 1}`)}
                  className="px-8 py-3 bg-primary text-primary-foreground font-display text-sm rounded-lg box-glow-primary hover:scale-105 transition-transform"
                >
                  Next Zone →
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* FAILED OVERLAY */}
      {phase === "failed" && (
        <div className="absolute inset-0 bg-background/95 flex items-center justify-center z-50 animate-fade-in">
          <div className="text-center max-w-sm px-8">
            <div className="text-5xl mb-8">💀</div>
            <p className="text-2xl font-display text-destructive mb-2">The darkness consumed you.</p>
            <p className="text-foreground/30 font-body text-sm mb-10">Observe more carefully.</p>
            <button
              onClick={() => {
                setRoomIdx(0);
                setCorruption(0);
                setPhase("entering");
                setClickedIdx(null);
              }}
              className="px-10 py-3 border border-destructive/30 text-foreground/60 font-display text-sm rounded-lg hover:border-destructive/60 transition-colors"
            >
              Try Again
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Play;
