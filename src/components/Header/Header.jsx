import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';
import { Bars3Icon, BeakerIcon, XMarkIcon } from '@heroicons/react/24/solid';


const Header = () => {
    const [open, setOpen] = useState(false);
    return (
        <header className="container px-4 lg:px-10 py-2 md:py-12 mx-auto flex items-center justify-between bg-[#f9f9ff]">
            <Link to='/'><h1 className='font-extrabold text-[32px]'>Kormo</h1></Link>
            <span className='md:hidden cursor-pointer' onClick={() => setOpen(!open)}>
                {
                    open ? <XMarkIcon className="h-8 w-8 text-blue-600" /> : <Bars3Icon className='h-8 w-8 text-blue-600' />
                }
            </span>

            <nav className={`flex flex-col md:flex-row md:items-center md:justify-center gap-3 md:gap-11 font-semibold absolute md:static duration-500 ${open ? 'top-16' : '-top-96'} bg-[#f9f9ff] md:bg-none md:rounded-none rounded-md md:p-0 p-4 md:shadow-none shadow-lg md:border-none border border-slate-200`}>
                <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>
                    Home
                </NavLink>
                <NavLink to="/statistics" className={({ isActive }) => isActive ? "active" : ""}>
                    Statistics
                </NavLink>
                <NavLink to="/applied_jobs" className={({ isActive }) => isActive ? "active" : ""}>
                    Applied Jobs
                </NavLink>
                <NavLink to="/blog" className={({ isActive }) => isActive ? "active" : ""}>
                    Blog
                </NavLink>
                <div className='md:hidden mt-6'>
                    <button className='py-2 px-2  bg-gradient-to-r from-[#7E90FE] to-[#9873FF] rounded-md text-white font-semibold text-[13px]'>Start Applying</button>
                </div>
            </nav>
            <div className='hidden md:block'>
                <button className='py-5 px-7  bg-gradient-to-r from-[#7E90FE] to-[#9873FF] rounded-md text-white font-bold text-xl'>Start Applying</button>
            </div>
        </header>
    );
};

export default Header;