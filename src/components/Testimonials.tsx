import { useEffect, useState } from "react";
import img1 from "@/assets/img1.jpg";
import img2 from "@/assets/img2.jpg";
import img3 from "@/assets/img3.jpg";
import img4 from "@/assets/img4.jpg";
import img5 from "@/assets/img5.jpg";
import img6 from "@/assets/img6.jpg";
import img7 from "@/assets/img7.jpg";

export const Testimonials = () => {
  const [centerIndex, setCenterIndex] = useState(0);
  const images = [img1, img2, img3, img4, img5, img6, img7];

  // Auto-scroll logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCenterIndex((prev) => (prev + 1) % images.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [images.length]);

  // Show previous, current, next image only
  const getVisibleIndexes = () => {
    const prev = (centerIndex - 1 + images.length) % images.length;
    const next = (centerIndex + 1) % images.length;
    return [prev, centerIndex, next];
  };

  const visibleIndexes = getVisibleIndexes();

  return (
    <section className="py-20 bg-secondary/30 overflow-hidden">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
          Our Happy Learners
        </h2>
        <p className="text-lg text-muted-foreground mb-12">
          Meet some of our students from across the country
        </p>

        {/* Carousel */}
        <div className="relative flex items-center justify-center overflow-hidden">
          <div className="flex items-center justify-center gap-10 transition-all duration-700 ease-in-out">
            {images.map((src, i) => {
              if (!visibleIndexes.includes(i)) return null;

              const isCenter = i === centerIndex;
              const sideClass =
                "scale-75 opacity-40 blur-[3px] brightness-75 z-10";
              const centerClass =
                "scale-110 opacity-100 blur-0 brightness-100 z-20 shadow-2xl";

              return (
                <div
                  key={i}
                  className={`transition-all duration-700 ease-in-out transform ${isCenter ? centerClass : sideClass}`}
                >
                  <img
                    src={src}
                    alt={`student-${i}`}
                    className="w-56 h-56 sm:w-64 sm:h-64 rounded-2xl object-cover border border-gray-200"
                  />
                </div>
              );
            })}
          </div>
        </div>

        {/* Dot Indicators */}
        <div className="flex justify-center mt-8 space-x-3">
          {images.map((_, i) => (
            <div
              key={i}
              className={`w-3 h-3 rounded-full transition-all duration-500 ${i === centerIndex
                  ? "bg-primary scale-125 shadow-md"
                  : "bg-gray-400/40"
                }`}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
};
