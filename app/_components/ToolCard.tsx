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
        whileHover={{ scale: 1.05 }}
        className={`rounded-xl transition-all duration-300 hover:shadow-2xl cursor-pointer items-center mx-2 my-2`}
      >
          <div className="text-4xl">
              <Card title={title} icon={icon}>
              <CanvasRevealEffect
                animationSpeed={5.1}
                containerClassName="bg-emerald-900 rounded-xl overflow-hidden"
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
        className=" rounded-xl group/canvas-card flex items-center justify-center dark:border-white/[0.2]  max-w-sm w-full mx-auto p-4 relative h-[8rem] "
      >
   
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="h-full w-full absolute inset-0"
            >
              {children}
            </motion.div>
          )}
        </AnimatePresence>
   
        <div className="relative z-20">
          <div className="text-center group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-200 w-full  mx-auto flex items-center justify-center">
            {icon}
          </div>
          <h2 className="dark:text-white text-xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
            {title}
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