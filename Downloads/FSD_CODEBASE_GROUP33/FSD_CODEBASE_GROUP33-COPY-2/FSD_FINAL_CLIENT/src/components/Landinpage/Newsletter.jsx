import React from "react";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import Form from './Form';
import {Link} from "react-router-dom"
const Newsletter = () => {
    return (
       
        <div className="w-full py-16 text-white ">
            <div className="max-w-[1240px] mx-auto grid lg-grid-cols-3">
                {/* 3cols  as 2/3 part is for the text and remaining 1/3 is for the button for news letter */}
                {/* lg-col-span-2 means when large size it takes 3 columns
         */}
                <div className="lg:col-span-2 my-4">
                    <h1 className="md:text-5xl sm:text-3xl text-2xl font-bold py-2">
                        Want tips and tricks to become better at coding
                    </h1>

                    <p>Sign up to our news letter and stay up to date</p>
                </div>
                <div className="my-4">
                    <div className="flex flex-col sm:flex-row items-center justify-between w-full">
                        <input
                            className="p-3 flex w-full rounded-md text-black"
                            type="email"
                            placeholder="enter your email"
                        />
                        <Link to="/Forms">       <button className="bg-[#6c27c5] text-black   rounded-md font-medium w-[200px]  ml-4 my-6 px-6 py-3">
                        click me 
                        
                        </button></Link>
                 

                    </div>

                    {/* span is lowkey like a link */}
                    <p>
                        we care about protection of your data .Read our <span className="text-[#6c27c5]">Privacy Policy.</span>
                    </p>
                </div>

            </div>
        </div>
     
    );
};

export default Newsletter;
