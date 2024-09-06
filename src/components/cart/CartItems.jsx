import React, { useContext } from 'react'
import { ShopContext } from '../../Context/ShopCenter'
import {TbTrash} from "react-icons/tb"
 const CartSect = () => {

    const {all_products, cartItems,removeCart} = useContext(ShopContext);
 
    return (
    <section className='px-10 py-28 '>
        <table className='w-full mx-auto'>
            <thead>
                <tr className=' bg-slate-900/10 regular-18 sm:regular-22 text-start py-12'>
                    <th className='p-1 py-2'>Products</th>
                    <th className='p-1 py-2'>Title</th>
                    <th className='p-1 py-2'>Price</th>
                    <th className='p-1 py-2'>Quantity</th>
                    <th className='p-1 py-2'>Total</th>
                    <th className='p-1 py-2'>Remove</th>
                </tr>
            </thead>
            <tbody>
               {all_products.map((e) => {
                if(cartItems[e.id] > 0) {
                    return <tr key={e.id} className=' border-b border-slate-900/20 p-6 medium-14 text-center'>
                        <td>
                            <img src={e.image} alt="" 
                            width={43}
                            height={43}
                            className='rounded-lg ring-1 ring-slate-900/5 my-1'
                            />

                             </td>
                            <td><div className="line-clamp-3">
                                    {e.name}
                                </div>
                            </td>
                            <td>${e.new_price}</td>
                            <td className='w-16 h-16 bg-white'>{cartItems[e.id]}</td>
                            <td>${e.new_price * cartItems[e.id]}</td>
                            <td>
                                <div className="cursor-pointer text-red-500 text-[20px] pl-14">
                                    <TbTrash onClick={()=> removeCart(
                                        e.id
                                    )} />
                                </div>
                            </td>
                    </tr>

                    }
                    return null ;
                })}
                    
                    
            </tbody>
           
        </table>
        <div className="flex flex-col gap-20 my-16 p-8 md:flex-row rounded-md
         bg-white w-full max-w-[667px]">
               
                <div className="flex flex-col gap-10">
                <h4 className='font-bold'>Summary</h4>
                    <div className="flex justify-between">
                        <h4>Subtotal:</h4>
                        <h4 className='text-gray-500'>${0}</h4>
                    </div>
                    <hr />
                    <div className="flex justify-between">
                        <h4>Shipping Fee:</h4>
                        <h4 className='text-gray-500'>Free</h4>
                    </div>
                    <hr />
                    <div className='flex justify-between py-4'>
                        <h4 className='font-bold'>Total:</h4>
                        <h4 className='font-bold'>${0}</h4>
                    </div>
                </div>
                <button className='bg-gray-700 text-white rounded py-[10px] px-[20px]'>Checkout</button>
                <div className="flex flex-col gap-10">
                    <h4 className='font-bold capitalize'>Your Coupon Code enter here:</h4>
                    <div className="flex justify-between pl-5 h-12 bg-gray-200 rounded-full ring-1 ring-slate-900/10">
                        <input type="text" placeholder='Coupon Code'
                        className='bg-transparent border-none outline-none' />
                        <button className="bg-gray-800  text-white py-[10px] px-[20px]">submit</button>
                    </div>
                </div>
            </div>
    </section>
  )
}

export default CartSect