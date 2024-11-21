import React from 'react'
import { offer } from '../assets/images'
import Buttons from '../components/Buttons'
import { arrowRight } from '../assets/icons'

const SpecialOffer = () => {
  return (
    <section className='flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container'>
      <div className='flex-1'>
        <img src={offer} alt="" width={773} height={687} className='object-contain w-full'/>
      </div>
      
      
      
      
      
      
      <div className='text-3xl flex-col'>
      

      <h2 className=" font-palanquin capitalize text-4xl  font-bold  lg:max-w-lg ">
      
      <span className="text-coral-red "> Special </span>
      <span className=" "> Offer </span>
      
      </h2>
{/*.............................................................................. */}

      <p
        className="mt-4 lg:max-w-lg info-text"
      >
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab, blanditiis id, laboriosam ad possimus voluptatem molestias iusto ipsa, a repellendus nam animi cumque non. Praesentium omnis qui aspernatur nihil ex?
      </p>
      <p
        className="mt-4 lg:max-w-lg info-text"
      >
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab, blanditiis id, laboriosam ad possimus voluptatem molestias iusto ipsa, a repellendus nam animi cumque non. Praesentium omnis qui aspernatur nihil ex?
      </p>
      
      <div className="mt-11 flex flex-wrap gap-4">
      <Buttons label="View Details" iconUrl={arrowRight} />
      <Buttons label="Learn More" iconUrl={arrowRight} borderColor="border-slate-gray" backgroundColor = "bg-white" textColor="text-slate-gray"/>
      </div>
    </div>
    </section>
  )
}

export default SpecialOffer