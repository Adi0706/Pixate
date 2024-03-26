import React from 'react'
import logo from '../Media/pixellogo.png'
import {NavLink} from 'react-router-dom'

function Header() {
  return (
    <>
    <nav className='mt-0 shadow-md h-auto '>
        <ul className='flex items-center justify-between'>
          <NavLink to="/">
          <li className='flex gap-2 items-center text-black text-3xl font-bold p-3'><img src={logo} alt="piaxate-logo" className='w-14 h-12 pl-2'></img><span>PIXATE</span></li></NavLink> 
         <NavLink to="/generateImage"><li className='pr-12'><button>Generate</button></li></NavLink> 
        </ul>
    </nav>
    </>
  )
}

export default Header