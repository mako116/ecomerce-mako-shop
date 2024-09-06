// import React from 'react'
// import imag from "../../assets/shirts/tees-facecap-combo.jpg"
// import {MdStar} from "react-icons/md"


// export const ProductDisplays = (props) => {
//     const {latest} = props;
//   return (  
//     <section>
//         <div className="flex flex-col gap-14 xl:flex-row">
//             <div className="flex gap-x-2 xl:flex-1">
//                 <div className="flex flex-col gap-[7px] flex-wrap">
//                     <img src={imag} alt="latests" className='max-h-[99px] xl:max-h-none xl:h-[99px]' />
//                     <img src={imag} alt="latests" className='max-h-[99px] xl:max-h-none xl:h-[99px]' />
//                     <img src={imag} alt="latests" className='max-h-[99px] xl:max-h-none xl:h-[99px]' />
//                     <img src={imag} alt="latests" className='max-h-[99px] xl:max-h-none xl:h-[99px]' />

//                 </div>
//                 <div className="">
//                 <img src={latest.image} alt="latests"  />
               
//                 </div>
//             </div>
//             <div className="flex-col flex">
//                     <h3 className='text-[30px] font-bold xl:max-w-[800px]'>{latest.name}</h3>
//                     <div className="flex gap-x-3 text-orange-500 medium-22">
//                         <MdStar />
//                         <MdStar />
//                         <MdStar />
//                         <MdStar />
//                         <MdStar />
//                         <p>{112}</p>
//                     </div>
//                     <div className="flex gap-x-6 medium-20 my-4">
//                         <div className="line-through">
//                             {latest.old_price}
//                         </div>
//                         <div className="text-orange-500 ">
//                             {latest.new_price}
//                         </div>
                       
//                     </div>
//                     <div className="mb-4">
//                             <h4 className='font-bold'>select Size:</h4>
//                             <div className="flex gap-3 my-3">
//                             <div className="ring-2 ring-slate-900 h-10 w-10 flex justify-center cursor-pointer">
//                                 S
//                             </div>
//                             <div className="ring-2 ring-slate-900/10 h-10 w-10 flex justify-center cursor-pointer">
//                                 M
//                             </div>
//                             <div className="ring-2 ring-slate-900/10 h-10 w-10 flex justify-center cursor-pointer">
//                                 L
//                             </div>
//                             <div className="ring-2 ring-slate-900/10 h-10 w-10 flex justify-center cursor-pointer">
//                                 XL
//                             </div>
                            
//                             </div>
//                             <div className="flex flex-col gap-y-3 mb-4 max-w-[555px]">
//                                 <button className='bg-white border-[#000] hover:bg-black hover:text-white border text-black py-3 px-7 rounded-[4px] tracking-widest uppercase'>Add to cart</button>
//                                 <button className='bg-black border-[#000] hover:bg-white hover:text-black border text-white py-3 px-7 rounded-[4px] tracking-widest uppercase'>Buy it now</button>
//                             </div>
//                             <p><span>Category :</span> women | Jacket | Winter </p>
//                             <p><span>Tags :</span> Modern | Latest</p>
//                         </div>
//                 </div>
//         </div>
//     </section>
//   )
// }
