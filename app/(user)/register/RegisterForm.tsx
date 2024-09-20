'use client';
import React ,{useState} from 'react';
import {toast} from 'react-toastify'; 
const RegisterForm = () => 
{
    const [username , setusername]=useState("");
    const [email ,setEmail] =useState("");
    const [password , setpassword]=useState("");
    
    const formSubmitHandler =(e:React.FormEvent) =>
    {
            e.preventDefault();
            if(username === "") return toast.error("UserName is required"); 
            if(email === "") return toast.error("Email is required");
            if(password === "") return toast.error("password is required");
            console.log({email , password ,username});

    }
  return (
    <form onSubmit={formSubmitHandler} className='flex flex-col'>
        <input className='md-4 border border-gray-500 rounded p-2 text-xl text-black mb-5' type="text"
         placeholder='Enter your Username' 
         value={username} onChange={(e)=> setusername(e.target.value)} />
        
        <input className='md-4 border border-gray-500  rounded p-2 text-xl text-black mb-5' type="email"
         placeholder='Enter your email' 
         value={email} onChange={(e)=> setEmail(e.target.value)} />
        
        <input className='md-4 border border-gray-500 rounded p-2 text-xl text-black mb-3' type="password"
         placeholder='Enter your password' 
         value={password} onChange={(e)=> setpassword(e.target.value)} />
        
        <button type="submit" className='text-2xl text-white bg-blue-950 p-2 rounded-lg font-bold'>Register</button>
    </form>
  );
};
export default RegisterForm;
