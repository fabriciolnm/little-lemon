import React from 'react'

const About = () => {
  return (
    <div className="h-screen text-white my-4">
      <div className="bg-teal-900 w-full h-auto md:flex flex-shrink-0 items-center justify-center p-6  gap-32">
        <div>
          <h1 className='text-6xl text-yellow-500'>Little Lemon</h1>
          <p className='text-4xl'>Chicago</p>
          <span className='flex text-base w-64 mt-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem omnis, accusantium aut quo, amet inventore, blanditiis dicta dolores ipsum possimus consectetur incidunt eveniet itaque eligendi officiis. In nulla obcaecati sint?</span>
        </div>
        <div className='w-64 h-auto my-6 flex flex-col gap-4'>
          <img src="src/assets/Mario and Adrian b.jpg" alt=""/>
          <img src="src/assets/restaurant.jpg" alt=""/>
        </div>
      </div>
    </div>
  )
}

export default About