"use client"

import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'
import Link from 'next/link'

const Header = () => {
  return (
    <div 
      id='home' 
      className='w-11/12 max-w-3xl text-center mx-auto min-h-screen flex flex-col items-center justify-center gap-4 pt-32 md:pt-40 pb-10'
    >
        {/* Profile Image Section */}
        <div className='flex-shrink-0'>
            <Image
                src={assets.maryamarif}
                alt="Maryam Arif - Full-Stack Developer"
                className='rounded-full w-32 md:w-44 transition duration-500 ease-in-out hover:scale-105 border-2 border-white shadow-lg'
                priority // Ensures this loads immediately as it's at the top
            />
        </div>

        {/* Greeting Section */}
        <h3 className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-serif'>
            Hi! I&apos;m Maryam Arif 
            <Image
                src={assets.hand_icon}
                alt='Waving hand icon'
                className='w-6 mb-1'
            />
        </h3>

        {/* Hero Headline */}
        <h1 className='text-3xl sm:text-6xl lg:text-[66px] font-serif leading-tight text-gray-900'>
            Full-Stack Web Developer based in Pakistan.
        </h1>

        {/* Description / Bio */}
        <p className='max-w-2xl mx-auto font-outfit text-gray-700 leading-relaxed text-base md:text-lg'>
            I&apos;m a passionate and dedicated developer with a strong foundation in web development. 
            I am the <b>CEO & Founder</b> of <Link href="https://nexeagent.com" target='_blank' className='text-blue-600 hover:underline decoration-blue-400'><b>Nexe-Agent</b></Link>. 
            I specialize in Next.JS, TypeScript, Python, Generative AI, Agentic AI, and OpenAI Agents SDK.
        </p>

        {/* Action Buttons */}
        <div className='flex flex-col sm:flex-row items-center gap-4 mt-8'>
            <a 
                href="#contact" 
                className='px-10 py-3 border border-black rounded-full bg-black text-white flex items-center gap-2 hover:bg-gray-800 transition duration-300 group'
            >
                Contact Me
                <Image
                    src={assets.right_arrow}
                    alt=""
                    className='w-4 invert group-hover:translate-x-1 transition'
                />
            </a>

            <a 
                href="#getintouch" 
                className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 bg-white hover:bg-gray-50 transition duration-300'
            >
                Get in Touch
                <Image
                    src={assets.right_arrow}
                    alt=""
                    className='w-4'
                />
            </a>
        </div>
    </div>
  )
}

export default Header