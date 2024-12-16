import React from 'react'
import Logout from "./logout";

const Navbar = () => {
  return (
    <div className='flex justify-end px-16 h-16 bg-blue-400 items-center shadow-lg'>
        <Logout/>
    </div>
  )
}

export default Navbar;