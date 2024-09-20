"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import './File.css';
import { TiThMenu } from "react-icons/ti";
import { IoLogoApple } from "react-icons/io";
import { IoClose } from "react-icons/io5";

function Header() 
{
  const [toggle, setToggle] = useState(false);
  return (
    <header className="header">      
      <nav className="navbar">
        <div className="brand">
          <Link href="/" className="Logo">Cloud<IoLogoApple/>Hosting</Link>
        </div>

        <div className="menu">
        {toggle ? (<IoClose onClick ={() => setToggle(prev => !prev)} />) 
        : (  <TiThMenu  onClick= {() => setToggle(prev => !prev)} />)}
        </div>
        
        <div className="navLinksWrapper" style={{
            clipPath: toggle ? "polygon(0 0, 100% 0, 100% 100%, 0 100%)" : "" }}>
          <ul className="navLinks">
             <li>
             <Link href="/">Home</Link>
              <Link href="/articles">Articles</Link>
              <Link href="/about">About</Link>
              <Link href="/admin">Admin</Link>
             </li>
          </ul> 
        </div>
      </nav>
      
      <div className="right">
        <Link href="/login" className="btn">Login</Link>
        <Link href="/register" className="btn">Register</Link>
        <Link href="/emailjs" className="btn">Send-email</Link>
      </div>
    </header>
  );
}
export default Header;
