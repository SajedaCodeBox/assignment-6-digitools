import React from 'react';
import { LuShoppingCart } from 'react-icons/lu';

const Navbar = () => {
    return (
        <div className="navbar bg-base-100 shadow-sm flex justify-around fixed z-50 ">
  <div>
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul className="dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-4 shadow">
        <li><a>Products</a></li>
        <li><a>Features</a></li>
        <li><a>Pricing</a></li>
        <li><a>Testimonials</a></li>
        <li><a>FAQ</a></li>
        <a className="btn">Login</a>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">daisyUI</a>
  </div>
  <div className=" hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a>Products</a></li>
        <li><a>Features</a></li>
        <li><a>Pricing</a></li>
        <li><a>Testimonials</a></li>
        <li><a>FAQ</a></li>
    </ul>
  </div>
  <div className="flex justify-center items-center gap-3">
    <LuShoppingCart />
    <a className="btn hidden md:flex ">Login</a>
     <button  className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full p-3 font-medium ">Get Started</button>
  </div>
</div>
    );
};

export default Navbar;