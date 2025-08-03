import { assets, serviceData } from '@/assets/assets'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'

const Services = () => {

    const [isDarkMode, setIsDarkMode] = useState(false)
        
        const handleThemeToggle = () => {
            setIsDarkMode(prev => !prev)
          }
        
          // Apply/remove .dark-theme on <body> when isDarkMode changes
          useEffect(() => {
            if (isDarkMode) {
              document.body.classList.add('dark-theme')
            } else {
              document.body.classList.remove('dark-theme')
            }
          }, [isDarkMode])
    

  return (
    <div id='services' className='w-full px-[12%] py-10 scroll-mt-20 '>
        <h4 className='text-center mb-2 text-lg font-serif'>
            What I offer
        </h4>

        <h2 className='text-center text-5xl font-serif'>
            My Services
        </h2>

        <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-serif'>
            I'm a passionate and dedicated developer with a strong foundation
            in web development. I have experience with Next.JS, TypeScript, Python,
            Generative AI, Agentic AI & OpenAI Agents SDK.
        </p>

        <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 my-10'>
            {serviceData.map(({ icon, title, description, link }, index) => (
                <div key={index} className='border border-gray-400 rounded-lg px-8 py-12 hover:[box-shadow:var(--box-shadow-black)] cursor-pointer hover:bg-[--color-light-hover] hover:shadow-xl hover:-translate-y-1 duration-500'>
                <Image src={icon} alt='' className='w-10' />

                <h3 className={`text-lg my-4 ${isDarkMode ? "text-gray-700" : ''}`}>
                    {title}
                </h3>

                <p className={`text-sm leading-5 ${isDarkMode ? "text-gray-700" : ''}`}>
                    {description}
                </p>

                <a href={link} className='font-semibold flex items-center gap-2 text-sm mt-5'>
                    Read More
                    <Image src={assets.right_arrow} alt='' className='w-4' />
                </a>
                </div>
            ))}
        </div>



    </div>
  )
}

export default Services