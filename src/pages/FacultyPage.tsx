import { useState } from "react";
import ProfileModal from "@/components/ProfileModal";

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

const FacultyPage = () => {
  const [selectedProfile, setSelectedProfile] = useState<any>(null);

  return (
    <div className="relative min-h-screen bg-background pb-mobile-nav pt-16 sm:pt-20 md:pt-24 px-4 sm:px-6 md:px-8 lg:px-16 bg-geo-pattern">
      <div className="absolute inset-0 bg-cross-pattern pointer-events-none" />
      <div className="absolute inset-0 bg-abstract-lines pointer-events-none" />
      
      <div className="relative z-10">
        {/* Header */}
        <div className="mb-8 sm:mb-12 text-center">
          <span className="mb-3 sm:mb-4 inline-block text-[10px] sm:text-xs font-semibold uppercase tracking-[2px] sm:tracking-[3px] text-primary font-heading">Mentors</span>
          <h1 className="font-heading text-3xl sm:text-4xl font-bold text-foreground md:text-6xl">Our Faculty</h1>
          <p className="mx-auto mt-2 sm:mt-3 max-w-md text-sm sm:text-base text-muted-foreground">Guiding and inspiring the next generation of engineers.</p>
        </div>

        {/* Faculty Grid */}
        <div className="mx-auto max-w-5xl grid gap-4 sm:gap-6 md:grid-cols-2">
          {facultyData.map((faculty, index) => (
            <div
              key={index}
              onClick={() => setSelectedProfile(faculty)}
              className="group overflow-hidden rounded-xl sm:rounded-2xl border border-border bg-card transition-all hover:border-primary/20 hover:shadow-glow cursor-pointer active:scale-[0.99]"
            >
              <div className="flex flex-col sm:flex-row">
                {/* Avatar */}
                <div className="flex items-center justify-center bg-gradient-to-br from-secondary to-card p-5 sm:p-8 sm:w-40 sm:flex-shrink-0">
                  <div className="h-20 w-20 sm:h-24 sm:w-24 overflow-hidden rounded-full border-2 border-primary/20 bg-muted">
                    {faculty.image ? (
                      <img src={faculty.image} alt={faculty.name} className="h-full w-full object-cover" loading="lazy" />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center text-xl sm:text-2xl font-bold text-primary font-heading">
                        {faculty.name.split(" ").map(n => n.charAt(0)).join("")}
                      </div>
                    )}
                  </div>
                </div>

                {/* Info */}
                <div className="flex-1 p-4 sm:p-6">
                  <span className="inline-block rounded-full border border-primary/20 bg-primary/10 px-2.5 sm:px-3 py-0.5 text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-primary mb-1.5 sm:mb-2">
                    {faculty.role}
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-foreground font-heading">{faculty.name}</h3>
                  <p className="text-[10px] sm:text-xs text-muted-foreground mt-0.5 sm:mt-1">{faculty.department}</p>
                  <p className="text-[10px] sm:text-xs text-accent-yellow mt-0.5">{faculty.specialization}</p>
                  <p className="mt-2 sm:mt-3 text-xs sm:text-sm leading-relaxed text-muted-foreground line-clamp-2">{faculty.description}</p>
                  <p className="mt-1.5 sm:mt-2 text-[10px] sm:text-xs text-primary">Click to view profile →</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <ProfileModal profile={selectedProfile} onClose={() => setSelectedProfile(null)} />
    </div>
  );
};

export default FacultyPage;
