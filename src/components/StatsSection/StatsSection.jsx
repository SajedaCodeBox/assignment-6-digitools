import React from 'react';

const StatsSection = () => {
    return (
        <div className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] mb-15  md:flex justify-center items-center '>
        <div className="md:flex p-10 ">
  <div className=" flex flex-col items-center justify-center p-5 border-none w-60 space-y-3">
    <p className="text-white font-bold text-4xl">50K+</p>
   <p className='text-white font-medium text-xl'>Active Users</p>
  </div>

  <div className="flex flex-col items-center justify-center   p-5 border-l-2 border-[#B379FB] w-60 space-y-3">
    <p className="text-white font-bold text-4xl ">200+</p>
    <p className='text-white font-medium text-xl'>Premium Tools</p>
  </div>

  <div className="flex flex-col items-center justify-center p-5 border-l-2 border-[#B379FB]  w-60 space-y-3">
    <p className="text-white font-bold text-4xl">4.9</p>
    <p className='text-white font-medium text-xl'>Rating</p>
  </div>
</div>
</div>
    );
};

export default StatsSection;