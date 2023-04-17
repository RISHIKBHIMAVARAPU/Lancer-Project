import React from 'react'
import { useRef , useEffect, useState} from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import emailjs from "@emailjs/browser";
import './onetime.css'

const Onetime = () => {
    const history = useHistory()
    const form = useRef();
    const pto = useRef();
    const [genotp,setgenotp] = useState(0)
    const location = useLocation();
    console.log(location.state.email);
    console.log(location.state.fullname);

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
        if(pto.current.value === genotp)
        {
            fetch("http://localhost:5000/user/chandra/signup", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(location.state),
            })
            .then((res) => {
            console.log(res);
            console.log("new blog added");
            history.push("/signin");
            })
            .catch((err) => {
            console.log("not added");
            console.log(err);
            });
        }
        else
        {
            console.log("wrong");
        }
    }

  return (
    <div className='bodyyy'>
        <form ref={form} style={{display: "none"}}>
            <label>Name</label>
            <input type="number" id="otp" name="otp" value={genotp}/>
            <input type="email" id="email" name="email" value={location.state.email}/>
            <input type="text" id="fullname" name="fullname" value={location.state.fullname}/>
        </form>
        <form onSubmit={callfunc}>
            <div className="formmmm">
                <div className="titleee">Lancer</div>
                <div className="subtitleee">Enter the OTP</div>
                <div className="inputtt-container ic1">
                    <input ref={pto} id="pto" className="inputtt" type="number" name="pto" placeholder=" " />
                    <div className="cuttt"></div>
                </div>
                <button type="submit" className="submittt">Submit</button>
            </div>
        </form>
    </div>
  )
}

export default Onetime