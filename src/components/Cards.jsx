import React from "react";

const Cards = () => {
  return (
    <section className="flex flex-col bg-white mx-4">
      <div className="flex justify-between md:justify-center items-center md:gap-60">
        <h1 className="text-black mt-4 text-xl md:text-4xl">This weeks specials!</h1>
        <a href="/reservation">
          <button className="bg-yellow-500 text-black  p-2 rounded-md mt-4">
            Online Menu
          </button>
        </a>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center gap-5 my-6 text-black ">
        <article className="w-52 bg-gray-200 border rounded-t-xl">
          <img className='w-52 border rounded-t-xl' src="/static/images/greek salad.jpg" alt="" />
          <div className="flex justify-between align-center p-4">
            <h1 className="text-lg font-bold">Greek salad</h1>
            <p className="text-lg font-bold text-red-500">$12,90</p>
          </div>
            <p className="px-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum ratione cupiditate, magni expedita.</p>
            <h1 className="p-4 text-lg font-bold">Order a delivery</h1>
        </article>
        <article className="w-52 bg-gray-200 border rounded-t-xl">
          <img className='w-52 border rounded-t-xl' src="/static/images/bruchetta.svg" alt="" />
          <div className="flex justify-between align-center p-4">
            <h1 className="text-lg font-bold">Bruschetta</h1>
            <p className="text-lg font-bold text-red-500">$5,90</p>
          </div>
            <p className="px-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum ratione cupiditate, magni expedita.</p>
            <h1 className="p-4 text-lg font-bold">Order a delivery</h1>
        </article>
        <article className="w-52 bg-gray-200 border rounded-t-xl">
          <img className='w-52 h-36 border rounded-t-xl' src="/static/images/lemon dessert.jpg" alt="" />
          <div className="flex justify-between align-center p-4">
            <h1 className="text-lg font-bold">Lemon Dessert</h1>
            <p className="text-lg font-bold text-red-500">$5,00</p>
          </div>
            <p className="px-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum ratione cupiditate, magni expedita.</p>
            <h1 className="p-4 text-lg font-bold">Order a delivery</h1>
        </article>
        
      </div>
    </section>
  );
};

export default Cards;
