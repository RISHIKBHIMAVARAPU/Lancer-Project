import React from 'react'
import { useRef , useEffect, useState} from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import axios from 'axios';

const ResetPass = () => {

    const history = useHistory();
    const pass = useRef()
    const location = useLocation();
    console.log(location.state);

    const callfunc = (e) => {
        e.preventDefault()
        const id = location.state._id;
        axios.post("http://localhost:5000/resetpassword/"+id, {
            password: pass.current.value
        })
        .then((res) => {
            console.log(res)
            console.log("success")
            history.push("/signin")
        })
        .catch((err) => {
            console.log(err)
            console.log("error")
        })
    }
  return (
    <>
        <div className='bodyyy'>
            <form onSubmit={callfunc}>
                <div className="formmmm">
                    <div className="titleee">Lancer</div>
                    <div className="subtitleee">Reset your password</div>
                    <div className="inputtt-container ic1">
                        <input ref={pass} id="firstname" className="inputtt" type="password" name="pass" placeholder=" " />
                        <div className="cuttt"></div>
                    </div>
                    <button type="submit" className="submittt">Submit</button>
                </div>
            </form>
        </div>
    </>
  )
}

export default ResetPass