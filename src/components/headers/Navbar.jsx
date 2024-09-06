import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import {MdCategory, MdContacts, MdHomeFilled, MdShop2} from "react-icons/md"
export const Navbar = () => {
 

  return (
    <nav className='md:flex gap-x-5 xl:gap-x-10 
            medium-15'>
        <NavLink to={"/"} className={({isActive})=> isActive ? "text-orange-400 relative flex-1 after:w-full after:h-[1px] after:bg-orange-400 after:absolute after:-bottom-0 after:right-0" : ""}><div className="flex items-center gap-x-1 pb-4"> <MdHomeFilled />Home</div></NavLink>
        <NavLink to={"/mens"} className={({isActive})=> isActive ? "text-orange-400 relative flex-1 after:w-full after:h-[1px] after:bg-orange-400 after:absolute after:-bottom-0 after:right-0" : ""} ><div className="flex items-center gap-x-1 pb-4"> <MdCategory />Men's</div></NavLink>
        <NavLink to={"women"} className={({isActive})=> isActive ? "text-orange-400 relative flex-1 after:w-full after:h-[1px] after:bg-orange-400 after:absolute after:-bottom-0  after:right-0" : ""}><div className="flex items-center gap-x-1 pb-4"> <MdShop2 />women's</div></NavLink>
        <NavLink to={"/kids"} className={({isActive})=> isActive ? "text-orange-400 relative flex-1 after:w-full after:h-[1px] after:bg-orange-400 after:absolute after:-bottom-0 after:right-0" : ""}><div className="flex items-center gap-x-1 pb-4"> <MdContacts />Kid's</div></NavLink>

    </nav>
  )
}
