import { useEffect, useState } from "react";
import { Users, Mail, Lock, RefreshCw } from "lucide-react";
import img1 from "@/assets/img1.jpg";
import img2 from "@/assets/img2.jpg";
import img3 from "@/assets/img3.jpg";
import img4 from "@/assets/img4.jpg";
import img5 from "@/assets/img5.jpg";
import img6 from "@/assets/img6.jpg";
import img7 from "@/assets/img7.jpg";

export const Testimonials = () => {
  const images = [img1, img2, img3, img4, img5, img6, img7];
  const [currentIndex, setCurrentIndex] = useState(0);

  // Animated stats
  const targetStats = { students: 20000, centers: 11, success: 95 };
  const [stats, setStats] = useState({ students: 0, centers: 0, success: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  useEffect(() => {
    const duration = 2000; // 2 seconds animation
    const stepTime = 20; // update every 20ms
    const steps = duration / stepTime;

    let currentStep = 0;
    const counterInterval = setInterval(() => {
      currentStep++;
      setStats({
        students: Math.min(Math.floor((targetStats.students * currentStep) / steps), targetStats.students),
        centers: Math.min(Math.floor((targetStats.centers * currentStep) / steps), targetStats.centers),
        success: Math.min(Math.floor((targetStats.success * currentStep) / steps), targetStats.success),
      });
      if (currentStep >= steps) clearInterval(counterInterval);
    }, stepTime);

    return () => clearInterval(counterInterval);
  }, []);

  const terms = [
    {
      icon: Users,
      title: "Eligibility",
      description: "Open to Indian residents aged 7+. Parental consent required for minors.",
      bg: "bg-primary/10",
    },
    {
      icon: Mail,
      title: "Digital Delivery",
      description: "Cards delivered digitally within 2 working days to registered email.",
      bg: "bg-secondary/10",
    },
    {
      icon: Lock,
      title: "Usage Policy",
      description: "Non-transferable cards must be used only by registered learner.",
      bg: "bg-accent/10",
    },
    {
      icon: RefreshCw,
      title: "Refund Policy",
      description: "Non-refundable except for technical errors or duplicate payments.",
      bg: "bg-destructive/10",
    },
  ];

  return (
    <section>
      {/* Testimonials Section */}
      <section className="py-12 sm:py-20 bg-secondary/30 overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8">
            Our Happy Learners
          </h2>

          {/* Animated Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mb-12">
            <div className="flex flex-col items-center">
              <p className="text-3xl sm:text-4xl font-bold text-primary">{stats.students.toLocaleString()}</p>
              <p className="text-base sm:text-lg font-medium text-muted-foreground">Students Trained</p>
            </div>
            <div className="flex flex-col items-center">
              <p className="text-3xl sm:text-4xl font-bold text-primary">{stats.centers}</p>
              <p className="text-base sm:text-lg font-medium text-muted-foreground">Centers</p>
            </div>
            <div className="flex flex-col items-center">
              <p className="text-3xl sm:text-4xl font-bold text-primary">{stats.success}%</p>
              <p className="text-base sm:text-lg font-medium text-muted-foreground">Success Rate</p>
            </div>
          </div>

          {/* Carousel */}
          <div className="relative w-full h-[400px] sm:h-[600px] mb-8">
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`testimonial-${index}`}
                className={`absolute top-0 left-0 w-full h-full object-cover rounded-xl border border-gray-200 shadow-lg
                  transition-opacity duration-700 ease-in-out ${index === currentIndex ? "opacity-100 z-20" : "opacity-0 z-0"}`}
              />
            ))}
          </div>

          {/* Dot Indicators */}
          <div className="flex justify-center mt-4 sm:mt-6 space-x-3">
            {images.map((_, i) => (
              <div
                key={i}
                className={`w-3 h-3 rounded-full transition-all duration-500 ${i === currentIndex ? "bg-primary scale-125 shadow-md" : "bg-gray-400/40"
                  }`}
              ></div>
            ))}
          </div>
        </div>
      </section>

      {/* Terms & Conditions Section */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
            Terms & Conditions
          </h2>
          <p className="text-lg text-muted-foreground mb-8 text-center">
            Important information about your membership
          </p>

          <div className="space-y-6">
            {terms.map((term, index) => {
              const Icon = term.icon;
              return (
                <div
                  key={index}
                  className={`flex items-start p-6 rounded-xl shadow-md border border-border hover:shadow-lg transition-all duration-300 ${term.bg}`}
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-white/30 flex items-center justify-center mr-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">{term.title}</h3>
                    <p className="text-muted-foreground">{term.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </section>
  );
};
