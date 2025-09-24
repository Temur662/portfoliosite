"use client";
import Image from "next/image";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";
import MASSIAPP from '@/public/MASSIapp.png'
import RepairConnect from '@/public/RepairConnect2.png'
import MedianFiltering from '@/public/MedianFiltering.png'
import CoffeeDrop from '@/public/CoffeeDrop.png'
import PIPDemand from '@/public/PIPDemand.png'
import MountainSpine from '@/public/mountainspineandorthopedics.com.png'
import MTechDistributor from '@/public/mtechdistributor.com.png'
import LazaDessertCafe from '@/public/lazadessertcafe.com.png'
import PrimaryUC from '@/public/primaryuc.com.png'
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
              className="w-full max-w-4xl  h-full md:h-fit md:max-h-[90%]  flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <Image
                  priority

                  src={active.src}
                  alt={active.title}
                  className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg aspect-square object-cover object-top"
                />
              </motion.div>

              <div className="">
                <div className="flex justify-between items-start p-4">
                  <div className="">
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-bold text-neutral-700 md:text-5xl text-2xl dark:text-neutral-200"
                    >
                      {active.title}
                    </motion.h3>
                    {/* <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-neutral-600 dark:text-neutral-400"
                    >
                      {active.description}
                    </motion.p> */}
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
          const [isHovered, setIsHovered] = useState(false)
          return (
            <motion.div
              layoutId={`card-${card.title}-${id}`}
              key={`card-${card.title}-${id}`}
              onClick={() => setActive(card)}
              whileHover={{ scale: 1.05 }}
              className="p-4 flex flex-col md:flex-row justify-between items-center dark:hover:bg-neutral-800 rounded-xl cursor-pointer h-full w-full"
            >
              <div className="flex gap-4 flex-col md:flex-row  border-2 border-gray-700 rounded-xl  p-4 items-center md:items-start md:border-0 md:p-2"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >

                <motion.div layoutId={`image-${card.title}-${id}`} className="w-40 flex-shrink-0">
                  <Image
                    src={card.src}
                    alt={card.title}
                    className={`w-full h-full aspect-square rounded-xl object-cover ${card.state == false ? 'blur-[2px]' : ''} object-top`}
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
                  <motion.div
                    layoutId={`tech-badges-${card.title}-${id}`}
                    className="flex flex-wrap gap-1 mt-3"
                  >
                    {card.techBadges?.map((tech, index) => (
                      <span
                        key={index}
                        className={`px-2 py-1 text-xs rounded-full bg-gray-100 text-gray-800`}
                      >
                        {tech.name}
                      </span>
                    ))}
                  </motion.div>
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
          )
        })}
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
    description: "E-commerce website for a tech distributor specializing in POS systems, ATM machines, credit card terminals, and more.",
    title: "MTech Distributor",
    src: MTechDistributor,
    ctaText: "View",
    ctaLink: "https://mtechdistributor.com",
    techBadges: [
      { name: "Next.js", color: "bg-blue-100 text-blue-800" },
      { name: "React", color: "bg-green-100 text-green-800" },
      { name: "TypeScript", color: "bg-purple-100 text-purple-800" },
      { name: "PostgreSQL", color: "bg-cyan-100 text-cyan-800" },
      { name: "Prisma", color: "bg-pink-100 text-pink-800" },
      { name: "Tailwind", color: "bg-indigo-100 text-indigo-800" }
    ],
    content: () => {
      return (
        <p>
          <strong>Project Overview</strong><br />
          Developed a comprehensive e-commerce website and backend admin dashboard for MTech Distributor, a client specializing in tech gear sales including POS systems, ATM machines, credit card terminals, and more.
          <br /><br />

          <strong>Key Features</strong><br />
          • Full-featured e-commerce website with product catalog and shopping cart<br />
          • Comprehensive admin dashboard for order management and tracking<br />
          • Real-time shipment tracking and fulfillment management<br />
          • Integrated payment processing with Dejavoo payment solutions<br />
          • Automated shipping integration with FedEx and Shippo APIs<br />
          <br />

          <strong>Technical Implementation</strong><br />
          • Built robust backend admin dashboard for team management<br />
          • Integrated FedEx API for automated shipping calculations and tracking<br />
          • Connected Shippo API for multi-carrier shipping options<br />
          • Implemented Dejavoo payment gateway for secure transactions<br />
          • Created order tracking system for real-time fulfillment updates<br />
          • Developed inventory management and product catalog system
          <br /><br />
          {/* <strong>Technologies Used</strong><br />
          <div className="flex flex-wrap gap-2 mt-2">
            <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">Next.js</span>
            <span className="px-3 py-1 bg-green-100 text-green-800 text-xs rounded-full">React</span>
            <span className="px-3 py-1 bg-purple-100 text-purple-800 text-xs rounded-full">TypeScript</span>
            <span className="px-3 py-1 bg-orange-100 text-orange-800 text-xs rounded-full">Node.js</span>
            <span className="px-3 py-1 bg-cyan-100 text-cyan-800 text-xs rounded-full">PostgreSQL</span>
            <span className="px-3 py-1 bg-pink-100 text-pink-800 text-xs rounded-full">Prisma</span>
            <span className="px-3 py-1 bg-indigo-100 text-indigo-800 text-xs rounded-full">Tailwind CSS</span>
            <span className="px-3 py-1 bg-red-100 text-red-800 text-xs rounded-full">FedEx API</span>
            <span className="px-3 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full">Shippo API</span>
            <span className="px-3 py-1 bg-gray-100 text-gray-800 text-xs rounded-full">Dejavoo</span>
          </div> */}
        </p>
      );
    },
    state: true
  },
  {
    description: "Modern dessert cafe website showcasing crepes and delicious pastries, built with Next.js and optimized for SEO performance.",
    title: "Laza Dessert Cafe",
    src: LazaDessertCafe,
    ctaText: "View",
    ctaLink: "https://lazadessert.cafe",
    techBadges: [
      { name: "Next.js", color: "bg-blue-100 text-blue-800" },
      { name: "React", color: "bg-green-100 text-green-800" },
      { name: "TypeScript", color: "bg-purple-100 text-purple-800" },
      { name: "Sanity CMS", color: "bg-orange-100 text-orange-800" },
      { name: "Toast POS", color: "bg-red-100 text-red-800" },
      { name: "SEO", color: "bg-yellow-100 text-yellow-800" }
    ],
    content: () => {
      return (
        <p>
          <strong>Project Overview</strong><br />
          Developed a modern, SEO-optimized website for Laza Dessert Cafe to showcase their crepes and delicious pastries. Built with Next.js and React, featuring a content management system for easy updates.
          <br /><br />

          <strong>Key Achievements</strong><br />
          • Achieved 1,000+ monthly website visitors through strategic SEO optimization<br />
          • Increased online orders by 12% during a 2-month period<br />
          • Integrated Toast POS system for seamless order management<br />
          • Implemented Sanity Studio CMS for content management<br />
          <br />

          <strong>Technical Implementation</strong><br />
          • Built with Next.js and React for optimal performance and SEO<br />
          • Integrated Toast POS system for online order processing<br />
          • Connected Sanity Studio CMS for easy content updates<br />
          • Implemented advanced SEO strategies for local search visibility<br />
          • Created responsive design optimized for mobile and desktop<br />
          • Set up weekly favorites management system for cafe owners<br />
          • Developed image and text management system for dynamic content updates
          <br /><br />
          <strong>Technologies Used</strong><br />
          {/* <div className="flex flex-wrap gap-2 mt-2">
            <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">Next.js</span>
            <span className="px-3 py-1 bg-green-100 text-green-800 text-xs rounded-full">React</span>
            <span className="px-3 py-1 bg-purple-100 text-purple-800 text-xs rounded-full">TypeScript</span>
            <span className="px-3 py-1 bg-indigo-100 text-indigo-800 text-xs rounded-full">Tailwind CSS</span>
            <span className="px-3 py-1 bg-orange-100 text-orange-800 text-xs rounded-full">Sanity CMS</span>
            <span className="px-3 py-1 bg-red-100 text-red-800 text-xs rounded-full">Toast POS</span>
            <span className="px-3 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full">SEO</span>
            <span className="px-3 py-1 bg-cyan-100 text-cyan-800 text-xs rounded-full">Framer Motion</span>
          </div> */}
        </p>
      );
    },
    state: true
  },
  {
    description: "Primary and urgent care center website with 4 locations across Florida, optimized for SEO and featuring integrated language switching.",
    title: "PrimaryUC",
    src: PrimaryUC,
    ctaText: "View",
    ctaLink: "https://primaryuc.com",
    techBadges: [
      { name: "Next.js", color: "bg-blue-100 text-blue-800" },
      { name: "React", color: "bg-green-100 text-green-800" },
      { name: "TypeScript", color: "bg-purple-100 text-purple-800" },
      { name: "Tailwind", color: "bg-indigo-100 text-indigo-800" },
      { name: "SEO", color: "bg-yellow-100 text-yellow-800" },
      { name: "i18n", color: "bg-cyan-100 text-cyan-800" }
    ],
    content: () => {
      return (
        <p>
          <strong>Project Overview</strong><br />
          Developed a comprehensive website for PrimaryUC, a primary and urgent care center with 4 locations across Florida. Built with Next.js and React, featuring advanced SEO optimization and multilingual support.
          <br /><br />

          <strong>Key Achievements</strong><br />
          • Generated 25+ appointments per month through strategic SEO optimization<br />
          • Implemented integrated website language switcher for diverse patient population<br />
          • Optimized for local search visibility across all 4 locations<br />
          • Enhanced patient engagement and appointment booking process<br />
          <br />

          <strong>Technical Implementation</strong><br />
          • Built with Next.js and React for optimal performance and SEO<br />
          • Implemented best SEO practices for healthcare industry<br />
          • Integrated multilingual language switching functionality<br />
          • Created location-based services for all 4 clinic locations<br />
          • Developed responsive design optimized for mobile and desktop<br />
          • Implemented appointment scheduling and contact systems<br />
          • Optimized for local search rankings and patient acquisition
          <br /><br />
          <strong>Technologies Used</strong><br />
          {/* <div className="flex flex-wrap gap-2 mt-2">
            <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">Next.js</span>
            <span className="px-3 py-1 bg-green-100 text-green-800 text-xs rounded-full">React</span>
            <span className="px-3 py-1 bg-purple-100 text-purple-800 text-xs rounded-full">TypeScript</span>
            <span className="px-3 py-1 bg-indigo-100 text-indigo-800 text-xs rounded-full">Tailwind CSS</span>
            <span className="px-3 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full">SEO</span>
            <span className="px-3 py-1 bg-cyan-100 text-cyan-800 text-xs rounded-full">i18n</span>
            <span className="px-3 py-1 bg-pink-100 text-pink-800 text-xs rounded-full">Google Maps</span>
            <span className="px-3 py-1 bg-orange-100 text-orange-800 text-xs rounded-full">Framer Motion</span>
          </div> */}
        </p>
      );
    },
    state: true
  },
  {
    description: 'Mountain Spine & Orthopedics is a medical practice with 8 Locations in Floridathat provides a range of services to help patients with their orthopedic needs.',
    title: 'Mountain Spine & Orthopedics',
    src: MountainSpine,
    ctaText: 'View',
    ctaLink: 'https://mountainspineorthopedics.com/',
    techBadges: [
      { name: "Next.js", color: "bg-blue-100 text-blue-800" },
      { name: "React", color: "bg-green-100 text-green-800" },
      { name: "TypeScript", color: "bg-purple-100 text-purple-800" },
      { name: "Tailwind", color: "bg-indigo-100 text-indigo-800" },
      { name: "SEO", color: "bg-yellow-100 text-yellow-800" },
      { name: "Google Maps", color: "bg-pink-100 text-pink-800" }
    ],
    content: () => {
      return (
        <p>
          <strong>Project Overview</strong><br />
          Developed and launched a comprehensive website for Mountain Spine & Orthopedics, a leading orthopedic practice with 8 locations across Florida.
          <br /><br />

          <strong>Key Achievements</strong><br />
          • Designed and built a modern, user-friendly website optimized for patient engagement<br />
          • Implemented advanced SEO strategies to improve online visibility and search rankings<br />
          • Created and managed targeted marketing campaigns to reach potential patients<br />
          • Successfully generating 10+ new patient cases monthly through the website<br />
          <br />

          <strong>Technical Implementation</strong><br />
          • Optimized site performance and loading speeds for better user experience<br />
          • Integrated location-based services to help patients find their nearest clinic<br />
          • Developed responsive design ensuring seamless access across all devices<br />
          • Implemented secure contact forms and appointment scheduling systems
          <br /><br />
          <strong>Technologies Used</strong><br />
          {/* <div className="flex flex-wrap gap-2 mt-2">
            <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">Next.js</span>
            <span className="px-3 py-1 bg-green-100 text-green-800 text-xs rounded-full">React</span>
            <span className="px-3 py-1 bg-purple-100 text-purple-800 text-xs rounded-full">TypeScript</span>
            <span className="px-3 py-1 bg-indigo-100 text-indigo-800 text-xs rounded-full">Tailwind CSS</span>
            <span className="px-3 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full">SEO</span>
            <span className="px-3 py-1 bg-pink-100 text-pink-800 text-xs rounded-full">Google Maps</span>
            <span className="px-3 py-1 bg-cyan-100 text-cyan-800 text-xs rounded-full">Framer Motion</span>
            <span className="px-3 py-1 bg-orange-100 text-orange-800 text-xs rounded-full">Vercel</span>
          </div> */}
        </p>
      )
    },
    state: true
  },
  // {
  //   description : "A universal loyalty platform that consolidates every cafe’s reward program into one app, so coffee lovers can explore multiple shops without sacrificing their points",
  //   title: "CoffeeDrop",
  //   src: CoffeeDrop,
  //   ctaText: "🕰️",
  //   ctaLink: "#",
  //   content: () => {
  //     return (
  //       <p>
  //         Coming Soon... Summer 2025☕️<br/>
  //         <strong>Backstory:</strong><br/>
  //           imagine you are a frequent cafe visitor, each shop you go to has their own loyalty program which you automatically get signed up for on payment,
  //           You are stuck at level 1 of the loyal program at 7 different shops, imagine you could get point for each purchase to earn points for any shop.
  //           <br /> <br />
  //           <strong>The Problem:</strong><br/>
  //           Every cafe as their own loyalty program confining users to that shop, benefiting for the cafe but limits customers to that shop and that feeling of never achieving or using those points.
  //       </p>
  //     );
  //   },
  //   state : false
  // },
  {
    description: "All-in-one platform designed to connect the Muslim American Society of Staten Island community.",
    title: "MAS Staten Island App",
    src: MASSIAPP,
    ctaText: "View",
    ctaLink: "https://apps.apple.com/us/app/mas-si/id6683310989",
    techBadges: [
      { name: "React Native", color: "bg-blue-100 text-blue-800" },
      { name: "Expo", color: "bg-green-100 text-green-800" },
      { name: "TypeScript", color: "bg-purple-100 text-purple-800" },
      { name: "Firebase", color: "bg-orange-100 text-orange-800" },
      { name: "Push Notifications", color: "bg-cyan-100 text-cyan-800" },
      { name: "AI Integration", color: "bg-pink-100 text-pink-800" }
    ],
    content: () => {
      return (
        <p>
          <strong>Key Features</strong>
          <br />
          <strong>Tailored Notification Center</strong><br />
          Receive custom alerts about the programs and events that matter most to you.
          Filter notifications based on your preferences, ensuring you never miss an activity you want to attend.
          <br /> <br />

          <strong>Personalized Playlists</strong><br />
          Create and organize playlists of your favorite recorded lectures directly within the app.
          Enhance your learning experience with AI-generated summaries and keynotes for each lecture, providing quick takeaways and in-depth insights.
          <br /> <br />

          <strong>Jummah Notifications</strong><br />
          Stay informed about weekly Friday prayer (Jummah) talks.
          Access details such as the topic and speaker for each session, ensuring you’re always up to date.
          <br /> <br />

          <strong>Community Integration</strong><br />
          Seamlessly bridge the gap between programs and community members by having all essential information at your fingertips.
          Empower community engagement by making program details easily accessible and actionable.
          <br /> <br />

          <strong>Why Choose MAS Staten Island App?</strong><br />
          This app is more than a tool—it's a gateway to staying connected with your masjid and fellow community members. Whether it's attending programs, learning from lectures, or keeping up with Jummah details, the MAS Staten Island app ensures you're always in the loop.
          Download the MAS Staten Island app today and bring your community experience to the next level!
          <br /><br />
          <strong>Technologies Used</strong><br />
          {/* <div className="flex flex-wrap gap-2 mt-2">
            <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">React Native</span>
            <span className="px-3 py-1 bg-green-100 text-green-800 text-xs rounded-full">Expo</span>
            <span className="px-3 py-1 bg-purple-100 text-purple-800 text-xs rounded-full">TypeScript</span>
            <span className="px-3 py-1 bg-orange-100 text-orange-800 text-xs rounded-full">Firebase</span>
            <span className="px-3 py-1 bg-cyan-100 text-cyan-800 text-xs rounded-full">Push Notifications</span>
            <span className="px-3 py-1 bg-pink-100 text-pink-800 text-xs rounded-full">AI Integration</span>
            <span className="px-3 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full">Audio Streaming</span>
            <span className="px-3 py-1 bg-indigo-100 text-indigo-800 text-xs rounded-full">App Store</span>
          </div> */}
        </p>
      );
    },
    state: true
  },
  // {
  //   description: "This Python project addresses the manual task of creating PIP demand letters by automatically parsing patient billing data from Excel spreadsheets using Pandas. Leveraging ReportLab, the script generates precise, individualized PDF letters for auto insurance claims.",
  //   title: "TheraOffice Excel Scraper",
  //   src: PIPDemand,
  //   ctaText: "View",
  //   ctaLink: "https://github.com/Temur662/TheraOfficeExcelScraper",
  //   content: () => {
  //     return (
  //       <p>
  //        <strong>TheraOffice Excel Scraper</strong>
  //         <br/>
  //         This project was developed in collaboration with a law firm to streamline the creation of over 2,000 demand letters.
  //         <br />
  //         It Reads patient and billing data directly from an Excel file (.XLS or .xlsx).
  //         Cleans and formats data, handling potential errors in date and numeric columns.
  //         Filters records specifically for patients with claims under designated auto insurance providers.
  //         Calculates the outstanding balance for each service line and aggregates the total balance per patient.
  //         Groups charges and patient details by Patient ID.
  //         Provides console output summarizing the processed information for each patient.
  //         Includes basic error handling for file not found and missing columns.
  //         Data Loading: Reads the specified Excel file into a pandas DataFrame.
  //         Data Cleaning:
  //         Converts date columns to datetime objects.
  //         Converts financial columns (Total Charges, Payments, Adjustments, Credits) to numeric types, handling errors and filling missing values with 0.
  //         Ensures other key columns are treated as strings.
  //         Balance Calculation: Computes the LineBalance for each individual charge line by subtracting payments, adjustments, and credits from the total charge.
  //         Filtering: Selects rows where the Primary Insurance column contains one of the keywords from the AUTO_INSURANCES list and the visit date is valid.
  //         Grouping & Aggregation:
  //         Groups the filtered data by Pat ID.
  //         Aggregates summary information for each patient (Name, Insurance ID, Dates of Service, Total Balance, etc.).
  //         Collects detailed charge information (Date, CPT, Provider, Facility, Line Balance, etc.) into a list for each patient.
  //         PDF Generation: Iterates through the summarized patient data. For each patient, it calls the generate_pdf function (from the GenPDF module, which utilizes the reportlab library) to create a PDF demand letter named FirstName_LastName.pdf.
  //         Output: Prints a summary of each patient's information and charge details to the console after generating their PDF.
  //       </p>
  //     );
  //   },
  //   state : true
  // }
];
