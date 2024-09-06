import React from 'react'
import POPULAR from '../../Datas/Popular'
import { Item } from './items/Item'
import all_products from '../../Datas/all_products'

export const Popular = ({category}) => {
  return (
    <section className='bg-white-200'>
        <div className="flex flex-col m-auto px-[20px] py-12 x:py-28 xl:w-[88%]">
            <h3 className='text-4xl text-center pb-2 font-bold'>Popular Products</h3>
            <hr className='h-[3px] md:w-1/2 mx-auto bg-gradient-to-1 from-transparent via-black to-transparent mb-16'/>
            <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
            {all_products.map((item)=>{
             if (item.category ===  "popular" ) {
              return  <Item key={item.id} id={item.id} image={item.image} name={item.name} new_price={item.new_price}
              old_price={item.old_price}/>
            }
           })} 
            </div>
        </div>
    </section>
  )
}
