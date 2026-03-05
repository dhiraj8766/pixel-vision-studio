import { useState } from "react";
import ProfileModal from "@/components/ProfileModal";

const teamData = {
  president: {
    name: "Alex Johnson",
    role: "President",
    description: "Leading PICSEL Club with a vision to empower every student in technology and innovation. Passionate about building communities and driving change.",
    image: "",
    email: "alex.johnson@kdkce.edu",
    mobile: "+91 9876543210",
    social: { instagram: "#", linkedin: "#", github: "#", twitter: "#" },
  },
  vicePresidents: [
    { name: "Priya Sharma", role: "Vice President", description: "Driving technical excellence and mentoring the next generation of developers.", image: "", email: "priya@kdkce.edu", social: { instagram: "#", linkedin: "#", github: "#" } },
    { name: "Rahul Patel", role: "Technical Lead", description: "Full-stack developer and competitive programmer. Building tools that matter.", image: "", email: "rahul@kdkce.edu", social: { instagram: "#", linkedin: "#", github: "#" } },
    { name: "Sneha Kulkarni", role: "Creative Head", description: "Designing experiences that inspire. UI/UX enthusiast and brand strategist.", image: "", email: "sneha@kdkce.edu", social: { instagram: "#", linkedin: "#" } },
    { name: "Arjun Deshmukh", role: "Event Coordinator", description: "Orchestrating memorable events that bring the tech community together.", image: "", email: "arjun@kdkce.edu", social: { instagram: "#", linkedin: "#" } },
  ],
  members: [
    { name: "Amit Singh", role: "Web Developer", description: "Frontend specialist building beautiful web experiences.", image: "", social: { github: "#", linkedin: "#" } },
    { name: "Kavya Reddy", role: "Content Writer", description: "Crafting compelling stories for the PICSEL community.", image: "", social: { linkedin: "#", instagram: "#" } },
    { name: "Rohan Joshi", role: "App Developer", description: "Mobile app developer with a passion for Flutter.", image: "", social: { github: "#" } },
    { name: "Meera Nair", role: "Social Media", description: "Managing the club's digital presence across platforms.", image: "", social: { instagram: "#" } },
    { name: "Vikram Iyer", role: "UI Designer", description: "Creating pixel-perfect designs and brand identity.", image: "", social: { linkedin: "#" } },
    { name: "Ananya Gupta", role: "ML Engineer", description: "Exploring AI/ML and building intelligent solutions.", image: "", social: { github: "#" } },
    { name: "Dev Patil", role: "Backend Dev", description: "Building scalable backend systems and APIs.", image: "", social: { github: "#" } },
    { name: "Riya Desai", role: "Video Editor", description: "Creating engaging video content for events.", image: "", social: { instagram: "#" } },
    { name: "Karthik Menon", role: "Photographer", description: "Capturing moments that tell our story.", image: "", social: { instagram: "#" } },
    { name: "Neha Verma", role: "PR Head", description: "Building relationships and partnerships.", image: "", social: { linkedin: "#" } },
    { name: "Siddharth Rao", role: "Cloud Dev", description: "AWS & cloud infrastructure specialist.", image: "", social: { github: "#" } },
    { name: "Pooja Bhatt", role: "Data Analyst", description: "Turning data into actionable insights.", image: "", social: { linkedin: "#" } },
  ],
};

const TeamPage = () => {
  const { president, vicePresidents, members } = teamData;
  const [selectedProfile, setSelectedProfile] = useState<any>(null);

  return (
    <div className="relative min-h-screen bg-background pb-mobile-nav pt-20 md:pt-24 px-4 md:px-8 lg:px-16">
      <div className="absolute inset-0 bg-grid-pattern opacity-15 pointer-events-none" />
      
      <div className="relative z-10">
        {/* Header */}
        <div className="mb-12 text-center">
          <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[3px] text-primary font-heading">The Squad</span>
          <h1 className="font-heading text-4xl font-bold text-foreground md:text-6xl">Our Team</h1>
          <p className="mx-auto mt-3 max-w-md text-muted-foreground">The passionate minds powering PICSEL Club.</p>
        </div>

        {/* TIER 1: President */}
        <div className="mx-auto mb-16 max-w-2xl">
          <div
            className="group relative overflow-hidden rounded-3xl border border-primary/20 bg-gradient-to-br from-card to-secondary p-8 shadow-glow transition-all hover:shadow-card-hover md:p-12 cursor-pointer active:scale-[0.99]"
            onClick={() => setSelectedProfile(president)}
          >
            <div className="absolute inset-0 bg-dot-pattern opacity-10" />
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
            <div className="relative flex flex-col items-center text-center md:flex-row md:text-left md:gap-8">
              <div className="mb-6 h-32 w-32 overflow-hidden rounded-full border-4 border-primary/30 bg-muted md:mb-0 md:h-40 md:w-40 flex-shrink-0 shadow-glow">
                {president.image ? (
                  <img src={president.image} alt={president.name} className="h-full w-full object-cover" loading="lazy" />
                ) : (
                  <div className="flex h-full w-full items-center justify-center text-4xl font-bold text-primary font-heading">
                    {president.name.charAt(0)}
                  </div>
                )}
              </div>
              <div>
                <span className="mb-2 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-[10px] font-bold uppercase tracking-widest text-primary">
                  {president.role}
                </span>
                <h2 className="mt-2 font-heading text-3xl text-foreground md:text-4xl font-bold">{president.name}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{president.description}</p>
                <p className="mt-2 text-xs text-primary">Click to view full profile →</p>
              </div>
            </div>
          </div>
        </div>

        {/* TIER 2: Core Team */}
        <div className="mx-auto mb-16 max-w-5xl">
          <h3 className="mb-6 text-center text-xs font-semibold uppercase tracking-widest text-muted-foreground font-heading">Core Team</h3>
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            {vicePresidents.map((member, index) => (
              <div
                key={index}
                onClick={() => setSelectedProfile(member)}
                className="group overflow-hidden rounded-2xl border border-border bg-card p-5 transition-all hover:border-primary/20 hover:shadow-glow cursor-pointer active:scale-[0.98]"
              >
                <div className="mx-auto mb-4 h-20 w-20 overflow-hidden rounded-full border-2 border-border bg-muted">
                  {member.image ? (
                    <img src={member.image} alt={member.name} className="h-full w-full object-cover" loading="lazy" />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center text-xl font-bold text-muted-foreground group-hover:text-primary transition-colors font-heading">
                      {member.name.charAt(0)}
                    </div>
                  )}
                </div>
                <h3 className="text-center text-sm font-bold text-foreground">{member.name}</h3>
                <p className="text-center text-xs font-medium text-primary mt-1">{member.role}</p>
                <p className="mt-2 text-center text-xs leading-relaxed text-muted-foreground line-clamp-2 hidden md:block">{member.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* TIER 3: Members */}
        <div className="mx-auto max-w-6xl mb-8">
          <h3 className="mb-6 text-center text-xs font-semibold uppercase tracking-widest text-muted-foreground font-heading">Members</h3>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {members.map((member, index) => (
              <div
                key={index}
                onClick={() => setSelectedProfile(member)}
                className="group flex flex-col items-center rounded-xl border border-border/50 bg-card/50 p-4 transition-all hover:border-primary/20 hover:bg-card cursor-pointer active:scale-[0.97]"
              >
                <div className="mb-3 h-14 w-14 overflow-hidden rounded-full border border-border bg-muted">
                  {member.image ? (
                    <img src={member.image} alt={member.name} className="h-full w-full object-cover" loading="lazy" />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center text-sm font-bold text-muted-foreground group-hover:text-primary transition-colors font-heading">
                      {member.name.charAt(0)}
                    </div>
                  )}
                </div>
                <h4 className="text-center text-xs font-semibold text-foreground">{member.name}</h4>
                <p className="text-center text-[10px] text-primary mt-0.5">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Profile Modal */}
      <ProfileModal profile={selectedProfile} onClose={() => setSelectedProfile(null)} />
    </div>
  );
};

export default TeamPage;
