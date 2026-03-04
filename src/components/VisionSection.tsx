import vision1 from "@/assets/vision1.jpg";
import vision2 from "@/assets/vision2.jpg";
import vision3 from "@/assets/vision3.jpg";

const images = [vision1, vision2, vision3];

const visionData = [
  {
    id: 1,
    number: "01",
    title: "Face Challenges",
    description:
      "The PICSEL committee envisions empowering engineering students to confidently navigate the challenges encountered throughout their academic journey.",
  },
  {
    id: 2,
    number: "02",
    title: "Culture of Innovation",
    description:
      "The PICSEL committee aims to foster a culture of innovation among students by providing opportunities for research, idea exploration, and peer collaboration.",
  },
  {
    id: 3,
    number: "03",
    title: "Diversity",
    description:
      "The PICSEL committee is dedicated to promoting inclusivity within the student community. Our vision is to cultivate an environment where students from all backgrounds thrive.",
  },
];

const VisionSection = () => {
  return (
    <section className="bg-background px-6 pt-12 pb-0 md:px-10 lg:px-16">
      {/* Header */}
      <div className="flex min-h-[50vh] flex-col items-center justify-center text-center md:min-h-[60vh]">
        <span className="mb-8 rounded-full border border-border px-5 py-2 text-xs uppercase tracking-[3px] text-muted-foreground">
          The Future
        </span>
        <h2 className="font-serif text-5xl font-normal md:text-7xl lg:text-8xl text-foreground">
          OUR VISION
        </h2>
        <p className="mt-4 italic text-muted-foreground">
          Building the future, one pixel at a time.
        </p>
      </div>

      {/* Sticky Cards */}
      <div className="relative mx-auto max-w-[1300px]">
        {visionData.map((item, index) => (
          <div
            key={item.id}
            className="sticky mb-[6vh] overflow-hidden rounded-card border border-border bg-card shadow-card"
            style={{
              top: `calc(15vh + ${index * 32}px)`,
              height: "70vh",
            }}
          >
            <div className="grid h-full md:grid-cols-[45%_55%] grid-cols-1">
              {/* Text */}
              <div className="border-b border-border p-8 md:border-b-0 md:border-r md:p-12 lg:p-16">
                <span className="font-serif text-5xl lg:text-6xl text-primary">
                  {item.number}
                </span>
                <h3 className="mt-4 font-serif text-3xl lg:text-4xl text-foreground">
                  {item.title}
                </h3>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>

              {/* Image */}
              <div className="p-4 md:p-6">
                <div className="h-full w-full overflow-hidden rounded-[28px] md:rounded-[45px]">
                  <img
                    src={images[index]}
                    alt={item.title}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Spacer for sticky */}
        <div className="h-[40vh] md:h-[60vh]" />
      </div>
    </section>
  );
};

export default VisionSection;
