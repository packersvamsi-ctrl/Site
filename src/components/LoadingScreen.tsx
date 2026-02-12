import React from "react";
import { motion, AnimatePresence } from "framer-motion";

type Props = {
  visible: boolean;
  percent: number;
};

const LoadingScreen: React.FC<Props> = ({ visible, percent }) => {
  const clampedPercent = Math.min(100, Math.max(0, percent));

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="loading-screen"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 0.96,
            transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
          }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md"
        >
          <div className="flex flex-col items-center justify-center px-6 text-center">
            
            {/* Logo – bigger, confident presence */}
            <motion.img
              src="/vamsi.png"
              alt="Vamsi Packers and Movers"
              initial={{ scale: 0.9, opacity: 0, y: 10 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="h-24 w-auto mb-6 drop-shadow-lg"
            />

            {/* Full brand name – smaller, refined */}
            <motion.h1
              initial={{ y: 8, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-2xl sm:text-3xl md:text-4xl font-light tracking-[-0.02em] text-white"
            >
              <span className="text-orange-500 font-medium">Vamsi</span>{" "}
              <span className="text-white/95">Packers and Movers</span>
            </motion.h1>

            {/* Progress – clean, thin, brand‑colored */}
            <div className="w-64 sm:w-80 flex flex-col items-center gap-3 mt-8">
              <div className="w-full h-[2px] bg-white/20 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-orange-500 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${clampedPercent}%` }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                />
              </div>

              <motion.div
                key={clampedPercent}
                initial={{ opacity: 0.6, y: 2 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-white/70 text-xs sm:text-sm font-mono tracking-wider"
              >
                {clampedPercent}%
              </motion.div>

              <div className="text-white/40 text-[0.65rem] sm:text-xs uppercase tracking-[0.25em] mt-2">
                preparing experience
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;