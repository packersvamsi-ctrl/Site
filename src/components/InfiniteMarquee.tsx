import React, { ReactNode } from "react";

interface InfiniteMarqueeProps {
  children: ReactNode;
  pauseOnHover?: boolean;
  direction?: "left" | "right";
  speed?: "slow" | "normal" | "fast";
  gap?: string;
  gradientEdges?: boolean;
  gradientColor?: string;
}

const speedMap = {
  slow: "60s",
  normal: "45s",
  fast: "30s",
};

const InfiniteMarquee: React.FC<InfiniteMarqueeProps> = ({
  children,
  pauseOnHover = true,
  direction = "left",
  speed = "normal",
  gap = "2rem",
  gradientEdges = true,
  gradientColor = "white",
}) => {
  const animationDuration = speedMap[speed];
  const animationName =
    direction === "left" ? "marquee-left" : "marquee-right";

  return (
    <div className="relative w-full overflow-hidden">
      {/* Main marquee container */}
      <style>{`
        @keyframes marquee-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes marquee-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .marquee-track {
          display: flex;
          width: max-content;
          gap: ${gap};
          animation: ${animationName} ${animationDuration} linear infinite;
          will-change: transform;
          animation-play-state: running;
        }

        .marquee-track.paused {
          animation-play-state: paused;
        }

        .marquee-container:hover .marquee-track {
          ${pauseOnHover ? "animation-play-state: paused;" : ""}
        }

        /* Smooth fade edges */
        .marquee-gradient-left {
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 2rem;
          background: linear-gradient(to right, ${gradientColor}, transparent);
          pointer-events: none;
          z-index: 10;
        }

        .marquee-gradient-right {
          position: absolute;
          right: 0;
          top: 0;
          bottom: 0;
          width: 2rem;
          background: linear-gradient(to left, ${gradientColor}, transparent);
          pointer-events: none;
          z-index: 10;
        }

        @media (max-width: 768px) {
          .marquee-gradient-left,
          .marquee-gradient-right {
            width: 1rem;
          }
        }
      `}</style>

      <div className="marquee-container overflow-hidden">
        <div className="marquee-track">
          {/* Original content */}
          {children}
          {/* Duplicated content for seamless loop */}
          {children}
        </div>
      </div>

      {/* Gradient fade overlays */}
      {gradientEdges && (
        <>
          <div className="marquee-gradient-left" />
          <div className="marquee-gradient-right" />
        </>
      )}
    </div>
  );
};

export default InfiniteMarquee;
