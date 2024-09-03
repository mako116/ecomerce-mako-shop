import React from 'react'
import {TbArrowRight} from "react-icons/tb"
export const ProductHd = (props) => {

  const {product} = props;
   return (
    <div className="">
      Home <TbArrowRight/> Shop <TbArrowRight/>
      {product.category} <TbArrowRight/> {product.name}
    </div> 
  )
}
