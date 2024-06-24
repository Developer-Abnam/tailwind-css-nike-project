import React from "react";

const ServiceCard = ({ imgURL, label, subtext }) => {
  return (
    <div className="flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-3xl px-10 py-16">
        <div className="w-11 h-11 flex justify-center item-center bg-coral-red rounded-full" >
            <img src={imgURL} alt={label} height={24} width={24}/>
        </div>
        <h3 className="mt-5 font-palanquin leading-normal text-3xl font-bold">{label}</h3>
        <p className="mt-3 font-montserrat leading-normal text-lg text-slate-gray break-words">{subtext}</p>
    </div>
  );
};

export default ServiceCard;
