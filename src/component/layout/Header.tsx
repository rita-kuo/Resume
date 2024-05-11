"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import useBreakPoint from "@/hook/useBreakPoint";

const Header: React.FC = () => {
  const device = useBreakPoint();

  const ref = useRef<HTMLDivElement>(null);
  const translateY = `-${ref.current?.offsetHeight ?? 0}px`;

  const [isScrolling, setIsScrolling] = useState<boolean>();

  useEffect(() => {
    if (device === "desktop") return;
    window.addEventListener("scroll", () => setIsScrolling(true));
    window.addEventListener("scrollend", () => setIsScrolling(false));
    return () => {
      window.removeEventListener("scroll", () => setIsScrolling(true));
      window.removeEventListener("scrollend", () => setIsScrolling(false));
    };
  }, [device]);

  return (
    <motion.header
      ref={ref}
      {...(device === "desktop"
        ? {}
        : {
            initial: {
              top: isScrolling || isScrolling === undefined ? 0 : translateY,
            },
            animate: { top: !isScrolling ? 0 : translateY },
          })}
      className="sticky top-0 z-10 flex w-full bg-sky-100 p-4 shadow"
    >
      <div className="mx-auto flex w-full max-w-limit items-end justify-between">
        <h1 className="text-sky-800">Rita, the Engineer</h1>
      </div>
    </motion.header>
  );
};

export default Header;
