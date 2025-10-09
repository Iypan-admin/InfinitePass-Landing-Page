import { HeroSection } from "@/components/HeroSection";
import { WhyInfinityPass } from "@/components/WhyInfinityPass";
import DemandForeign from "@/components/demandforeign";
import { ValueProposition } from "@/components/ValueProposition";
import { TargetAudience } from "@/components/TargetAudience";
import { LimitedOffer } from "@/components/LimitedOffer";
import { Testimonials } from "@/components/Testimonials";
import { Footer } from "@/components/Footer";
import { PurchaseModal } from "@/components/PurchaseModal";
import { FaWhatsapp } from "react-icons/fa"; // ✅ Import WhatsApp icon

const Index = () => {
  return (
    <main className="min-h-screen relative">
      <HeroSection />
      <WhyInfinityPass />
      <DemandForeign /> {/* ✅ Fixed component name */}
      <ValueProposition />
      <TargetAudience />
      <LimitedOffer />
      <Testimonials />
      <Footer />
      <PurchaseModal />

      {/* WhatsApp Button */}
      <button
        className="fixed bottom-6 right-6 z-50 p-4 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition-all"
        onClick={() => window.open('https://wa.me/917338881781', '_blank')}
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp size={24} />
      </button>
    </main>
  );
};

export default Index;
