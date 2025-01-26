import Image from "next/image"
import profilePic from '@/public/profilepic.png'
import { LinkedinIcon, Github, Mail, FileText } from "lucide-react"
import { motion } from "framer-motion"

export function ProfileCard() {
  const socials = [
    {icon : <FileText className="text-[#3d53e2] hover:cursor-pointer h-[30px] w-[30px]"/>, link : 'https://temur-resume.tiiny.site'},
    {icon : <LinkedinIcon className="text-[#3d53e2] hover:cursor-pointer h-[30px] w-[30px]"/>, link : 'https://www.linkedin.com/in/temurbek-sayfutdinov/'},
    {icon : <Github className="text-[#3d53e2] hover:cursor-pointer  h-[30px] w-[30px]"/>, link: 'https://github.com/Temur662'},
    {icon : <Mail className="text-[#3d53e2] hover:cursor-pointer  h-[30px] w-[30px]"/>, link : 'https://mailxto.com/y7nabhjw6y'}
  ]
  return (
    <div className="bg-white rounded-3xl p-6 flex flex-col items-center text-center max-w-sm max-h-md">
      <div className="relative w-full aspect-square mb-4 bg-[#3d53e2] rounded-2xl overflow-hidden">
        <Image src={profilePic} alt="profile pic" objectFit="cover" priority/>
      </div>
      <h2 className="text-2xl font-bold mb-2">Temurbek Sayfutdinov</h2>
      <div className="w-12 h-12 bg-[#3d53e2] rounded-full flex items-center justify-center mb-4">
        <span className="text-white text-2xl">⚽️</span>
      </div>
      <p className="text-gray-600 mb-6">A Software Engineer who loves developing innovative solutions.</p>

      <div className="flex flex-row gap-x-8">

        {
          socials.map((social) => (
            <a href={social.link} key={social.link}>
              <motion.div
                whileHover={{ scale : 1.5 }}
              >
                {social.icon}
              </motion.div>
            </a>
          ))
        }

      </div>

    </div>
  )
}

