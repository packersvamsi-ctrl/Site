import React, { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";

type Props = {
  children: React.ReactNode;
  variant?: "glide" | "pop" | "fade";
  direction?: "left" | "right";
  className?: string;
  threshold?: number;
};

const makeVariants = (variant: Props["variant"], direction: Props["direction"]): Variants => {
  const glideLeft: Variants = {
    hidden: { x: -80, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.7, ease: "easeOut" } },
  };

  const glideRight: Variants = {
    hidden: { x: 80, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.7, ease: "easeOut" } },
  };

  const pop: Variants = {
    hidden: { scale: 0.96, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { type: "spring", stiffness: 140, damping: 16 },
    },
  };

  const fade: Variants = {
    hidden: { opacity: 0, y: 8 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
  };

  if (variant === "pop") return pop;
  if (variant === "fade") return fade;
  return direction === "right" ? glideRight : glideLeft;
};

const Animated: React.FC<Props> = ({
  children,
  variant = "glide",
  direction = "left",
  className,
  threshold = 0.15,
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { margin: "0px", amount: threshold });
  const variants = makeVariants(variant, direction);

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

export default Animated;
