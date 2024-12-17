import React from 'react'
import Logout from "./logout";
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-end h-16 w-full bg-blue-400 items-center shadow-lg'>
      <div className='w-2/4 h-full flex justify-evenly items-center'>
        <button className='bg-slate-100 px-6 py-1.5 rounded-md font-bold text-blue-400'><Link to="/feedbackform">Home</Link></button>
        <button className='bg-slate-100 px-6 py-1.5 rounded-md font-bold text-blue-400'><Link to="/feedbackhistory">feedback History</Link></button>
        <Logout />
      </div>
    </div>
  )
}

export default Navbar;