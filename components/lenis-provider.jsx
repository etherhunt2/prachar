"use client";

import Lenis from "lenis";
import { ReactNode, useEffect } from "react";
import React from "react";

export default function LenisProvider({ children }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.5,
      lerp: 0.1,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
