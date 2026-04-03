import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Landing = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShow(true), 200);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-background">
      {/* Ambient particles */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-primary/10 animate-drift"
            style={{
              width: `${1 + Math.random() * 3}px`,
              height: `${1 + Math.random() * 3}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${6 + Math.random() * 8}s`,
            }}
          />
        ))}
      </div>

      {/* Vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.6) 100%)" }}
      />

      <div
        className={`relative z-10 text-center transition-all duration-[1500ms] ease-out ${
          show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="mb-8">
          <span className="text-6xl sm:text-8xl animate-float inline-block">🗡️</span>
        </div>

        <h1 className="font-display text-5xl sm:text-7xl font-bold text-primary text-glow-primary mb-3 tracking-wider">
          CodeQuest
        </h1>
        <p className="font-display text-sm sm:text-base text-foreground/40 tracking-[0.3em] uppercase mb-1">
          Intelligence Survival Game
        </p>
        <p className="font-body text-sm text-foreground/25 mb-16 max-w-xs mx-auto">
          Survive the world. Learn its rules. No questions asked.
        </p>

        <button
          onClick={() => navigate("/subjects")}
          className="group relative px-14 py-4 bg-primary/90 text-primary-foreground font-display text-lg font-bold rounded-lg
            transition-all duration-300 hover:scale-105 hover:bg-primary box-glow-primary active:scale-95"
        >
          <span className="relative z-10 tracking-wider">ENTER THE WORLD</span>
        </button>

        <div className="mt-20 flex gap-10 justify-center text-foreground/20 font-body text-xs tracking-wide">
          <div className="text-center">
            <div className="text-xl mb-1">🌍</div>
            <div>10 Worlds</div>
          </div>
          <div className="text-center">
            <div className="text-xl mb-1">🗺️</div>
            <div>50 Zones</div>
          </div>
          <div className="text-center">
            <div className="text-xl mb-1">💀</div>
            <div>Survive or Perish</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
