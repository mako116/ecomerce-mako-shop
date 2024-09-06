import React, { useContext } from 'react'
 import { useParams } from 'react-router-dom';
import { ProductHd } from './ProductHd';
import { ShopContext } from '../../Context/ShopCenter';
import { ProductDisplay } from './ProductDisplay';
import { ProductDscription } from './ProductDscription';
   
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
      <div className="py-28 px-5">
        <ProductHd product={product}/>
        <ProductDisplay product={product} />
        <ProductDscription/>
       </div>
     </section>
  )
}

export default Product;
