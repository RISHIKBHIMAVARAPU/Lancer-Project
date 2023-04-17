import React from 'react';

import {
 
  FaFacebookSquare,
  
  FaInstagram,
  FaTwitterSquare,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
      <div>
        <h1 className='w-full text-3xl font-bold text-[#6c27c5]'>F_code</h1>
        <p className='py-4'>F_code is india based coding freelance website
          All rights reserved to F_code @2022</p>
        <div className='flex justify-between md:w-[75%] my-6'>
            <FaFacebookSquare size={30} />
            <FaInstagram size={30} />
            <FaTwitterSquare size={30} />
            
            
        </div>
      </div>
  
    </div>
  );
};

export default Footer;
