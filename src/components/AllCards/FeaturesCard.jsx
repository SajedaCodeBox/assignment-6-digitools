import React from 'react';
import { IoCheckmarkSharp } from 'react-icons/io5';

const FeaturesCard = ({feature}) => {
    return (
      
        <p className='flex items-center font-medium text-[#627382] flex-1'><span className ='text-[#30B868] mr-2'><IoCheckmarkSharp /></span>{feature}</p>
       
    );
};

export default FeaturesCard;