import React, { useEffect, useRef } from 'react'
import {assets, projectsData} from '../assets/assets';
import { motion } from 'framer-motion'

const Projects = () => {

const [currentIndex, setCurrentIndex] = React.useState(0);
const [cardsToShow, setCardsToShow] = React.useState(1);
const [isAutoPlay, setIsAutoPlay] = React.useState(true);
const resizeTimeoutRef = useRef(null);

useEffect(() => {
const updateCardsToShow = () => {
    if(window.innerWidth >= 1024){
        setCardsToShow(projectsData.length);
    }else{
        setCardsToShow(1)
    }
}
    updateCardsToShow();

    const handleResize = () => {
        clearTimeout(resizeTimeoutRef.current);
        resizeTimeoutRef.current = setTimeout(updateCardsToShow, 150);
    }

    window.addEventListener('resize', handleResize);
    return () => {
        window.removeEventListener('resize', handleResize);
        clearTimeout(resizeTimeoutRef.current);
    }
},[])

// Auto-play functionality
useEffect(() => {
    if (!isAutoPlay) return;
    
    const autoPlayInterval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % projectsData.length);
    }, 4000);
    
    return () => clearInterval(autoPlayInterval);
}, [isAutoPlay])

const nextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projectsData.length);
    setIsAutoPlay(false);
}
const prevProject = () => {
    setCurrentIndex((prevIndex) => prevIndex === 0 ? projectsData.length - 1 : prevIndex - 1);
    setIsAutoPlay(false);
}

const goToProject = (index) => {
    setCurrentIndex(index);
    setIsAutoPlay(false);
}

const handleKeyDown = (e) => {
    if (e.key === 'ArrowLeft') prevProject();
    if (e.key === 'ArrowRight') nextProject();
}
  return (
    <motion.div 
    initial={{opacity: 0, x: -200}}
    transition={{duration: 1}}
    whileInView={{opacity: 1, x: 0}}
    viewport={{once: false}}
    className='container mx-auto py-4 pt-20 px-6 md:px-20
    lg:px-32 my-20 w-full' id='Projects'
    onMouseEnter={() => setIsAutoPlay(false)}
    onMouseLeave={() => setIsAutoPlay(true)}
    onKeyDown={handleKeyDown}
    tabIndex={0}>
      <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center text-white'>Projects <span className=
      'underline underline-offset-4 decoration-1 under font-light text-white'>Completed</span></h1>
      <p className='text-center text-gray-500 mb-8 max-w-80 mx-auto'>Crafting Spaces, Building Legacies-Explore Our Portfolio</p>

      {/* Slider buttons */}

        <div className='flex justify-end items-center mb-8 gap-2'>
            <button onClick={prevProject} className='p-3 bg-gray-900 rounded cursor-pointer hover:bg-gray-800 transition' aria-label='Previous Project'>
                <img src={assets.left_arrow} alt="Previous" />
            </button>
            <button onClick={nextProject} className='p-3 bg-gray-900 rounded cursor-pointer hover:bg-gray-800 transition' aria-label='Next Project'>
                <img src={assets.right_arrow} alt="Next" />
            </button>
        </div>

        {/* Project slider container */}
        <div className='overflow-hidden w-full rounded-lg'>
            <div className='flex gap-4 transition-transform duration-1000 ease-in-out'
            style={{transform: `translateX(-${currentIndex * (100 / cardsToShow)}%)`}}
            >
                {projectsData.map((project, index) => (
                    <div key={index} className='relative flex-shrink-0 w-full lg:w-1/4'>
                        <img src={project.image} alt={project.title} className='w-full h-auto mb-14'/>
                        <div className='absolute bottom-5 left-0 right-0 flex justify-start'>
                            <div className='inline-block bg-gray-900 w-3/4 px-3 py-2'>
                                <h2 className='text-xl font-semibold text-white'>
                                    {project.title}
                                </h2>
                                <p className='text-gray-500 text-sm'>
                                    {project.price} <span className='px-1'></span> {project.type}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>

        {/* Indicator dots */}
        <div className='flex justify-center gap-2 mt-8'>
            {projectsData.map((_, index) => (
                <button
                    key={index}
                    onClick={() => goToProject(index)}
                    className={`w-3 h-3 rounded-full transition ${
                        currentIndex === index ? 'bg-white' : 'bg-gray-600 hover:bg-gray-500'
                    }`}
                    aria-label={`Go to project ${index + 1}`}
                />
            ))}
        </div>

    </motion.div>
  )
}

export default Projects
