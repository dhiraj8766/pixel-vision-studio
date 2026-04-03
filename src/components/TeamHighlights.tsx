import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Crown, Shield, Users } from "lucide-react";
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
          setTeam([...data].sort((a, b) => a.tokenNo - b.tokenNo || a.name.localeCompare(b.name)));
        }
      } catch (err) { console.error("Failed to fetch team:", err); }
    };
    fetchTeam();
  }, []);

  if (team.length === 0) return null;

  const getBadge = (tokenNo: number) => {
    if (tokenNo === 1) return { icon: Crown, label: "President", cls: "from-amber-500/20 to-yellow-500/20 text-amber-400 border-amber-500/30" };
    if (tokenNo === 2) return { icon: Shield, label: "Core", cls: "from-primary/20 to-accent-cyan/20 text-primary border-primary/30" };
    return { icon: Users, label: "Member", cls: "from-muted to-muted text-muted-foreground border-border" };
  };

  return (
    <section className="relative overflow-hidden px-4 py-16 sm:px-6 sm:py-24 md:px-10 lg:px-16">
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)`,
        backgroundSize: '32px 32px',
      }} />

      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="mb-10 flex flex-col items-center text-center sm:mb-14">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10">
            <Users className="h-6 w-6 text-primary" />
          </div>
          <h2 className="font-heading text-2xl font-bold text-foreground sm:text-4xl md:text-5xl">
            Meet Our Team
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm text-muted-foreground sm:text-base">
            The passionate minds driving innovation at PICSEL
          </p>
        </div>

        {/* Marquee Row 1 - left */}
        <div className="relative overflow-hidden mb-4">
          <div className="absolute left-0 top-0 bottom-0 z-10 w-16 bg-gradient-to-r from-background to-transparent pointer-events-none sm:w-24" />
          <div className="absolute right-0 top-0 bottom-0 z-10 w-16 bg-gradient-to-l from-background to-transparent pointer-events-none sm:w-24" />
          <div className="flex animate-[marquee_40s_linear_infinite] gap-4 hover:[animation-play-state:paused]">
            {[...team, ...team].map((member, index) => {
              const badge = getBadge(member.tokenNo);
              const BadgeIcon = badge.icon;
              return (
                <div key={`${member.id}-${index}`}
                  className="group relative w-[260px] shrink-0 overflow-hidden rounded-2xl border border-border/60 bg-card/80 backdrop-blur-sm p-5 transition-all duration-300 hover:border-primary/30 hover:shadow-[0_8px_32px_-8px_hsl(var(--primary)/0.15)]">
                  <div className="flex items-center gap-4">
                    <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl border border-border/50 bg-muted">
                      {member.imageUrl ? (
                        <img src={member.imageUrl} alt={member.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center text-xl font-bold text-primary/60 font-heading bg-primary/5">{member.name.charAt(0)}</div>
                      )}
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="font-heading text-sm font-bold text-foreground truncate">{member.name}</h3>
                      <p className="text-xs text-muted-foreground truncate mt-0.5">{member.role}</p>
                      <div className={`mt-1.5 inline-flex items-center gap-1 rounded-md border bg-gradient-to-r px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wider ${badge.cls}`}>
                        <BadgeIcon size={9} /> {badge.label}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Marquee Row 2 - right (reverse) */}
        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 z-10 w-16 bg-gradient-to-r from-background to-transparent pointer-events-none sm:w-24" />
          <div className="absolute right-0 top-0 bottom-0 z-10 w-16 bg-gradient-to-l from-background to-transparent pointer-events-none sm:w-24" />
          <div className="flex animate-[marquee_40s_linear_infinite_reverse] gap-4 hover:[animation-play-state:paused]">
            {[...team.slice().reverse(), ...team.slice().reverse()].map((member, index) => {
              const badge = getBadge(member.tokenNo);
              const BadgeIcon = badge.icon;
              return (
                <div key={`rev-${member.id}-${index}`}
                  className="group relative w-[260px] shrink-0 overflow-hidden rounded-2xl border border-border/60 bg-card/80 backdrop-blur-sm p-5 transition-all duration-300 hover:border-primary/30 hover:shadow-[0_8px_32px_-8px_hsl(var(--primary)/0.15)]">
                  <div className="flex items-center gap-4">
                    <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl border border-border/50 bg-muted">
                      {member.imageUrl ? (
                        <img src={member.imageUrl} alt={member.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center text-xl font-bold text-primary/60 font-heading bg-primary/5">{member.name.charAt(0)}</div>
                      )}
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="font-heading text-sm font-bold text-foreground truncate">{member.name}</h3>
                      <p className="text-xs text-muted-foreground truncate mt-0.5">{member.role}</p>
                      <div className={`mt-1.5 inline-flex items-center gap-1 rounded-md border bg-gradient-to-r px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wider ${badge.cls}`}>
                        <BadgeIcon size={9} /> {badge.label}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10 text-center sm:mt-12">
          <Link to="/team" className="group inline-flex items-center gap-3 rounded-full border border-border/60 bg-card/60 px-6 py-3 text-sm font-semibold text-foreground transition-all hover:border-primary/40 hover:bg-primary/5 hover:shadow-glow">
            View Full Team <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TeamHighlights;
