import React, { createContext, useCallback, useContext, useEffect, useState } from "react";
import LoadingScreen from "@/components/LoadingScreen";

const FRAME_COUNT = 200;
const IMAGE_PATH = "/car1/";

const pad = (n: number) => String(n).padStart(3, "0");

type LoadingContextType = {
  show: () => void;
  hide: () => void;
  percent: number;
  loading: boolean;
};

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

export const useLoading = () => {
  const ctx = useContext(LoadingContext);
  if (!ctx) throw new Error("useLoading must be used within LoadingProvider");
  return ctx;
};

export const LoadingProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [percent, setPercent] = useState(0);
  const [visible, setVisible] = useState(true);

  // initial preload
  useEffect(() => {
    let cancelled = false;
    let loaded = 0;
    const total = FRAME_COUNT + 2;

    const update = () => {
      loaded = Math.min(total, loaded + 1);
      const p = Math.round((loaded / total) * 100);
      if (!cancelled) setPercent(p);
      if (loaded >= total) {
        setTimeout(() => {
          if (!cancelled) {
            setVisible(false);
            setLoading(false);
            document.documentElement.classList.add("app-ready");
          }
        }, 200);
      }
    };

    // preload images
    for (let i = 1; i <= FRAME_COUNT; i++) {
      const img = new Image();
      img.src = `${IMAGE_PATH}ezgif-frame-${pad(i)}.jpg`;
      img.onload = update;
      img.onerror = update;
    }

    const loadVideo = (src: string) => {
      const v = document.createElement("video");
      v.preload = "metadata";
      v.src = src;
      const handler = () => {
        update();
        cleanup();
      };
      const cleanup = () => {
        v.removeEventListener("loadeddata", handler);
        v.removeEventListener("error", handler);
      };
      v.addEventListener("loadeddata", handler);
      v.addEventListener("error", handler);
      v.load();
    };

    loadVideo("/house.mp4");
    loadVideo("/car.mp4");

    return () => {
      cancelled = true;
    };
  }, []);

  const show = useCallback(() => {
    setVisible(true);
    setLoading(true);
  }, []);

  const hide = useCallback(() => {
    setVisible(false);
    setLoading(false);
  }, []);

  if (loading) {
    // block rendering app until initial preload finishes
    return <LoadingScreen visible={visible} percent={percent} />;
  }

  return (
    <LoadingContext.Provider value={{ show, hide, percent, loading }}>
      {children}
    </LoadingContext.Provider>
  );
};

export default LoadingProvider;
