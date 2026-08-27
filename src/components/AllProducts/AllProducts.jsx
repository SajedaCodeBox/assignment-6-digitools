import React, { use, useState } from 'react';
import AllCards from '../AllCards/AllCards';
import SelectedCards from '../SelectedCards/SelectedCards';

const AllProducts = ({fetchdata, prices, setPrices}) => {
    const allProducts = use (fetchdata);
    // console.log(allProducts);
     const [selectedType, setSelectedType] = useState ("products");
     const [selectedAllCards, setSelectedAllCards] = useState ([]);
    return ( 
        <div className='container mx-auto pt-4'>
        <div className='flex items-center justify-center flex-col  text-center space-y-3'>
            <h1 className='font-bold text-3xl'>Premium Digital Tools</h1>
            <p className='text-[#627382]'>Choose from our curated collection of premium digital products designed<br />to boost your productivity and creativity.</p>
            <div className='border border-gray-300 w-50 p-1 rounded-3xl'>
            <button onClick={() => setSelectedType ("products")} className={` ${selectedType === "products"? "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white" : ""}  rounded-full p-3 font-medium `}>Products</button>
            <button onClick={() => setSelectedType ("carts")} className={` ${selectedType === "carts"? "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white" : ""}  rounded-full p-3 font-medium`}>Carts({selectedAllCards.length})</button>
            </div>
        </div>

        { selectedType === "products" ? (<AllCards selectedAllCards = {selectedAllCards} setSelectedAllCards = {setSelectedAllCards} allProducts = {allProducts} prices = {prices} setPrices = {setPrices}></AllCards>) : (<SelectedCards selectedAllCards = {selectedAllCards} setSelectedAllCards = {setSelectedAllCards} prices = {prices} setPrices = {setPrices}></SelectedCards>)
        }
        </div>
    );
};

export default AllProducts;