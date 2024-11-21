import React from 'react'
import Buttons from '../components/Buttons'
import { arrowRight } from '../assets/icons'
import { shoe8 } from '../assets/images'

const SuperQuality = () => {
  return (
    <section
    id="about-us"
    className=" flex justify-between items-center max-lg:flex-col gap-10 w-full max-container    ">
      <div className='text-3xl flex-col'>
      

        <h2 className=" font-palanquin capitalize text-4xl  font-bold  lg:max-w-lg ">
        We Provide You
        <span className="text-coral-red "> Super</span>
        <span className="text-coral-red "> Quality </span>
        Shoes
        </h2>
{/*.............................................................................. */}

        <p
          className="mt-4 lg:max-w-lg info-text"
        >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab, blanditiis id, laboriosam ad possimus voluptatem molestias iusto ipsa, a repellendus nam animi cumque non. Praesentium omnis qui aspernatur nihil ex?
        </p>
        <p className='mt-6 lg:max-w-lg info-text'>
          Our dedication to detail and excellence ensures your satisfaction!
        </p>
        <div className="mt-11">
        <Buttons label="View Details" iconUrl={arrowRight} />
        </div>
      </div>

      <div className='flex-1 flex justify-center items-center'>
        <img src={shoe8} alt="shoe8>" width={570} height={522} className='object contain' />
      </div>
    </section>
  )
}

export default SuperQuality