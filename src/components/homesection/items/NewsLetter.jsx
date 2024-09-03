import React from 'react'

export const NewsLetter = () => {
  return (
    <section className=' py-12 xl:py-28 bg-white'>
        <div className="mx-auto xl:w-[80%] flex justify-center flex-col gap-y-8 w-full max-w-[666px]">
            <h3 className='text-4xl'>Get Exclusive offers on Your EMail</h3>
            <h4 className='uppercase font-bold'>Subscribe to our newsletter</h4>
            <div className="flex justify-between ronded-full ring-1 ring-slate-900/5 hover:ring-slate-900/15 bg-gray-100 w-full max-w-[588px] rounded-full ">
            <input type="emai" placeholder='your email address'
            className='w-full bg-transparent ml-7 border-none outline-none font-medium rounded-full' />
            <button className='py-3 px-5 bg-gray-900 text-white rounded-full'>Subscribe</button>
            </div>
        </div>
    </section>
  )
}
