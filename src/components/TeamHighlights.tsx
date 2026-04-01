import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { API } from "@/config/api";

interface TeamMember {
  id: number; name: string; role: string; description: string; imageUrl: string; tokenNo: number;
}

const TeamHighlights = () => {
  const [team, setTeam] = useState<TeamMember[]>([]);

  useEffect(() => {
    const fetchTeam = async () => {
      try {
        const res = await fetch(API.TEAM);
        if (res.ok) {
          const data: TeamMember[] = await res.json();
          const sortedTeam = [...data].sort((a, b) => a.tokenNo - b.tokenNo || a.name.localeCompare(b.name));
          setTeam(sortedTeam);
        }
      } catch (err) { console.error("Failed to fetch team:", err); }
    };
    fetchTeam();
  }, []);

  if (team.length === 0) return null;

  const tokenLabel = (tokenNo: number) => {
    if (tokenNo === 1) return "President";
    if (tokenNo === 2) return "Core Team";
    return "Members";
  };

  return (
    <section className="relative overflow-hidden px-4 py-14 sm:px-6 sm:py-20 md:px-10 lg:px-16">
      <div className="absolute inset-0 bg-gradient-to-b from-card/40 via-background to-card/20" />
      <div className="absolute left-[8%] top-10 h-40 w-40 rounded-full bg-primary/10 blur-[100px] pointer-events-none" />
      <div className="absolute right-[5%] bottom-0 h-48 w-48 rounded-full bg-accent-yellow/10 blur-[120px] pointer-events-none" />
      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="mb-8 flex flex-col gap-5 text-center sm:mb-12 md:flex-row md:items-end md:justify-between md:text-left">
          <div>
            <span className="mb-3 inline-flex rounded-full border border-primary/25 bg-primary/10 px-4 py-1.5 text-[10px] uppercase tracking-[0.28em] text-primary font-heading sm:text-xs">
              Club Crew
            </span>
            <h2 className="font-heading text-2xl font-bold text-foreground sm:text-4xl md:text-5xl lg:text-6xl">
              Meet everyone building PICSEL.
            </h2>
          </div>
          <p className="mx-auto max-w-xl text-sm leading-relaxed text-muted-foreground md:mx-0 md:text-base">
            From leadership to members, the full team now rolls across the homepage so every contributor gets visible space.
          </p>
        </div>

        <div className="relative overflow-hidden rounded-[2rem] border border-border bg-card/60 p-4 shadow-card sm:p-6">
          <div className="absolute left-0 top-0 bottom-0 z-10 w-10 bg-gradient-to-r from-card via-card/70 to-transparent sm:w-20" />
          <div className="absolute right-0 top-0 bottom-0 z-10 w-10 bg-gradient-to-l from-card via-card/70 to-transparent sm:w-20" />

          <div className="flex animate-[marquee_28s_linear_infinite] gap-4 hover:[animation-play-state:paused] sm:gap-6">
            {[...team, ...team].map((member, index) => (
              <article
                key={`${member.id}-${index}`}
                className="group w-[240px] shrink-0 overflow-hidden rounded-[1.75rem] border border-border bg-background/80 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-glow sm:w-[280px]"
              >
                <div className="relative h-56 overflow-hidden border-b border-border bg-muted sm:h-64">
                  {member.imageUrl ? (
                    <img src={member.imageUrl} alt={member.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center text-5xl font-bold text-primary font-heading">
                      {member.name.charAt(0)}
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                  <span className="absolute left-4 top-4 rounded-full border border-primary/25 bg-background/75 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-primary backdrop-blur-sm">
                    {tokenLabel(member.tokenNo)}
                  </span>
                </div>

                <div className="space-y-3 p-4 sm:p-5">
                  <div>
                    <h3 className="font-heading text-lg font-bold text-foreground">{member.name}</h3>
                    <p className="text-sm font-medium text-primary">{member.role}</p>
                  </div>
                  <p className="line-clamp-3 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                    {member.description || "PICSEL team member contributing to events, learning, and community building."}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-8 text-center sm:mt-10">
          <Link to="/team">
            <div className="hidden md:inline-block valorant-btn-wrapper"><button className="valorant-btn flex items-center gap-2">View Full Team <ArrowRight size={16} /></button></div>
            <button className="btn-mobile-primary md:hidden flex items-center gap-2 mx-auto text-sm">View Full Team <ArrowRight size={14} /></button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TeamHighlights;
