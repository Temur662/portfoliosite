"use client";
import Image from "next/image";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";
import MASSIAPP from '@/public/MASSIapp.png'
import RepairConnect from '@/public/RepairConnect2.png'
import MedianFiltering from '@/public/MedianFiltering.png'
import CoffeeDrop from '@/public/CoffeeDrop.png'
export default function ExpandableCard() {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
    null
  );
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }
    if (active && typeof active === "object") {
      document.body.style.overflow = "block";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));
  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10 "
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0  grid place-items-center z-[100] backdrop-blur-sm overflow-y-scroll h-full">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[500px]  h-full md:h-fit md:max-h-[90%]  flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <Image
                  priority
                  width={200}
                  height={200}
                  src={active.src}
                  alt={active.title}
                  className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                />
              </motion.div>

              <div className="">
                <div className="flex justify-between items-start p-4">
                  <div className="">
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-bold text-neutral-700 dark:text-neutral-200"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-neutral-600 dark:text-neutral-400"
                    >
                      {active.description}
                    </motion.p>
                  </div>

                  <motion.a
                    layoutId={`button-${active.title}-${id}`}
                    href={active.state ? active.ctaLink : undefined}
                    target="_blank"
                    className={`px-4 py-3 ${active.state ? 'text-sm' : 'text-xl'} rounded-full font-bold ${active.state ? 'bg-[#3d53e2]' : 'bg-gray-600 hover:cursor-wait'} text-white`}
                  >
                    {active.ctaText}
                  </motion.a>
                </div>
                <div className="pt-1 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className=" text-neutral-600 text-xs md:text-sm lg:text-base h-auto md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>

      <ul className="max-w-2xl w-full gap-4 gap-y-4 flex-col flex  flex-grow h-auto">
        {cards.map((card, index) => {
          const [ isHovered, setIsHovered ] = useState(false)
          return (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={`card-${card.title}-${id}`}
            onClick={() => setActive(card)}
            whileHover={{ scale : 1.05 }}
            className="p-4 flex flex-col md:flex-row justify-between items-center dark:hover:bg-neutral-800 rounded-xl cursor-pointer h-auto w-full center"
          >
            <div className="flex gap-4 flex-col md:flex-row  border-2 border-gray-700 rounded-xl  p-4 items-center md:items-start md:border-0 md:p-2"
            onMouseEnter={() => setIsHovered(true) }
            onMouseLeave={() =>  setIsHovered(false)}
            >

              <motion.div layoutId={`image-${card.title}-${id}`}>
                <Image
                  src={card.src}
                  alt={card.title}
                  className={`w-[200px] h-[200px] rounded-xl object-cover ${card.state == false ? 'blur-[2px]' : ''} object-top`}
                />
              </motion.div>

              <div className="md:text-start text-center md:pl-2">
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className="font-bold md:text-3xl text-xl text-white pt-2"
                >
                  {card.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${card.description}-${id}`}
                  className="text-gray-600 md:text-md text-sm pt-4"
                >
                  {card.description}
                </motion.p>
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
        )})}
      </ul>
      
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

const cards = [
  {
    description: "One app to schedule top mechanics, mobile mechanics, and mobile detailers bringing unmatched convenience to your doorstep.",
    title: "RepairConnect",
    src: RepairConnect,
    ctaText: "🕰️",
    ctaLink: "#",
    content: () => {
      return (
        <p>
          Coming Soon... 2026🏎️
        </p>
      );
    },
    state : false
  },
  {
    description : "A universal loyalty platform that consolidates every cafe’s reward program into one app, so coffee lovers can explore multiple shops without sacrificing their points",
    title: "CoffeeDrop",
    src: CoffeeDrop,
    ctaText: "🕰️",
    ctaLink: "#",
    content: () => {
      return (
        <p>
          Coming Soon... Summer 2025<br/>
          <strong>Backstory:</strong><br/>
            imagine you are a frequent cafe visitor, each shop you go to has their own loyalty program which you automatically get signed up for on payment,
            You are stuck at level 1 of the loyal program at 7 different shops, imagine you could get point for each purchase to earn points for any shop.
            <br /> <br />
            <strong>The Problem:</strong><br/>
            Every cafe as their own loyalty program confining users to that shop, benefiting for the cafe but limits customers to that shop and that feeling of never achieving or using those points.
        </p>
      );
    },
    state : false
  },
  {
    description: "All-in-one platform designed to connect the Muslim American Society of Staten Island community.",
    title: "MAS Staten Island App",
    src: MASSIAPP,
    ctaText: "View",
    ctaLink: "https://apps.apple.com/us/app/mas-si/id6683310989",
    content: () => {
      return (
        <p>
          <strong>Key Features</strong>
          <br /> 
          <strong>Tailored Notification Center</strong><br/>
          Receive custom alerts about the programs and events that matter most to you.
          Filter notifications based on your preferences, ensuring you never miss an activity you want to attend.
          <br /> <br />

          <strong>Personalized Playlists</strong><br/>
          Create and organize playlists of your favorite recorded lectures directly within the app.
          Enhance your learning experience with AI-generated summaries and keynotes for each lecture, providing quick takeaways and in-depth insights.
          <br /> <br />

          <strong>Jummah Notifications</strong><br/>
          Stay informed about weekly Friday prayer (Jummah) talks.
          Access details such as the topic and speaker for each session, ensuring you’re always up to date.
          <br /> <br />

          <strong>Community Integration</strong><br/>
          Seamlessly bridge the gap between programs and community members by having all essential information at your fingertips.
          Empower community engagement by making program details easily accessible and actionable.
          <br /> <br />

          <strong>Why Choose MAS Staten Island App?</strong><br/>
          This app is more than a tool—it’s a gateway to staying connected with your masjid and fellow community members. Whether it’s attending programs, learning from lectures, or keeping up with Jummah details, the MAS Staten Island app ensures you’re always in the loop.
          Download the MAS Staten Island app today and bring your community experience to the next level!
        </p>
      );
    },
    state : true
  },
  {
    description: "Median filtering algorithm to refine blurry and grainy images.",
    title: "Median Filtering",
    src: MedianFiltering,
    ctaText: "View",
    ctaLink: "https://github.com/Temur662/MedianFiltering",
    content: () => {
      return (
        <p>
         
        </p>
      );
    },
    state : true
  }
];
