import React from 'react';
import userImg from "../../assets/assets/user.png"
import packageImg from "../../assets/assets/package.png"
import rocketImg from "../../assets/assets/rocket.png"
const StepsSection = () => {
    return (
        <div className='bg-gray-300'>
        <div className='text-center pt-20 space-y-3'>
            <h2 className='font-bold text-3xl'>Get Started in 3 Steps</h2>
            <p className='text-[#627382]'>Start using premium digital tools in minutes, not hours.</p>
        </div>
        <div className='md:flex md:p-15  p-2 gap-5 justify-center items-center mx-auto'>
            <div className='text-center w-80 m-2  p-4 space-y-6 bg-white rounded-xl'>
                <p className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] w-10 rounded-full p-2 ml-60 text-white font-bold'>01</p>
                 <div className='bg-[#F3E8FE] w-10 rounded-full p-3 flex mx-auto w-20'>
                    <img src={userImg} alt="" />
                    </div>
                 <div className='space-y-2'>
                    <h1 className='font-bold text-xl'>Create Account</h1>
                    <p className='mb-7 text-[#627382]'>Sign up for free in seconds. No credit card required to get started.</p>
                 </div>
            </div>
            <div className='text-center w-80 m-2  p-4 space-y-6 bg-white rounded-xl'>
                <p className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] w-10 rounded-full p-2 ml-60 text-white font-bold'>02</p>
                 <div className='bg-[#F3E8FE] w-10 rounded-full p-3 flex mx-auto w-20'>
                    <img src={packageImg} alt="" />
                    </div>
                 <div className='space-y-2'>
                    <h1 className='font-bold text-xl'>Choose Products</h1>
                    <p className='mb-7 text-[#627382]'>Browse our catalog and select the tools that fit your needs.</p>
                 </div>
            </div>
            <div className='text-center w-80 m-2  p-4 space-y-6 bg-white rounded-xl'>
                <p className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] w-10 rounded-full p-2 ml-60 text-white font-bold'>03</p>
                 <div className='bg-[#F3E8FE] w-10 rounded-full p-3 flex mx-auto w-20'>
                    <img src={rocketImg} alt="" />
                    </div>
                 <div className='space-y-2'>
                    <h1 className='font-bold text-xl'>Start Creating</h1>
                    <p className='mb-7 text-[#627382]'>Download and start using your premium tools immediately.</p>
                 </div>
            </div>
            
            
           
        </div>
        </div>
    );
};

export default StepsSection;