import React from 'react'
import { serviceData } from '../assets/assets'
import { motion } from 'framer-motion'

const Services = () => {
  return (
    <motion.div
    initial={{opacity: 0, y: 100}}
    transition={{duration: 1.5}}
    whileInView={{opacity: 1, y: 0}}
    viewport={{once: false}}
    className='container mx-auto py-10 lg:px-32 w-full overflow-hidden'
    id='Services'>
      <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center text-white'>Services <span
       className='underline underline-offset-4 decoration-1 under font-light text-white'>We Offer</span></h1>
        <p className='text-center text-gray-500 mb-12 max-w-80 mx-auto'>Discover Our Range of Expert Services Tailored to Your Needs.</p>

      <div className='flex flex-wrap justify-center gap-8'>
        {serviceData.map((services, index) =>(
            <div key={index} className='max-w-[280px] rounded px-8 py-12
            text-center shadow-md shadow-gray-900'>
                <img className='w-22 h-22 mx-auto mb-4' src={services.image} />
                <h2 className='text-xl text-white font-medium'>{services.title}</h2>
                <p className='text-gray-500 mb-4 text-sm'>{services.text}</p>
            </div>
        ))}
      </div>
    </motion.div>
  )
}

export default Services
