import React from 'react'
import {assets} from '../assets/assets';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className='min-h-screen py-5 overflow-hidden' id='About'>
    <motion.div 
    initial={{opacity: 0, x: 200}}
    transition={{duration: 1}}
    whileInView={{opacity: 1, x: 0}}
    viewport={{once: false}}
    className='flex flex-col items-center justify-center container
    mx-auto p-14 md:px-20 lg:px-32 w-ful overflow-hidden'>
      <h1 className='text-2xl sm:text-4xl font-bold text-red-500'>About 
        <span className='underline underline-offset-4 decoration-1 under font-light ml-2 text-white'>My Brand</span></h1>
      <p className='text-gray-600 max-w-80 text-center mb-8'>
        Passionate About Creating Designs & Websites, Dedicated to your vision</p>
        <div className='flex flex-col md:flex-row items-center md:items-start md:gap-20'>
         <img src={assets.brand_img} alt="" className='w-full sm:w-1/2 max-w-lg'/>
            <div className='flex flex-col items-center md:items-start mt-10 text-white'>
                <div className='grid grid-cols-2 gap-6 md:gap-10 w-full 2xl-pr:28 text-white'>
                    <div>
                        <p className='text-4xl font-medium text-red-500'>4+</p>
                        <p>Years of Excellence</p>
                    </div>
                    <div>
                        <p className='text-4xl font-medium text-red-500'>12+</p>
                        <p>Projects Completed</p>
                    </div>
                    <div>
                        <p className='text-4xl font-medium text-red-500'>12+</p>
                        <p>Artworks Delivered</p>
                    </div>
                    <div>
                        <p className='text-4xl font-medium text-red-500'>4+</p>
                        <p>Foreign Projects</p>
                    </div>
                </div>
                <p className='my-10 max-w-lg text-white'>
                    My name is Idoko Omachonu Osamuyimen and I am the founder of BJ Designs.
                    With over 4 years of experience in Graphics Design & Web Development,
                    I have successfully completed more than 12 projects. My expertise lies in delivering high-quality designs
                    and web solutions that meet the unique needs of my clients. I am passionate about creating visually appealing
                    and user-friendly designs that leave a lasting impression. Let's work together to bring your ideas to life!
                </p>
                <button className='bg-red-600 text-white px-8 py-2 rounded cursor-pointer'>Learn more</button>
            </div>
        </div>
    </motion.div>
    </div>)
}

export default About
