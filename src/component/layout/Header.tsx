"use client";

import React from "react";
import { motion } from "framer-motion";

const Header: React.FC = () => {
  return (
    <motion.header className="z-10 w-full bg-sky-100 p-4 shadow">
      <div className="mx-auto flex w-full max-w-limit items-end justify-between">
        <h1 className="text-sky-800">Rita, the Engineer</h1>
      </div>
    </motion.header>
  );
};

export default Header;
