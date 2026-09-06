import React from 'react';
import { IoCheckmarkSharp } from 'react-icons/io5';

const TransparentSection = () => {
    return (
        <div>
            <div className='text-center pt-20 space-y-3'>
            <h1 className='font-bold text-3xl'>Simple, Transparent Pricing</h1>
            <p className='text-[#627382] p-3'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
             </div>

             <div className='md:flex md:p-15  p-2 gap-5 justify-center items-stretch mx-auto '>
             <div className='w-80 m-2  p-4 space-y-6 bg-white rounded-xl flex flex-col'>
                <div >
                    <h1 className='font-bold text-xl'>Starter</h1>
                    <p className='text-[#627382]'>Perfect for getting started</p>
                     </div>
                     <div>
                    <span className="text-3xl font-bold">$0</span>
          <span className="text-[#627382]">/Month</span>
               </div>
                <div className='mt-3 space-y-1 flex-1'>
                    <p className='flex items-center font-medium text-[#627382] '><span className ='text-[#30B868] mr-2'><IoCheckmarkSharp /></span>Access to 10 free tools</p>
                    <p className='flex items-center font-medium text-[#627382] '><span className ='text-[#30B868] mr-2'><IoCheckmarkSharp /></span>Basic templates</p>
                    <p className='flex items-center font-medium text-[#627382] '><span className ='text-[#30B868] mr-2'><IoCheckmarkSharp /></span>Community support</p>
                    <p className='flex items-center font-medium text-[#627382] '><span className ='text-[#30B868] mr-2'><IoCheckmarkSharp /></span>1 project per month</p>        
                </div>
                 <div className="mt-2">
          <button  className="btn  btn-block bg-linear-to-r from-[#4F39F6] to-[#9514FA]
           text-white rounded-4xl p-6">
            Get Started Free
          </button>
        </div>
             </div>
             <div className='w-80 m-2  p-4 space-y-6 bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-xl flex flex-col relative '>
                <div className="bg-[#FEF3C6]  text-[#BB4D00]
        font-medium text-center p-2 rounded-3xl w-30 absolute bottom-95 left-25 ">Most Popular</div>
                <div>
                    <h2 className='font-bold text-xl'>Pro</h2>
                    <p>Best for professionals</p>
                    </div>
                    <div>
                    <span className="text-3xl font-bold">$29</span>
          <span className="">/Month</span>
                </div>
                <div className='mt-3 space-y-1 flex-1'>
                <p className='flex items-center font-medium'><span className ='mr-2'><IoCheckmarkSharp /></span>Access to all premium tools</p>
                <p className='flex items-center font-medium'><span className ='mr-2'><IoCheckmarkSharp /></span>Unlimited templates</p>
                <p className='flex items-center font-medium'><span className ='mr-2'><IoCheckmarkSharp /></span>Priority support</p>
                <p className='flex items-center font-medium'><span className ='mr-2'><IoCheckmarkSharp /></span>Unlimited projects</p>        
                    <p className='flex items-center font-medium'><span className =' mr-2'><IoCheckmarkSharp /></span>Cloud sync</p>        
                <p className='flex items-center font-medium'><span className =' mr-2'><IoCheckmarkSharp /></span>Advanced analytics</p>        
                </div>
                 <div className="mt-2">
          <button  className="btn  btn-block bg-white
           text-white rounded-4xl p-6">
            
             <span className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent font-bold'>Start Pro Trial</span>
          </button>
        </div>
             </div>
             <div className='w-80 m-2  p-4 space-y-6 bg-white rounded-xl flex flex-col'>
                <div>
                    <h2 className='font-bold text-xl'>Enterprise</h2>
                    <p className='text-[#627382]'>For teams and businesses</p>
                     </div>
                    <div>
                    <span className="text-3xl font-bold">$99</span>
          <span className="text-[#627382]">/Month</span>
          </div>
               
                <div className='mt-3 space-y-1 flex-1'>
                    <p className='flex items-center font-medium text-[#627382] '><span className ='text-[#30B868] mr-2'><IoCheckmarkSharp /></span>Everything in Pro</p>
                    <p className='flex items-center font-medium text-[#627382] '><span className ='text-[#30B868] mr-2'><IoCheckmarkSharp /></span>Team collaboration</p>
                    <p className='flex items-center font-medium text-[#627382] '><span className ='text-[#30B868] mr-2'><IoCheckmarkSharp /></span>Custom integrations</p>
                    <p className='flex items-center font-medium text-[#627382] '><span className ='text-[#30B868] mr-2'><IoCheckmarkSharp /></span>Dedicated support</p>        
                    <p className='flex items-center font-medium text-[#627382] '><span className ='text-[#30B868] mr-2'><IoCheckmarkSharp /></span>SLA guarantee</p>        
                    <p className='flex items-center font-medium text-[#627382] '><span className ='text-[#30B868] mr-2'><IoCheckmarkSharp /></span>Custom branding</p>        
                </div>
                 <div className="mt-2">
          <button  className="btn  btn-block bg-linear-to-r from-[#4F39F6] to-[#9514FA]
           text-white rounded-4xl p-6">
            Contact Sales
          </button>
        </div>
             </div>
             </div>
        </div>
    );
};

export default TransparentSection;