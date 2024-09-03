import React from 'react'
import { FaSearch } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export const Item = ({id, name, image, new_price,old_price}) => {
  return (
    <div className='rounded-[10px] overflow-hidden shadow-lg'>
        <div className="relative flex justify-center items-center group overflow-hidden transition-all duration-100">
            <Link  
            to={`product/${id}`}
            className='h-12 w-12 bg-white rounded-full flex justify-center items-center absolute top-1/2 !py-2 z-20 scale-0 group-hover:scale-100 transistion-all duration-700'>
            <FaSearch className='hover:rotate-90 hover:scale-125 transistion-all duration-200'/></Link>

            <img src={image} alt="product"
            className='w-full block object-cover group-hover:scale-110 transistion-all duration-1000' />
        </div>
        <div className="p-4 overflow-hidden">
            <h4 className='my-[6px] medium-16 line-clamp-2 text-gray-500 font-bold'>{name}</h4>
            <div className="flex gap-5 items-center">
            <div className="font-bold">{new_price}</div>
                <div className="text-orange-300 font-bold line-through">{old_price}</div>
            </div>
        </div>
    </div>
  )
}
