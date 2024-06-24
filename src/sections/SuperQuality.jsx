import React from "react";
import Button from "../components/Button";
import { shoe8 } from "../assets/images";

const SuperQuality = () => {
  return (
    <section className="flex justify-between items-center gap-10 w-full max-lg:flex-col max-container">
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl capitalize font-bold">
          We Provide for You <span className="text-coral-red"> Super </span>
          <span className="text-coral-red">Quality</span> Shoes
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch elegance
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Our dedication to details and excellence ensures your satisfaction
        </p>
        <div className="mt-11">
          <Button label="View details" />
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center">
        <img src={shoe8} alt="shoe collection" height={570} width={522} className="object-contain" />
      </div>
    </section>
  );
};

export default SuperQuality;
