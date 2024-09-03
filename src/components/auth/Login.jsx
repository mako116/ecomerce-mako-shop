import React from 'react'

export const Login = () => {
  return (
    <section className='px-10 flex justify-center bg-gray-300 py-3 flex-col pt-32 '>
      <div className="max-w-[555px] h-[600px] bg-gray-100 shadow m-auto px-14 py-10 rounded-md">
        <h3 className='text-black font-bold'>Sign Up</h3>
        <div className="flex items-center flex-col gap-4 mt-7">
          <input type="text" placeholder='Your Name' className='h-14 w-full pl-5 bg-slate-900/5 outline-none rounded-xl' />
          <input type="email" placeholder='Email Address' className='h-14 w-full pl-5 bg-slate-900/5 outline-none rounded-xl' />
          <input type="password" placeholder='Password' className='h-14 w-full pl-5 bg-slate-900/5 outline-none rounded-xl' />
         </div>
         <button className='my-5 px-6 py-3 bg-orange-500 text-white rounded-full w-fulls'>Continue</button>
         <p>Already have an account? <span>Login</span></p>
         <div className="">
          <input type="checkbox" name='' id='' />
          <p>By Continuing, i agree to the terms of use & Privacy policy</p>
         </div>
      </div>
    </section>
  )
}
