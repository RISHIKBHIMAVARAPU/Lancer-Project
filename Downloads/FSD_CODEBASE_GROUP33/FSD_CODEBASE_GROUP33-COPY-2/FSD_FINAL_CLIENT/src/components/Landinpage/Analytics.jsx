import React from 'react'
// import laptop from '../assets/laptop.jpg'
import setup from '../assets/setup.png'
import {Link} from "react-router-dom"

  const Analytics= ()=> {
  return (
<div className="w-full bg-white py-16 px-4">
{/* grid in css will be automatically set to mobile 
first so mx auto grid will be set to mobile 
so it has only one row and one column  */}

{/* now with md:grid col2 we set 2 columns once width exceeds medium size 
it will become 2 columns  */}
    <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
    <img  className = 'w-[500px] mx-auto my-4'src={setup} alt="/" />
    {/* below div is for the left side of the page */}
    <div className='flex flex-col justify-center'>
    <p className='text-[#6c27c5] font-bold'> For Freelancers By Freelancers</p>
{/* these md sm and are how the size of the text changes based on the width of the page */}

    <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Connect With people All Over The World</h1>
    <p>if you are an entrepreneur then find the the best freelancers for your work 
        if you are a freelancer then find the best people to work with!
    </p>
    <Link to="/signup">
<button className='bg-[#6c27c5] text-black w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'> Get Started</button>
</Link>
    </div>


</div>
</div>  )
}



export default Analytics;