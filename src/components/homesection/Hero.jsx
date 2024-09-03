import React from 'react'
import { FaStar } from 'react-icons/fa'
import { MdOutlineLocalOffer, MdStar } from 'react-icons/md'
import { NavLink } from 'react-router-dom'

export const Hero = () => {
  return (
    <section className='bg-gray-200 w-full h-screen'>
       <div className="relative top-32 xs:top-52 px-[20px]">
        <h1 className='md:text-5xl text-3xl capitalize max-w-[37rem]'>Eco shopmart</h1>
        <p className='tracking-[1px] md:leading-[33px] py-[20px] leading-[23px] text-gray-400 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam unde repudiandae eligendi illo molestiae quam dolorem nulla, dicta ipsa repellat. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum libero, consequuntur aliquid ducimus unde iure optio. Rem voluptas dolores obcaecati!</p>
        <div className="flex items-center gap-x-4 my-10">
            <div className="flex items-center gap-x-3">
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
            </div>
            <div className=" font-bold ">176k
                <span className='font-medium ml-'>
                    Excellent Reviews
                </span>
            </div>
           
        </div>
        <div className="max-xs:flex-col flex gap-2">
                <NavLink to={""} className="bg-gray-800 px-5 py-3 text-white rounded-full flex items-center">shop now</NavLink>
                <NavLink to={""} className="bg-amber-800 px-6 py-3 text-white rounded-full flex items-center gap-x-2"><MdOutlineLocalOffer className='text-2xl' /> Offers</NavLink>
            </div>
        </div> 
    </section>
  )
}
