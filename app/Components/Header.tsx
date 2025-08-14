import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'

const Header = () => {
    
  return (
    <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4 '>
        <div>
            <Image
                src={assets.pfp_01}
                alt="Profile Picture"
                className='rounded-full w-32 transition delay-50 duration-300 ease-in-out hover:scale-110 '
            />
        </div>
        <h3 className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-serif '>
            Hi! I&apos;m Maryam Arif 
            <Image
                src={assets.hand_icon}
                alt=''
                className='w-6'
            />
        </h3>
        <h1 className='text-3xl sm:text-6xl lg:text-[66px] font-serif '>
            Full-Stack Web Developer based in Pakistan.
        </h1>
        <p className='max-w-2xl mx-auto font-outfit'>
            I&apos;m a passionate and dedicated developer with a strong foundation in web development. I have experience with Next.JS, TypeScript, Python, Generative AI, Agentic AI & OpenAI Agents SDK.
        </p>

        <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
            <a href="#contact" className='px-10 font-outfit py-3 border border-white rounded-full bg-black text-white flex items-center gap-2 '>
                Contact Me
                <Image
                    src={assets.right_arrow}
                    alt="Right Arrow"
                    className='w-4 '
                />
            </a>

            <a href="#getintouch" className='px-10 font-outfit py-3 border rounded-full border-gray-500 flex items-center gap-2 '>
                Get in Touch
                <Image
                    src={assets.right_arrow}
                    alt="Right Arrow"
                    className='w-4 '
                />
            </a>
        </div>
    </div>
  )
}

export default Header