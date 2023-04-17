import React from 'react'
import { useRef , useEffect, useState} from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import emailjs from "@emailjs/browser";
import axios from 'axios';

const Forgot = () => {
    const history = useHistory()
    const form = useRef();
    const pto = useRef();
    const liame = useRef();
    const location = useLocation();
    const [id,setid] = useState("")
    const [genotp,setgenotp] = useState(0)
    console.log("hello")
    useEffect(() => {
        if(genotp !== 0)
        {
              emailjs.sendForm(
                "service_5jrjco4",
                "template_r7fq985",
                form.current,
                "zJx0_4zMHPUvJGKS6"
              )
              .then(() => {
                console.log("success");
              })
              .catch((err) => {
                console.log(err);
              })
        }
    }, [genotp])
  
    useEffect(()=> {
        setgenotp(generateOTP());
    },[])

    useEffect(() => {
        if(id !== "")
        {
            history.push("/profile/"+id);
        }
    },[id])

    function generateOTP() {
          
        // Declare a digits variable 
        // which stores all digits
        var digits = '0123456789';
        let OTP = '';
        for (let i = 0; i < 6; i++ ) {
            OTP += digits[Math.floor(Math.random() * 10)];
        }
        return OTP;
    }

    const callfunc = (e) => {

        e.preventDefault();
        axios
        .post("http://localhost:5000/forgotpass", {
            email: location.state
        })
        .then((res)=> {
            console.log(res.data[0]);
            setid(res.data[0]._id);
        })
        .catch((err) => {
            console.log(err);
        })
    }

  return (
    <>
    <form ref={form} style={{display: "none"}}>
        <label>Name</label>
        <input type="number" id="otp" name="otp" value={genotp}/>
        <input type="email" id="email" name="email" value={location.state} />
    </form>

    <form onSubmit={callfunc}>
        <label>Enter OTP</label>
        <input ref={pto} type="number" id="pto" name="pto" />
        <input type="submit" value="Submit"/>
    </form>
    </>
  )
}

export default Forgot