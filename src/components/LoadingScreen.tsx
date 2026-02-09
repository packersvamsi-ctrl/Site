import React, { useEffect, useState } from "react";

const FRAME_COUNT = 200;
const IMAGE_PATH = "/car1/";

type Props = {
  visible: boolean;
  percent: number;
};

const LoadingScreen: React.FC<Props> = ({ visible, percent }) => {
  return (
    <div
      aria-hidden={!visible}
      className={`fixed inset-0 z-50 flex items-center justify-center bg-white/95 backdrop-blur transition-opacity ${!visible ? "opacity-0 pointer-events-none" : "opacity-100"}`}>
      <div className="w-full max-w-3xl px-6">
        <div className="relative h-10 md:h-12 bg-gray-200 rounded-full overflow-visible mt-2">
          <div
            className="absolute left-0 top-0 h-full bg-primary"
            style={{ width: `${percent}%`, transition: "width 150ms linear" }}
          />

          <div
            className="absolute flex items-end pointer-events-none"
            style={{ left: `${percent}%`, transform: "translateX(-50%)", bottom: "calc(100% + 10px)", transition: "left 150ms linear" }}
          >
            <img src="/lorry.png" alt="lorry" className="h-16 sm:h-20 md:h-24 w-auto block" />
          </div>
        </div>

        <div className="mt-4 text-sm text-center text-muted-foreground">Loading assets — {percent}%</div>
      </div>
    </div>
  );
};

export default LoadingScreen;
