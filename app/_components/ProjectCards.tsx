"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import MASSIAPP from '@/public/MASSIapp.png'
const ProjectCards = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a href='https://apps.apple.com/us/app/mas-si/id6683310989'>
        <motion.div className="h-[200px] w-full center hover:cursor-pointer"
            whileHover={{ scale : 1.05 }}
        >
          <div
            className="py-2 px-4 flex items-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 justify-between h-full rounded-xl"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
    
    
        <Image src={MASSIAPP} alt="profile pic" priority className="w-2/5 h-full rounded-xl"/>

    
    
            <div className="pl-8">
                <p className="font-bold text-3xl text-white">MAS SI</p>
                <p className="text-gray-600 ">All-in-one platform designed to connect the Muslim American Society of Staten Island community.</p>
            </div>
    
    
    
    
    
            <motion.svg
              width="50"
              height="50"
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
    </a>
  );
};

export default ProjectCards;
