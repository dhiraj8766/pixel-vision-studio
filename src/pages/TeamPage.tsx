const teamData = {
  president: {
    name: "Alex Johnson",
    role: "President",
    description: "Leading PICSEL Club with a vision to empower every student in technology and innovation. Passionate about building communities.",
    image: "",
    social: { instagram: "#", linkedin: "#", github: "#" },
  },
  vicePresidents: [
    { name: "Priya Sharma", role: "Vice President", description: "Driving technical excellence and mentoring the next generation of developers.", image: "", social: { instagram: "#", linkedin: "#", github: "#" } },
    { name: "Rahul Patel", role: "Technical Lead", description: "Full-stack developer and competitive programmer. Building tools that matter.", image: "", social: { instagram: "#", linkedin: "#", github: "#" } },
    { name: "Sneha Kulkarni", role: "Creative Head", description: "Designing experiences that inspire. UI/UX enthusiast and brand strategist.", image: "", social: { instagram: "#", linkedin: "#" } },
    { name: "Arjun Deshmukh", role: "Event Coordinator", description: "Orchestrating memorable events that bring the tech community together.", image: "", social: { instagram: "#", linkedin: "#" } },
  ],
  members: [
    { name: "Amit Singh", role: "Web Developer", image: "", social: { github: "#" } },
    { name: "Kavya Reddy", role: "Content Writer", image: "", social: { linkedin: "#" } },
    { name: "Rohan Joshi", role: "App Developer", image: "", social: { github: "#" } },
    { name: "Meera Nair", role: "Social Media", image: "", social: { instagram: "#" } },
    { name: "Vikram Iyer", role: "UI Designer", image: "", social: { linkedin: "#" } },
    { name: "Ananya Gupta", role: "ML Engineer", image: "", social: { github: "#" } },
    { name: "Dev Patil", role: "Backend Dev", image: "", social: { github: "#" } },
    { name: "Riya Desai", role: "Video Editor", image: "", social: { instagram: "#" } },
    { name: "Karthik Menon", role: "Photographer", image: "", social: { instagram: "#" } },
    { name: "Neha Verma", role: "PR Head", image: "", social: { linkedin: "#" } },
    { name: "Siddharth Rao", role: "Cloud Dev", image: "", social: { github: "#" } },
    { name: "Pooja Bhatt", role: "Data Analyst", image: "", social: { linkedin: "#" } },
  ],
};

const SocialIcon = ({ type, url }: { type: string; url: string }) => (
  <a href={url} target="_blank" rel="noopener noreferrer" className="flex h-8 w-8 items-center justify-center rounded-lg border border-border text-muted-foreground transition-all hover:border-primary hover:text-primary">
    <span className="text-[10px] font-bold uppercase">{type.charAt(0)}</span>
  </a>
);

const TeamPage = () => {
  const { president, vicePresidents, members } = teamData;

  return (
    <div className="min-h-screen bg-background pb-mobile-nav pt-20 md:pt-24 px-4 md:px-8 lg:px-16">
      {/* Header */}
      <div className="mb-12 text-center">
        <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[3px] text-primary">The Squad</span>
        <h1 className="font-serif text-4xl font-normal text-foreground md:text-6xl">Our Team</h1>
        <p className="mx-auto mt-3 max-w-md text-muted-foreground italic">The passionate minds powering PICSEL Club.</p>
      </div>

      {/* TIER 1: President - Hero Card */}
      <div className="mx-auto mb-16 max-w-2xl">
        <div className="group relative overflow-hidden rounded-3xl border border-primary/20 bg-gradient-to-br from-card to-secondary p-8 shadow-glow transition-all hover:shadow-card-hover md:p-12">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
          <div className="relative flex flex-col items-center text-center md:flex-row md:text-left md:gap-8">
            {/* Avatar */}
            <div className="mb-6 h-32 w-32 overflow-hidden rounded-full border-4 border-primary/30 bg-muted md:mb-0 md:h-40 md:w-40 flex-shrink-0">
              {president.image ? (
                <img src={president.image} alt={president.name} className="h-full w-full object-cover" />
              ) : (
                <div className="flex h-full w-full items-center justify-center text-4xl font-bold text-primary">
                  {president.name.charAt(0)}
                </div>
              )}
            </div>
            <div>
              <span className="mb-2 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-[10px] font-bold uppercase tracking-widest text-primary">
                {president.role}
              </span>
              <h2 className="mt-2 font-serif text-3xl text-foreground md:text-4xl">{president.name}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{president.description}</p>
              <div className="mt-4 flex justify-center gap-2 md:justify-start">
                {Object.entries(president.social).map(([key, url]) => (
                  <SocialIcon key={key} type={key} url={url} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* TIER 2: Vice Presidents - Medium Cards */}
      <div className="mx-auto mb-16 max-w-5xl">
        <h3 className="mb-6 text-center text-xs font-semibold uppercase tracking-widest text-muted-foreground">Core Team</h3>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {vicePresidents.map((member, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/20 hover:shadow-glow"
            >
              <div className="mx-auto mb-4 h-20 w-20 overflow-hidden rounded-full border-2 border-border bg-muted">
                {member.image ? (
                  <img src={member.image} alt={member.name} className="h-full w-full object-cover" />
                ) : (
                  <div className="flex h-full w-full items-center justify-center text-xl font-bold text-muted-foreground group-hover:text-primary transition-colors">
                    {member.name.charAt(0)}
                  </div>
                )}
              </div>
              <h3 className="text-center text-base font-bold text-foreground">{member.name}</h3>
              <p className="text-center text-xs font-medium text-primary mt-1">{member.role}</p>
              <p className="mt-3 text-center text-xs leading-relaxed text-muted-foreground line-clamp-3">{member.description}</p>
              <div className="mt-4 flex justify-center gap-2">
                {Object.entries(member.social).map(([key, url]) => (
                  <SocialIcon key={key} type={key} url={url} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* TIER 3: Members - Compact Grid */}
      <div className="mx-auto max-w-6xl mb-8">
        <h3 className="mb-6 text-center text-xs font-semibold uppercase tracking-widest text-muted-foreground">Members</h3>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {members.map((member, index) => (
            <div
              key={index}
              className="group flex flex-col items-center rounded-xl border border-border/50 bg-card/50 p-4 transition-all hover:border-primary/20 hover:bg-card"
            >
              <div className="mb-3 h-14 w-14 overflow-hidden rounded-full border border-border bg-muted">
                {member.image ? (
                  <img src={member.image} alt={member.name} className="h-full w-full object-cover" />
                ) : (
                  <div className="flex h-full w-full items-center justify-center text-sm font-bold text-muted-foreground group-hover:text-primary transition-colors">
                    {member.name.charAt(0)}
                  </div>
                )}
              </div>
              <h4 className="text-center text-xs font-semibold text-foreground">{member.name}</h4>
              <p className="text-center text-[10px] text-primary mt-0.5">{member.role}</p>
              <div className="mt-2 flex gap-1">
                {Object.entries(member.social).map(([key, url]) => (
                  <a key={key} href={url} className="text-[9px] text-muted-foreground hover:text-primary transition-colors uppercase font-bold">
                    {key.charAt(0)}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamPage;
