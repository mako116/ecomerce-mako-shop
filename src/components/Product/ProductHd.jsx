import React from 'react'
import {TbArrowRight} from "react-icons/tb"
export const ProductHd = (props) => {

  const {product} = props;
   return (
    <div className="   my-4">
     <div className="flex items-center flex-wrap gap-x-2 font-[500] capitalize">
     Home <TbArrowRight/> Shop <TbArrowRight/> {product.category} <TbArrowRight/>
     </div>
      <span className="">
        {product.name}
      </span>
    </div> 
  )
}
