import { useNavigate, useParams } from "react-router-dom";
import { worlds } from "@/lib/data";
import { isLevelUnlocked, getSubjectProgress } from "@/lib/storage";
import { Lock, CheckCircle2 } from "lucide-react";

const Levels = () => {
  const navigate = useNavigate();
  const { subjectId } = useParams<{ subjectId: string }>();
  const world = worlds.find((w) => w.id === subjectId);

  if (!world) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-destructive font-display">World not found</p>
      </div>
    );
  }

  const progress = getSubjectProgress(world.id);
  const completedCount = progress.completedLevels.length;
  const pct = Math.round((completedCount / world.zones.length) * 100);

  return (
    <div className="min-h-screen bg-background py-8 px-4">
      <div className="max-w-3xl mx-auto">
        <button
          onClick={() => navigate("/subjects")}
          className="font-body text-foreground/30 hover:text-foreground/60 transition-colors mb-8 text-sm"
        >
          ← Back to Worlds
        </button>

        <div className="text-center mb-10">
          <span className="text-4xl mb-3 block">{world.icon}</span>
          <h1 className="font-display text-2xl sm:text-3xl font-bold text-primary text-glow-primary tracking-wider">
            {world.name}
          </h1>
          <p className="font-body text-foreground/30 text-sm mt-2 max-w-sm mx-auto">{world.description}</p>

          <div className="max-w-xs mx-auto mt-4">
            <div className="flex justify-between text-[10px] font-body text-foreground/20 mb-1">
              <span>
                {completedCount}/{world.zones.length} zones
              </span>
              <span>{pct}%</span>
            </div>
            <div className="h-1.5 bg-muted/30 rounded-full overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-700"
                style={{ width: `${pct}%`, background: "var(--gradient-primary)" }}
              />
            </div>
          </div>
        </div>

        <div className="space-y-3">
          {world.zones.map((zone, index) => {
            const unlocked = isLevelUnlocked(world.id, index);
            const completed = progress.completedLevels.includes(index);
            const isCurrent = unlocked && !completed;

            return (
              <button
                key={index}
                disabled={!unlocked}
                onClick={() => navigate(`/play/${world.id}/${index}`)}
                className={`w-full flex items-center gap-4 p-4 rounded-xl border transition-all duration-300 text-left
                  ${
                    completed
                      ? "bg-primary/5 border-primary/20 hover:border-primary/40 hover:scale-[1.01]"
                      : isCurrent
                        ? "bg-card/50 border-primary/30 hover:border-primary/60 hover:scale-[1.01] ring-1 ring-primary/10"
                        : "bg-muted/10 border-border/20 cursor-not-allowed opacity-30"
                  }`}
              >
                <div className="w-10 h-10 flex items-center justify-center">
                  {completed ? (
                    <CheckCircle2 className="w-6 h-6 text-primary/70" />
                  ) : isCurrent ? (
                    <span className="text-xl animate-pulse">🔮</span>
                  ) : (
                    <Lock className="w-5 h-5 text-foreground/20" />
                  )}
                </div>

                <div className="flex-1 min-w-0">
                  <span className="font-display text-sm text-foreground/70 tracking-wide">Zone {index + 1}</span>
                  <span className="font-body text-xs text-foreground/30 ml-3">{zone.name}</span>
                </div>

                {isCurrent && (
                  <span className="text-[10px] font-display text-primary/50 tracking-widest uppercase">Enter</span>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Levels;
