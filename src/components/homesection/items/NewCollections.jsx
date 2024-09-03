import React from 'react'
import Latest from '../../../Datas/Latest'
import { Item } from './Item'

export const NewCollections = () => {
  return (
    <section className='bg-amber-200'>
    <div className="flex flex-col m-auto px-[20px] py-12 x:py-28 xl:w-[88%]">
        <h3 className='text-4xl text-center pb-2 font-bold'>Popular Products</h3>
        <hr className='h-[3px] md:w-1/2 mx-auto bg-gradient-to-1 from-transparent via-black to-transparent mb-16'/>
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
            {Latest.map((item)=>(
                <Item key={item.id} id={item.id} image={item.image} name={item.name} new_price={item.new_price}
                old_price={item.old_price}/>
            ))}
        </div>
    </div>
</section>
  )
}
