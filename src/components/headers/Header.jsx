import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Navbar } from './Navbar'
import { FaOpencart, FaUser, FaUserCircle } from 'react-icons/fa'
import { MdClose, MdLogout, MdMenu } from 'react-icons/md';

export const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const toggleMenu = () => setMenuOpened(!menuOpened);


  return (
    <header className='fixed top-0 left-0 m-auto  w-full bg-white ring-1 ring-slate-900/5 z-10'>
        <div className='px-4 flex justify-between items-center py-3 max-xs:px-2'>
            <div>

              {/* logo */}
                <Link to="/">
                <h3>mako</h3>
                </Link>
            </div>

            {/* navbar desktop */}
            <div className='hidden md:flex gap-x-5 xl:gap-x-10 
            medium-15'>
             <Navbar />
             </div>
             
             {/* mobile */} 
             <div className={`${menuOpened ? 
               'flex item-center flex-col gap-y-12 fixed top-20 right-8 p-12 bg-white rounded-3xl shadow-md w-64 medium-16 ring-1 ring-slate-900/5 transition-all duration-300' 
              : 'flex item-center flex-col gap-y-12 fixed top-20 p-12 bg-white rounded-3xl shadow-md w-64 medium-16 ring-1 ring-slate-900/5 transition-all duration-300 -right-[100%]'}`}>
             <Navbar />
             </div>

             {/* btns */}
             <div className="flex justify-between sm:gap-x-6 font-bold items-center">
              {!menuOpened? (
               <MdMenu className='md:hidden cursor-pointer
               hover:ring-secondary mr-2 p-1 ring-1 ring-slate-900/30 h-8
               w-8 rounded-full' onClick={toggleMenu}/>
               ) : (
               <MdClose className='md:hidden cursor-pointer
               hover:ring-secondary mr-2 p-1 ring-1 ring-slate-900/30 h-8
               w-8 rounded-full' onClick={toggleMenu}/>
               )}

               <div className="flex justify-between items-center sm:gap-x-6">
                <NavLink to={"cartpage"} className="flex relative">
                  <FaOpencart className="p-1 h-8 w-8 ring-slate-900/30 ring-1 rounded-full"/>
                  <span className='absolute -top-3 -right-1 flex justify-center w-5 h-5 rounded-ful bg-red-500 text-white medium-14  rounded-full'>
                    0
                  </span>
                  </NavLink>
                  {/* <NavLink to={"logout"} className="flex items-center p-3 bg-orange-400 text-white rounded-lg">
                    <MdLogout/>
                    Logout
                  </NavLink> */}
                  <NavLink to={"login"} className="flex items-center gap-x-2 bg-transparent p-3 medium-16">
                    <FaUserCircle/>
                    Login
                  </NavLink>
               </div>
              </div>
        </div>
    </header>
  )
}
