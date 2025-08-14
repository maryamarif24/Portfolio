import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'

const GetInTouch = () => {

    const [isDarkMode, setIsDarkMode] = useState(false)

    const handleThemeToggle = () => {
        setIsDarkMode(prev => !prev)
    }

    useEffect(() => {
        if (isDarkMode) {
          document.body.classList.add('dark-theme')
        } else {
          document.body.classList.remove('dark-theme')
        }
    }, [isDarkMode])

    useEffect(() => {
        const observer = new MutationObserver(() => {
        setIsDarkMode(document.body.classList.contains('dark-theme'));
        });
        observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });
        return () => observer.disconnect();
    }, []);

  return (
    <div id='getintouch'>
        <h4 className='text-center mb-2 text-lg font-serif'>
            Around the World
        </h4>

        <h2 className='text-center text-5xl font-serif'>
            Connect with me
        </h2>

        <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-serif'>
            Let&apos;s connect on my social platforms! You can find me across the web — click the links
            below to explore my work, updates, and projects.
        </p>

        <div className='flex gap-3 items-center justify-center'>
            <a href="https://github.com/maryamarif24" target="_blank" rel="noopener noreferrer">
                <Image
                    src={isDarkMode ? assets.github_dark : assets.github}
                    alt="github"
                    className='w-20'
                />
            </a>
            <a href="https://www.linkedin.com/in/maryam-arif-71b0992b5" target="_blank" rel="noopener noreferrer">
                <Image
                    src={isDarkMode ? assets.in_dark : assets.linkedin}
                    alt="linkedin"
                    className='w-20'
                />
            </a>
            <a href="https://www.instagram.com/maryam.arif_?igsh=NzRsYmZmc2h3MXlq" target="_blank" rel="noopener noreferrer">
                <Image
                    src={isDarkMode ? assets.ig_dark : assets.ig}
                    alt="ig"
                    className='w-20'
                />
            </a>
            <a href="https://www.behance.net/maryamarif118" target="_blank" rel="noopener noreferrer">
                <Image
                    src={isDarkMode ? assets.be_dark : assets.be}
                    alt="be"
                    className='w-20'
                />
            </a>
            <a href="https://www.facebook.com/people/Maryam-Arif/100089859591355/" target="_blank" rel="noopener noreferrer">
                <Image
                    src={isDarkMode ? assets.fb_dark : assets.fb}
                    alt="fb"
                    className='w-20'
                />
            </a>
            <a href="https://www.youtube.com/@maryam.arif_x" target="_blank" rel="noopener noreferrer">
                <Image
                    src={isDarkMode ? assets.yt_dark : assets.yt}
                    alt="yt"
                    className='w-20'
                />
            </a>
        </div>
    </div>
  )
}

export default GetInTouch