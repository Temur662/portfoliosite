import Image from "next/image"
import profilePic from '@/public/profilepic.png'

export function ProfileCard() {
  return (
    <div className="bg-white rounded-3xl p-6 flex flex-col items-center text-center max-w-sm max-h-md">
      <div className="relative w-full aspect-square mb-4 bg-[#3d53e2] rounded-2xl overflow-hidden">
        <Image src={profilePic} alt="profile pic" objectFit="cover" priority/>
      </div>
      <h2 className="text-2xl font-bold mb-2">Temurbek Sayfutdinov</h2>
      <div className="w-12 h-12 bg-[#3d53e2] rounded-full flex items-center justify-center mb-4">
        <span className="text-white text-2xl">⚽️</span>
      </div>
      <p className="text-gray-600 mb-6">A Software Engineer who has developed countless innovative solutions.</p>
    </div>
  )
}

