import React from "react";

const Hero = () => {
  return (
    <div className="w-full h-[90vh]">
      <img
        src="https://media.istockphoto.com/id/1296986175/photo/young-man-working-for-a-food-delivery-service-checking-with-road-motorcycle-in-the-city.jpg?b=1&s=170667a&w=0&k=20&c=qQW2UKEJiiEWQNJRN3_HYdDSt6dUOzAukfb_nsnMfTw="
        alt="logistics"
        className="w-full h-full object-cover"
      />
      <div className="max-w-[1140px] m-auto">
        <div className="absolute top-[40%] w-full md:-[50%] max-w-[600px] h-full flex flex-col text-white p-4">
          <h1 className="font-bold text-4xl text-blue-900">
            Find Your Special Goods
          </h1>
          <h2 className="text-4xl py-4 italic text-blue-900">With Dispatch</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem odit
            consequuntur deleniti perferendis aspernatur commodi tempore eos
            aliquam. Maiores esse rerum pariatur vero a ullam illo est tenetur
            incidunt sint.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
