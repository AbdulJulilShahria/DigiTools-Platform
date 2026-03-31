import React from 'react';
import { BsCart2 } from 'react-icons/bs';
const NavBar = () => {
    return (
        <>
        <div className="navbar container mx-auto">
            <div className="navbar-start">
                <div className="dropdown md:hidden">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li>Products</li>
                        <li>Features</li>
                        <li>Pricing</li>
                        <li>Testimonials</li>
                        <li>FAQ</li>
                    </ul>
                </div>
                <div className=" font-bold text-2xl text-purple-600">
                    <div className=''>DigiTools</div>
                </div>
            </div>
            <div className="navbar-center hidden md:flex">
                <ul className="menu menu-horizontal gap-10 px-1 text-lg">
                    <li>Products</li>
                    <li>Features</li>
                    <li>Pricing</li>
                    <li>Testimonials</li>
                    <li>FAQ</li>
                </ul>
            </div>
            <div className="navbar-end gap-5">
                <div className="nav-actions flex items-center gap-3 ">
                    <span className="cart"><BsCart2 /></span>
                    <button className="login">Login</button>
                    <button className="bg-purple-600 text-white px-5 py-2 rounded-full hover:bg-purple-700 transition">
                        Get Started
                    </button>
                </div>
            
            </div>
        </div>
        <hr className='border-gray-300' />
        </>
    );
};

export default NavBar;