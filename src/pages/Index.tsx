import { HeroSection } from "@/components/HeroSection";
import { IdentityPortal } from "@/components/IdentityPortal";
import { TeamPortal } from "@/components/TeamPortal";
import { ContactPortal } from "@/components/ContactPortal";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-void-black">
      <HeroSection />
      <IdentityPortal />
      <TeamPortal />
      <ContactPortal />
      <Footer />
    </div>
  );
};

export default Index;
