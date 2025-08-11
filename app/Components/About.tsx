"use client"

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { assets, infoList, toolsData } from '@/assets/assets'

const About = () => {

    const [isDarkMode] = useState(false)
    
    
      // Apply/remove .dark-theme on <body> when isDarkMode changes
      useEffect(() => {
        if (isDarkMode) {
          document.body.classList.add('dark-theme')
        } else {
          document.body.classList.remove('dark-theme')
        }
      }, [isDarkMode])

  return (
    <div id='about' className='w-full px-[12%] py-10 scroll-mt-20 '>
        <h4 className='text-center mb-2 text-lg font-serif'>
            Introduction
        </h4>

        <h2 className='text-center text-5xl font-serif'>
            About Me
        </h2>

        <div  className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'>
            <div className='w-64 sm:w-80 rounded-3xl max-w-none'>
                <Image
                    src={assets.pfp_01}
                    alt="user image"
                    className='w-full rounded-3xl'
                />
            </div>
            
            <div className='flex-1'>
                <p className='mb-10 max-w-2xl font-serif'>
                    I am an Experienced Full-Stack Developer with over 2+ years of professional
                    experience in building scalable and efficient web applications. I have a strong 
                    foundation in JavaScript, HTML/CSS, and React. I am passionate about staying up-to-date
                    with the latest technologies and trends in the industry.
                </p>

                <ul className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'>
                    {infoList.map(({icon, iconDark, title, description, description2}, index) => (
                        <li key={index} className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:-translate-y-1 duration-500 hover:[box-shadow:var(--box-shadow-black)] dark-theme:hover:[box-shadow:var(--box-shadow-white)]'>
                            <Image
                                src={isDarkMode ? iconDark : icon}
                                alt={title}
                                className='w-7 mt-3'
                            />
                            <h3 className={`my-4 font-semibold ${isDarkMode ? 'text-gray-700' : ''}`}>
                                {title}
                            </h3>
                            <p className={`text-sm ${isDarkMode ? 'text-gray-700' : ''}`}>
                                {description}
                                <br />
                                <br />
                                {description2}
                            </p>
                        </li>
                    ))}
                </ul>

                <h4 className={`my-6 font-serif ${isDarkMode ? 'text-gray-700' : ''}`}>
                    Tools I Use
                </h4>

                <ul className='flex items-center gap-3 sm:gap-5'>
                    {toolsData.map((tool, index) => (
                        <li key={index} className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500'>
                            <Image
                                src={tool}
                                alt='Tool'
                                className='w-5 sm:w-7'
                            />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </div>
  )
}

export default About