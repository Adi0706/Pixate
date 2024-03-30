import React from 'react';
import logo from '../Media/pixellogo.png';
import { NavLink, useLocation } from 'react-router-dom';

function Header() {
    const location = useLocation();

    return (
        <nav className='mt-0 shadow-md h-auto '>
            <ul className='flex items-center justify-between'>
                <NavLink to="/">
                    <li className='flex gap-2 items-center text-black text-3xl font-bold p-3'>
                        <img src={logo} alt="pixate-logo" className='w-14 h-12 pl-2' />
                        <span>PIXATE</span>
                    </li>
                </NavLink>
                <li className='pr-12'>
                    <button>
                      <NavLink to="/generateImage">Generate</NavLink> 
                    </button>
                </li>
            </ul>
        </nav>
    );
}

export default Header;
