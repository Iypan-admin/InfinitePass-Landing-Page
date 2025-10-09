import { Button } from "@/components/ui/button";
import { CountdownTimer } from "./CountdownTimer";
import heroImage from "@/assets/infinitefront.jpg";
import heroImageBack from "@/assets/infiniteback.jpg";
import {
  Sparkles,
  Globe,
  BookOpen,
  Clock,
  Presentation,
  Zap,
  Instagram,
  Youtube,
  Linkedin,
} from "lucide-react";
import logo from "@/assets/logo.png";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-hero">
      {/* ✅ Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto flex items-center justify-between px-4 sm:px-6 py-3">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img
              src={logo}
              alt="ISML Logo"
              className="w-9 h-9 rounded-full border border-white/20"
            />
            <span className="text-white font-semibold text-sm sm:text-base">
              Indian School for Modern Languages
            </span>
          </div>

          {/* Social Icons */}
          <div className="flex items-center space-x-3">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <div className="w-7 h-7 flex items-center justify-center rounded-full bg-pink-100 hover:bg-pink-200 transition">
                <Instagram className="w-4 h-4 text-pink-500" />
              </div>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <div className="w-7 h-7 flex items-center justify-center rounded-full bg-red-100 hover:bg-red-200 transition">
                <Youtube className="w-4 h-4 text-red-600" />
              </div>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <div className="w-7 h-7 flex items-center justify-center rounded-full bg-blue-100 hover:bg-blue-200 transition">
                <Linkedin className="w-4 h-4 text-blue-700" />
              </div>
            </a>
          </div>
        </div>
      </nav>

      {/* ✨ Floating Icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-16 left-10 animate-float opacity-20">
          <Globe className="w-12 h-12 text-white" />
        </div>
        <div className="absolute bottom-32 right-20 animate-float opacity-20" style={{ animationDelay: "2s" }}>
          <BookOpen className="w-14 h-14 text-white" />
        </div>
        <div className="absolute top-1/3 right-8 animate-float opacity-20" style={{ animationDelay: "4s" }}>
          <Sparkles className="w-10 h-10 text-white" />
        </div>
      </div>

      {/* 🏆 Hero Content */}
      <div className="container mx-auto px-4 py-24 sm:py-28 relative z-10">
        <div className="flex flex-col items-center text-center space-y-6">
          <div className="max-w-4xl space-y-5 animate-fade-in">
            {/* 🎉 Offer Tag */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/20">
              <Sparkles className="w-4 h-4 text-white" />
              <span className="text-xs sm:text-sm font-medium text-white">
                10th yr Anniversary Offer
              </span>
            </div>

            {/* 🏷️ Headings */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-snug text-white">
              🎓 Unlock Unlimited Language Learning with{" "}
              <span className="text-yellow-300">ISML Elite Membership</span>
            </h1>

            <p className="text-lg sm:text-xl text-white/90 font-medium">
              One Membership Pass. Infinity Access.
            </p>

            <p className="text-base text-white/80 max-w-2xl mx-auto">
              Become multilingual — smarter, faster, and unstoppable with
              French, German, Japanese, and more!
            </p>

            {/* 🌟 Bullet Points */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center pt-2">
              <div className="flex items-center gap-2 text-white/90">
                <Clock className="w-5 h-5 text-yellow-300" />
                <span className="text-sm">Opens real-world opportunities</span>
              </div>
              <div className="flex items-center gap-2 text-white/90">
                <Presentation className="w-5 h-5 text-yellow-300" />
                <span className="text-sm">Customized Learning</span>
              </div>
              <div className="flex items-center gap-2 text-white/90">
                <Zap className="w-5 h-5 text-yellow-300" />
                <span className="text-sm">Save huge on course fees</span>
              </div>
            </div>

            {/* 🎯 CTA + Timer */}
            <div className="space-y-3 pt-3">
              <div className="text-center">
                <Button
                  size="lg"
                  variant="cta"
                  onClick={() =>
                    (window.location.href = "https://pages.razorpay.com/infinitypass")
                  }
                  className="px-6 py-3 text-base sm:text-lg font-semibold"
                >
                  🎉 Get Membership for ₹499
                </Button>
              </div>

              {/* Countdown Box */}
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 max-w-sm mx-auto mt-2">
                <p className="text-sm font-medium mb-2 flex items-center justify-center gap-2 text-white">
                  ⏰ <span>Offer ends in:</span>
                </p>
                <CountdownTimer />
                <p className="text-xs text-white/80 mt-3 text-center">
                  Join before midnight to unlock bonuses worth ₹59,700+
                </p>
              </div>
            </div>
          </div>

          {/* 🖼️ Flippable Image */}
          <div className="w-full max-w-[700px] mt-6 [perspective:1000px] mx-auto group">
            <div className="relative w-full aspect-[3/2] transition-transform duration-[2000ms] ease-in-out [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
              <div className="absolute inset-0 [backface-visibility:hidden]">
                <img src={heroImage} alt="Front Side" className="w-full h-full rounded-2xl shadow-2xl object-cover" />
              </div>
              <div className="absolute inset-0 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <img src={heroImageBack} alt="Back Side" className="w-full h-full rounded-2xl shadow-2xl object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
