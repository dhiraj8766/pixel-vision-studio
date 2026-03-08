import { useState } from "react";
import { Instagram, Linkedin, Github, Twitter } from "lucide-react";
import ProfileModal from "@/components/ProfileModal";
import AnimatedBackground from "@/components/AnimatedBackground";
import ScrollReveal from "@/components/ScrollReveal";

const socialIconMap: Record<string, any> = {
  instagram: Instagram,
  linkedin: Linkedin,
  github: Github,
  twitter: Twitter,
};

const teamData = {
  president: {
    name: "Alex Johnson",
    role: "President",
    description: "Leading PICSEL Club with a vision to empower every student in technology and innovation. Passionate about building communities and driving change.",
    image: "",
    email: "alex.johnson@kdkce.edu",
    mobile: "+91 9876543210",
    social: { instagram: "https://instagram.com/alexj", linkedin: "https://linkedin.com/in/alexj", github: "https://github.com/alexj", twitter: "https://twitter.com/alexj" },
  },
  vicePresidents: [
    { name: "Priya Sharma", role: "Vice President", description: "Driving technical excellence and mentoring the next generation of developers.", image: "", email: "priya@kdkce.edu", social: { instagram: "https://instagram.com/priya", linkedin: "https://linkedin.com/in/priya", github: "https://github.com/priya" } },
    { name: "Rahul Patel", role: "Technical Lead", description: "Full-stack developer and competitive programmer. Building tools that matter.", image: "", email: "rahul@kdkce.edu", social: { instagram: "https://instagram.com/rahul", linkedin: "https://linkedin.com/in/rahul", github: "https://github.com/rahul" } },
    { name: "Sneha Kulkarni", role: "Creative Head", description: "Designing experiences that inspire. UI/UX enthusiast and brand strategist.", image: "", email: "sneha@kdkce.edu", social: { instagram: "https://instagram.com/sneha", linkedin: "https://linkedin.com/in/sneha", twitter: "https://twitter.com/sneha" } },
    { name: "Arjun Deshmukh", role: "Event Coordinator", description: "Orchestrating memorable events that bring the tech community together.", image: "", email: "arjun@kdkce.edu", social: { instagram: "https://instagram.com/arjun", linkedin: "https://linkedin.com/in/arjun" } },
  ],
  members: [
    { name: "Amit Singh", role: "Web Developer", description: "Frontend specialist building beautiful web experiences.", image: "", social: { github: "https://github.com/amit", linkedin: "https://linkedin.com/in/amit", instagram: "https://instagram.com/amit" } },
    { name: "Kavya Reddy", role: "Content Writer", description: "Crafting compelling stories for the PICSEL community.", image: "", social: { linkedin: "https://linkedin.com/in/kavya", instagram: "https://instagram.com/kavya", twitter: "https://twitter.com/kavya" } },
    { name: "Rohan Joshi", role: "App Developer", description: "Mobile app developer with a passion for Flutter.", image: "", social: { github: "https://github.com/rohan", linkedin: "https://linkedin.com/in/rohan", instagram: "https://instagram.com/rohan" } },
    { name: "Meera Nair", role: "Social Media", description: "Managing the club's digital presence across platforms.", image: "", social: { instagram: "https://instagram.com/meera", linkedin: "https://linkedin.com/in/meera", twitter: "https://twitter.com/meera" } },
    { name: "Vikram Iyer", role: "UI Designer", description: "Creating pixel-perfect designs and brand identity.", image: "", social: { linkedin: "https://linkedin.com/in/vikram", instagram: "https://instagram.com/vikram", github: "https://github.com/vikram" } },
    { name: "Ananya Gupta", role: "ML Engineer", description: "Exploring AI/ML and building intelligent solutions.", image: "", social: { github: "https://github.com/ananya", linkedin: "https://linkedin.com/in/ananya", instagram: "https://instagram.com/ananya" } },
    { name: "Dev Patil", role: "Backend Dev", description: "Building scalable backend systems and APIs.", image: "", social: { github: "https://github.com/dev", linkedin: "https://linkedin.com/in/dev", instagram: "https://instagram.com/dev" } },
    { name: "Riya Desai", role: "Video Editor", description: "Creating engaging video content for events.", image: "", social: { instagram: "https://instagram.com/riya", linkedin: "https://linkedin.com/in/riya" } },
    { name: "Karthik Menon", role: "Photographer", description: "Capturing moments that tell our story.", image: "", social: { instagram: "https://instagram.com/karthik", linkedin: "https://linkedin.com/in/karthik" } },
    { name: "Neha Verma", role: "PR Head", description: "Building relationships and partnerships.", image: "", social: { linkedin: "https://linkedin.com/in/neha", instagram: "https://instagram.com/neha", twitter: "https://twitter.com/neha" } },
    { name: "Siddharth Rao", role: "Cloud Dev", description: "AWS & cloud infrastructure specialist.", image: "", social: { github: "https://github.com/siddharth", linkedin: "https://linkedin.com/in/siddharth", instagram: "https://instagram.com/siddharth" } },
    { name: "Pooja Bhatt", role: "Data Analyst", description: "Turning data into actionable insights.", image: "", social: { linkedin: "https://linkedin.com/in/pooja", github: "https://github.com/pooja", instagram: "https://instagram.com/pooja" } },
  ],
};

const SocialRow = ({ social }: { social: Record<string, string> }) => (
  <div className="flex items-center justify-center gap-1.5 sm:gap-2 mt-2">
    {Object.entries(social).map(([key, url]) => {
      const Icon = socialIconMap[key.toLowerCase()];
      if (!Icon || !url) return null;
      return (
        <a
          key={key}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="flex h-6 w-6 sm:h-7 sm:w-7 items-center justify-center rounded-md sm:rounded-lg border border-border text-muted-foreground transition-all hover:border-primary hover:text-primary"
        >
          <Icon size={11} />
        </a>
      );
    })}
  </div>
);

const TeamPage = () => {
  const { president, vicePresidents, members } = teamData;
  const [selectedProfile, setSelectedProfile] = useState<any>(null);

  return (
    <div className="relative min-h-screen bg-background pb-mobile-nav pt-16 sm:pt-20 md:pt-24 px-4 sm:px-6 md:px-8 lg:px-16 bg-geo-pattern">
      <AnimatedBackground />
      <div className="absolute inset-0 bg-dot-pattern opacity-15 pointer-events-none" />
      
      <div className="relative z-10">
        {/* Header */}
        <ScrollReveal direction="up" scale>
          <div className="mb-8 sm:mb-12 text-center">
            <span className="mb-3 sm:mb-4 inline-block text-[10px] sm:text-xs font-semibold uppercase tracking-[2px] sm:tracking-[3px] text-primary font-heading">The Squad</span>
            <h1 className="font-heading text-3xl sm:text-4xl font-bold text-foreground md:text-6xl">Our Team</h1>
            <p className="mx-auto mt-2 sm:mt-3 max-w-md text-sm sm:text-base text-muted-foreground">The passionate minds powering PICSEL Club.</p>
          </div>
        </ScrollReveal>

        {/* TIER 1: President */}
        <ScrollReveal scale delay={100}>
          <div className="mx-auto mb-10 sm:mb-16 max-w-2xl">
            <div
              className="group relative overflow-hidden rounded-2xl sm:rounded-3xl border border-primary/20 bg-gradient-to-br from-card to-secondary p-5 sm:p-8 shadow-glow transition-all hover:shadow-card-hover md:p-12 cursor-pointer active:scale-[0.99]"
              onClick={() => setSelectedProfile(president)}
            >
              <div className="absolute inset-0 bg-dot-pattern opacity-10" />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
              <div className="relative flex flex-col items-center text-center md:flex-row md:text-left md:gap-8">
                <div className="mb-4 sm:mb-6 h-24 w-24 sm:h-32 sm:w-32 overflow-hidden rounded-full border-4 border-primary/30 bg-muted md:mb-0 md:h-40 md:w-40 flex-shrink-0 shadow-glow">
                  {president.image ? (
                    <img src={president.image} alt={president.name} className="h-full w-full object-cover" loading="lazy" />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center text-3xl sm:text-4xl font-bold text-primary font-heading">
                      {president.name.charAt(0)}
                    </div>
                  )}
                </div>
                <div>
                  <span className="mb-2 inline-block rounded-full border border-primary/30 bg-primary/10 px-3 sm:px-4 py-1 text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-primary">
                    {president.role}
                  </span>
                  <h2 className="mt-2 font-heading text-2xl sm:text-3xl text-foreground md:text-4xl font-bold">{president.name}</h2>
                  <p className="mt-2 sm:mt-3 text-xs sm:text-sm leading-relaxed text-muted-foreground">{president.description}</p>
                  <SocialRow social={president.social} />
                  <p className="mt-2 text-[10px] sm:text-xs text-primary">Click to view full profile →</p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* TIER 2: Core Team */}
        <div className="mx-auto mb-10 sm:mb-16 max-w-5xl">
          <h3 className="mb-4 sm:mb-6 text-center text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-muted-foreground font-heading">Core Team</h3>
          <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
            {vicePresidents.map((member, index) => (
              <ScrollReveal key={index} delay={index * 80} direction="up">
                <div
                  onClick={() => setSelectedProfile(member)}
                  className="group overflow-hidden rounded-xl sm:rounded-2xl border border-border bg-card p-3 sm:p-5 transition-all hover:border-primary/20 hover:shadow-glow cursor-pointer active:scale-[0.98]"
                >
                  <div className="mx-auto mb-3 sm:mb-4 h-14 w-14 sm:h-20 sm:w-20 overflow-hidden rounded-full border-2 border-border bg-muted">
                    {member.image ? (
                      <img src={member.image} alt={member.name} className="h-full w-full object-cover" loading="lazy" />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center text-lg sm:text-xl font-bold text-muted-foreground group-hover:text-primary transition-colors font-heading">
                        {member.name.charAt(0)}
                      </div>
                    )}
                  </div>
                  <h3 className="text-center text-xs sm:text-sm font-bold text-foreground">{member.name}</h3>
                  <p className="text-center text-[10px] sm:text-xs font-medium text-primary mt-0.5 sm:mt-1">{member.role}</p>
                  <p className="mt-1.5 sm:mt-2 text-center text-[10px] sm:text-xs leading-relaxed text-muted-foreground line-clamp-2 hidden sm:block">{member.description}</p>
                  <SocialRow social={member.social} />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* TIER 3: Members */}
        <div className="mx-auto max-w-6xl mb-6 sm:mb-8">
          <h3 className="mb-4 sm:mb-6 text-center text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-muted-foreground font-heading">Members</h3>
          <div className="grid grid-cols-3 gap-2 sm:grid-cols-3 sm:gap-3 md:grid-cols-4 lg:grid-cols-6">
            {members.map((member, index) => (
              <ScrollReveal key={index} delay={index * 40} direction="up">
                <div
                  onClick={() => setSelectedProfile(member)}
                  className="group flex flex-col items-center rounded-lg sm:rounded-xl border border-border/50 bg-card/50 p-2.5 sm:p-4 transition-all hover:border-primary/20 hover:bg-card cursor-pointer active:scale-[0.97]"
                >
                  <div className="mb-2 sm:mb-3 h-10 w-10 sm:h-14 sm:w-14 overflow-hidden rounded-full border border-border bg-muted">
                    {member.image ? (
                      <img src={member.image} alt={member.name} className="h-full w-full object-cover" loading="lazy" />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center text-xs sm:text-sm font-bold text-muted-foreground group-hover:text-primary transition-colors font-heading">
                        {member.name.charAt(0)}
                      </div>
                    )}
                  </div>
                  <h4 className="text-center text-[10px] sm:text-xs font-semibold text-foreground leading-tight">{member.name}</h4>
                  <p className="text-center text-[9px] sm:text-[10px] text-primary mt-0.5">{member.role}</p>
                  <div className="hidden sm:block">
                    <SocialRow social={member.social} />
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>

      <ProfileModal profile={selectedProfile} onClose={() => setSelectedProfile(null)} />
    </div>
  );
};

export default TeamPage;