import React, { useEffect } from 'react'
import MainDash from './MainDash/MainDash'
import Sidebar from './Sidebar'
import './index.css'
import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux';

const AdminHomePage = () => {
  const auth = useSelector(state => state.validauth2);
  const dispatch = useDispatch()
  useEffect(() => {
    console.log(auth)
    const obj = localStorage.getItem('author')
    if(obj)
    {
      console.log("if")
      console.log(obj)
      if(obj === "\"admin\"")
      {
        console.log("hello in if")
        dispatch({
          type : "setTrue2"
        })
      } 
      else
      {
        dispatch({
          type : "setFalse2"
        })
      }
    }
  },[])
  return (
    auth === true ?
    <div className='Outer'>
        <div className='Inner'>
            <Sidebar />
            <MainDash />
        </div>
    </div> : <h2>404 Error Found</h2>
  )
}

export default AdminHomePage