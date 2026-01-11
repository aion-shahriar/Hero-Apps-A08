import React from 'react';
import { Link, NavLink } from 'react-router';
import img from '/assets/logo.png'
import { FaGithub } from 'react-icons/fa';

const Navbar = () => {
    
const links = (
  <>
    <NavLink
      to="/"
      className={({ isActive }) =>
        `m-2 font-semibold ${
          isActive ? "text-primary" : ""
        }`
      }
    >
      Home
    </NavLink>

    <NavLink
      to="/allapps"
      className={({ isActive }) =>
        `m-2 font-semibold ${
          isActive ? "text-primary" : ""
        }`
      }
    >
      Apps
    </NavLink>

    <NavLink
      to="/installed"
      className={({ isActive }) =>
        `m-2 font-semibold ${
          isActive ? "text-primary" : ""
        }`
      }
    >
      Installation
    </NavLink>
  </>
);
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start pl-15">
                <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                </div>
                <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                    {links}
                </ul>
                </div>
                <Link to='/'>
                <div className='flex'>
                    <img src={img} alt="logo-img" className='w-10'/>
                <a className="btn btn-ghost text-xl">Hero.IO</a>
                </div>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                {links}
                </ul>
            </div>
            <div className="navbar-end pr-15">
                <a href="https://github.com/aion-shahriar" target='_blank' className='btn bg text-white'><FaGithub />Contribute</a>
            </div>
        </div>
    );
};

export default Navbar;