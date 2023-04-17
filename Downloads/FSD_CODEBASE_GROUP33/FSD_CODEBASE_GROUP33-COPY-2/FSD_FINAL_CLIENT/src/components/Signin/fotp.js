import React from 'react'
import { useRef , useEffect, useState} from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import emailjs from "@emailjs/browser";
import axios from 'axios';

const FOneTime = () => {
    const history = useHistory()
    const form = useRef();
    const pto = useRef();
    const liame = useRef();
    const location = useLocation();
    const [id,setid] = useState("")
    const [obj,setobj] = useState({})
    const [genotp,setgenotp] = useState(0)
    console.log(location.state);

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
            console.log(id)
            console.log(obj)
            history.push({pathname:"/resetpassword", state: obj});
        }
    },[id,obj])
    
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
            setobj(res.data[0])
        })
        .catch((err) => {
            console.log(err);
        })
    }

  return (
    <div className='bodyyy'>

        <form ref={form} style={{display: "none"}}>
            <label>Name</label>
            <input type="number" id="otp" name="otp" value={genotp}/>
            <input type="email" id="email" name="email" value={location.state}/>
        </form>

        <form onSubmit={callfunc}>
            <div className="formmmm">
                <div className="titleee">Lancer</div>
                <div className="subtitleee">Enter the OTP</div>
                <div className="inputtt-container ic1">
                    <input ref={pto} id="firstname" className="inputtt" type="number" name="pto" placeholder=" " />
                    <div className="cuttt"></div>
                </div>
                <button type="submit" className="submittt">Submit</button>
            </div>
        </form>
    </div>
  )
}

export default FOneTime;