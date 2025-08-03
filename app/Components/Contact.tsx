'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.currentTarget);

    formData.append("access_key", "e8bb7855-c211-4ad3-8f7f-52746d88d15a");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.currentTarget.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div
      id='contact'
      className="contact-section w-full px-[12%] py-10 scroll-mt-20 font-sans transition-all duration-300"
    >
      <h4 className='text-center mb-2 text-lg font-serif'>
        Connect with me
      </h4>

      <h2 className='text-center text-5xl font-serif'>
        Get in Touch
      </h2>

      <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-serif'>
        I&apos;d love to hear from you! If you have any questions, comments, or feedback,
        please use the form below.
      </p>

      <form onSubmit={onSubmit} className='max-w-2xl mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 mb-8'>
          <input
            type='text'
            placeholder='Enter Your Name'
            required
            className='flex-1 p-3 outline-none border border-gray-400 rounded-md bg-white dark:bg-[#222] dark:text-white'
            name='name'
          />
          <input
            type='email'
            placeholder='Enter Your Email'
            required
            className='flex-1 p-3 outline-none border border-gray-400 rounded-md bg-white dark:bg-[#222] dark:text-white'
            name='email'
          />
        </div>

        <textarea
          rows={6}
          placeholder='Enter your message'
          className='w-full p-4 outline-none border border-gray-400 rounded-md bg-white dark:bg-[#222] dark:text-white mb-6'
          name='message'
        ></textarea>

        <button
          type='submit'
          className='cursor-pointer py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black transition duration-500'
        >
          Submit Button
          <Image
            src={assets.right_arrow_white}
            alt='right arrow'
            className='w-4'
          />
        </button>

        <p className='text-center mt-4'>{result}</p>
      </form>
    </div>
  )
}

export default Contact