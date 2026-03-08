import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import picselLogo from "@/assets/picsel-logo.png";
import hero1 from "@/assets/heroimg/hero1.jpg";
import hero2 from "@/assets/heroimg/hero2.jpg";
import hero3 from "@/assets/heroimg/hero3.jpg";

const heroImages = [
  { src: hero1, label: "Gaming" },
  { src: hero2, label: "Hackathon" },
  { src: hero3, label: "Tech Talks" },
];

const events = [
  { id: 1, title: "FNDS", description: "A competitive gaming tournament bringing together the best players.", date: "2026-03-22", time: "14:00", coverImage: hero1, registerUrl: "#" },
  { id: 2, title: "HACKATHON 3.0", description: "48-hour coding marathon to build innovative solutions.", date: "2026-04-10", time: "09:00", coverImage: hero2, registerUrl: "#" },
  { id: 3, title: "TECH TALKS", description: "Industry experts sharing insights on emerging technologies.", date: "2026-04-25", time: "16:00", coverImage: hero3, registerUrl: "#" },
];

const HeroSection = () => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [activeEventIndex, setActiveEventIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const nextImage = useCallback(() => {
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveImageIndex((prev) => (prev + 1) % heroImages.length);
      setIsTransitioning(false);
    }, 400);
  }, []);

  useEffect(() => {
    const interval = setInterval(nextImage, 4000);
    return () => clearInterval(interval);
  }, [nextImage]);

  useEffect(() => {
    const interval = setInterval(() => setActiveEventIndex((prev) => (prev + 1) % events.length), 5000);
    return () => clearInterval(interval);
  }, []);

  const activeEvent = events[activeEventIndex];

  return (
    <section className="relative min-h-screen px-4 pt-20 pb-8 sm:px-6 sm:pt-24 sm:pb-12 md:px-10 md:pt-28 lg:px-16 overflow-hidden">
      {/* Background — deep mesh gradient */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 opacity-90" style={{
        background: `
          radial-gradient(ellipse 80% 60% at 10% 0%, hsl(var(--accent-cyan) / 0.12) 0%, transparent 60%),
          radial-gradient(ellipse 70% 50% at 90% 10%, hsl(var(--accent-purple) / 0.15) 0%, transparent 55%),
          radial-gradient(ellipse 50% 70% at 50% 100%, hsl(var(--primary) / 0.08) 0%, transparent 50%),
          radial-gradient(ellipse 60% 40% at 80% 80%, hsl(var(--accent-red) / 0.06) 0%, transparent 50%)
        `
      }} />

      {/* Floating aurora ribbons */}
      <div className="absolute top-0 left-0 w-full h-[60%] overflow-hidden pointer-events-none">
        <div className="absolute -top-[30%] left-[5%] w-[90%] h-[400px] sm:h-[500px] lg:h-[600px] rounded-full bg-gradient-to-r from-primary/10 via-accent-cyan/8 to-accent-purple/10 blur-[80px] sm:blur-[120px] animate-[float_25s_ease-in-out_infinite]" />
        <div className="absolute top-[10%] -right-[10%] w-[60%] h-[300px] sm:h-[400px] rounded-full bg-gradient-to-l from-accent-purple/8 via-primary/6 to-transparent blur-[100px] animate-[float_18s_ease-in-out_infinite_reverse]" />
      </div>

      {/* Subtle grid overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{
        backgroundImage: `
          linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
          linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px',
      }} />

      {/* Corner glow accents */}
      <div className="absolute top-0 right-0 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] bg-gradient-to-bl from-accent-cyan/8 to-transparent rounded-full blur-[60px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[250px] h-[250px] sm:w-[400px] sm:h-[400px] bg-gradient-to-tr from-primary/6 to-transparent rounded-full blur-[80px] pointer-events-none" />

      {/* Logo - top left */}
      <div className="absolute top-5 left-4 sm:left-6 md:left-10 lg:left-16 z-20 flex items-center gap-2.5">
        <img src={picselLogo} alt="PICSEL" className="h-9 w-9 rounded-full border border-border/30 shadow-lg" />
        <div className="leading-none">
          <span className="block text-sm font-extrabold tracking-tight text-foreground font-heading">PICSEL</span>
          <span className="block text-[8px] font-medium uppercase tracking-[2px] text-muted-foreground">KDKCE</span>
        </div>
      </div>

      <div className="relative z-10">
        {/* Top: Title + Creative Image Gallery */}
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center mb-10 sm:mb-16">
          <div className="animate-[fadeIn_0.8s_ease-out]">
            <h1 className="font-heading text-3xl font-bold leading-[1.1] tracking-tight text-hero-muted sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
              Learn teamwork
              <br className="hidden sm:block" />
              essentials for
              <br />
              <span className="text-foreground block mt-1">
                effective
                <br className="hidden md:block" />
                collaboration.
              </span>
            </h1>
            <p className="mt-5 sm:mt-8 max-w-md text-sm sm:text-base leading-relaxed text-muted-foreground">
              The modern Picsel dictates its own terms. Today, to be a competitive
              specialist requires more than professional skills.
            </p>
            <div className="mt-6 sm:mt-8 flex flex-wrap gap-3 sm:gap-4">
              <Link to="/events">
                <div className="hidden md:block valorant-btn-wrapper">
                  <button className="valorant-btn flex items-center gap-2">
                    Explore Events <ArrowRight size={16} />
                  </button>
                </div>
                <button className="btn-mobile-primary md:hidden flex items-center gap-2 text-sm">
                  Explore Events <ArrowRight size={14} />
                </button>
              </Link>
              <Link to="/about">
                <button className="hidden md:block valorant-btn-outline">About Us</button>
                <button className="btn-mobile-outline md:hidden text-sm">About Us</button>
              </Link>
            </div>
          </div>

          {/* Right: Creative Stacked Image Gallery */}
          <div className="relative animate-[slideInRight_0.8s_ease-out]">
            <div className="relative h-[300px] sm:h-[400px] lg:h-[480px] w-full">
              {/* Background card stack effect */}
              {heroImages.map((img, index) => {
                const isActive = index === activeImageIndex;
                const isPrev = index === (activeImageIndex - 1 + heroImages.length) % heroImages.length;
                const isNext = index === (activeImageIndex + 1) % heroImages.length;
                
                let transform = "scale(0.85) translateY(20px)";
                let opacity = 0;
                let zIndex = 0;

                if (isActive) {
                  transform = isTransitioning ? "scale(0.95) translateY(10px)" : "scale(1) translateY(0px)";
                  opacity = isTransitioning ? 0.5 : 1;
                  zIndex = 3;
                } else if (isNext) {
                  transform = "scale(0.92) translateX(20px) translateY(10px) rotate(3deg)";
                  opacity = 0.4;
                  zIndex = 2;
                } else if (isPrev) {
                  transform = "scale(0.92) translateX(-20px) translateY(10px) rotate(-3deg)";
                  opacity = 0.3;
                  zIndex = 1;
                }

                return (
                  <div
                    key={index}
                    className="absolute inset-0 overflow-hidden rounded-2xl sm:rounded-3xl border border-border/20 cursor-pointer"
                    style={{
                      transform,
                      opacity,
                      zIndex,
                      transition: "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
                      boxShadow: isActive ? "0 25px 60px -15px rgba(0,0,0,0.5), 0 0 40px -10px hsla(350, 80%, 50%, 0.15)" : "none",
                    }}
                    onClick={() => {
                      setIsTransitioning(true);
                      setTimeout(() => {
                        setActiveImageIndex(index);
                        setIsTransitioning(false);
                      }, 300);
                    }}
                  >
                    <img
                      src={img.src}
                      alt={img.label}
                      className="h-full w-full object-cover"
                      loading={index === 0 ? "eager" : "lazy"}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                    
                    {/* Label overlay on active */}
                    {isActive && !isTransitioning && (
                      <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 animate-[fadeIn_0.5s_ease-out]">
                        <span className="inline-block rounded-full bg-primary/20 backdrop-blur-md border border-primary/30 px-3 py-1 text-[10px] sm:text-xs font-bold uppercase tracking-wider text-primary">
                          {img.label}
                        </span>
                      </div>
                    )}
                  </div>
                );
              })}

              {/* Decorative frame accent */}
              <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 w-24 h-24 sm:w-32 sm:h-32 border-t-2 border-r-2 border-primary/30 rounded-tr-3xl pointer-events-none z-10" />
              <div className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 w-24 h-24 sm:w-32 sm:h-32 border-b-2 border-l-2 border-accent-cyan/30 rounded-bl-3xl pointer-events-none z-10" />
            </div>

            {/* Image selector pills */}
            <div className="mt-4 sm:mt-6 flex justify-center gap-2 sm:gap-3">
              {heroImages.map((img, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setIsTransitioning(true);
                    setTimeout(() => {
                      setActiveImageIndex(index);
                      setIsTransitioning(false);
                    }, 300);
                  }}
                  className={`relative overflow-hidden rounded-lg sm:rounded-xl border-2 transition-all duration-300 ${
                    index === activeImageIndex
                      ? "border-primary w-16 sm:w-20 h-10 sm:h-12 shadow-glow"
                      : "border-border/30 w-10 sm:w-12 h-10 sm:h-12 opacity-40 hover:opacity-70"
                  }`}
                >
                  <img src={img.src} alt={img.label} className="h-full w-full object-cover" loading="lazy" />
                  {index === activeImageIndex && (
                    <div className="absolute bottom-0 left-0 h-0.5 bg-primary animate-[progressFill_4s_linear]" style={{ width: "100%" }} />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Event Carousel */}
        <div className="mt-6 sm:mt-8">
          <div className="flex items-center justify-between mb-4 sm:mb-6">
            <h2 className="text-xs sm:text-sm font-semibold uppercase tracking-[2px] sm:tracking-[3px] text-accent-yellow font-heading">
              Upcoming Events
            </h2>
            <Link to="/events" className="group flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-foreground">
              <span className="hidden md:inline text-muted-foreground group-hover:text-foreground transition-colors">View All</span>
              <span className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full border border-border bg-secondary transition-all group-hover:bg-primary group-hover:border-primary">
                <ArrowRight size={14} />
              </span>
            </Link>
          </div>

          <div
            className="relative h-48 sm:h-56 md:h-64 lg:h-72 overflow-hidden rounded-xl sm:rounded-2xl shadow-card border border-border/20"
            style={{ backgroundImage: `url(${activeEvent.coverImage})`, backgroundSize: "cover", backgroundPosition: "center" }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/20" />

            <div className="absolute inset-0 flex items-end p-4 sm:p-6 md:p-8">
              <div className="flex w-full flex-col gap-3 sm:gap-4 md:flex-row md:items-end md:justify-between">
                <div className="flex flex-col gap-2 sm:gap-3">
                  <h3 className="text-xl sm:text-2xl font-extrabold uppercase tracking-tight text-foreground md:text-3xl font-heading">
                    {activeEvent.title}
                  </h3>
                  <p className="max-w-sm text-xs sm:text-sm text-secondary-foreground line-clamp-2">{activeEvent.description}</p>
                  {activeEvent.registerUrl && (
                    <a href={activeEvent.registerUrl} className="inline-block w-fit">
                      <button className="hidden md:block valorant-btn text-xs py-2 px-5">Register Now</button>
                      <button className="btn-mobile-primary md:hidden text-xs py-1.5 px-4">Register Now</button>
                    </a>
                  )}
                </div>

                <div className="flex flex-row md:flex-col items-start md:items-end gap-2 md:gap-0 md:text-right">
                  <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-accent-yellow">Upcoming</span>
                  <span className="flex items-center gap-1 text-sm sm:text-base font-bold text-foreground md:mt-1">
                    <Calendar size={12} /> {activeEvent.date}
                  </span>
                  <span className="flex items-center gap-1 text-xs sm:text-sm text-foreground">
                    <Clock size={12} /> {activeEvent.time}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Thumbnails */}
          <div className="mt-3 sm:mt-4 flex gap-2 sm:gap-3">
            {events.map((ev, index) => (
              <button
                key={ev.id}
                onClick={() => setActiveEventIndex(index)}
                className={`relative h-12 w-16 sm:h-16 sm:w-20 flex-shrink-0 overflow-hidden rounded-lg sm:rounded-xl border transition-all ${
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
