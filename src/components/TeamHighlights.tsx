import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const teamHighlights = [
  { name: "Alex Johnson", role: "President", image: "", quote: "Building the future of tech at KDKCE" },
  { name: "Priya Sharma", role: "Vice President", image: "", quote: "Innovation starts with collaboration" },
  { name: "Rahul Patel", role: "Technical Lead", image: "", quote: "Code is poetry in motion" },
  { name: "Sara Wilson", role: "Event Coordinator", image: "", quote: "Every event is a new adventure" },
];

const TeamHighlights = () => {
  return (
    <section className="relative bg-background px-4 py-14 sm:px-6 sm:py-20 md:px-10 lg:px-16 overflow-hidden">
      <div className="absolute top-0 right-0 w-60 h-60 sm:w-96 sm:h-96 rounded-full bg-primary/3 blur-[150px] pointer-events-none" />
      
      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="mb-8 sm:mb-12 text-center">
          <span className="mb-3 sm:mb-4 inline-block rounded-full border border-border px-4 sm:px-5 py-1.5 sm:py-2 text-[10px] sm:text-xs uppercase tracking-[2px] sm:tracking-[3px] text-muted-foreground font-heading">
            Our People
          </span>
          <h2 className="font-heading text-2xl sm:text-4xl font-bold text-foreground md:text-5xl lg:text-6xl">
            Meet the Team
          </h2>
          <p className="mx-auto mt-3 sm:mt-4 max-w-md text-sm sm:text-base text-muted-foreground">
            The passionate minds behind PICSEL Club.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4 md:gap-6">
          {teamHighlights.map((member, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl sm:rounded-2xl border border-border bg-card p-4 sm:p-6 transition-all hover:border-primary/30 hover:shadow-glow"
            >
              <div className="mx-auto mb-3 sm:mb-4 h-16 w-16 sm:h-20 sm:w-20 overflow-hidden rounded-full border-2 border-border bg-muted md:h-24 md:w-24">
                {member.image ? (
                  <img src={member.image} alt={member.name} className="h-full w-full object-cover" loading="lazy" />
                ) : (
                  <div className="flex h-full w-full items-center justify-center text-lg sm:text-2xl font-bold text-muted-foreground font-heading">
                    {member.name.charAt(0)}
                  </div>
                )}
              </div>
              <h3 className="text-center text-xs sm:text-sm font-bold text-foreground md:text-base">{member.name}</h3>
              <p className="text-center text-[10px] sm:text-xs font-medium text-primary">{member.role}</p>
              <p className="mt-2 text-center text-[10px] sm:text-xs text-muted-foreground line-clamp-2 hidden sm:block">
                "{member.quote}"
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 sm:mt-10 text-center">
          <Link to="/team">
            <div className="hidden md:inline-block valorant-btn-wrapper">
              <button className="valorant-btn flex items-center gap-2">View Full Team <ArrowRight size={16} /></button>
            </div>
            <button className="btn-mobile-primary md:hidden flex items-center gap-2 mx-auto text-sm">View Full Team <ArrowRight size={14} /></button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TeamHighlights;
