import React, { useRef } from 'react'
import { useHistory } from 'react-router-dom'
import '../Signup/onetime.css'

const MiddlePage = () => {
    const history = useHistory()
    const liame = useRef()
    const callfunc = (e) => {
        e.preventDefault()
        history.push({ pathname:"/fonetime", state: liame.current.value})
    }
  return (
  <div className='bodyyy'>
    <form onSubmit={callfunc}>
            <div className="formmmm">
                <div className="titleee">Lancer</div>
                <div className="subtitleee">Enter your email</div>
                <div className="inputtt-container ic1">
                    <input ref={liame} id="liame" className="inputtt" type="email" name="liame" placeholder=" " />
                    <div className="cuttt"></div>
                </div>
                <button type="submit" className="submittt">Submit</button>
            </div>
        </form>
  </div>
  )
}

export default MiddlePage