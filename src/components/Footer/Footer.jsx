import React from 'react';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { RiInstagramFill } from 'react-icons/ri';

const Footer = () => {
    return (
        <div className=' bg-black pb-8'>
           
            <div className=' mx-auto   text-white w-11/12 p-8 '>
            <div className='md:grid grid-cols-5 gap-10'>
                <div className='md:w-85 space-y-3'>
                    <h1 className='font-bold text-3xl'>DigiTools</h1>
                    <p>Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.</p>
                </div>
                <div className='md:ml-30 space-y-3'>
                    <h3 className='font-semibold text-xl'>Product</h3>
                    <p>Features</p>
                    <p>Pricing</p>
                    <p>Templates</p>
                    <p>Integrations</p>
                </div>
                <div className='md:ml-8 space-y-3'>
                    <h3 className='font-semibold text-xl'>Company</h3>
                    <p>About</p>
                    <p>Blog</p>
                    <p>Careers</p>
                    <p>Press</p>
                </div>
                <div className='space-y-3'>
                    <h3 className='font-semibold text-xl'>Resources</h3>
                    <p>Documentation</p>
                    <p>Help Center</p>
                    <p>Community</p>
                    <p>Contact</p>
                </div>
                <div className='space-y-3'>
                    <h3 className='font-semibold text-xl'>Social Links</h3>
                    <div className='flex gap-2'>
                        <div className='bg-white rounded-2xl text-black p-2'><RiInstagramFill /></div>
                        <div className='bg-white rounded-2xl text-black p-2'><FaFacebookSquare /></div>
                        <div className='bg-white rounded-2xl text-black p-2'><FaXTwitter /></div>
                    </div>
                </div>
                </div>
              
                  <div className='md:flex justify-between border-t mt-20'>
                    <p>© 2026 Digitools. All rights reserved.</p>
                    <div className='flex gap-6'>
                        <p>Privacy Policy </p>
                        <p>Terms of Service</p>
                        <p> Cookies</p>
                    </div>
            </div>
            </div>
            
           
        </div>
    );
};

export default Footer;