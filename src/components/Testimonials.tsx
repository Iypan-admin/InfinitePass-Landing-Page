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
  const [isTransitioning, setIsTransitioning] = useState(false);
  const images = [img1, img2, img3, img4, img5, img6, img7];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setCenterIndex((prev) => (prev + 1) % images.length);
      setTimeout(() => setIsTransitioning(false), 2500);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  const getTranslateX = (index: number) => {
    const diff = (index - centerIndex + images.length) % images.length;
    if (diff === 0) return "translate-x-0 scale-100 z-20 opacity-100";
    if (diff === 1 || diff === -(images.length - 1))
      return "translate-x-[280px] scale-90 opacity-70 z-10";
    if (diff === images.length - 1 || diff === -1)
      return "-translate-x-[280px] scale-90 opacity-70 z-10";
    return "opacity-0 scale-75";
  };

  return (
    <section className="py-8 sm:py-20 bg-secondary/30 overflow-hidden">
      <div className="container mx-auto px-4 text-center">
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-6">
          Our Happy Learners
        </h2>

        {/* Stats Section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mb-10">
          <div className="flex flex-col items-center">
            <p className="text-3xl sm:text-4xl font-bold text-primary">20,000+</p>
            <p className="text-base sm:text-lg font-medium text-muted-foreground">
              Students Trained
            </p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-3xl sm:text-4xl font-bold text-primary">11+</p>
            <p className="text-base sm:text-lg font-medium text-muted-foreground">
              Centers
            </p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-3xl sm:text-4xl font-bold text-primary">95%</p>
            <p className="text-base sm:text-lg font-medium text-muted-foreground">
              Success Rate
            </p>
          </div>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative flex justify-center items-center h-[280px] sm:h-[350px]">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`testimonial-${index}`}
              className={`absolute transition-all duration-700 ease-in-out rounded-xl shadow-lg object-cover w-[250px] sm:w-[300px] h-[180px] sm:h-[220px] ${getTranslateX(index)} ${isTransitioning ? "duration-500" : ""
                }`}
            />
          ))}
        </div>

        {/* Dot Indicators */}
        <div className="flex justify-center mt-6 sm:mt-8 space-x-3">
          {[
            centerIndex === 0 ? images.length - 1 : centerIndex - 1,
            centerIndex,
            (centerIndex + 1) % images.length,
          ].map((i) => (
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
