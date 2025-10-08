import { Button } from "@/components/ui/button";
import { CountdownTimer } from "./CountdownTimer";
import heroImage from "@/assets/hero-learning.jpg";
import { Sparkles, Globe, BookOpen, Clock, Presentation, Zap } from "lucide-react";
import { Facebook, Instagram, Youtube, Linkedin } from "lucide-react";
import logo from "@/assets/IsmlLogo.png";
export const HeroSection = () => {
  const scrollToPurchase = () => {
    document.getElementById("purchase")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-hero">
      {/* ✅ Fixed Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto flex items-center justify-between px-6 py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img
              src={logo} // 🔁 replace with your logo path
              alt="ISML Logo"
              className="w-10 h-10 rounded-full border border-white/20"
            />
            <span className="text-white font-semibold text-lg">Indian School for Modern Languages</span>
          </div>

          {/* Social Icons */}
          <div className="flex items-center space-x-4 text-white/80">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <Facebook className="w-5 h-5 hover:text-white transition" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <Instagram className="w-5 h-5 hover:text-white transition" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <Youtube className="w-5 h-5 hover:text-white transition" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-5 h-5 hover:text-white transition" />
            </a>
          </div>
        </div>
      </nav>

      {/* Floating decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 animate-float opacity-20">
          <Globe className="w-16 h-16 text-white" />
        </div>
        <div
          className="absolute bottom-40 right-20 animate-float opacity-20"
          style={{ animationDelay: "2s" }}
        >
          <BookOpen className="w-20 h-20 text-white" />
        </div>
        <div
          className="absolute top-1/3 right-10 animate-float opacity-20"
          style={{ animationDelay: "4s" }}
        >
          <Sparkles className="w-12 h-12 text-white" />
        </div>
      </div>

      {/* Hero Content */}
      <div className="container mx-auto px-4 py-32 sm:py-40 relative z-10">
        <div className="flex flex-col items-center text-center space-y-8">
          <div className="max-w-4xl space-y-6 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
              <Sparkles className="w-4 h-4 text-white" />
              <span className="text-sm font-medium text-white">
                10th year Anniversary offer
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-white">
              🎓 Unlock Unlimited Language Learning with the{" "}
              <span className="text-yellow-300">ISML InfinityPass</span>
            </h1>

            <p className="text-xl sm:text-2xl text-white/90 font-medium">
              One Pass. Lifetime Access. All Languages.
            </p>

            <p className="text-lg text-white/80">
              Become multilingual — smarter, faster, and unstoppable with French 🇫🇷, German 🇩🇪, and Japanese 🇯🇵
            </p>

            {/* Bullet Points */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4 animate-fade-in-slow">
              <div className="flex items-center gap-2 text-white/90">
                <Clock className="w-5 h-5 text-yellow-300" />
                <span className="text-sm sm:text-base">
                  Save 2 hours daily using AI
                </span>
              </div>
              <div className="flex items-center gap-2 text-white/90">
                <Presentation className="w-5 h-5 text-yellow-300" />
                <span className="text-sm sm:text-base">
                  Generate presentations in seconds
                </span>
              </div>
              <div className="flex items-center gap-2 text-white/90">
                <Zap className="w-5 h-5 text-yellow-300" />
                <span className="text-sm sm:text-base">
                  AI for Excel, LinkedIn & coding
                </span>
              </div>
            </div>

            {/* CTA Button + Timer */}
            <div className="space-y-4 pt-6">
              {/* ✅ CTA Button */}
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
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 max-w-md mx-auto">
                <p className="text-sm font-medium mb-3 flex items-center justify-center gap-2 text-white">
                  ⏰ <span>Offer ends in:</span>
                </p>
                <CountdownTimer />
                <p className="text-sm text-white/80 mt-4 text-center">
                  Join before midnight to unlock exclusive bonuses worth ₹59,700+
                </p>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="w-full max-w-2xl animate-fade-in-slow mt-8">
            <img
              src={heroImage}
              alt="Language learning with ISML InfinityPass"
              className="rounded-2xl shadow-2xl w-full animate-float"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
