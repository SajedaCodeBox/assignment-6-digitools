import React from "react";
import FeaturesCard from "./FeaturesCard";

const Cards = ({ allProduct, selectedAllCards, setSelectedAllCards, prices, setPrices }) => {
  const { name, description, price, period, tag, features, image } = allProduct;

const handleCards = () => {
   setPrices (prices + Number(allProduct.price))
  setSelectedAllCards([...selectedAllCards, allProduct])
  
}


  return (
    <div className="card  bg-base-100 shadow-sm">
      <div className="card-body ">
        <span className={`${tag === "popular"?"bg-[#E1E7FF]"
        : tag === "new"?"bg-[#DBFCE7] text-[#0A883E]"
        : "bg-[#FEF3C6]  text-[#BB4D00]"} 
        font-medium ml-45 md:ml-50 text-center p-2 rounded-3xl`}>

          {tag === "popular" ? (<span className=" bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent"> {tag} </span>): tag }
          </span>
        <div>
          <img className="border rounded-full p-2 border-gray-200" src={image} alt="" />
        </div>

        <div className="space-y-2">
          <h2 className="text-2xl font-bold">{name}</h2>
          <p className="text-gray-500">{description}</p>
          <span className="text-2xl font-bold">${price}</span>
          <span className="text-[#627382]">/{period}</span>
        </div>
        <div className="mt-3 space-y-1 flex-1">
          {features.map((feature, index) => (
            <FeaturesCard key={index} feature={feature}></FeaturesCard>
          ))}
        </div>
        <div className="mt-2">
          <button onClick={handleCards} className="btn  btn-block bg-linear-to-r from-[#4F39F6] to-[#9514FA]
           text-white rounded-4xl p-6">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
