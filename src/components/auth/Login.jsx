import React, { useState } from 'react'

export const Login = () => {

  const [State, setState] = useState("Login");
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email : ""
  })

  const changeHandler =(e) => {
    setFormData({...formData,[e.target.name]:e.target.value});
  }
  const login = async () => {
    console.log("login function yes",formData);
    let responsData;
    await fetch("http://localhost:4000/login",{
      method:"POST",
      headers:{
        Accept: "application/formData",
        'Content-Type': "application/json",
      },
      body: JSON.stringify(formData)
    }).then((response)=> response.json()).then((data)=> responsData = data)
    if(responsData.success){
      localStorage.setItem("auth-token", responsData.token);
      window.location.replace("/")
    }
    else{
      alert(responsData.errors)
    }
  }

  const signup = async () => {
    console.log("signup function yes",formData);
    let responsData;
    await fetch("http://localhost:4000/signup",{
      method:"POST",
      headers:{
        Accept: "application/formData",
        'Content-Type': "application/json",
      },
      body: JSON.stringify(formData)
    }).then((response)=> response.json()).then((data)=> responsData = data)
    if(responsData.success){
      localStorage.setItem("auth-token", responsData.token);
      window.location.replace("/")
    }
    else{
      alert(responsData.errors)
    }
  }
  return (
    <section className='px-10 flex justify-center bg-gray-300 py-3 flex-col pt-32 '>
      <div className="max-w-[555px] h-[600px] bg-gray-100 shadow m-auto px-14 py-10 rounded-md">
        <h3 className='text-black font-bold'>{State}</h3>
        <div className="flex items-center flex-col gap-4 mt-7">
          {State === "Sign up" ? <input name='username' value={formData.username} onChange={changeHandler} type="text" placeholder='Your Name' 
          className='h-14 w-full pl-5 bg-slate-900/5 outline-none rounded-xl' /> : "" }
          <input name='email' value={formData.email} onChange={changeHandler} type="email" placeholder='Email Address' className='h-14 w-full pl-5 bg-slate-900/5 outline-none rounded-xl' />
          <input name='password' value={formData.password} onChange={changeHandler} type="password" placeholder='Password' className='h-14 w-full pl-5 bg-slate-900/5 outline-none rounded-xl' />
         </div>
         <button onClick={()=> (State === "Login" ? login():signup())} className='my-5 px-6 py-3 bg-orange-500 text-white rounded-full w-full'>Continue</button>
         {State === "Sign up" ?
         <p>Already have an account? <span className=' cursor-pointer underline' onClick={()=> {setState("Login")}}>Login</span></p>
          : <p>Create an account? <span className=' cursor-pointer underline' onClick={()=> {setState("Sign up")}}>Click here</span></p> }

         {/* <button className='my-5 px-6 py-3 bg-orange-500 text-white rounded-full w-fulls'>Continue</button> */}
        

         <div className="">
          <input type="checkbox" name='' id='' />
          <p>By Continuing, i agree to the terms of use & Privacy policy</p>
         </div>
      </div>
    </section>
  )
}
