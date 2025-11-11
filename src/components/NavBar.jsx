'use client'
import React from "react";
import { IoIosMenu } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import Image from "next/image";
import { FaRegEdit , FaRegBell} from "react-icons/fa";

const NavBar = () => {
  return (
      <div className="bg-white fixed w-full h-20 flex justify-between items-center 
    px-5 shadow-lg">
      {/* nav left */}
      <div className="flex items-center gap-4">
        <IoIosMenu size={40} color="gray" className="cursor-pointer"/>
        <Image
          src="/logo.png"
          alt="Inkspire Logo"
          width={100}
          height={100}
              />
        {/* search bar */}
              <div className="flex items-center gap-4 bg-gray-200
               px-4 py-2 rounded-full">
            <CiSearch size={20} /> 
            <input type="text" placeholder="Search" />
             </div>
      </div>
      {/* end nav left */}
          {/* nav right */}
          <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
            <FaRegEdit size={20} color="gray" className="cursor-pointer" />
              <h3 className="text-xl text-gray-500">write</h3>
              </div>
              <FaRegBell size={20} color="black" className="cursor-pointer" />
              <div className="h-10 text-white w-10 bg-emerald-700 
              rounded-full flex items-center justify-center">
                 <h3>MW</h3> 
              </div>
          </div>
      {/* end nav right */}
    </div>
  );
};

export default NavBar;
