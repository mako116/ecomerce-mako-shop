import React, { useContext } from 'react'
 import { useParams } from 'react-router-dom';
import { ProductHd } from './ProductHd';
import { ShopContext } from '../../Context/ShopCenter';
   
const Product = () => {
     const {all_products} = useContext(ShopContext);
     const {productId} = useParams();
     const product = all_products.find((e)=> e.id === Number(productId));
     if(!product){
      return <div className="">
        product not found! 
      </div>
     }
   return (
     <section>
      <div className="">
        <ProductHd product={product}/>
       </div>
     </section>
  )
}

export default Product;
