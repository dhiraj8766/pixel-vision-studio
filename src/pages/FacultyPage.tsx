import { useState } from "react";
import { GraduationCap, Mail, Phone } from "lucide-react";
import ProfileModal from "@/components/ProfileModal";
import ScrollReveal from "@/components/ScrollReveal";

const facultyData = [
  {
    name: "Dr. Rajesh Kumar", role: "Faculty Advisor", department: "Computer Science & Engineering",
    description: "20+ years of experience in software engineering and AI research. Guiding PICSEL Club since its inception.",
    image: "", email: "rajesh.kumar@kdkce.edu", mobile: "+91 9876543210", specialization: "Artificial Intelligence",
    socials: { linkedin: "#", twitter: "#" },
  },
  {
    name: "Prof. Sunita Deshmukh", role: "Co-Advisor", department: "Computer Science & Engineering",
    description: "Expert in data science and machine learning. Passionate about nurturing student innovation.",
    image: "", email: "sunita.deshmukh@kdkce.edu", mobile: "+91 9876543211", specialization: "Data Science",
    socials: { linkedin: "#" },
  },
  {
    name: "Dr. Manoj Patil", role: "Technical Mentor", department: "Information Technology",
    description: "Specialist in cloud computing and DevOps. Helps students bridge the gap between academia and industry.",
    image: "", email: "manoj.patil@kdkce.edu", mobile: "+91 9876543212", specialization: "Cloud Computing",
    socials: { linkedin: "#", twitter: "#" },
  },
  {
    name: "Prof. Anjali Verma", role: "Event Advisor", department: "Computer Science & Engineering",
    description: "Coordinates academic and extracurricular activities. Ensures events align with educational goals.",
    image: "", email: "anjali.verma@kdkce.edu", mobile: "+91 9876543213", specialization: "Software Engineering",
    socials: { linkedin: "#" },
  },
];

const cardAccents = [
  { gradient: "from-[hsl(43,96%,56%)] to-[hsl(25,95%,55%)]", glow: "hsl(43,96%,56%,0.15)", text: "text-[hsl(43,96%,56%)]", border: "border-[hsl(43,96%,56%,0.25)]" },
  { gradient: "from-[hsl(174,72%,40%)] to-[hsl(142,70%,55%)]", glow: "hsl(174,72%,40%,0.15)", text: "text-[hsl(174,72%,50%)]", border: "border-[hsl(174,72%,40%,0.25)]" },
  { gradient: "from-[hsl(270,70%,60%)] to-[hsl(330,80%,60%)]", glow: "hsl(270,70%,60%,0.15)", text: "text-[hsl(270,70%,65%)]", border: "border-[hsl(270,70%,60%,0.25)]" },
  { gradient: "from-[hsl(350,84%,60%)] to-[hsl(25,95%,55%)]", glow: "hsl(350,84%,60%,0.15)", text: "text-[hsl(350,84%,65%)]", border: "border-[hsl(350,84%,60%,0.25)]" },
];

const FacultyPage = () => {
  const [selectedProfile, setSelectedProfile] = useState<any>(null);

  return (
    <div className="relative min-h-screen pb-mobile-nav pt-16 sm:pt-20 md:pt-24 px-4 sm:px-6 md:px-8 lg:px-16 overflow-hidden"
      style={{ background: "linear-gradient(160deg, hsl(220, 25%, 6%) 0%, hsl(230, 22%, 10%) 50%, hsl(240, 20%, 8%) 100%)" }}
    >
      {/* Decorative orbs */}
      <div className="absolute top-[8%] left-[15%] w-[350px] h-[350px] rounded-full pointer-events-none z-0 blur-[120px]" style={{ background: "radial-gradient(circle, hsl(43, 96%, 56%, 0.1), transparent 70%)" }} />
      <div className="absolute bottom-[15%] right-[10%] w-[300px] h-[300px] rounded-full pointer-events-none z-0 blur-[100px]" style={{ background: "radial-gradient(circle, hsl(174, 72%, 40%, 0.08), transparent 70%)" }} />

      <div className="relative z-10">
        {/* Header */}
        <ScrollReveal direction="up" scale>
          <div className="mb-10 sm:mb-14 text-center">
            <div className="inline-flex items-center gap-2 mb-3 sm:mb-4 rounded-full border border-[hsl(43,96%,56%,0.3)] bg-[hsl(43,96%,56%,0.08)] px-4 sm:px-5 py-1.5 sm:py-2">
              <GraduationCap size={14} className="text-[hsl(43,96%,56%)]" />
              <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[2px] sm:tracking-[3px] text-[hsl(43,96%,56%)] font-heading">Mentors</span>
            </div>
            <h1 className="font-heading text-3xl sm:text-5xl font-bold text-[hsl(0,0%,95%)] md:text-6xl lg:text-7xl">
              Our <span className="bg-gradient-to-r from-[hsl(43,96%,56%)] via-[hsl(25,95%,55%)] to-[hsl(350,84%,60%)] bg-clip-text text-transparent">Faculty</span>
            </h1>
            <p className="mx-auto mt-3 sm:mt-4 max-w-lg text-sm sm:text-base text-[hsl(230,15%,50%)]">Guiding and inspiring the next generation of engineers.</p>
          </div>
        </ScrollReveal>

        {/* Faculty Cards */}
        <div className="mx-auto max-w-5xl grid gap-4 sm:gap-6 md:grid-cols-2">
          {facultyData.map((faculty, index) => {
            const accent = cardAccents[index % cardAccents.length];
            return (
              <ScrollReveal key={index} delay={index * 100} direction="up">
                <div
                  onClick={() => setSelectedProfile(faculty)}
                  className={`group overflow-hidden rounded-xl sm:rounded-2xl border ${accent.border} bg-[hsl(230,20%,10%)] transition-all hover:shadow-[0_0_50px_var(--glow)] cursor-pointer active:scale-[0.99]`}
                  style={{ "--glow": accent.glow } as React.CSSProperties}
                >
                  {/* Top accent bar */}
                  <div className={`h-1 w-full bg-gradient-to-r ${accent.gradient}`} />
                  
                  <div className="flex flex-col sm:flex-row">
                    {/* Avatar */}
                    <div className="flex items-center justify-center p-5 sm:p-8 sm:w-44 sm:flex-shrink-0">
                      <div className={`h-20 w-20 sm:h-24 sm:w-24 overflow-hidden rounded-2xl border-2 ${accent.border} bg-[hsl(230,20%,14%)] shadow-[0_0_30px_var(--glow)] transition-transform group-hover:scale-105`} style={{ "--glow": accent.glow } as React.CSSProperties}>
                        {faculty.image ? (
                          <img src={faculty.image} alt={faculty.name} className="h-full w-full object-cover" loading="lazy" />
                        ) : (
                          <div className={`flex h-full w-full items-center justify-center text-xl sm:text-2xl font-bold font-heading ${accent.text}`}>
                            {faculty.name.split(" ").map(n => n.charAt(0)).join("")}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Info */}
                    <div className="flex-1 p-4 sm:p-6 pt-0 sm:pt-6">
                      <span className={`inline-block rounded-full bg-gradient-to-r ${accent.gradient} px-2.5 sm:px-3 py-0.5 text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-[hsl(0,0%,5%)] mb-1.5 sm:mb-2`}>
                        {faculty.role}
                      </span>
                      <h3 className="text-base sm:text-xl font-bold text-[hsl(0,0%,93%)] font-heading">{faculty.name}</h3>
                      <p className="text-[10px] sm:text-xs text-[hsl(230,15%,50%)] mt-0.5 sm:mt-1">{faculty.department}</p>
                      <p className={`text-[10px] sm:text-xs mt-0.5 ${accent.text}`}>{faculty.specialization}</p>
                      <p className="mt-2 sm:mt-3 text-xs sm:text-sm leading-relaxed text-[hsl(230,15%,50%)] line-clamp-2">{faculty.description}</p>
                      
                      {/* Quick contact */}
                      <div className="mt-3 flex items-center gap-3 flex-wrap">
                        {faculty.email && (
                          <a href={`mailto:${faculty.email}`} onClick={(e) => e.stopPropagation()} className="flex items-center gap-1 text-[10px] sm:text-xs text-[hsl(230,15%,45%)] hover:text-[hsl(174,72%,50%)] transition-colors">
                            <Mail size={11} /> Email
                          </a>
                        )}
                        {faculty.mobile && (
                          <a href={`tel:${faculty.mobile}`} onClick={(e) => e.stopPropagation()} className="flex items-center gap-1 text-[10px] sm:text-xs text-[hsl(230,15%,45%)] hover:text-[hsl(174,72%,50%)] transition-colors">
                            <Phone size={11} /> Call
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>

      <ProfileModal profile={selectedProfile} onClose={() => setSelectedProfile(null)} />
    </div>
  );
};

export default FacultyPage;
