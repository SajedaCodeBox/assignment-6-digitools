import React from 'react';

import { BsCart } from 'react-icons/bs';
import SelectedCard from './SelectedCard';

const SelectedCards = ({selectedAllCards, setSelectedAllCards, prices, setPrices}) => {
    
     const handleRemoveCard = (selectedAllCard) => {
        const filteredCards = selectedAllCards.filter (selectedAllCarded => selectedAllCarded.name !== selectedAllCard.name);
        setSelectedAllCards (filteredCards);
        setPrices (prices - Number (selectedAllCard.price))
     };

     const handleAllRemove = () => {
        setSelectedAllCards ([])
        
     }


    return (
        <div className='min-h-screen'>
            <div className='bg-white m-15 p-6 rounded-xl'>
                <p className='font-bold mb-4'>Your Cart</p>
                 
           {selectedAllCards.length === 0 ? (
            
                <div className='flex flex-col items-center justify-center space-y-3 m-15'>
                    <div className='text-[60px] text-gray-400'><BsCart /></div>
                    <p className='text-gray-500 font-semibold'>Your cart is empty</p>
                </div>
           ) : 
            (selectedAllCards.map ((selectedAllCard, ind) => {
               
                return (
                  
                
                     <SelectedCard key={ind} selectedAllCard = {selectedAllCard} handleRemoveCard = {handleRemoveCard}></SelectedCard>
                ); 
           })
           
           )}
           { selectedAllCards.length > 0 ? (
           <div className=''>
           <div  className='flex justify-between items-center'>
             <p>Total</p>
              <p className=" font-bold">${prices}</p>
           </div>
          <button onClick={handleAllRemove}  className="btn  btn-block bg-linear-to-r from-[#4F39F6] to-[#9514FA]
           text-white rounded-4xl p-6 mt-4 ">
            Proceed to Checkout
          </button>
           </div> ) : ('')
           }
           </div>
            
        </div>
    );
};

export default SelectedCards;