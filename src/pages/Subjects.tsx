import { useNavigate } from "react-router-dom";
import { worlds } from "@/lib/data";
import { getSubjectProgress } from "@/lib/storage";

const Subjects = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background py-8 px-4">
      <div className="max-w-5xl mx-auto">
        <button
          onClick={() => navigate("/")}
          className="font-body text-foreground/30 hover:text-foreground/60 transition-colors mb-8 text-sm"
        >
          ← Retreat
        </button>

        <div className="text-center mb-12">
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-primary text-glow-primary mb-2 tracking-wider">
            Choose Your World
          </h1>
          <p className="font-body text-foreground/30 text-sm">Each world holds its own dangers and secrets</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {worlds.map((world) => {
            const progress = getSubjectProgress(world.id);
            const completed = progress.completedLevels.length;
            const total = world.zones.length;
            const pct = Math.round((completed / total) * 100);

            return (
              <button
                key={world.id}
                onClick={() => navigate(`/levels/${world.id}`)}
                className="group relative text-left p-6 rounded-xl border transition-all duration-500
                  bg-card/50 border-border/50
                  hover:border-primary/40 hover:scale-[1.02]
                  hover:shadow-[0_0_40px_hsl(var(--primary)/0.1)]"
              >
                <div className="flex items-start gap-4">
                  <span className="text-3xl">{world.icon}</span>
                  <div className="flex-1 min-w-0">
                    <h2 className="font-display text-sm font-bold text-foreground/80 group-hover:text-primary transition-colors tracking-wide">
                      {world.name}
                    </h2>
                    <p className="font-body text-xs text-foreground/30 mt-1 leading-relaxed">{world.description}</p>
                  </div>
                </div>

                <div className="mt-4">
                  <div className="w-full h-1 bg-muted/50 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary/60 rounded-full transition-all duration-700"
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                  <p className="font-body text-[10px] text-foreground/20 mt-1.5 tracking-wide">
                    {completed}/{total} zones survived
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Subjects;
