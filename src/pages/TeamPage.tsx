import { useState } from "react";
import { Instagram, Linkedin, Github, Twitter, Crown, Star, Users } from "lucide-react";
import ProfileModal from "@/components/ProfileModal";
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

const accentColors = [
  { bg: "bg-[hsl(270,70%,60%)]", text: "text-[hsl(270,70%,95%)]", border: "border-[hsl(270,70%,60%)]", light: "bg-[hsl(270,70%,60%,0.12)]", textAccent: "text-[hsl(270,70%,60%)]" },
  { bg: "bg-[hsl(174,72%,40%)]", text: "text-[hsl(174,72%,95%)]", border: "border-[hsl(174,72%,40%)]", light: "bg-[hsl(174,72%,40%,0.12)]", textAccent: "text-[hsl(174,72%,40%)]" },
  { bg: "bg-[hsl(330,80%,60%)]", text: "text-[hsl(330,80%,95%)]", border: "border-[hsl(330,80%,60%)]", light: "bg-[hsl(330,80%,60%,0.12)]", textAccent: "text-[hsl(330,80%,60%)]" },
  { bg: "bg-[hsl(43,96%,56%)]", text: "text-[hsl(43,96%,10%)]", border: "border-[hsl(43,96%,56%)]", light: "bg-[hsl(43,96%,56%,0.12)]", textAccent: "text-[hsl(43,96%,56%)]" },
];

const SocialRow = ({ social }: { social: Record<string, string> }) => (
  <div className="flex items-center justify-center gap-1.5 sm:gap-2 mt-2 sm:mt-3">
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
          className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-[hsl(0,0%,100%,0.06)] text-[hsl(0,0%,60%)] transition-all hover:bg-[hsl(174,72%,40%,0.15)] hover:text-[hsl(174,72%,40%)] hover:scale-110"
        >
          <Icon size={12} />
        </a>
      );
    })}
  </div>
);

const TeamPage = () => {
  const { president, vicePresidents, members } = teamData;
  const [selectedProfile, setSelectedProfile] = useState<any>(null);

  return (
    <div className="relative min-h-screen pb-mobile-nav pt-16 sm:pt-20 md:pt-24 px-4 sm:px-6 md:px-8 lg:px-16 overflow-hidden"
      style={{ background: "linear-gradient(135deg, hsl(250, 25%, 8%) 0%, hsl(260, 20%, 12%) 50%, hsl(240, 20%, 6%) 100%)" }}
    >
      {/* Decorative gradient orbs */}
      <div className="absolute top-[5%] right-[10%] w-[400px] h-[400px] rounded-full pointer-events-none z-0 blur-[120px]" style={{ background: "radial-gradient(circle, hsl(270, 70%, 60%, 0.15), transparent 70%)" }} />
      <div className="absolute bottom-[10%] left-[5%] w-[350px] h-[350px] rounded-full pointer-events-none z-0 blur-[100px]" style={{ background: "radial-gradient(circle, hsl(174, 72%, 40%, 0.1), transparent 70%)" }} />
      <div className="absolute top-[40%] left-[50%] w-[300px] h-[300px] rounded-full pointer-events-none z-0 blur-[100px]" style={{ background: "radial-gradient(circle, hsl(330, 80%, 60%, 0.08), transparent 70%)" }} />
      
      <div className="relative z-10">
        {/* Header */}
        <ScrollReveal direction="up" scale>
          <div className="mb-10 sm:mb-14 text-center">
            <div className="inline-flex items-center gap-2 mb-3 sm:mb-4 rounded-full border border-[hsl(270,70%,60%,0.3)] bg-[hsl(270,70%,60%,0.08)] px-4 sm:px-5 py-1.5 sm:py-2">
              <Users size={12} className="text-[hsl(270,70%,60%)]" />
              <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[2px] sm:tracking-[3px] text-[hsl(270,70%,60%)] font-heading">The Squad</span>
            </div>
            <h1 className="font-heading text-3xl sm:text-5xl font-bold text-[hsl(0,0%,95%)] md:text-6xl lg:text-7xl">
              Our <span className="bg-gradient-to-r from-[hsl(270,70%,60%)] via-[hsl(174,72%,50%)] to-[hsl(330,80%,60%)] bg-clip-text text-transparent">Team</span>
            </h1>
            <p className="mx-auto mt-3 sm:mt-4 max-w-lg text-sm sm:text-base text-[hsl(230,15%,55%)]">The passionate minds powering PICSEL Club.</p>
          </div>
        </ScrollReveal>

        {/* TIER 1: President */}
        <ScrollReveal scale delay={100}>
          <div className="mx-auto mb-12 sm:mb-16 max-w-2xl">
            <div
              className="group relative overflow-hidden rounded-2xl sm:rounded-3xl p-[1px] cursor-pointer active:scale-[0.99] transition-transform"
              onClick={() => setSelectedProfile(president)}
            >
              {/* Gradient border */}
              <div className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[hsl(270,70%,60%)] via-[hsl(174,72%,40%)] to-[hsl(330,80%,60%)] opacity-40 group-hover:opacity-70 transition-opacity" />
              <div className="relative rounded-2xl sm:rounded-3xl bg-[hsl(250,18%,10%)] p-5 sm:p-8 md:p-10">
                <div className="absolute top-4 right-4 sm:top-6 sm:right-6">
                  <Crown size={20} className="text-[hsl(43,96%,56%)]" />
                </div>
                <div className="flex flex-col items-center text-center md:flex-row md:text-left md:gap-8">
                  <div className="mb-4 sm:mb-6 h-24 w-24 sm:h-32 sm:w-32 overflow-hidden rounded-full border-[3px] border-[hsl(270,70%,60%,0.4)] md:mb-0 md:h-36 md:w-36 flex-shrink-0 shadow-[0_0_40px_hsl(270,70%,60%,0.2)]">
                    {president.image ? (
                      <img src={president.image} alt={president.name} className="h-full w-full object-cover" loading="lazy" />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center text-3xl sm:text-4xl font-bold font-heading bg-gradient-to-br from-[hsl(270,70%,60%,0.2)] to-[hsl(174,72%,40%,0.1)] text-[hsl(270,70%,60%)]">
                        {president.name.charAt(0)}
                      </div>
                    )}
                  </div>
                  <div>
                    <span className="mb-2 inline-block rounded-full bg-gradient-to-r from-[hsl(270,70%,60%,0.15)] to-[hsl(174,72%,40%,0.1)] px-3 sm:px-4 py-1 text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-[hsl(270,70%,60%)]">
                      {president.role}
                    </span>
                    <h2 className="mt-2 font-heading text-2xl sm:text-3xl text-[hsl(0,0%,95%)] md:text-4xl font-bold">{president.name}</h2>
                    <p className="mt-2 sm:mt-3 text-xs sm:text-sm leading-relaxed text-[hsl(230,15%,55%)]">{president.description}</p>
                    <SocialRow social={president.social} />
                    <p className="mt-2 text-[10px] sm:text-xs text-[hsl(270,70%,60%)] opacity-70">Tap to view full profile →</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* TIER 2: Core Team */}
        <div className="mx-auto mb-12 sm:mb-16 max-w-5xl">
          <div className="flex items-center justify-center gap-2 mb-6 sm:mb-8">
            <Star size={14} className="text-[hsl(43,96%,56%)]" />
            <h3 className="text-[10px] sm:text-xs font-semibold uppercase tracking-[3px] text-[hsl(230,15%,50%)] font-heading">Core Team</h3>
            <Star size={14} className="text-[hsl(43,96%,56%)]" />
          </div>
          <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
            {vicePresidents.map((member, index) => {
              const accent = accentColors[index % accentColors.length];
              return (
                <ScrollReveal key={index} delay={index * 80} direction="up">
                  <div
                    onClick={() => setSelectedProfile(member)}
                    className="group overflow-hidden rounded-xl sm:rounded-2xl border border-[hsl(260,15%,18%)] bg-[hsl(250,18%,10%)] p-4 sm:p-5 transition-all hover:border-[hsl(270,70%,60%,0.3)] hover:shadow-[0_0_40px_hsl(270,70%,60%,0.1)] cursor-pointer active:scale-[0.98]"
                  >
                    <div className={`mx-auto mb-3 sm:mb-4 h-16 w-16 sm:h-20 sm:w-20 overflow-hidden rounded-full border-2 ${accent.border}/30 ${accent.light}`}>
                      {member.image ? (
                        <img src={member.image} alt={member.name} className="h-full w-full object-cover" loading="lazy" />
                      ) : (
                        <div className={`flex h-full w-full items-center justify-center text-lg sm:text-xl font-bold font-heading ${accent.textAccent}`}>
                          {member.name.charAt(0)}
                        </div>
                      )}
                    </div>
                    <h3 className="text-center text-xs sm:text-sm font-bold text-[hsl(0,0%,90%)]">{member.name}</h3>
                    <p className={`text-center text-[10px] sm:text-xs font-medium mt-0.5 sm:mt-1 ${accent.textAccent}`}>{member.role}</p>
                    <p className="mt-1.5 sm:mt-2 text-center text-[10px] sm:text-xs leading-relaxed text-[hsl(230,15%,50%)] line-clamp-2 hidden sm:block">{member.description}</p>
                    <SocialRow social={member.social} />
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>

        {/* TIER 3: Members */}
        <div className="mx-auto max-w-6xl mb-6 sm:mb-8">
          <h3 className="mb-5 sm:mb-7 text-center text-[10px] sm:text-xs font-semibold uppercase tracking-[3px] text-[hsl(230,15%,45%)] font-heading">Members</h3>
          <div className="grid grid-cols-3 gap-2.5 sm:grid-cols-3 sm:gap-3 md:grid-cols-4 lg:grid-cols-6">
            {members.map((member, index) => (
              <ScrollReveal key={index} delay={index * 40} direction="up">
                <div
                  onClick={() => setSelectedProfile(member)}
                  className="group flex flex-col items-center rounded-xl sm:rounded-xl border border-[hsl(260,15%,16%)] bg-[hsl(250,18%,9%)] p-3 sm:p-4 transition-all hover:border-[hsl(174,72%,40%,0.25)] hover:bg-[hsl(250,18%,11%)] cursor-pointer active:scale-[0.97]"
                >
                  <div className="mb-2 sm:mb-3 h-11 w-11 sm:h-14 sm:w-14 overflow-hidden rounded-full border border-[hsl(260,15%,20%)] bg-[hsl(260,20%,14%)]">
                    {member.image ? (
                      <img src={member.image} alt={member.name} className="h-full w-full object-cover" loading="lazy" />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center text-xs sm:text-sm font-bold text-[hsl(230,15%,45%)] group-hover:text-[hsl(174,72%,50%)] transition-colors font-heading">
                        {member.name.charAt(0)}
                      </div>
                    )}
                  </div>
                  <h4 className="text-center text-[10px] sm:text-xs font-semibold text-[hsl(0,0%,85%)] leading-tight">{member.name}</h4>
                  <p className="text-center text-[9px] sm:text-[10px] text-[hsl(174,72%,45%)] mt-0.5">{member.role}</p>
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
