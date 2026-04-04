import { Target, Eye, Atom } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const visionData = [
  {
    id: 1,
    icon: Target,
    title: "MISSION",
    description: "The PICSEL committee envisions empowering engineering students to confidently navigate the challenges encountered throughout their academic journey.",
    accent: "hsl(var(--primary))",
  },
  {
    id: 2,
    icon: Eye,
    title: "VISION",
    description: "The PICSEL committee aims to foster a culture of innovation among students by providing opportunities for research, idea exploration, and peer collaboration.",
    accent: "hsl(var(--accent-cyan))",
  },
  {
    id: 3,
    icon: Atom,
    title: "VALUES",
    description: "The PICSEL committee is dedicated to promoting inclusivity within the student community. Our vision is to cultivate an environment where students from all backgrounds thrive.",
    accent: "hsl(var(--accent-yellow))",
  },
];

const VisionSection = () => {
  return (
    <section className="relative bg-background px-4 py-16 sm:px-6 sm:py-24 md:px-10 lg:px-16">
      <div className="absolute inset-0 bg-dot-pattern opacity-15 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <ScrollReveal scale>
          <div className="mb-12 sm:mb-16 text-center">
            <span className="mb-3 sm:mb-4 inline-block rounded-full border border-border px-5 py-1.5 text-[10px] sm:text-xs uppercase tracking-[3px] text-muted-foreground font-heading">
              The Future
            </span>
            <h2 className="font-heading text-3xl sm:text-5xl font-bold md:text-6xl lg:text-7xl text-foreground">
              OUR VISION
            </h2>
            <p className="mt-3 text-sm sm:text-base text-muted-foreground">
              Building the future, one pixel at a time.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {visionData.map((item, index) => {
            const Icon = item.icon;
            return (
              <ScrollReveal key={item.id} delay={index * 150} direction="up">
                <div className="group relative flex flex-col items-center text-center p-6 sm:p-8 rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-500 hover:border-primary/30 hover:shadow-[0_8px_40px_-12px_hsl(var(--primary)/0.15)] hover:-translate-y-1">
                  {/* Icon */}
                  <div className="relative mb-6 sm:mb-8">
                    <div className="relative h-20 w-20 sm:h-24 sm:w-24 flex items-center justify-center">
                      {/* Decorative circles */}
                      <div className="absolute inset-0 rounded-full border-2 border-dashed opacity-20 transition-opacity group-hover:opacity-40" style={{ borderColor: item.accent }} />
                      <div className="absolute inset-2 rounded-full border opacity-10 transition-opacity group-hover:opacity-30" style={{ borderColor: item.accent }} />
                      <Icon
                        size={36}
                        strokeWidth={1.5}
                        className="relative z-10 transition-transform duration-500 group-hover:scale-110"
                        style={{ color: item.accent }}
                      />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-heading text-lg sm:text-xl font-bold text-foreground tracking-wider mb-1">
                    {item.title}
                  </h3>

                  {/* Accent line */}
                  <div className="w-8 h-0.5 rounded-full mb-4 transition-all duration-500 group-hover:w-12" style={{ backgroundColor: item.accent }} />

                  {/* Description */}
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>

                  {/* Small icon at bottom */}
                  <div className="mt-6 opacity-20 group-hover:opacity-40 transition-opacity">
                    <Icon size={16} strokeWidth={1} style={{ color: item.accent }} />
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
