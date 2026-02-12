import React, { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";

type Props = {
  children: React.ReactNode;
  variant?: "fade-slide" | "ken-burns" | "mask-reveal" | "blur-focus" | "stagger-grid" | "parallax" | "scale-pop" | "slide-directional";
  direction?: "left" | "right" | "up" | "down";
  className?: string;
  threshold?: number;
  duration?: number;
  staggerDelay?: number;
};

const makeVariants = (variant: Props["variant"], direction: Props["direction"], duration: number): Variants => {
  // 1. Subtle Fade + Slide Up
  const fadeSlide: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  // 2. Cinematic Ken Burns (Slow Zoom)
  const kenBurns: Variants = {
    hidden: { scale: 1.05, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: duration + 0.5, ease: "easeOut" },
    },
  };

  // 3. Smooth Mask Reveal
  const maskReveal: Variants = {
    hidden: { 
      clipPath: "inset(0% 100% 0% 0%)",
      opacity: 0,
    },
    visible: {
      clipPath: "inset(0% 0% 0% 0%)",
      opacity: 1,
      transition: { duration: duration + 0.3, ease: "easeInOut" },
    },
  };

  // 4. Blur-to-Focus Fade In
  const blurFocus: Variants = {
    hidden: { 
      opacity: 0, 
      filter: "blur(15px)" 
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      transition: { duration: duration + 0.2, ease: "easeOut" },
    },
  };

  // 5. Staggered Grid Reveal (parent)
  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  // 6. Gentle Parallax Scroll effect
  const parallax: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: duration + 0.25, ease: "easeOut" },
    },
  };

  // 7. Soft Scale-In Pop
  const scalePop: Variants = {
    hidden: { scale: 0.92, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration,
      },
    },
  };

  // 8. Directional Slide-In
  const slideDirectional = (dir: string): Variants => {
    let xVal = 60;
    if (dir === "right") xVal = -60;
    
    return {
      hidden: { x: xVal, opacity: 0 },
      visible: {
        x: 0,
        opacity: 1,
        transition: { duration, ease: "easeOut" },
      },
    };
  };

  if (variant === "fade-slide") return fadeSlide;
  if (variant === "ken-burns") return kenBurns;
  if (variant === "mask-reveal") return maskReveal;
  if (variant === "blur-focus") return blurFocus;
  if (variant === "stagger-grid") return staggerContainer;
  if (variant === "parallax") return parallax;
  if (variant === "scale-pop") return scalePop;
  if (variant === "slide-directional") return slideDirectional(direction || "left");
  
  return fadeSlide;
};

// For staggered grid items
const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

interface AnimatedProps extends Props {
  isGridItem?: boolean;
}

const Animated: React.FC<AnimatedProps> = ({
  children,
  variant = "fade-slide",
  direction = "left",
  className,
  threshold = 0.15,
  duration = 0.65,
  isGridItem = false,
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { margin: "0px", amount: threshold });
  const variants = isGridItem ? staggerItem : makeVariants(variant, direction, duration);

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={variants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      {children}
    </motion.div>
  );
};

// Container component for stagger grid animations
export const AnimatedContainer: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { margin: "0px", amount: 0.15 });

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.1,
            delayChildren: 0.1,
          },
        },
      }}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      {children}
    </motion.div>
  );
};

export default Animated;
