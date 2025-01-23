'use client'
import { ProfileCard } from "./_components/ProfileCard";
import { HomeIcon, FolderIcon } from "lucide-react"
import FullStackDevCard from "./_components/FullStackDevCard";
import MobileDevCard from "./_components/MobileDevCard";
import { useEffect, useRef, useState } from "react";
import { useWindowSize } from "@uidotdev/usehooks";
import ProjectCards from "./_components/ProjectCards";
import MASSIAPP from '@/public/MASSIapp.png'
import RepairConnect from '@/public/RepairConnect2.png'
import MedianFiltering from '@/public/MedianFiltering.png'
import ExpandableCard from "@/components/ExpandableProjects";
export default function Home() {  
  const scrollableRef = useRef(null);
  const WindowSize = useWindowSize();
  const IntroRef = useRef(null)
  const ProjectsRef = useRef(null)
  const [ overlay, setOverlay ] = useState(true)
  const NavBar = () => {
    return(
      <nav className="bg-[#242526] p-4 flex justify-center gap-5 gap-x-12 backdrop-blur-md rounded-xl w-[250px] md:ml-[42%] ml-[20%]">
        {[
          { icon: HomeIcon, href: () => IntroRef.current.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" })  },
          { icon: FolderIcon, href: () => ProjectsRef.current.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" }) },
        ].map((item, index) => (
          <div key={index} className="text-gray-400 hover:text-white transition-colors"
            onClick={item.href}
          >
            <item.icon className="w-6 h-6" />
          </div>
        ))}
      </nav>
    )
  }
  const handleWheel = (event) => {
    if ( scrollableRef.current ) {
      // Programmatically scroll the right-side container
      scrollableRef.current.scrollTop += event.deltaY;
    }
  };
  const ProjectsAndApps = [
    { img : RepairConnect, title : 'RepairConnect', body : 'One app to schedule top mechanics, mobile mechanics, and mobile detailers bringing unmatched convenience to your doorstep.', link : '#', state : false},
    { img : MASSIAPP,  title : 'MAS Staten Island App', body : 'All-in-one platform designed to connect the Muslim American Society of Staten Island community.', link : 'https://apps.apple.com/us/app/mas-si/id6683310989', state : true },
    { img : MedianFiltering, title : 'Median Filtering', body : 'Median filtering algorithm to refine blurry and grainy images', link : 'https://github.com/Temur662/MedianFiltering', state : true}
  ]
  return (
    <div className="w-full bg-[#1a1a1a] text-white min-h-screen">
      {/* Top NavBar for both mobile & desktop */}
      <div className="pt-[2%]"/>
      <NavBar />

      <div 
      onWheel={WindowSize.width! > 768 ? handleWheel : undefined} // Capture wheel events here
      className={
        WindowSize.width! > 768 
          ? 'h-screen flex flex-row overflow-hidden w-screen' 
          : 'flex flex-col'
      }
    >
      {/*
       Left side (non-scrollable)
       Profile Card
      */}
      <div 
      className={
        WindowSize.width! > 768 
              ? 'w-2/5 p-6'
              : 'w-full p-6'
          }
      >
        <div className="float-right"><ProfileCard /></div>
      </div>
  
      {/*
       Right side (scrollable) 
       Intro + Tools
       Projects
       Contact Me
       */}
      <div
        ref={scrollableRef}
        className={
          WindowSize.width! > 768 
            ? 'w-3/5 p-6 overflow-y-auto'
            : 'w-full p-4 flex flex-col' // On mobile, allow normal scrolling of the entire page
        }
        style={{
          overflowX: 'clip', // Prevent horizontal scroll
        }}
      >
              {/* Intro + Tech Stacks */}
              <section className="max-w-[100%] md:max-w-[75%] md:h-[80vh] h-auto"
              ref={IntroRef}
              >
                  <h1 className="md:text-8xl text-6xl font-bold flex-col flex text-center self-center md:text-start md:self-start">
                    <span className="text-white">SOFTWARE</span>
                    <span className="text-gray-800">ENGINEER</span>
                  </h1>
                  <p className="text-gray-400 mt-4 max-w-md text-center self-center md:text-start md:self-start text-lg">
                  Passionate about creating intuitive and engaging user experiences. Specialize in transforming ideas into beautifully crafted products.
                  </p>
                  <div className="flex flex-col justify-between pt-9 overflow-wrap gap-8">
                      <FullStackDevCard />
                      <MobileDevCard />
                  </div>
              </section>

              {/* Projects & Experience */}
              <section className="max-w-[100%] md:max-w-[75%] md:pt-20 pt-10 pb-[60px]"
              ref={ProjectsRef}
              >
                  <h1 className="md:text-8xl text-6xl font-bold flex-col flex text-center self-center md:text-start md:self-start">
                    <span className="text-white">Projects</span>
                    <span className="text-gray-800">Apps</span>
                  </h1>
                  <div className="pt-12 w-[100%]">
                    <ExpandableCard />
                  </div>
              </section>
      </div>
    </div>
    </div>
  );
}


{
  /*
          <div className="overflow-y-auto w-[60%] "
          ref={scrollableRef}
          >
            <section className="">
                <h1 className="text-8xl font-bold flex-col flex">
                  <span className="text-white">SOFTWARE</span>
                  <span className="text-gray-600">ENGINEER</span>
                </h1>
                <p className="text-gray-400 mt-4 max-w-2xl">
                  Passionate about creating intuitive and engaging user experiences. Specialize in transforming ideas into
                  beautifully crafted products.
                </p>
                <div className="flex flex-row justify-between pt-9">
                    <FullStackDevCard />
                    <MobileDevCard />
                </div>
            </section>
  
            <section className="h-[800px]"/>
          </div>
  */

}
