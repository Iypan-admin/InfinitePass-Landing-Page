// src/pages/DemandForeign.jsx
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { BookOpen, Globe, Trophy, Laptop, Sparkles, Gift } from "lucide-react";

import lang1 from "@/assets/lang1.jpg";
import lang2 from "@/assets/lang2.jpg";
import lang3 from "@/assets/lang3.jpg";
import lang4 from "@/assets/lang4.jpg";
import lang5 from "@/assets/lang5.jpg";
import lang6 from "@/assets/lang6.jpg";
import lang7 from "@/assets/lang7.jpg";
import lang8 from "@/assets/lang8.jpg";
import lang9 from "@/assets/lang9.jpg";
import lang10 from "@/assets/lang10.jpg";
import lang11 from "@/assets/lang11.jpg";
import lang12 from "@/assets/lang12.jpg";

const demandImages = [
  lang1, lang2, lang3, lang4, lang5,
  lang6, lang7, lang8, lang9, lang10,
  lang11,lang12,
];

export const DemandForeign = () => {
  const [centerIndex, setCenterIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Auto-scroll carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setCenterIndex(prev => (prev + 1) % demandImages.length);
      setTimeout(() => setIsTransitioning(false), 2500);
    }, 5000); // scroll every 5s
    return () => clearInterval(interval);
  }, []);

  // Calculate position classes
  const getTranslateX = (index) => {
    const diff = (index - centerIndex + demandImages.length) % demandImages.length;
    if (diff === 0) return "translate-x-0 scale-105 blur-0 z-20 opacity-100";
    if (diff === 1 || diff === -(demandImages.length - 1)) return "translate-x-[180px] scale-90 blur-sm opacity-70 z-10";
    if (diff === demandImages.length - 1 || diff === -1) return "-translate-x-[180px] scale-90 blur-sm opacity-70 z-10";
    return "opacity-0 scale-75 z-0";
  };

  return (
    <section className="py-8 sm:py-5 bg-background overflow-hidden">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-1">
          Rise in Demand for Foreign Languages Jobs
        </h2>
        
        {/* Carousel */}
        <div className="relative flex items-center justify-center overflow-hidden h-[28rem] sm:h-80 md:h-96 lg:h-[32rem]">
          <div className="relative w-full flex items-center justify-center">
            {demandImages.map((src, i) => (
              <div
                key={i}
                className={`absolute transform ${getTranslateX(i)} ${isTransitioning
                  ? "transition-all duration-[2500ms] ease-in-out"
                  : "transition-none"
                  }`}
              >
                <img
                  src={src}
                  alt={`language-${i}`}
                  className="
                    w-50 h-45 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64
                    rounded-2xl object-cover border border-gray-200 shadow-lg
                  "
                />
              </div>
            ))}
          </div>
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center mt-6 sm:mt-8 space-x-3">
          {demandImages.map((_, idx) => (
            <div
              key={idx}
              className={`w-3 h-3 rounded-full transition-all duration-500 ${
                idx === centerIndex ? "bg-primary scale-125 shadow-md" : "bg-gray-400/40"
              }`}
            ></div>
          ))}
        </div>
        {/* CTA Button */}
                <div className="text-center mt-10 animate-slide-up">
                  <Button
                    size="xl"
                    variant="cta"
                    onClick={() => (window.location.href = "https://pages.razorpay.com/infinitypass")}
                    className="animate-bounce-soft"
                  >
                    🎉 Get Membership for ₹499
                  </Button>
                </div>
      </div>
    </section>
  );
};

export default DemandForeign;
