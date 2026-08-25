import React from 'react';

const SelectedCard = ({selectedAllCard, handleRemoveCard}) => {
    console.log (selectedAllCard);
    return (
                
                <div className=' bg-gray-100 rounded-xl md:flex justify-between items-center p-4 mb-3 '>
                <div className='flex items-center gap-3 '>
                    <img className="border rounded-full p-2 border-gray-200" 
                    src={selectedAllCard.image} alt="" />
                    <div>
                        <h2 className="text-2xl font-semibold">{selectedAllCard.name}</h2>
                        <p className="text-[#627382] font-medium">${selectedAllCard.price}</p>
                    </div>
                </div>
                <button onClick={() => handleRemoveCard(selectedAllCard)} className='text-[#FF3980] sm:items-center'>Remove </button>
                </div>
                
               
    );
    
};

export default SelectedCard;