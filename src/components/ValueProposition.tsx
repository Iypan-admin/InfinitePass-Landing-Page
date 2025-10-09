import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { BookOpen, Globe, Trophy, Laptop, Sparkles, Gift } from "lucide-react";

export const ValueProposition = () => {
  const benefits = [
    { icon: Laptop, title: "Course Fee Discounts upto 15%", description: "Learning platform & rewards" },
    { icon: BookOpen, title: "3-Year Validity", description: "Extended access to all resources" },
    { icon: Globe, title: "All Language Access", description: "French, German & Japanese" },
    { icon: Trophy, title: "Internship & Placement", description: "Career opportunities & guidance" },
    { icon: Sparkles, title: "Event & Workshop Discounts", description: "Exclusive member benefits" },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let firstRun = true; // Skip first auto-scroll to prevent page jump
    const interval = setInterval(() => {
      setActiveIndex((prev) => {
        const nextIndex = (prev + 1) % benefits.length;
        if (carouselRef.current && !firstRun) {
          const child = carouselRef.current.children[nextIndex] as HTMLElement;
          child.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
        }
        firstRun = false;
        return nextIndex;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [benefits.length]);

  return (
    <section className="py-5 px-2 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        {/* Title */}
        <div className="text-center space-y-4 mb-12 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
            What You'll Get 🎁
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to master multiple languages and accelerate your career
          </p>
        </div>

        {/* Desktop / Tablet Grid */}
        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="group bg-card rounded-xl p-6 shadow-card border border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-glow"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg text-card-foreground mb-1">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile Carousel */}
        {/* Mobile Carousel - Right to Left */}
        <div className="sm:hidden relative overflow-x-auto flex flex-row-reverse snap-x snap-mandatory scrollbar-hide space-x-4 space-x-reverse pb-4 scroll-smooth">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="flex-shrink-0 w-72 snap-center bg-card rounded-xl p-6 shadow-card border border-border transition-transform duration-300 hover:scale-105"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg text-card-foreground mb-1">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>



        {/* Total Value Highlight Card */}
        <div className="group bg-gradient-to-br from-primary to-accent rounded-xl p-6 shadow-glow border-2 border-primary hover:scale-105 transition-all duration-300 mt-10 mx-auto max-w-3xl">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div className="flex items-center gap-4">
              <div className="p-4 bg-white/20 rounded-lg backdrop-blur-sm">
                <Gift className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-2xl text-white mb-1">Benefits Value</h3>
                <p className="text-white/80">Everything included in your InfinityPass</p>
              </div>
            </div>
            <div className="text-center">
              <p className="text-white/80 text-sm line-through mb-1">₹59,700+</p>
              <p className="text-4xl sm:text-5xl font-bold text-yellow-300">₹499</p>
              <p className="text-white/90 text-sm mt-1">Limited Time Only</p>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-10 animate-slide-up">
          <Button
            size="xl"
            variant="cta"
            onClick={() => (window.location.href = "https://pages.razorpay.com/infinitypass")}
            className="animate-bounce-soft"
          >
            🎉 Get InfinityPass for ₹499
          </Button>
        </div>
      </div>
    </section >
  );
};
