import { Link } from "react-router-dom";

const teamHighlights = [
  {
    name: "Alex Johnson",
    role: "President",
    image: "",
    quote: "Building the future of tech at KDKCE",
  },
  {
    name: "Priya Sharma",
    role: "Vice President",
    image: "",
    quote: "Innovation starts with collaboration",
  },
  {
    name: "Rahul Patel",
    role: "Technical Lead",
    image: "",
    quote: "Code is poetry in motion",
  },
  {
    name: "Sara Wilson",
    role: "Event Coordinator",
    image: "",
    quote: "Every event is a new adventure",
  },
];

const TeamHighlights = () => {
  return (
    <section className="bg-background px-6 py-20 md:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <span className="mb-4 inline-block rounded-full border border-border px-5 py-2 text-xs uppercase tracking-[3px] text-muted-foreground">
            Our People
          </span>
          <h2 className="font-serif text-4xl font-normal text-foreground md:text-5xl lg:text-6xl">
            Meet the Team
          </h2>
          <p className="mx-auto mt-4 max-w-md italic text-muted-foreground">
            The passionate minds behind PICSEL Club.
          </p>
        </div>

        {/* Team cards */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {teamHighlights.map((member, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/30 hover:shadow-glow"
            >
              {/* Avatar placeholder */}
              <div className="mx-auto mb-4 h-20 w-20 overflow-hidden rounded-full border-2 border-border bg-muted md:h-24 md:w-24">
                {member.image ? (
                  <img src={member.image} alt={member.name} className="h-full w-full object-cover" />
                ) : (
                  <div className="flex h-full w-full items-center justify-center text-2xl font-bold text-muted-foreground">
                    {member.name.charAt(0)}
                  </div>
                )}
              </div>
              <h3 className="text-center text-sm font-bold text-foreground md:text-base">{member.name}</h3>
              <p className="text-center text-xs font-medium text-primary">{member.role}</p>
              <p className="mt-2 text-center text-xs italic text-muted-foreground line-clamp-2 hidden md:block">
                "{member.quote}"
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <Link to="/team">
            <div className="valorant-btn-wrapper inline-block">
              <button className="valorant-btn">View Full Team</button>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TeamHighlights;
