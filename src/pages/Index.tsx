import HeroSection from "@/components/HeroSection";
import VisionSection from "@/components/VisionSection";
import TeamHighlights from "@/components/TeamHighlights";
import SponsorsSection from "@/components/SponsorsSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground pb-mobile-nav">
      <HeroSection />
      <VisionSection />
      <TeamHighlights />
      <SponsorsSection />
    </div>
  );
};

export default Index;
