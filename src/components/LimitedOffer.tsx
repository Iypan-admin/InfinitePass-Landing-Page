import { Button } from "@/components/ui/button";
import { CountdownTimer } from "./CountdownTimer";
import { Zap, Tag } from "lucide-react";

export const LimitedOffer = () => {
  const scrollToPurchase = () => {
    document.getElementById('purchase')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="purchase" className="py-8 gradient-hero relative overflow-hidden">
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
              <span className="font-bold text-lg">10th yr Anniversary offer</span>
            </div>

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold">
              Membership Price: <span className="text-yellow-300">₹499 Only!</span>
            </h2>

            <div className="flex items-center justify-center gap-4">
              <span className="text-3xl line-through opacity-70">₹999</span>
              <div className="bg-yellow-300 text-primary px-6 py-2 rounded-full">
                <span className="flex items-center gap-2 font-bold text-lg">
                  <Tag className="w-5 h-5" />
                  50% OFF
                </span>
              </div>
            </div>
          </div>

          {/* Countdown Box */}
          <div className="bg-white backdrop-blur-md rounded-2xl p-6 border border-gray-200 max-w-sm mx-auto mt-6 shadow-lg hover:shadow-xl transition-all duration-300">
            <p className="text-sm font-semibold mb-4 flex items-center justify-center gap-2 text-gray-900">
              ⏰ <span>Offer ends in:</span>
            </p>

            <CountdownTimer />

            <p className="text-xs text-gray-700 mt-4 text-center leading-snug">
              Join now to unlock bonuses worth <span className="font-bold text-gray-900">₹59,700+</span>
            </p>
          </div>


          <Button
            size="xl"
            variant="cta"
            onClick={() => (window.location.href = "https://pages.razorpay.com/membershipinfinity")}
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
