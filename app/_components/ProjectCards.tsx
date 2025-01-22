"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const ProjectCards = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div className="h-full w-full center"
        whileHover={{ scale : 1.05 }}
    >
      <div
        className="py-2 px-4 rounded flex items-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 justify-between"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <span>Learn More</span>
        <motion.svg
          width="15"
          height="15"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            d="M5 12H19"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : -10 }}
            transition={{ duration: 0.2 }}
          />
          <motion.path
            d="M12 5L19 12L12 19"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ x: 0 }}
            animate={{ x: isHovered ? 0 : -7 }}
            transition={{ duration: 0.2 }}
          />
        </motion.svg>
      </div>
    </motion.div>
  );
};

export default ProjectCards;
