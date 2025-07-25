import React from 'react'

import { motion } from "motion/react"
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";
import { DiJqueryLogo } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import { FaPhp } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
//import { motion, MotionConfig } from "motion/react"
const Technologies = () => {
   const MyComponent = ({ isVisible }) => (
    <MotionConfig transition={{ duration: 1 }}>
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      />
  </MotionConfig>
)
  return (
    <div className='border-b border-neutral-800 pb-24'>
      <h1 className='my-20 text-center text-5xl'>Skills</h1>
      <div className='flex flex-wrap items-center justify-center gap-4'>
        <div className='rounded-2xl border-4 border-neutral-800 p-4  whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            style={box}'>
          <FaHtml5 className='text-5xl text-orange-400' />
        </div>
        <div className='rounded-2xl border-4 border-neutral-800 p-4'>
          <FaCss3Alt className='text-5xl text-blue-700 '  />
        </div>
        <div className='rounded-2xl border-4 border-neutral-800 p-4'>
          <FaBootstrap className='text-5xl text-purple-700' />
        </div>
        <div className='rounded-2xl border-4 border-neutral-800 p-4'>
          <RiTailwindCssFill className='text-5xl text-blue-500' />
        </div>
        <div className='rounded-2xl border-4 border-neutral-800 p-4'>
          <IoLogoJavascript className='text-5xl text-yellow-500' />
        </div>
        <div className='rounded-2xl border-4 border-neutral-800 p-4'>
          <DiJqueryLogo className='text-5xl text-blue-700' />
        </div>
        <div className='rounded-2xl border-4 border-neutral-800 p-4 '>
          <FaReact className='text-5xl text-cyan-400' />
        </div>
        <div className='rounded-2xl border-4 border-neutral-800 p-4'>
          <FaPhp className='text-5xl text-purple-500' />
        </div>
        <div className='rounded-2xl border-4 border-neutral-800 p-4'>
          <SiMysql className='text-5xl text-blue-400' />
        </div>
        <div className='rounded-2xl border-4 border-neutral-800 p-4'>
          <FaGitAlt className='text-5xl text-orange-400' />
        </div>
        <div className='rounded-2xl border-4 border-neutral-800 p-4'>
          <FaGithub className='text-5xl text-white' />
        </div>
      </div>
    </div>
  )
}

export default Technologies
