import { assets, workData } from '@/assets/assets'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const ProjectsPage = () => {
  return (
    <div className='w-full px-[12%] py-10 min-h-screen font-sans bg-[#fdf8ff]'>
        
        {/* Navigation / Back Button */}
        <Link href="/" className='flex items-center gap-2 text-gray-700 hover:text-black transition duration-300 mb-10'>
            <Image src={assets.right_arrow_bold} alt="" className="w-4 rotate-180" />
            <span>Back to Home</span>
        </Link>

        <h2 className='text-center text-5xl font-serif mb-4'>
            All Projects
        </h2>
        <p className='text-center max-w-2xl mx-auto mb-16 text-gray-600 font-serif'>
            A comprehensive look at my journey in AI automation, full-stack development, and digital design.
        </p>

        {/* Full Grid of Projects */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
            {workData.map((project, index) => (
                <div key={index} className="flex flex-col group animate-fadeIn" style={{animationDelay: `${index * 0.1}s`}}>
                    {/* Image Container */}
                    <div 
                        style={{ backgroundImage: `url(${project.bgImage})` }} 
                        className="aspect-video bg-no-repeat bg-cover bg-center rounded-t-lg border border-gray-200 cursor-pointer overflow-hidden"
                    >
                        <div className="w-full h-full bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
                    </div>

                    {/* Content Area */}
                    <div className='bg-white border-x border-b border-gray-200 rounded-b-lg py-4 px-5 flex items-center justify-between transition-all duration-300 group-hover:border-lime-400'>
                        <div>
                            <h2 className='font-semibold text-black text-lg'>{project.title}</h2>
                            <p className='text-sm text-gray-600'>{project.description}</p>
                        </div>

                        <a 
                            href={project.link || "#"} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className='border rounded-full border-black w-10 aspect-square flex items-center justify-center shadow-[3px_3px_0_#000] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] group-hover:bg-lime-300 transition-all'
                        >
                            <Image src={assets.send_icon} alt="Link" className="w-5" />
                        </a>
                    </div>
                </div>
            ))}
        </div>

        {/* Footer section for the projects page */}
        <footer className='mt-20 text-center text-gray-500 text-sm'>
            <p>© {new Date().getFullYear()} Maryam Arif. All rights reserved.</p>
        </footer>
    </div>
  )
}

export default ProjectsPage