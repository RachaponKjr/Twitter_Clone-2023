import React from 'react'
import "./Signup.css"
import { GrClose } from "react-icons/gr";
import { Outlet } from 'react-router-dom';

const Signup = () => {
  return (
    <div className='by-si'>
      <div className='h-si'>
        <GrClose className='icon-x'/>
        <h2>Step 1 of 5</h2>
      </div>
      <div className='form-su'>
        <form>
        <Outlet/>
        </form>
      </div>
    </div>
  )
}

export default Signup