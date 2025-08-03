'use client'

import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [isScroll, setIsScroll] = useState(false)
  const sideMenuRef = useRef<HTMLUListElement>(null)

  // Toggle dark theme
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

  // Scroll behavior
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScroll(true)
      } else {
        setIsScroll(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const openMenu = () => {
    if (sideMenuRef.current) {
      sideMenuRef.current.style.transform = 'translateX(-16rem)'
    }
  }

  const closeMenu = () => {
    if (sideMenuRef.current) {
      sideMenuRef.current.style.transform = 'translateX(16rem)'
    }
  }

  return (
    <>
      <div className={`fixed top-0 right-0 w-11/12 -z-10 font-outfit translate-y-[-80%] ${isDarkMode ? 'hidden' : ''}`}>
        <Image
          src={assets.header_bg_color}
          alt='header'
          className='w-full'
        />
      </div>

      <nav
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex font-outfit items-center justify-between z-50 ${
          isScroll
            ? isDarkMode
              ? 'bg-[#11001F] bg-opacity-10 backdrop-blur-sm shadow-sm'
              : 'bg-white bg-opacity-20 backdrop-blur-lg shadow-sm'
            : ''
        }`}
      >

        <a href="#top" className={`text-4xl ${isDarkMode ? 'text-white' : ''} hover:text-red-600`}>
          MARYAM ARIF
        </a>

        <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 bg-white ${isDarkMode ? 'shadow-sm bg-opacity-50' : ''} `}>
          <li className='transition delay-50 duration-300 ease-in-out hover:scale-130'><a className='font-Ovo text-black' href='#top'>Home</a></li>
          <li className='transition delay-50 duration-300 ease-in-out hover:scale-130'><a className='font-Ovo text-black' href='#about'>About Me</a></li>
          <li className='transition delay-50 duration-300 ease-in-out hover:scale-130'><a className='font-Ovo text-black' href='#services'>Services</a></li>
          <li className='transition delay-50 duration-300 ease-in-out hover:scale-130'><a className='font-Ovo text-black' href='#work'>My Work</a></li>
          <li className='transition delay-50 duration-300 ease-in-out hover:scale-130'><a className='font-Ovo text-black' href='#contact'>Contact Me</a></li>
        </ul>

        <div className='flex items-center gap-4'>
          {/* 🌙 Theme Toggle */}
          <button onClick={handleThemeToggle}>
            <Image
              src={isDarkMode ? assets.sun_icon : assets.moon_icon}
              alt='Theme Toggle Icon'
              className='w-6 cursor-pointer'
            />
          </button>

          <a href="#contact" className='bg-white text-black hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-Ovo'>
            Contact
            <Image
              src={assets.arrow_icon}
              alt='Arrow Icon'
              className='w-3'
            />
          </a>

          <button className='block md:hidden ml-3' onClick={openMenu}>
            <Image
              src={assets.menu_black}
              alt='Menu'
              className='w-6'
            />
          </button>
        </div>

        {/* --------- mobile menu --------- */}
        <ul ref={sideMenuRef} className='flex md:hidden flex-col gap-4 py-20 px-20 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500 '>
          <div className='absolute right-6 top-6' onClick={closeMenu}>
            <Image
              src={assets.close_black}
              alt='Close Icon'
              className='w-5 cursor-pointer'
            />
          </div>

          <li><a className='font-Ovo text-black' onClick={closeMenu} href='#top'>Home</a></li>
          <li><a className='font-Ovo text-black' onClick={closeMenu} href='#about'>About Me</a></li>
          <li><a className='font-Ovo text-black' onClick={closeMenu} href='#services'>Services</a></li>
          <li><a className='font-Ovo text-black' onClick={closeMenu} href='#work'>My Work</a></li>
          <li><a className='font-Ovo text-black' onClick={closeMenu} href='#contact'>Contact Me</a></li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar
