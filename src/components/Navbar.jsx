import React from 'react'
import {assets} from "../assets/assets"
const Navbar = () => {
    const [showMobileMenu, setShowMobileMenu] = React.useState(false);

    React.useEffect(()=>{
        if(showMobileMenu) {
            document.body.style.overflow = 'hidden'
        }else{
            document.body.style.overflow = 'auto'
        }
        return () => {
            document.body.style.overflow = 'auto'
        };   
    },[showMobileMenu])
  return (
    <div className='absolute top-0 left-0 w-full z-10'>
      <div className={`container mx-auto flex justify-between items-center 
      py-4 px-6 md:px-20 lg:px-20 bg-transparent ${showMobileMenu ? 'hidden' : ''}`} id='Navbar'>
        <img src={assets.logo} className='w-23' alt="" />
        <ul className='mx-auto hidden md:flex gap-12 text-white'>
            <a href="#Header" className='cursor-pointer hover:text-red-500 transition-transform duration-300 hover:-translate-y-1 inline-block'>Home</a>
            <a href="#Services" className='cursor-pointer hover:text-red-500 transition-transform duration-300 hover:-translate-y-1 inline-block'>Services</a>
            <a href="#Projects" className='cursor-pointer hover:text-red-500 transition-transform duration-300 hover:-translate-y-1 inline-block'>Projects</a>
            <a href="#Testimonials" className='cursor-pointer hover:text-red-500 transition-transform duration-300 hover:-translate-y-1 inline-block'>Testimonials</a>
            <a href="#Contact" className='cursor-pointer hover:text-red-500 transition-transform duration-300 hover:-translate-y-1 inline-block'>Contact Us</a>
        </ul>
       {/* <button className=' hidden md:block bg-white px-8 py-2 rounded-full'>Sign up</button> */}
        <img onClick={()=> setShowMobileMenu(true)} src={assets.menu_icon} className='md:hidden w-6 cursor-pointer' alt="" />
      </div>
      {/* Mobile menu */}
      <div className={`md:hidden ${showMobileMenu ? 'fixed w-full' : 'h-0 w-0'} right-0 top-0 bottom-0
      overflow-hidden bg-black transition-all`}>
        <div className='flex justify-end p-6 cursor-pointer'>
            <img onClick={()=> setShowMobileMenu(false)} src={assets.cross_icon} className='w-5 invert' alt="" />
        </div>
        <ul className='flex flex-col items-center gap-2 mt-10 px-5 text-lg
        font-medium text-white space-y-6'>
            <a onClick={()=> setShowMobileMenu(false)} href="#Header" className='px-4 py2 rounded-full inline-block hover:text-red-500 transition'>Home</a>
            <a onClick={()=> setShowMobileMenu(false)} href="#Services" className='px-4 py2 rounded-full inline-block hover:text-red-500 transition'>Services</a>
            <a onClick={()=> setShowMobileMenu(false)} href="#Projects" className='px-4 py2 rounded-full inline-block hover:text-red-500 transition'>Projects</a>
            <a onClick={()=> setShowMobileMenu(false)} href="#Testimonials" className='px-4 py2 rounded-full inline-block hover:text-red-500 transition'>Testimonials</a>
            <a onClick={()=> setShowMobileMenu(false)} href="#Contact" className='px-4 py2 rounded-full inline-block hover:text-red-500 transition'>Contact Us</a>            
        </ul>
      </div>
    </div>
  )
}

export default Navbar
