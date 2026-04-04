import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Crown, Shield, Users } from "lucide-react";
import { API } from "@/config/api";
import ProfileModal from "@/components/ProfileModal";

interface TeamMember {
  id: number; name: string; role: string; description: string; imageUrl: string; tokenNo: number;
  email?: string; socials?: { linkedin?: string; instagram?: string; twitter?: string };
}

const TeamHighlights = () => {
  const [team, setTeam] = useState<TeamMember[]>([]);
  const [selectedProfile, setSelectedProfile] = useState<TeamMember | null>(null);

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

  const presidents = team.filter(m => m.tokenNo === 1);
  const core = team.filter(m => m.tokenNo === 2);
  const members = team.filter(m => m.tokenNo === 3);

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

        {/* Presidents */}
        {presidents.length > 0 && (
          <div className="mb-8 flex justify-center gap-6 flex-wrap">
            {presidents.map(member => (
              <div key={member.id} onClick={() => setSelectedProfile(member)}
                className="group flex flex-col items-center cursor-pointer">
                <div className="relative h-24 w-24 sm:h-28 sm:w-28 overflow-hidden rounded-2xl border-2 border-amber-500/40 bg-muted shadow-lg transition-all duration-300 group-hover:border-amber-400 group-hover:shadow-[0_8px_32px_-8px_rgba(245,158,11,0.3)]">
                  {member.imageUrl ? (
                    <img src={member.imageUrl} alt={member.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center text-2xl font-bold text-amber-400 font-heading bg-amber-500/5">{member.name.charAt(0)}</div>
                  )}
                </div>
                <h3 className="mt-3 font-heading text-sm font-bold text-foreground">{member.name}</h3>
                <p className="text-[10px] text-muted-foreground">{member.role}</p>
                <div className="mt-1 inline-flex items-center gap-1 rounded-md border border-amber-500/30 bg-gradient-to-r from-amber-500/20 to-yellow-500/20 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-amber-400">
                  <Crown size={9} /> President
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Core Team Marquee */}
        {core.length > 0 && (
          <div className="relative overflow-hidden mb-4">
            <div className="absolute left-0 top-0 bottom-0 z-10 w-16 bg-gradient-to-r from-background to-transparent pointer-events-none sm:w-24" />
            <div className="absolute right-0 top-0 bottom-0 z-10 w-16 bg-gradient-to-l from-background to-transparent pointer-events-none sm:w-24" />
            <div className="flex animate-[marquee_35s_linear_infinite] gap-4 hover:[animation-play-state:paused]">
              {[...core, ...core].map((member, index) => (
                <div key={`core-${member.id}-${index}`} onClick={() => setSelectedProfile(member)}
                  className="group relative w-[200px] shrink-0 overflow-hidden rounded-xl border border-border/60 bg-card/80 backdrop-blur-sm p-4 transition-all duration-300 hover:border-primary/30 hover:shadow-[0_8px_32px_-8px_hsl(var(--primary)/0.15)] cursor-pointer text-center">
                  <div className="relative h-14 w-14 mx-auto shrink-0 overflow-hidden rounded-xl border border-border/50 bg-muted mb-3">
                    {member.imageUrl ? (
                      <img src={member.imageUrl} alt={member.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center text-lg font-bold text-primary/60 font-heading bg-primary/5">{member.name.charAt(0)}</div>
                    )}
                  </div>
                  <h3 className="font-heading text-xs font-bold text-foreground truncate">{member.name}</h3>
                  <p className="text-[10px] text-muted-foreground truncate mt-0.5">{member.role}</p>
                  <div className="mt-1.5 inline-flex items-center gap-1 rounded-md border bg-gradient-to-r px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wider from-primary/20 to-accent-cyan/20 text-primary border-primary/30">
                    <Shield size={9} /> Core
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Members Marquee (reverse) */}
        {members.length > 0 && (
          <div className="relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 z-10 w-16 bg-gradient-to-r from-background to-transparent pointer-events-none sm:w-24" />
            <div className="absolute right-0 top-0 bottom-0 z-10 w-16 bg-gradient-to-l from-background to-transparent pointer-events-none sm:w-24" />
            <div className="flex animate-[marquee_45s_linear_infinite_reverse] gap-4 hover:[animation-play-state:paused]">
              {[...members, ...members].map((member, index) => (
                <div key={`mem-${member.id}-${index}`} onClick={() => setSelectedProfile(member)}
                  className="group relative w-[180px] shrink-0 overflow-hidden rounded-xl border border-border/40 bg-card/50 p-3 transition-all duration-300 hover:border-primary/20 hover:bg-card/80 cursor-pointer text-center">
                  <div className="relative h-12 w-12 mx-auto shrink-0 overflow-hidden rounded-lg border border-border/50 bg-muted mb-2">
                    {member.imageUrl ? (
                      <img src={member.imageUrl} alt={member.name} className="h-full w-full object-cover" loading="lazy" />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center text-sm font-bold text-muted-foreground font-heading bg-muted">{member.name.charAt(0)}</div>
                    )}
                  </div>
                  <h3 className="font-heading text-[11px] font-bold text-foreground truncate">{member.name}</h3>
                  <p className="text-[9px] text-muted-foreground truncate">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="mt-10 text-center sm:mt-12">
          <Link to="/team" className="group inline-flex items-center gap-3 rounded-full border border-border/60 bg-card/60 px-6 py-3 text-sm font-semibold text-foreground transition-all hover:border-primary/40 hover:bg-primary/5 hover:shadow-glow">
            View Full Team <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>

      <ProfileModal
        profile={selectedProfile ? { ...selectedProfile, image: selectedProfile.imageUrl, social: selectedProfile.socials as any, hidePhone: true } : null}
        onClose={() => setSelectedProfile(null)}
      />
    </section>
  );
};

export default TeamHighlights;
