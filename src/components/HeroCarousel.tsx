import { useEffect, useState, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface Slide {
  image: string;
  title: string;
  subtitle: string;
  cta: string;
  link: string;
}

const slides: Slide[] = [
  {
    image: "/banners/banner-1.jpg",
    title: "Trusted Packers & Movers",
    subtitle: "Safe, secure, and timely delivery of your belongings across India",
    cta: "Get Free Quote",
    link: "/contact",
  },
  {
    image: "/banners/banner-2.jpg",
    title: "Expert Car Transportation",
    subtitle: "Specialized vehicles for safe car transport to any destination",
    cta: "Learn More",
    link: "/services",
  },
  {
    image: "/banners/banner-3.jpg",
    title: "Professional Packing",
    subtitle: "Quality packing materials and trained professionals for your valuables",
    cta: "Our Services",
    link: "/services",
  },
  {
    image: "/banners/banner-4.jpg",
    title: "Secure Warehousing",
    subtitle: "Safe storage solutions for short and long-term needs",
    cta: "Contact Us",
    link: "/contact",
  },
  {
    image: "/banners/banner-5.jpg",
    title: "Pan-India Network",
    subtitle: "Seamless relocation services with presence in all major cities",
    cta: "Get Started",
    link: "/contact",
  },
];

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [isAutoPlaying, nextSlide]);

  return (
    <section
      className="relative w-full h-48 sm:h-64 md:h-96 lg:h-[550px] xl:h-[700px] overflow-hidden"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-gradient-hero" />
          </div>

          {/* Content */}
          <div className="relative h-full w-full container mx-auto px-3 sm:px-4 md:px-6 flex items-center overflow-hidden">
            <div className="max-w-xs sm:max-w-md md:max-w-xl lg:max-w-2xl text-white">
              <h1
                className={`font-heading font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl mb-2 sm:mb-4 md:mb-6 transition-all duration-700 leading-tight ${
                  index === currentSlide ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                }`}
                style={{ transitionDelay: "200ms" }}
              >
                {slide.title}
              </h1>
              <p
                className={`font-body text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl mb-3 sm:mb-4 md:mb-8 text-white/90 transition-all duration-700 line-clamp-2 sm:line-clamp-3 ${
                  index === currentSlide ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                }`}
                style={{ transitionDelay: "400ms" }}
              >
                {slide.subtitle}
              </p>
              <div
                className={`transition-all duration-700 ${
                  index === currentSlide ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                }`}
                style={{ transitionDelay: "600ms" }}
              >
                <Button asChild size="sm" variant="hero" className="h-10 sm:h-11 md:h-12 lg:h-13 text-xs sm:text-sm md:text-base lg:text-base min-w-max">
                  <Link to={slide.link}>{slide.cta}</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows - Hidden on mobile, visible on larger screens */}
      <button
        onClick={prevSlide}
        className="hidden sm:flex absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white p-2 sm:p-3 rounded-full transition-all hover:scale-110 min-h-10 min-w-10 items-center justify-center focus:outline-none focus:ring-2 focus:ring-white/50"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="hidden sm:flex absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white p-2 sm:p-3 rounded-full transition-all hover:scale-110 min-h-10 min-w-10 items-center justify-center focus:outline-none focus:ring-2 focus:ring-white/50"
        aria-label="Next slide"
      >
        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      {/* Dots - Always visible and touch-friendly */}
      <div className="absolute bottom-3 sm:bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 flex gap-1.5 sm:gap-2 md:gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`rounded-full transition-all min-h-2.5 min-w-2.5 sm:min-h-3 sm:min-w-3 focus:outline-none focus:ring-2 focus:ring-white/50 ${
              index === currentSlide ? "bg-primary w-6 sm:w-8" : "bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={index === currentSlide}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroCarousel;
