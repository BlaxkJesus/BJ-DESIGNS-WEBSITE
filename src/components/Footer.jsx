import React from 'react'
import {assets} from '../assets/assets';
const Footer = () => {
  return (
    <div className='pt-10 px-4 md:px-20 lg:px-32 bg-gray-900 text-white
    w-full overflow-hidden' id='Footer'>
      <div className='container mx-auto flex flex-col md:flex-row
      justify-between items-start'>
        <div className='w-full md:w-1/3 mb-8 md:md-0'>
            <img src={assets.logo} className='w-20' alt="" />
            <p className='text-gray-400 mt-4'>I’m a passionate graphic designer focused on creating meaningful, 
              visually engaging designs that help brands tell their stories with clarity and impact.</p>
        </div>
        <div className='w-full md:w-1/6 mb-8 md:md-0'>
          <h2 className='text-white text-lg font-bold mb-4'>Quick Links</h2>
          <ul className='flex flex-col gap-2 text-gray-400'>
            <li><a href="#Header" className='text-gray-400 hover:text-white'>Home</a></li>
            <li><a href="#Services" className='text-gray-400 hover:text-white'>Services</a></li>
            <li><a href="#Projects" className='text-gray-400 hover:text-white'>Projects</a></li>
            <li><a href="#Testimonials" className='text-gray-400 hover:text-white'>Testimonials</a></li>
            <li><a href="#Contact" className='text-gray-400 hover:text-white'>Contact</a></li>
          </ul>
        </div> 
        <div className='w-full md:w-1/6 mb-8 md:md-0'>
          <h2 className='text-white text-lg font-bold mb-4'>Contact</h2>
          <ul className='flex flex-col gap-2 text-gray-400'>
            <li><a href="https://www.instagram.com/bjdesigns1902?utm_source=qr&igsh=MWV5d2t6b3Vhc3l2" className='text-gray-400 hover:text-white'>Instagram</a></li>
            <li><a href="https://wa.me/qr/Z67MTYRK7RPRA1" className='text-gray-400 hover:text-white'>Whatsapp</a></li>
            <li><a href="https://x.com/bjdesigns1902" className='text-gray-400 hover:text-white'>Twitter</a></li>
            <li><a href="mailto:bjdesigns1902@gmail.com?subject=Hello&body=Message%20here" className='text-gray-400 hover:text-white'>bjdesigns1902@gmail.com</a></li>
          </ul>
        </div> 
      </div>
      <div className='border-t border-white py-4 mt-10 text-center text-white'>
        Copyright 2026 ©️ BJ DESIGNS. All Right Reserved.
      </div>
    </div>
  )
}

export default Footer
