import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { ChevronUp } from "lucide-react";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  const [isVisible, setIsVisible] = useState(false);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsVisible(false);
  }, [pathname]);

  // Show/hide scroll to top button based on scroll position
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility, { passive: true });
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTopSmooth = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTopSmooth}
          aria-label="Scroll to top"
          className="group fixed bottom-40 sm:bottom-44 right-4 sm:right-6 z-40 flex items-center justify-center w-10 sm:w-11 md:w-12 h-10 sm:h-11 md:h-12 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full shadow-lg transition-all duration-300 ease-out hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary/50 animate-in fade-in slide-in-from-bottom-4 duration-300"
        >
          <ChevronUp className="w-5 sm:w-6 md:w-7 h-5 sm:h-6 md:h-7" />
        </button>
      )}
    </>
  );
};

export default ScrollToTop;
