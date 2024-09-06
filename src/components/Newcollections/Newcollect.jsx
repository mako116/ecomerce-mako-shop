// import React, { useContext } from 'react'
// import { ProductHd } from '../Product/ProductHd';
// import { useParams } from 'react-router-dom';
// import { ShopContext } from '../../Context/ShopCenter';
// import { ProductDisplays } from './ProductDisplays';
// // import { ProductDisplay } from './ProductDisplay';

//  const Newcollect = () => {
//     const {Latest} = useContext(ShopContext);
//     const {latestId} = useParams();
//     const latest = Latest.find((e)=> e.id === Number(latestId));
//     if(!latest){
//      return <div className="">
//        product not found! 
//      </div>
//     }
//   return (
//     <section>
//      <div className="py-28 px-5">
//        {/* <ProductHd Latest={Latest}/> */}
//        <ProductDisplays latest={latest} />
//        {/* <ProductDscription/> */}
//       </div>
//     </section>
//  )
// }

// export default Newcollect;
