import { Link } from "react-router-dom";
import picselLogo from "@/assets/picsel-logo.png";

const stats = [
  { value: "500+", label: "Members" },
  { value: "50+", label: "Events" },
  { value: "15+", label: "Workshops" },
  { value: "3", label: "Years" },
];

const timeline = [
  { year: "2023", title: "Club Founded", description: "PICSEL Club was established under the Department of Computer Science & Engineering at KDKCE." },
  { year: "2024", title: "First Hackathon", description: "Successfully organized our first inter-college hackathon with 200+ participants." },
  { year: "2025", title: "National Recognition", description: "Recognized as one of the top student-led tech clubs in Maharashtra." },
  { year: "2026", title: "Expanding Horizons", description: "Launching new verticals in AI/ML, Cloud Computing, and Competitive Programming." },
];

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background pb-mobile-nav pt-20 md:pt-24 px-4 md:px-8 lg:px-16">
      {/* Hero */}
      <div className="mx-auto max-w-4xl text-center mb-16">
        <div className="mb-6 flex justify-center">
          <img src={picselLogo} alt="PICSEL" className="h-20 w-20 rounded-full border-2 border-primary/20" />
        </div>
        <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[3px] text-primary">About Us</span>
        <h1 className="font-serif text-4xl font-normal text-foreground md:text-6xl">
          We are <span className="italic text-primary">PICSEL</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          PICSEL (Programming, Innovation, Coding, Skills, Engineering & Leadership) is the flagship technical club of 
          the Department of Computer Science & Engineering at K.D.K. College of Engineering, Nagpur. 
          We are a community of passionate learners, builders, and innovators.
        </p>
      </div>

      {/* Stats */}
      <div className="mx-auto max-w-3xl mb-20">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {stats.map((stat, i) => (
            <div key={i} className="rounded-2xl border border-border bg-card p-6 text-center transition-all hover:border-primary/20 hover:shadow-glow">
              <span className="block text-3xl font-bold text-primary md:text-4xl">{stat.value}</span>
              <span className="mt-1 block text-xs font-medium uppercase tracking-widest text-muted-foreground">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="mx-auto max-w-4xl mb-20 grid gap-8 md:grid-cols-2">
        <div className="rounded-2xl border border-border bg-card p-8">
          <h3 className="mb-4 font-serif text-2xl text-foreground">Our Mission</h3>
          <p className="text-sm leading-relaxed text-muted-foreground">
            To create a vibrant ecosystem where students can explore, learn, and master emerging technologies 
            through hands-on projects, workshops, hackathons, and peer collaboration. We believe in learning by doing.
          </p>
        </div>
        <div className="rounded-2xl border border-primary/20 bg-gradient-to-br from-card to-secondary p-8">
          <h3 className="mb-4 font-serif text-2xl text-primary">Our Vision</h3>
          <p className="text-sm leading-relaxed text-muted-foreground">
            To be the leading student-run technical community in the region, producing industry-ready engineers 
            who are not just skilled programmers, but creative problem-solvers and effective leaders.
          </p>
        </div>
      </div>

      {/* Timeline */}
      <div className="mx-auto max-w-3xl mb-16">
        <h2 className="mb-8 text-center font-serif text-3xl text-foreground">Our Journey</h2>
        <div className="relative border-l-2 border-border ml-4">
          {timeline.map((item, index) => (
            <div key={index} className="relative pl-8 pb-8">
              <div className="absolute -left-[7px] top-1 h-3 w-3 rounded-full border-2 border-primary bg-background" />
              <span className="font-mono text-xs font-bold text-primary">{item.year}</span>
              <h3 className="mt-1 text-lg font-bold text-foreground">{item.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="mx-auto max-w-2xl text-center mb-8">
        <h2 className="mb-4 font-serif text-2xl text-foreground">Want to join us?</h2>
        <p className="mb-6 text-sm text-muted-foreground">
          We're always looking for passionate individuals who want to learn, grow, and make an impact.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/team">
            <div className="valorant-btn-wrapper">
              <button className="valorant-btn">Meet the Team</button>
            </div>
          </Link>
          <Link to="/events">
            <button className="valorant-btn-outline">Explore Events</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
