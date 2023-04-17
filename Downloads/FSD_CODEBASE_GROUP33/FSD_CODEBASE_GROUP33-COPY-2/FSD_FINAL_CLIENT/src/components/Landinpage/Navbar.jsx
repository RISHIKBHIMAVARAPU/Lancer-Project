// shortcut use rafce to get quick react 
//template to export the components
import React, { useState } from 'react';
// import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Cards from './Cards';
import Newsletter  from  './Newsletter';
import Hero from './Hero';
import {useEffect} from "react"
// importing the icons 


const Navbar1 = () => {
  const [nav, setNav] = useState(true);

  const handleNav = () => {
        //setnav to the opposite to its current value

    setNav(!nav);
  };

  useEffect(()=>{
    document.body.style.backgroundColor="black";

    return ()=>{document.body.style.backgroundColor="white";}
    
  },[])
  
  return (
       <nav>
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
      <h1 className='w-full text-3xl font-bold text-[#6c27c5]'>GiGWorK</h1>
      <ul className='hidden md:flex'>
        <li className='p-4' style={{listStyleType: "none"}}><Link to="/signin" style={{color:'white',textDecoration:'none'}}> Login </Link></li>
        <li className='p-4' style={{listStyleType: "none"}}><Link to="/signup" style={{color:'white',textDecoration:'none'}} > Signup </Link></li>
        <li className='p-4' style={{listStyleType: "none"}}><Link to="/" style={{color:'white',textDecoration:'none'}} > About</Link></li>
        <li className='p-4' style={{listStyleType: "none"}}><Link to="/Forms" style={{color:'white',textDecoration:'none'}} > Contact </Link></li>
      </ul>
      {/* <div onClick={handleNav} className='block md:hidden'>
          {!nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
      </div> */}

      {/*  the   block md hidden will make it invisible in pc and only 
visible  in mobile  devices */}
      {/* <div className={nav === false  ?'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300]': 'fixed left-[100%]' }>
      <h1 className='w-full text-3xl font-bold text-[#6c27c5] m-4'>   F_code.</h1>

      <ul className='uppercase p-4'>
      <li className='p-4 border-b border-gray-600'>Home</li>
      <li className='p-4 border-b border-gray-600'>Company</li>
      <li className='p-4 border-b border-gray-600'>Resources</li>
      <li className='p-4 border-b border-gray-600'>About</li>
      <li className='p-4'>Contact</li> 

      </ul> */}

      {/* </div> */}
    </div>
    </nav>
    
  );
};

export default Navbar1;
