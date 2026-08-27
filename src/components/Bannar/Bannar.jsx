import React from 'react';
import bannerImg from "../../assets/assets/banner.png"
import { MdOutlinePlayArrow } from 'react-icons/md';
const Bannar = () => {
    return (
       <div className="hero bg-base-200 min-h-screen  pt-20 md:p-30 bg-gray-100">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src= {bannerImg} alt=''/>
    <div>
      <h1 className="text-5xl font-bold">Supercharge Your Digital Workflow</h1>
      <p className="py-6">
        Access premium AI tools, design assets, templates, and productivity software—all in one place. Start creating faster today.<br></br>Explore Products
      </p>
      <div className='flex items-center gap-2'>
      <button  className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full p-3 font-medium ">Explore Products</button>
      <div className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] inline-block p-[1px] rounded-full'>
      <button  className="bg-white rounded-full flex justify-center items-center p-3 font-medium">
      <span className='text-2xl'><MdOutlinePlayArrow /></span>
      <span className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent font-bold'>Watch Demo</span>
      </button>
      </div>
      </div>
    </div>
  </div>
</div>
    );
};

export default Bannar;