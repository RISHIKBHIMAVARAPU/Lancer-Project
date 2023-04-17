import React ,{useState , useEffect} from 'react';
import axios from 'axios';

import loginImg from '../assets/background.jpg'
import { useHistory } from 'react-router-dom';
const FORM_ENDPOINT = ""
export default function Forms() {
  const history=useHistory();
  const initialValue = {
    name: "",
    email: "",
    message: "",
  };
    const [values, setValues] = useState(initialValue);

const [formErrors, setFormErrors] = useState({});
const [isSubmit, setIsSubmit] = useState(false);


let handlechange=(event)=>{
    setValues({ ...values, [event.target.name]: event.target.value });
};

let handleFormSubmit=async(event)=>{
  console.log(values)
    event.preventDefault();
    setFormErrors(validate(values));
    setIsSubmit(true);
    await axios.post("http://localhost:5000/insert",values).then((result)=>{
    alert("query posted");
    history.push("/");
    })
    .catch((err)=>{
    alert("query posted failed retry");
      console.log(err);
    })
    setValues(initialValue)

  //   if (Object.keys(formErrors).length === 0 && isSubmit) {
  //  }
    }

  //   useEffect(() => {
  //   console.log(formErrors);
  //   if (Object.keys(formErrors).length === 0 && isSubmit) {
  //     console.log(values);
  //   }
  // }, [formErrors]);


const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.name) {
      errors.name = "Username is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.message) {
      errors.message= "message is required";
    } else if (values.message.length < 4) {
      errors.message= "message must be more than 4 characters";
    } else if (values.message.length > 100) {
      errors.message = "message cannot exceed more than 10 characters";
    }
    return errors;
  };
  return (
    <div className='grid grid-cols-2 sm:grid-cols-2 h-screen w-full'>
        <div className='hidden sm:block'>
            <img className='w-full h-full object-cover' src={loginImg} alt="" />
        </div>

        <div className='bg-gray-800 flex flex-col justify-center'>

            <form className='max-w-[600px] w-full mx-auto rounded-lg bg-gray-900 p-8 px-8'
             action={FORM_ENDPOINT}
             onSubmit={handleFormSubmit}
             method="POST"
             target="_blank"
            >
                <h2 className='text-4xl dark:text-white font-bold text-center'>ContactUs</h2>
                <div className='flex flex-col text-gray-400 py-2'>
                    <label>Username</label>
                    <input className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none'
                      placeholder='Enter your name'
                       type="text"
                       name="name"
                       value={values.name}
                       onChange={handlechange} 
                        />
                </div>
                <p className=' text-gray-400 '>{formErrors.name}</p>
                <div className='flex flex-col text-gray-400 py-2'>
                    <label>Email</label>
                    <input className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none'  
                    placeholder='Enter your email' 
                    type="text" 
                    name="email"
                    value={values.email}
                    onChange={handlechange}
                     />
                </div>
                <p className=' text-gray-400 '>{formErrors.email}</p>
                <div className='flex flex-col text-gray-400 py-2'>
                    <label>MESSAGE</label>
                    <input className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' 
                    placeholder='' 
                    type="text" 
                    name="message"
                    value={values.message}
                    onChange={handlechange}
                     />
                </div>
                <p  className=' text-gray-400 '>{formErrors.message}</p>
                <button className='w-full my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg' type='submit'
                >ContactUs</button>
                
            </form>
        </div>
    </div>
 
  )
}






