import { Button } from "@/components/ui/button";
import { GraduationCap, Users, Briefcase, Heart } from "lucide-react";

const audiences = [
  {
    icon: GraduationCap,
    title: "Students (9-25 years)",
    description: "Build your career foundation with multiple languages",
  },
  {
    icon: Users,
    title: "College Learners",
    description: "Stand out in placements and internships",
  },
  {
    icon: Briefcase,
    title: "Professionals",
    description: "Advance your career with international opportunities",
  },
  {
    icon: Heart,
    title: "Language Enthusiasts",
    description: "Turn your passion into mastery",
  },
];

export const TargetAudience = () => {
  const scrollToPurchase = () => {
    document.getElementById('purchase')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              Who Is This For?
            </h2>

            <p className="text-lg text-muted-foreground mb-8">
              Perfect for anyone serious about mastering languages and expanding their horizons
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 mb-12">
            {audiences.map((audience, index) => {
              const Icon = audience.icon;
              return (
                <div
                  key={index}
                  className="bg-card rounded-xl p-6 shadow-card border border-border hover:shadow-glow transition-all duration-300 animate-slide-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{audience.title}</h3>
                  <p className="text-muted-foreground">{audience.description}</p>
                </div>
              );
            })}
          </div>

          <div className="text-center">
            <div className="bg-card rounded-2xl shadow-card p-8 border border-border mb-8 animate-fade-in-slow">
              <p className="text-2xl font-bold mb-4">
                Join <span className="text-primary">50,000+</span> students already learning with ISML 🚀
              </p>
              <p className="text-muted-foreground mb-6">
                Be part of India's fastest-growing language learning community
              </p>

              <Button
                size="xl"
                variant="cta"
                onClick={() => (window.location.href = "https://pages.razorpay.com/infinitypass")}
                className="w-full sm:w-auto"
              >
                🎫 Get My InfinityPass
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
