import { useState, useEffect, useCallback } from "react";
import hero1 from "@/assets/heroimg/hero1.jpg";
import hero2 from "@/assets/heroimg/hero2.jpg";
import hero3 from "@/assets/heroimg/hero3.jpg";

const heroImages = [hero1, hero2, hero3];

const events = [
  {
    id: 1,
    title: "FNDS",
    description: "A competitive gaming tournament bringing together the best players.",
    date: "2026-03-22",
    time: "14:22",
    coverImage: hero1,
    registerUrl: "#",
  },
  {
    id: 2,
    title: "HACKATHON 3.0",
    description: "48-hour coding marathon to build innovative solutions.",
    date: "2026-04-10",
    time: "09:00",
    coverImage: hero2,
    registerUrl: "#",
  },
  {
    id: 3,
    title: "TECH TALKS",
    description: "Industry experts sharing insights on emerging technologies.",
    date: "2026-04-25",
    time: "16:00",
    coverImage: hero3,
    registerUrl: "#",
  },
];

const HeroSection = () => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [activeEventIndex, setActiveEventIndex] = useState(0);

  // Auto-swap hero images
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Auto-swap events
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveEventIndex((prev) => (prev + 1) % events.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const activeEvent = events[activeEventIndex];

  return (
    <section className="relative min-h-screen px-6 pt-28 pb-12 md:px-10 lg:px-16">
      {/* Top: Title + Swapping Images */}
      <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center mb-16">
        {/* Left: Text */}
        <div className="animate-[fadeIn_0.8s_ease-out]">
          <h1 className="font-serif text-4xl font-normal leading-[1.1] tracking-tight text-hero-muted md:text-5xl lg:text-6xl xl:text-7xl">
            Learn teamwork{" "}
            <br className="hidden md:block" />
            essentials for{" "}
            <br />
            <span className="italic text-foreground block">
              effective{" "}
              <br className="hidden md:block" />
              collaboration.
            </span>
          </h1>
          <p className="mt-8 max-w-md text-lg leading-relaxed text-muted-foreground">
            The modern Picsel dictates its own terms. Today, to be a competitive
            specialist requires more than professional skills.
          </p>
        </div>

        {/* Right: Swapping Images */}
        <div className="relative animate-[slideInRight_0.8s_ease-out]">
          <div className="relative aspect-square max-h-[500px] w-full overflow-hidden rounded-xl shadow-glow">
            {heroImages.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`PICSEL activity ${index + 1}`}
                className="absolute inset-0 h-full w-full object-cover transition-opacity duration-1000"
                style={{ opacity: index === activeImageIndex ? 1 : 0 }}
              />
            ))}
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
          </div>

          {/* Image dots */}
          <div className="mt-4 flex justify-center gap-2">
            {heroImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveImageIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === activeImageIndex
                    ? "w-8 bg-primary"
                    : "w-2 bg-muted-foreground/30"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Below: Event Carousel */}
      <div className="mt-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-sm font-semibold uppercase tracking-[3px] text-accent-yellow">
            Upcoming Events
          </h2>
          <button className="group flex items-center gap-3 text-sm font-bold uppercase tracking-wider text-foreground">
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-secondary transition-all group-hover:w-full group-hover:px-4">
              <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
            </span>
            <span className="hidden group-hover:inline">Explore Events</span>
          </button>
        </div>

        <div
          className="relative h-64 md:h-72 overflow-hidden rounded-xl shadow-card"
          style={{ backgroundImage: `url(${activeEvent.coverImage})`, backgroundSize: "cover", backgroundPosition: "center" }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent" />

          {/* Content */}
          <div className="absolute inset-0 flex items-end p-6 md:p-8">
            <div className="flex w-full flex-col gap-4 md:flex-row md:items-end md:justify-between">
              {/* Left: Title + Register */}
              <div className="flex flex-col gap-3">
                <h3 className="text-2xl font-extrabold uppercase tracking-tight text-foreground md:text-3xl">
                  {activeEvent.title}
                </h3>
                <p className="max-w-sm text-sm text-secondary-foreground line-clamp-2">
                  {activeEvent.description}
                </p>
                {activeEvent.registerUrl && (
                  <a href={activeEvent.registerUrl} className="inline-block w-fit">
                    <div className="relative w-fit">
                      <button className="relative z-10 border border-secondary bg-secondary px-6 py-2.5 font-button text-sm font-bold tracking-wider text-foreground transition-all hover:border-accent-red hover:bg-accent-red hover:text-foreground">
                        Register Now
                      </button>
                    </div>
                  </a>
                )}
              </div>

              {/* Right: Date */}
              <div className="flex flex-col items-start md:items-end text-right">
                <span className="text-xs font-bold uppercase tracking-widest text-accent-yellow">
                  Upcoming Event
                </span>
                <span className="text-lg font-bold text-foreground">{activeEvent.date}</span>
                {activeEvent.time && (
                  <span className="text-sm font-semibold text-foreground">• {activeEvent.time}</span>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Thumbnails */}
        <div className="mt-4 flex gap-3">
          {events.map((ev, index) => (
            <button
              key={ev.id}
              onClick={() => setActiveEventIndex(index)}
              className={`relative h-14 w-14 flex-shrink-0 overflow-hidden rounded-lg border transition-all ${
                index === activeEventIndex
                  ? "border-foreground/50 opacity-100 scale-105"
                  : "border-border opacity-50"
              }`}
            >
              <img src={ev.coverImage} alt={ev.title} className="h-full w-full object-cover" />
              {index === activeEventIndex && (
                <div className="absolute inset-0 bg-foreground/20 animate-[progressFill_5s_linear]" style={{ width: "100%" }} />
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
