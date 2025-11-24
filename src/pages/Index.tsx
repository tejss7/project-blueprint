import { HeroSection } from "@/components/HeroSection";
import { IdentitySection } from "@/components/IdentitySection";
import { WorkSection } from "@/components/WorkSection";
import { TeamSection } from "@/components/TeamSection";
import { ServicescapesSection } from "@/components/ServicescapesSection";
import { AkarsaOneSection } from "@/components/AkarsaOneSection";
import { CulturalStrategySection } from "@/components/CulturalStrategySection";
import { ActOfGivingSection } from "@/components/ActOfGivingSection";
import { ReviewsSection } from "@/components/ReviewsSection";
import { BlogsSection } from "@/components/BlogsSection";
import { CareersSection } from "@/components/CareersSection";
import { AddressesSection } from "@/components/AddressesSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-void-black">
      <HeroSection />
      <IdentitySection />
      <WorkSection />
      <TeamSection />
      <ServicescapesSection />
      <AkarsaOneSection />
      <CulturalStrategySection />
      <ActOfGivingSection />
      <ReviewsSection />
      <BlogsSection />
      <CareersSection />
      <AddressesSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
