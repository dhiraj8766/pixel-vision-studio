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
    return "Member";
  };

  const tokenColor = (tokenNo: number) => {
    if (tokenNo === 1) return "border-accent-yellow/40 bg-accent-yellow/10 text-accent-yellow";
    if (tokenNo === 2) return "border-primary/40 bg-primary/10 text-primary";
    return "border-border bg-muted/50 text-muted-foreground";
  };

  return (
    <section className="relative overflow-hidden px-4 py-14 sm:px-6 sm:py-20 md:px-10 lg:px-16">
      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-8 text-center sm:mb-12">
          <span className="mb-3 inline-flex rounded-full border border-primary/25 bg-primary/10 px-4 py-1.5 text-[10px] uppercase tracking-[0.28em] text-primary font-heading sm:text-xs">
            Our Team
          </span>
          <h2 className="font-heading text-2xl font-bold text-foreground sm:text-4xl md:text-5xl">
            The People Behind PICSEL
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-sm text-muted-foreground sm:text-base">
            A passionate crew of innovators, coders, and creators.
          </p>
        </div>

        {/* Marquee */}
        <div className="relative overflow-hidden rounded-2xl">
          <div className="absolute left-0 top-0 bottom-0 z-10 w-12 bg-gradient-to-r from-background to-transparent pointer-events-none sm:w-20" />
          <div className="absolute right-0 top-0 bottom-0 z-10 w-12 bg-gradient-to-l from-background to-transparent pointer-events-none sm:w-20" />

          <div className="flex animate-[marquee_35s_linear_infinite] gap-5 hover:[animation-play-state:paused]">
            {[...team, ...team].map((member, index) => (
              <div
                key={`${member.id}-${index}`}
                className="group w-[200px] shrink-0 text-center sm:w-[220px]"
              >
                {/* Avatar */}
                <div className="relative mx-auto mb-3 h-28 w-28 overflow-hidden rounded-full border-2 border-border bg-muted transition-all group-hover:border-primary/50 group-hover:shadow-glow sm:h-32 sm:w-32">
                  {member.imageUrl ? (
                    <img
                      src={member.imageUrl}
                      alt={member.name}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center text-3xl font-bold text-primary font-heading">
                      {member.name.charAt(0)}
                    </div>
                  )}
                </div>

                {/* Info */}
                <h3 className="font-heading text-sm font-bold text-foreground sm:text-base">{member.name}</h3>
                <p className="text-xs text-primary font-medium">{member.role}</p>
                <span className={`mt-1.5 inline-flex rounded-full border px-2.5 py-0.5 text-[9px] uppercase tracking-wider font-semibold ${tokenColor(member.tokenNo)}`}>
                  {tokenLabel(member.tokenNo)}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-8 text-center sm:mt-10">
          <Link to="/team">
            <div className="hidden md:inline-block valorant-btn-wrapper">
              <button className="valorant-btn flex items-center gap-2">View Full Team <ArrowRight size={16} /></button>
            </div>
            <button className="btn-mobile-primary md:hidden flex items-center gap-2 mx-auto text-sm">
              View Full Team <ArrowRight size={14} />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TeamHighlights;
