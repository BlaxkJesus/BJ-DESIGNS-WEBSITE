import React from 'react'
import Navbar from './Navbar'
import { motion } from 'framer-motion'
import { tr } from 'framer-motion/m'

const Header = () => {

  return (
    <div className=' min-h-screen mb-4 bg-cover bg-[position:84%_center]
    flex items-center w-full overflow-hidden md:' 
     style={{backgroundImage: "url('/website-banner.png')"}} id='Header'>
    <Navbar />
    <motion.div
    initial={{opacity: 0, y: 100}}
    transition={{duration: 1.5}}
    whileInView={{opacity: 1, y: 0}}
    viewport={{once: false}}
    className='container text-center mx-auto mt-42 py-4 px-6
    md:px-20 lg:px-32 text-white'>
        <h2 className='text-5xl sm:text-6xl md:text-[50px]
        inline-block max-w-3xl font-semibold pt-20'>Welcome! To <span className='text-red-900'>B</span>
        <span className='text-blue-100'>J</span> <span className='text-blue-100'>Designs</span></h2>
        <div className='space-x-6 mt-16'>
            <a href="#Projects" className='border border-red-900 text-red-900 px-8 py-3 rounded' id='#Projects'>Projects</a>
            <a href="#Contact" className='bg-red-900 px-8 py-3 rounded '>Get Started</a>
        </div>
    </motion.div>
    </div>
  )
}

export default Header
