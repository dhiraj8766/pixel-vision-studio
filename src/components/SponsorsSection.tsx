const sponsors = [
  { name: "Google", logo: "" },
  { name: "Microsoft", logo: "" },
  { name: "GitHub", logo: "" },
  { name: "Notion", logo: "" },
  { name: "Vercel", logo: "" },
  { name: "Your Logo Here", logo: "", placeholder: true },
];

const SponsorsSection = () => {
  return (
    <section className="bg-background px-6 py-20 md:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[3px] text-primary">
            Ecosystem
          </span>
          <h2 className="font-serif text-4xl font-normal italic text-foreground md:text-5xl lg:text-6xl">
            Our Sponsors & Partners
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
            Empowering our vision through their generous support and collaboration.
          </p>
        </div>

        {/* Sponsor Grid */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6">
          {sponsors.map((sponsor, index) => (
            <div
              key={index}
              className={`group flex aspect-[4/3] items-center justify-center rounded-2xl border transition-all duration-300 ${
                sponsor.placeholder
                  ? "border-dashed border-border/50 hover:border-primary/30"
                  : "border-border bg-card/50 hover:border-primary/30 hover:shadow-glow"
              }`}
            >
              {sponsor.logo ? (
                <img
                  src={sponsor.logo}
                  alt={sponsor.name}
                  className="h-8 w-auto opacity-40 grayscale transition-all group-hover:opacity-80 group-hover:grayscale-0"
                />
              ) : (
                <span
                  className={`text-center text-sm font-medium ${
                    sponsor.placeholder ? "text-muted-foreground/40" : "text-muted-foreground/60 group-hover:text-foreground"
                  }`}
                >
                  {sponsor.name}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SponsorsSection;
