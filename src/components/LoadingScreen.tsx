import React from "react";
import { motion, AnimatePresence } from "framer-motion";

type Props = {
  visible: boolean;
  percent: number;
};

const sheets = [0, 1, 2];

const layerStyles = (i: number) => {
  // Slightly different opacity and height per layer
  const heights = [100, 80, 60];
  const opacities = [1, 0.92, 0.86];
  return {
    height: `${heights[i]}vh`,
    opacity: opacities[i],
  };
};

const LoadingScreen: React.FC<Props> = ({ visible, percent }) => {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="loader-root"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.45 } }}
          className="fixed inset-0 z-50 flex items-center justify-center pointer-events-auto"
        >
          <div className="absolute inset-0 flex flex-col items-stretch justify-center overflow-hidden">
            {sheets.map((i) => (
              <motion.div
                key={i}
                initial={{ x: "-120%" }}
                animate={{ x: 0 }}
                exit={{ x: "120%", opacity: 0 }}
                transition={{ type: "tween", duration: 0.9, delay: i * 0.12, ease: "easeOut" }}
                style={{
                  background: `linear-gradient(90deg, rgba(255,255,255,${1 - i * 0.05}) 0%, #ff8a00 100%)`,
                  ...layerStyles(i),
                }}
                className={`w-[200%] origin-left transform fixed left-0 -translate-x-0 rounded-b-2xl shadow-2xl`}
              />
            ))}
          </div>

          <div className="relative z-50 w-full max-w-2xl px-6 text-center">
            <div className="mx-auto mb-4 flex items-center justify-center">
              <div className="rounded-full bg-white/90 p-4 shadow-md">
                <img src="/lorry.png" alt="lorry" className="h-12 w-auto" />
              </div>
            </div>
            <div className="text-sm text-foreground/90">Preparing experience — {percent}%</div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
