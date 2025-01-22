import React from 'react'
import { ToolCard } from './ToolCard'
import Reacticon from '../_icons/ReactIcon'
import HTML5 from '../_icons/HTML'
import PostgreSQL from '../_icons/PostgreSQL'
import Supabase from '../_icons/Supabase'
export default function FullStackDevCard() {
  const tools = [
    {title : 'React', icon : <Reacticon />},
    {title : 'HTML', icon : <HTML5 />},
    {title : 'PostgreSQL', icon : <PostgreSQL />},
    {title : 'Supabase' , icon : <Supabase />}
  ]
  return (
    <div className='flex flex-col items-center justify-center'>
        <p className='text-2xl font-bold text-[#3d53e2] text-center'>Full Stack Development</p>
        { /* What Tools / Frameworks */ }
        <section className='flex flex-row gap-x-3 flex-wrap w-full justify-center '>
            {
                tools.map((tool) => (
                    <ToolCard title={tool.title} icon={tool.icon} key={tool.title}/>
                ))
            }
        </section>

    </div>
  )
}
