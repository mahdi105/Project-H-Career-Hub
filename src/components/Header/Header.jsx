import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <header className="container px-10 py-12 mx-auto flex items-center justify-between">
            <Link to='/'><h1 className='font-extrabold text-[32px]'>Kormo</h1></Link>
            <nav className='flex items-center justify-center gap-11 font-semibold'>
                <NavLink to="/" className={({isActive}) => isActive ? "active" : ""}>
                    Home
                </NavLink>
                <NavLink to="/statistics" className={({isActive}) => isActive ? "active" : ""}>
                    Statistics
                </NavLink>
                <NavLink to="/applied_jobs" className={({isActive}) => isActive ? "active" : ""}>
                    Applied Jobs
                </NavLink>
                <NavLink to="/blog" className={({isActive}) => isActive ? "active" : ""}>
                    Blog
                </NavLink>
            </nav>
            <div>
                <button className='py-5 px-7  bg-gradient-to-r from-[#7E90FE] to-[#9873FF] rounded-md text-white font-bold text-xl'>Start Applying</button>
            </div>
        </header>
    );
};

export default Header;