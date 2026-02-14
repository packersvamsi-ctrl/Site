import React, { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";

type Props = {
  children: React.ReactNode;
  variant?:
    | "fade-slide"
    | "ken-burns"
    | "mask-reveal"
    | "blur-focus"
    | "parallax"
    | "scale-pop"
    | "slide-directional";
  direction?: "left" | "right" | "up" | "down";
  className?: string;
  threshold?: number;
  duration?: number;
  once?: boolean; // 👈 new
};

const makeVariants = (
  variant: Props["variant"],
  direction: Props["direction"],
  duration: number
): Variants => {
  const baseEase = [0.25, 0.46, 0.45, 0.94];

  // 1️⃣ Fade + Slide
  const fadeSlide: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration, ease: baseEase },
    },
  };

  // 2️⃣ Ken Burns
  const kenBurns: Variants = {
    hidden: { scale: 1.05, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: duration + 0.4, ease: "easeOut" },
    },
  };

  // 3️⃣ Mask Reveal
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

  // 4️⃣ Blur Focus
  const blurFocus: Variants = {
    hidden: { opacity: 0, filter: "blur(15px)" },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      transition: { duration: duration + 0.2, ease: "easeOut" },
    },
  };

  // 5️⃣ Parallax Feel
  const parallax: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: duration + 0.2, ease: "easeOut" },
    },
  };

  // 6️⃣ Soft Scale Pop
  const scalePop: Variants = {
    hidden: { scale: 0.92, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 90,
        damping: 14,
        duration,
      },
    },
  };

  // 7️⃣ Proper Directional Slide (FULL SUPPORT)
  const slideDirectional = (): Variants => {
    let x = 0;
    let y = 0;

    if (direction === "left") x = -60;
    if (direction === "right") x = 60;
    if (direction === "up") y = -60;
    if (direction === "down") y = 60;

    return {
      hidden: { x, y, opacity: 0 },
      visible: {
        x: 0,
        y: 0,
        opacity: 1,
        transition: { duration, ease: "easeOut" },
      },
    };
  };

  switch (variant) {
    case "ken-burns":
      return kenBurns;
    case "mask-reveal":
      return maskReveal;
    case "blur-focus":
      return blurFocus;
    case "parallax":
      return parallax;
    case "scale-pop":
      return scalePop;
    case "slide-directional":
      return slideDirectional();
    default:
      return fadeSlide;
  }
};

// Grid Item Animation
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
  once = true, // 👈 default animate once
}) => {
  const ref = useRef<HTMLDivElement | null>(null);

  const inView = useInView(ref, {
    amount: threshold,
    once,
  });

  const variants = isGridItem
    ? staggerItem
    : makeVariants(variant, direction, duration);

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

// 🔥 Stagger Container (Cleaner Version)
export const AnimatedContainer: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className }) => {
  const ref = useRef<HTMLDivElement | null>(null);

  const inView = useInView(ref, {
    amount: 0.15,
    once: true,
  });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.12,
            delayChildren: 0.1,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
};

export default Animated;
