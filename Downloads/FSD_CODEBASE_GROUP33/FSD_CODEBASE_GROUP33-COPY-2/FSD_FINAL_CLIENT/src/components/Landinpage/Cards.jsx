import React from 'react';
// import single from '../assets/single.png'
// import double from '../assets/double.png'
// import triple from '../assets/triple.png'
import p1 from '../assets/p1.jpg'
import p2 from '../assets/p2.jpg'
import p3 from '../assets/p3.jpg'
import p4 from '../assets/p4.jpg'
import p5 from '../assets/p5.jpg'
import {Link} from "react-router-dom"
const Cards = () => {
  return (
    <div className='w-full py-[10rem] px-4 bg-white'>

    {/* the below div is our container */}
    <div className='max-w-[1240px] mx-auto grid md:grid-cols-5 gap-8'>

        {/* now div for the cards */}
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
            <img className='w-20 mx-auto mt-[-3rem] bg-white' src={p1} alt="" />
            <h2 className='text-2xl font-bold text-center py-8 '>Pcr</h2>
            <p className='text-center text-4xl font-bold'>Lead1</p>

            <div className='text-center font-medium' >
                <p className='py-2 border-b mx-8 mt-8'>Full stack React Developer</p>
                <p className='py-2 border-b mx-8'> Freelancer</p>
                <p className='py-2 border-b mx-8'>Intern at google</p>
            </div>
            <Link to="/Forms">
            <button className= 'bg-[#6c27c5] w-[150px] rounded-md font-medium my-6 mx-auto  px-6 py-3'>contact</button>
            </Link>
        </div>
{/* ------ */}
        <div className="w-full shadow-xl bg-gray-100 flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
            <img className='w-20 mx-auto mt-[-3rem] bg-white' src={p2} alt="" />
            <h2 className='text-2xl font-bold text-center py-8 '>Rishik</h2>
            <p className='text-center text-4xl font-bold'>Lead2</p>

           
            <div className='text-center font-medium' >
                <p className='py-2 border-b mx-8 mt-8'>Full stack React Developer</p>
                <p className='py-2 border-b mx-8'> Freelancer</p>
                <p className='py-2 border-b mx-8'>Intern at nasa</p>
            </div>
            <Link to="/Forms">
            <button className= 'bg-[#6c27c5] w-[150px] rounded-md font-medium my-6 mx-auto  px-6 py-3'>contact</button>
            </Link>        </div>
{/* ----- */}
        <div className="w-full shadow-xl  bg-gray-100  flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
            <img className='w-20 mx-auto mt-[-3rem] bg-white' src={p3} alt="" />
            <h2 className='text-2xl font-bold text-center py-8 '>Royal</h2>
            <p className='text-center text-4xl font-bold'>Lead3</p>

            <div className='text-center font-medium' >
                <p className='py-2 border-b mx-8 mt-8'>Full stack React Developer</p>
                <p className='py-2 border-b mx-8'> Freelancer</p>
                <p className='py-2 border-b mx-8'>Intern at apple</p>
            </div>
            <Link to="/Forms">
            <button className= 'bg-[#6c27c5] w-[150px] rounded-md font-medium my-6 mx-auto  px-6 py-3'>contact</button>
            </Link>         </div>
{/* ----- */}
<div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
            <img className='w-20 mx-auto mt-[-3rem] bg-white' src={p4} alt="" />
            <h2 className='text-2xl font-bold text-center py-8 '>Steve</h2>
            <p className='text-center text-4xl font-bold'>Lead4</p>

            
            <div className='text-center font-medium' >
                <p className='py-2 border-b mx-8 mt-8'>Full stack React Developer</p>
                <p className='py-2 border-b mx-8'> Freelancer</p>
                <p className='py-2 border-b mx-8'>Intern at tesla</p>
            </div>
            <Link to="/Forms">
            <button className= 'bg-[#6c27c5] w-[150px] rounded-md font-medium my-6 mx-auto  px-6 py-3'>contact</button>
            </Link>         </div>
{/* ------ */}
<div className="w-full shadow-xl bg-gray-100 flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
            <img className='w-20 mx-auto mt-[-3rem] bg-white' src={p5} alt="" />
            <h2 className='text-2xl font-bold text-center py-8 '>Tsk</h2>
            <p className='text-center text-4xl font-bold'>Lead5</p>

            
            <div className='text-center font-medium' >
                <p className='py-2 border-b mx-8 mt-8'>Full stack React Developer</p>
                <p className='py-2 border-b mx-8'> Freelancer</p>
                <p className='py-2 border-b mx-8'>Intern at microsoft</p>
            </div>
            <Link to="/Forms">
            <button className= 'bg-[#6c27c5] w-[150px] rounded-md font-medium my-6 mx-auto  px-6 py-3'>contact</button>
            </Link>         </div>



    </div>


</div>
  );
};

export default Cards;
