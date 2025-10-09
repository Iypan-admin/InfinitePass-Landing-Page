import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const demandImages = Array.from({ length: 13 }, (_, i) => `/assets/lang${i + 1}.jpg`);

export const DemandForeign = () => {
  const [centerIndex, setCenterIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setCenterIndex((prev) => (prev + 1) % demandImages.length);
      setTimeout(() => setIsTransitioning(false), 2500);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const getTranslateX = (index) => {
    const diff = (index - centerIndex + demandImages.length) % demandImages.length;
    if (diff === 0) return "translate-x-0 scale-105 opacity-100 z-20";
    if (diff === 1) return "translate-x-[220px] scale-90 opacity-70 z-10";
    if (diff === demandImages.length - 1) return "-translate-x-[220px] scale-90 opacity-70 z-10";
    return "opacity-0 scale-75 z-0";
  };

  return (
    <section className="py-8 sm:py-16 bg-background overflow-hidden">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
          Rise in Demand for Foreign Language Jobs
        </h2>

        {/* Carousel */}
        <div className="relative flex items-center justify-center overflow-hidden h-[20rem] sm:h-[24rem] md:h-[28rem] lg:h-[32rem]">
          <div className="relative w-full flex items-center justify-center">
            {demandImages.map((src, i) => (
              <div
                key={i}
                className={`absolute transform ${getTranslateX(i)} ${
                  isTransitioning ? "transition-all duration-[2500ms] ease-in-out" : "transition-none"
                }`}
              >
                <img
                  src={src}
                  alt={`language-${i}`}
                  className="w-[250px] h-[200px] sm:w-[280px] sm:h-[220px] md:w-[320px] md:h-[260px] lg:w-[360px] lg:h-[300px] rounded-2xl object-cover border border-gray-200 shadow-lg hover:scale-110 hover:shadow-xl transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Dot Indicators */}
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
            className="animate-bounce-soft px-6 py-4 text-lg font-semibold shadow-lg"
          >
            🎉 Get Membership for ₹499
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DemandForeign;
