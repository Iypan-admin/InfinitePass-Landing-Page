import { Button } from "@/components/ui/button";
import { CountdownTimer } from "./CountdownTimer";
import { Zap, Tag } from "lucide-react";

export const LimitedOffer = () => {
  const scrollToPurchase = () => {
    document.getElementById('purchase')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="purchase" className="py-20 gradient-hero relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-white/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <div className="animate-fade-in space-y-6 mb-12">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20 animate-pulse-glow">
              <Zap className="w-5 h-5 text-yellow-300" />
              <span className="font-bold text-lg">10th year Anniversary offer</span>
            </div>

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold">
              Special Price: <span className="text-yellow-300">₹499 Only!</span>
            </h2>

            <div className="flex items-center justify-center gap-4">
              <span className="text-3xl line-through opacity-70">₹999</span>
              <div className="bg-yellow-300 text-primary px-6 py-2 rounded-full">
                <span className="flex items-center gap-2 font-bold text-lg">
                  <Tag className="w-5 h-5" />
                  60% OFF
                </span>
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 sm:p-12 border border-white/20 mb-8 animate-slide-up">
            <p className="text-xl font-medium mb-6">⏰ Hurry! Offer Expires In:</p>
            <CountdownTimer />
            <p className="text-white/80 mt-6 text-lg">
              This exclusive festive pricing ends at midnight. Don't miss out!
            </p>
          </div>


          <Button
            size="xl"
            variant="cta"
            onClick={() => (window.location.href = "https://pages.razorpay.com/infinitypass")}
            className="animate-bounce-soft"
          >
            🎟 Buy Now & Start Learning
          </Button>


          <p className="mt-6 text-white/70 text-sm">
            Secure payment • Instant access • 100% satisfaction guaranteed
          </p>
        </div>
      </div>
    </section>
  );
};
