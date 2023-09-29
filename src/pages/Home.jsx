import Cards from '../components/Cards'
import React from 'react'

const Home = () => {
  return (
    <div className="text-white mt-10">
      <div className="bg-teal-900 w-full flex flex-col flex-shrink-0 pl-6 md:pl-0 md:items-center justify-center md:flex-row md:gap-32">
        <div>
          <h1 className='text-4xl md:text-6xl text-yellow-500 mt-6 md:mt-0'>Little Lemon</h1>
          <p className='text-2xl md:text-4xl'>Chicago</p>
          <span className='flex text-base w-64 mt-4'>Lorem ipsum dolor sit amet. Officia veniam architecto odio unde eum laudantium.</span>
          <a href="/reservation">
            <button  className='bg-yellow-500 text-black  p-2 rounded-md mt-4'>
              Reserve a Table
            </button>
          </a>
        </div>
        <div className='w-52 h-auto my-8'>
          <img src="/static/images/restauranfood.jpg" alt="" />
        </div>
      </div>
      <Cards/>
    </div>
  )
}

export default Home