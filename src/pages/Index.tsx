import HeroSection from "@/components/HeroSection";
import AchievementCard from "@/components/AchievementCard";
import StatsSection from "@/components/StatsSection";
import CelebrationFooter from "@/components/CelebrationFooter";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AchievementCard />
      <StatsSection />
      <CelebrationFooter />
    </div>
  );
};

export default Index;
