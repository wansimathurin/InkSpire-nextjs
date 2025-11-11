'use client'
import React from 'react'
import { IoIosHome } from "react-icons/io";
import { PiBookmarks } from "react-icons/pi";
import { FaRegUser } from "react-icons/fa";
import { MdWebStories } from "react-icons/md";
import { ImStatsBars2 } from "react-icons/im";
import { FiUsers } from "react-icons/fi";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Sidebar = () => {
  const path = usePathname();

  const links = [
    {
      name:"home",
      icon:<IoIosHome size={24} color={path=='/home'&&'#007A55'} />
    },
    {
      name:"library",
      icon: <PiBookmarks size={24 } color={path == '/library' && '#007A55'} />
    },
    {
      name:"profile",
      icon: <FaRegUser size={24} color={path == '/profile' && '#007A55'}/>
    },
    {
      name:"stories",
      icon:<MdWebStories size={24} color={path == '/stories' && '#007A55'}/>
    },
    {
      name:"stats",
      icon: <ImStatsBars2 size={24} color={path == '/stats' && '#007A55'}/>
    },
  ]
  return (
    <div className="w-1/5 h-screen border-r border-r-gray-200 pt-30 px-5 max-w-[200px]">
      <ul>
        {links.map((link) => (
          <Link href={`/${link.name}`} key={link.name} className="flex items-center gap-3 py-2 px-2 hover:bg-gray-200 
          rounded-lg cursor-pointer mb-2">
            {link.icon}
            <span className={`capitalize text-lg ${path=='/'+link.name && 'text-emerald-800 font-bold'}`}>{link.name}</span>
          </Link>
        ))}
       </ul>
       <hr className="border-gray-200 my-10"/>
       <Link href={'/'}  className="flex items-center gap-3 py-2 px-2
        hover:bg-gray-200 
          rounded-lg cursor-pointer mb-2">
            <FiUsers size={24 } />
            <span className={"capitalize text-lg"}>Following</span>
          </Link>
    </div>
  )
}

export default Sidebar

