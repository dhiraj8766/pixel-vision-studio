import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import hero1 from "@/assets/heroimg/hero1.jpg";
import hero2 from "@/assets/heroimg/hero2.jpg";
import hero3 from "@/assets/heroimg/hero3.jpg";

const heroImages = [hero1, hero2, hero3];

const events = [
  { id: 1, title: "FNDS", description: "A competitive gaming tournament bringing together the best players.", date: "2026-03-22", time: "14:00", coverImage: hero1, registerUrl: "#" },
  { id: 2, title: "HACKATHON 3.0", description: "48-hour coding marathon to build innovative solutions.", date: "2026-04-10", time: "09:00", coverImage: hero2, registerUrl: "#" },
  { id: 3, title: "TECH TALKS", description: "Industry experts sharing insights on emerging technologies.", date: "2026-04-25", time: "16:00", coverImage: hero3, registerUrl: "#" },
];

const HeroSection = () => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [activeEventIndex, setActiveEventIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setActiveImageIndex((prev) => (prev + 1) % heroImages.length), 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => setActiveEventIndex((prev) => (prev + 1) % events.length), 5000);
    return () => clearInterval(interval);
  }, []);

  const activeEvent = events[activeEventIndex];

  return (
    <section className="relative min-h-screen px-6 pt-24 pb-12 md:px-10 md:pt-28 lg:px-16 overflow-hidden">
      {/* Abstract background inspired by reference */}
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(240,20%,6%)] via-[hsl(260,25%,10%)] to-[hsl(240,20%,6%)]" />
      
      {/* Large red/crimson abstract shape - top right */}
      <div className="absolute -top-32 -right-32 w-[700px] h-[700px] rounded-[40%_60%_70%_30%/40%_50%_60%_50%] bg-gradient-to-br from-[hsl(350,80%,45%)] via-[hsl(340,70%,35%)] to-[hsl(330,60%,25%)] opacity-70 pointer-events-none" />
      <div className="absolute -top-48 right-20 w-[500px] h-[500px] rounded-[60%_40%_30%_70%/50%_60%_40%_50%] bg-gradient-to-br from-[hsl(350,85%,55%)] to-[hsl(340,70%,30%)] opacity-40 pointer-events-none blur-sm" />
      
      {/* Pink/rose accent - top left */}
      <div className="absolute -top-20 -left-20 w-[400px] h-[400px] rounded-[50%_50%_40%_60%/40%_60%_50%_50%] bg-gradient-to-br from-[hsl(340,60%,55%)] to-[hsl(350,50%,30%)] opacity-30 pointer-events-none" />
      
      {/* Dot pattern overlay */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: 'radial-gradient(hsl(0 0% 100% / 0.08) 1px, transparent 1px)',
        backgroundSize: '20px 20px',
      }} />
      
      {/* Subtle purple glow bottom left */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-[hsl(270,60%,40%)] opacity-[0.07] blur-[120px] pointer-events-none" />
      
      {/* Cyan glow accent */}
      <div className="absolute bottom-40 right-20 w-72 h-72 rounded-full bg-[hsl(174,80%,40%)] opacity-[0.06] blur-[100px] pointer-events-none" />

      <div className="relative z-10">
        {/* Top: Title + Images */}
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center mb-16">
          <div className="animate-[fadeIn_0.8s_ease-out]">
            <h1 className="font-heading text-4xl font-bold leading-[1.05] tracking-tight text-hero-muted md:text-5xl lg:text-6xl xl:text-7xl">
              Learn teamwork
              <br className="hidden md:block" />
              essentials for
              <br />
              <span className="text-foreground block mt-1">
                effective
                <br className="hidden md:block" />
                collaboration.
              </span>
            </h1>
            <p className="mt-8 max-w-md text-base leading-relaxed text-muted-foreground">
              The modern Picsel dictates its own terms. Today, to be a competitive
              specialist requires more than professional skills.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/events">
                {/* Desktop valorant button */}
                <div className="hidden md:block valorant-btn-wrapper">
                  <button className="valorant-btn flex items-center gap-2">
                    Explore Events <ArrowRight size={16} />
                  </button>
                </div>
                {/* Mobile button */}
                <button className="btn-mobile-primary md:hidden flex items-center gap-2">
                  Explore Events <ArrowRight size={16} />
                </button>
              </Link>
              <Link to="/about">
                <button className="hidden md:block valorant-btn-outline">About Us</button>
                <button className="btn-mobile-outline md:hidden">About Us</button>
              </Link>
            </div>
          </div>

          {/* Right: Swapping Images */}
          <div className="relative animate-[slideInRight_0.8s_ease-out]">
            <div className="relative aspect-square max-h-[500px] w-full overflow-hidden rounded-2xl shadow-glow border border-border/30">
              {heroImages.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`PICSEL activity ${index + 1}`}
                  className="absolute inset-0 h-full w-full object-cover transition-opacity duration-1000"
                  style={{ opacity: index === activeImageIndex ? 1 : 0 }}
                  loading={index === 0 ? "eager" : "lazy"}
                />
              ))}
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
            </div>

            {/* Dots */}
            <div className="mt-4 flex justify-center gap-2">
              {heroImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImageIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === activeImageIndex ? "w-8 bg-primary" : "w-2 bg-muted-foreground/30"
                  }`}
                  aria-label={`View image ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Event Carousel */}
        <div className="mt-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-sm font-semibold uppercase tracking-[3px] text-accent-yellow font-heading">
              Upcoming Events
            </h2>
            <Link to="/events" className="group flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-foreground">
              <span className="hidden md:inline text-muted-foreground group-hover:text-foreground transition-colors">View All</span>
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-secondary transition-all group-hover:bg-primary group-hover:border-primary">
                <ArrowRight size={16} />
              </span>
            </Link>
          </div>

          <div
            className="relative h-64 md:h-72 overflow-hidden rounded-2xl shadow-card border border-border/20"
            style={{ backgroundImage: `url(${activeEvent.coverImage})`, backgroundSize: "cover", backgroundPosition: "center" }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/20" />

            <div className="absolute inset-0 flex items-end p-6 md:p-8">
              <div className="flex w-full flex-col gap-4 md:flex-row md:items-end md:justify-between">
                <div className="flex flex-col gap-3">
                  <h3 className="text-2xl font-extrabold uppercase tracking-tight text-foreground md:text-3xl font-heading">
                    {activeEvent.title}
                  </h3>
                  <p className="max-w-sm text-sm text-secondary-foreground line-clamp-2">{activeEvent.description}</p>
                  {activeEvent.registerUrl && (
                    <a href={activeEvent.registerUrl} className="inline-block w-fit">
                      <button className="hidden md:block valorant-btn text-xs py-2 px-5">Register Now</button>
                      <button className="btn-mobile-primary md:hidden text-xs py-2 px-5">Register Now</button>
                    </a>
                  )}
                </div>

                <div className="flex flex-col items-start md:items-end text-right">
                  <span className="text-xs font-bold uppercase tracking-widest text-accent-yellow">Upcoming</span>
                  <span className="flex items-center gap-1 text-base font-bold text-foreground mt-1">
                    <Calendar size={14} /> {activeEvent.date}
                  </span>
                  <span className="flex items-center gap-1 text-sm text-foreground">
                    <Clock size={14} /> {activeEvent.time}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Thumbnails with progress */}
          <div className="mt-4 flex gap-3">
            {events.map((ev, index) => (
              <button
                key={ev.id}
                onClick={() => setActiveEventIndex(index)}
                className={`relative h-16 w-20 flex-shrink-0 overflow-hidden rounded-xl border transition-all ${
                  index === activeEventIndex ? "border-primary/60 ring-2 ring-primary/20 scale-105" : "border-border opacity-50"
                }`}
              >
                <img src={ev.coverImage} alt={ev.title} className="h-full w-full object-cover" loading="lazy" />
                {index === activeEventIndex && (
                  <div className="absolute bottom-0 left-0 h-1 bg-primary animate-[progressFill_5s_linear]" style={{ width: "100%" }} />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
