const facultyData = [
  {
    name: "Dr. Rajesh Kumar",
    role: "Faculty Advisor",
    department: "Computer Science & Engineering",
    description: "20+ years of experience in software engineering and AI research. Guiding PICSEL Club since its inception.",
    image: "",
    email: "rajesh.kumar@kdkce.edu",
    specialization: "Artificial Intelligence",
  },
  {
    name: "Prof. Sunita Deshmukh",
    role: "Co-Advisor",
    department: "Computer Science & Engineering",
    description: "Expert in data science and machine learning. Passionate about nurturing student innovation.",
    image: "",
    email: "sunita.deshmukh@kdkce.edu",
    specialization: "Data Science",
  },
  {
    name: "Dr. Manoj Patil",
    role: "Technical Mentor",
    department: "Information Technology",
    description: "Specialist in cloud computing and DevOps. Helps students bridge the gap between academia and industry.",
    image: "",
    email: "manoj.patil@kdkce.edu",
    specialization: "Cloud Computing",
  },
  {
    name: "Prof. Anjali Verma",
    role: "Event Advisor",
    department: "Computer Science & Engineering",
    description: "Coordinates academic and extracurricular activities. Ensures events align with educational goals.",
    image: "",
    email: "anjali.verma@kdkce.edu",
    specialization: "Software Engineering",
  },
];

const FacultyPage = () => {
  return (
    <div className="min-h-screen bg-background pb-mobile-nav pt-20 md:pt-24 px-4 md:px-8 lg:px-16">
      {/* Header */}
      <div className="mb-12 text-center">
        <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[3px] text-primary">Mentors</span>
        <h1 className="font-serif text-4xl font-normal text-foreground md:text-6xl">Our Faculty</h1>
        <p className="mx-auto mt-3 max-w-md text-muted-foreground italic">Guiding and inspiring the next generation of engineers.</p>
      </div>

      {/* Faculty Grid */}
      <div className="mx-auto max-w-5xl grid gap-6 md:grid-cols-2">
        {facultyData.map((faculty, index) => (
          <div
            key={index}
            className="group overflow-hidden rounded-2xl border border-border bg-card transition-all hover:border-primary/20 hover:shadow-glow"
          >
            <div className="flex flex-col sm:flex-row">
              {/* Avatar */}
              <div className="flex items-center justify-center bg-gradient-to-br from-secondary to-card p-8 sm:w-40 sm:flex-shrink-0">
                <div className="h-24 w-24 overflow-hidden rounded-full border-2 border-primary/20 bg-muted">
                  {faculty.image ? (
                    <img src={faculty.image} alt={faculty.name} className="h-full w-full object-cover" />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center text-2xl font-bold text-primary">
                      {faculty.name.split(" ").map(n => n.charAt(0)).join("")}
                    </div>
                  )}
                </div>
              </div>

              {/* Info */}
              <div className="flex-1 p-6">
                <span className="inline-block rounded-full border border-primary/20 bg-primary/10 px-3 py-0.5 text-[10px] font-bold uppercase tracking-widest text-primary mb-2">
                  {faculty.role}
                </span>
                <h3 className="text-xl font-bold text-foreground">{faculty.name}</h3>
                <p className="text-xs text-muted-foreground mt-1">{faculty.department}</p>
                <p className="text-xs text-accent-yellow mt-0.5">{faculty.specialization}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{faculty.description}</p>
                <a href={`mailto:${faculty.email}`} className="mt-3 inline-block text-xs text-primary hover:underline">
                  {faculty.email}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FacultyPage;
