import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import AppsSection from "@/components/AppsSection";
import OpenSourceSection from "@/components/OpenSourceSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CommunityCTA from "@/components/CommunityCTA";
import NewsSection from "@/components/NewsSection";
import Footer from "@/components/Footer";

import PricingSection from "@/components/PricingSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <AppsSection />
      <OpenSourceSection />
      <PricingSection />
      <TestimonialsSection />
      <CommunityCTA />
      <Footer />
    </div>
  );
};

export default Index;
