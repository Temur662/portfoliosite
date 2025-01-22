import React from 'react'
import { ToolCard } from './ToolCard'
import Reacticon from '../_icons/ReactIcon'
import Google from '../_icons/Google'
import Apple from '../_icons/Apple'
import Swift from '../_icons/Swift'
import Expo from '../_icons/Expo'
export default function MobileDevCard() {
    const tools = [
        {title : 'Android' , icon : <Google />},
        {title : 'React Native' , icon : <Reacticon />},
        {title : 'IOS', icon : <Apple />},
        {title : 'Swift', icon : <Swift />},
        {title : 'Expo', icon : <Expo />}
      ]
      return (
        <div className='flex flex-col items-center justify-center'>
            <p className='text-2xl font-bold text-[#3d53e2] text-center'>Mobile Development</p>
            { /* What Tools / Frameworks */ }
            <section className='flex flex-row gap-x-2'>
                {
                    tools.map((tool) => (
                        <ToolCard title={tool.title} icon={tool.icon} />
                    ))
                }
            </section>
    
        </div>
      )
}
