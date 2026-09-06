import React from 'react';

const WorkFlowSection = () => {
    return (
        
        <div className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] flex items-center justify-center flex-col  text-center space-y-8 p-20 text-white'>
        <div className='space-y-5'>
            <h1 className='font-bold text-[40px]'>Ready to Transform Your Workflow?</h1>
            <p>Join thousands of professionals who are already using Digitools to work smarter.<br></br> Start your free trial today.</p>
        </div>

        <div className='bg-linear-to-r from-[#4F39F6] to-[#9514FA]   rounded-full md:flex-row flex flex-col gap-3 '>
              <button  className="bg-white rounded-full  p-4 font-medium">
              <span className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent font-bold '>Explore Products</span>
              </button>
              
              <button  className="bg-none text-white rounded-full  p-4 font-bold border w-40 ">
              View Pricing </button>
              </div>


              <p>14-day free trial • No credit card required • Cancel anytime</p>
        </div>
    );
};

export default WorkFlowSection;