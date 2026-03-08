import HeroSection from "@/components/HeroSection";
import VisionSection from "@/components/VisionSection";
import TeamHighlights from "@/components/TeamHighlights";
import SponsorsSection from "@/components/SponsorsSection";
import AnimatedBackground from "@/components/AnimatedBackground";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background text-foreground pb-mobile-nav bg-geo-pattern">
      <AnimatedBackground />
      <HeroSection />
      <VisionSection />
      <TeamHighlights />
      <SponsorsSection />
    </div>
  );
};

export default Index;
