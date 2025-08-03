import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'


const Footer = () => {

  return (
    <div className='mt-20 font-sans font-semibold'>
        <div className='text-center'>
            <h1 className='text-4xl font-outfit hover:text-red-600 cursor-default'>MARYAM ARIF</h1>

            <div className='w-max flex items-center gap-2 mx-auto'>
                <Image
                    src={assets.mail_icon}
                    alt=""
                    className='w-6'
                />
                maryamarif1313@gmail.com
            </div>
        </div>

        <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6 '>
            <p>© 2025 Maryam Arif. All rights reserved.</p>
            <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0 font-outfit'>
                <li>
                    <a target='_blank' className='transform transition duration-300 hover:-translate-y-2 hover:text-blue-600' href="https://github.com/maryamarif24">GitHub</a>
                </li>
                <li>
                    <a target='_blank' className='transform transition duration-300 hover:-translate-y-2 hover:text-blue-600' href="https://www.linkedin.com/in/maryam-arif-71b0992b5">LinkedIn</a>
                </li>
                <li>
                    <a target='_blank' className='transform transition duration-300 hover:-translate-y-2 hover:text-blue-600' href="https://www.instagram.com/maryam.arif_?igsh=NzRsYmZmc2h3MXlq">Instagram</a>
                </li>
            </ul>
        </div>

    </div>
  )
}

export default Footer