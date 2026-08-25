import React from 'react';
import Cards from './Cards';

const AllCards = ({allProducts, selectedAllCards, setSelectedAllCards, prices, setPrices}) => {
    // console.log (allProducts);
    return (
        <div>
            <div className='grid p-5 grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-6 md:p-7  md:m-15  bg-white rounded-xl'>
                {
                    allProducts.map (allProduct => {
                        console.log(allProduct);
                        return (
                            <Cards key={allProduct.id} allProduct = {allProduct} selectedAllCards = {selectedAllCards} setSelectedAllCards = {setSelectedAllCards} prices = {prices} setPrices = {setPrices}></Cards>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default AllCards;