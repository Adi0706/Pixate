import React from 'react'
import { NavLink} from 'react-router-dom'

function NavBar() {
  return (
    <>
    <nav className=" relative flex flex-col items-center justify-center ml-52"> 
      <h3 className='text-4xl text-white'>WELCOME TO </h3>
      <h1 className='text-9xl font-bold'>PIXATE</h1>
     <NavLink to='/generateImage'><button className='mt-12'>TRY PIXATE</button></NavLink> 
    </nav>
    </>
  )
}

export default NavBar