import { Button } from "@/components/ui/button";
import { Check, Sparkles } from "lucide-react";

const benefits = [
  "Access to all courses (Regular, FastTrack & Immersion)",
  "Discounts up to 15% on all enrollments",
  "Free workshops, events, library access",
  "Internship & placement opportunities",
  "Exclusive Abroad Study Assistance",
  "Valid for 3 years",
];

export const WhyInfinityPass = () => {
  const scrollToPurchase = () => {
    document.getElementById('purchase')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="why" className="py-5 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-secondary px-4 py-2 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Why Choose Us</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Why settle for one language when you can{" "}
            <span className="text-primary">master them all?</span>
          </h2>

          <p className="text-lg text-muted-foreground mb-8">
            Get unlimited access for 3 years to all ISML language courses and exclusive benefits that accelerate your multilingual journey.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-card rounded-2xl shadow-card p-8 sm:p-12 border border-border animate-slide-up">
            <div className="grid sm:grid-cols-2 gap-3 mb-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="text-center pt-6 border-t border-border">
              <Button
                size="lg"
                variant="cta"
                onClick={() => (window.location.href = "https://pages.razorpay.com/infinitypass")}
                className="w-full sm:w-auto px-6 py-3 whitespace-nowrap"
              >
                🔥  InfinityPass Now — ₹499 Only
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
