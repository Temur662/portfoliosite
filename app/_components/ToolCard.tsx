"use client"

import { useState, type ReactNode } from "react"
import { motion , AnimatePresence } from "framer-motion"
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect"

interface ToolCardProps {
  name: string
  icon: ReactNode
  description: string
  color: string
}

export function ToolCard({title, icon } : {title : string, icon : any }) {
  return (
      <div
        className={`rounded-xl transition-all duration-300 hover:shadow-2xl cursor-pointer items-center mx-2 my-2 md:w-[8rem] w-1/4 bg-[#2c2a2a] md:h-[8rem] h-[5rem]`}
      >
          <div className="text-4xl h-full">
              <Card title={title} icon={icon}>
              <CanvasRevealEffect
                animationSpeed={3}
                containerClassName="bg-[#3d53e2] rounded-xl overflow-hidden"
              />
              </Card>
          </div>
      </div>
  )
}

const Card = ({
  title,
  icon,
  children,
}: {
  title: string;
  icon: React.Component;
  children?: React.ReactNode;
}) => {
  const [hovered, setHovered] = useState(false);
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
    >
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className=" rounded-xl group/canvas-card flex items-center justify-center dark:border-white/[0.2] w-full mx-auto p-4 relative h-full"
      >
   
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="md:h-[8rem] w-full absolute inset-0 h-[5rem]"
            >
              {children}
            </motion.div>
          )}
        </AnimatePresence>
   
        <div className="relative z-20 w-full h-full md:pt-[25%]">
          <div className="text-center group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-200 w-full  mx-auto flex items-center justify-center absolute">
            {icon}
          </div>
          <h2 className="dark:text-white text-7xl opacity-0 group-hover/canvas-card:opacity-100 absolute z-10 text-black font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-6 transition duration-200 md:left-[13%] top-3 md:top-8">
            {icon}
          </h2>
        </div>
      </div>
    </motion.div>
  );
};
export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};