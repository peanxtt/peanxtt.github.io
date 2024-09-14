'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'

import classNames from '@/lib/classNames'

const HeroSection = () => {
  const handlePopup = useState(true)

  return (
    <section className='lg:py-16 font-monserrat'>
      <div className='grid grid-cols-1 sm:grid-cols-12'>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className='col-span-8 place-self-center text-center sm:text-left justify-self-start'
        >
          <h1 className='text-white mb-4 text-3xl lg:text-6xl lg:leading-normal font-extrabold'>
            <span>{`Hello, I'm`}</span>
            <br></br>
            <TypeAnimation
              sequence={[
                'Tan Hua Sheng',
                1000,
                'Software Engineer',
                1000,
                'Fullstack Developer',
                1000,
              ]}
              wrapper='span'
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className='mb-6 text-[#ADB7BE] text-base sm:text-lg lg:text-xl'>
            based in Kuala Lumpur, Malaysia. I have 3 year plus of experience
            working in a wide range of projects, from CRM applications to
            Payment platforms, with a focus on creating solid and scalable
            applications with seamless user experiences.
          </p>
          <div>
            <Link
              href='/#contact'
              className={classNames(
                'px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4',
                'bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-400 text-white',
                'transition-colors duration-200 delay-75'
              )}
            >
              Hire Me
            </Link>
            <Link
              href='/'
              className={classNames(
                'px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4',
                'bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3',
                'transition-colors duration-200 delay-75'
              )}
            >
              Download CV
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className='col-span-4 place-self-center mt-4 lg:mt-0'
        >
          <div className='rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative'>
            <Image
              src='/hero-image.jpg'
              alt='Hero Image'
              className='object-cover rounded-full'
              fill
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection
