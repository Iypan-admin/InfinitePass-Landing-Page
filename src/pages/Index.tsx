import { HeroSection } from "@/components/HeroSection";
import { WhyInfinityPass } from "@/components/WhyInfinityPass";
import DemandForeign from "@/components/demandforeign";
import { ValueProposition } from "@/components/ValueProposition";
import { TargetAudience } from "@/components/TargetAudience";
import { LimitedOffer } from "@/components/LimitedOffer";
import { Testimonials } from "@/components/Testimonials";
import { Footer } from "@/components/Footer";
import { PurchaseModal } from "@/components/PurchaseModal";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <WhyInfinityPass />
      <DemandForeign /> {/* ✅ Fixed component name */}
      <ValueProposition />
      <TargetAudience />
      <LimitedOffer />
      <Testimonials />
      <Footer />
      <PurchaseModal />
    </main>
  );
};

export default Index;
