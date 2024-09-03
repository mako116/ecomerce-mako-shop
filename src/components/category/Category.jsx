import React from 'react'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'
import all_product from '../../Datas/all_products'
import { Item } from '../homesection/items/Item'

export const Category = ({category,banner}) => {
  return (
    <section className='py-12 xl:py-28 px-20'>
      <div className="">
        <div className="">
          <img src={banner} alt="" className='block my-7 mx-auto' />
        </div>
        <div className="flex justify-between my-8 mx-2 items-center">
          <h5>showing 1-12 <span>out of 36 products</span></h5>
          <div className="flex justify-between max:sm:p-4 gap-x-4 px-8 py-3 rounded items-center">
            Sort by <MdOutlineKeyboardArrowDown/>
            </div>
          </div>
          {/* container */}
          <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
           {all_product.map((item)=>{
             if (category === item.category) {
              return  <Item key={item.id} id={item.id} image={item.image} name={item.name} new_price={item.new_price}
              old_price={item.old_price}/>
            }
           })}
          </div>
          <div className="mt-16 text-center">
            <button className='px-6 text-black py-3 bg-[#fff] rounded-full shadow'>
              Load more
            </button>
          </div>
        </div>
     </section>
  )
}
