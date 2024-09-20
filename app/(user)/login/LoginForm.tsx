'use client';
import React ,{useState} from 'react';
import {toast} from 'react-toastify'; 
import {useRouter} from 'next/navigation';
const LoginForm = () => 
{
    const router = useRouter();
    const [email , setEmail]=useState("");
    const [password , setpassword]=useState("");
     
    const formSubmitHandler =(e:React.FormEvent) =>
    {
            e.preventDefault();
            if(email === "") return toast.error("Email is required");
            if(password === "") return toast.error("password is required");
            
            console.log({email , password});
            router.push('/');
    }
  return (
    <form onSubmit={formSubmitHandler} className='flex flex-col'>
        <input className='md-4 border rounded p-2 text-xl text-black mb-5' type="email"
         placeholder='Enter your email' 
         value={email} onChange={(e)=> setEmail(e.target.value)} />
         
        <input className='md-4 border rounded p-2 text-xl text-black mb-5' type="password"
         placeholder='Enter your password' 
         value={password} onChange={(e)=> setpassword(e.target.value)} />
        
        <button type="submit" className='text-2xl text-white bg-blue-950 p-2 rounded-lg font-bold'>Login</button>
    </form>
  );
};
export default LoginForm
