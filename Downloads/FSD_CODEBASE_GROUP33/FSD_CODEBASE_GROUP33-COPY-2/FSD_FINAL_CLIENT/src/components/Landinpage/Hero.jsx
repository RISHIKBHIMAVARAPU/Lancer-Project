import React from 'react';
// import TYPED  from 'react-typed';
import {Link} from "react-router-dom"
const Hero = () =>{
  return (
     <div className='text-white'>

<div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>

<p className='text-[#6c27c5] font-bold p-2'> India's first Student friendly Freelancing platform</p>
<h1 className='md-text-7xl sm:text-5xl text-4xl font-bold md:py-6'>Start Your Journey with us</h1>
<div>

<p className="md:text-5xl sm:text-4xl text-xl font-bold py-4">
  Connects the best  freelancers at your screen step
</p>
{/* <TYPED 
className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4  pl-2'
strings={['Entrepreneurs', 'Startups','All over World']}
typeSpeed = {140}
backSpeed = {140}
loop
/> */}

</div>
<p className='md:text-2xl text-xl font-bold text-gray-500'> make money with your Technical skills andd live your dream life from anywhere in the world
</p>
<Link to="/signup">
<button className='bg-[#6c27c5] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Get Started</button>
</Link>

</div>



     </div>
  )
}




export default  Hero;