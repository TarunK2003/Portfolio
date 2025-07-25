import React from 'react'
import logo from "../assets/kevinRushLogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { motion } from "motion/react"

const Navbar = () => {
  return (
    <nav className=' mb-5 flex items-center justify-between py-6'>
      <div className='flex flex-shrink-0 items-center '>
        {/* <img className='mx-2 w-full object-cover overflow-hidden' src={logo} alt="logo" /> */}
        <h1 className='text-4xl'>TK</h1>
      </div>
      <div className='m-8 flex items-center justify-center gap-9 text-2xl'>
        <a href="https://www.linkedin.com/in/tarun-kumar-a7b780244/" target="_blank" rel="noopener noreferrer" className="hover:text-[#0077B5] transition-colors duration-300">
          <FaLinkedin />
        </a>
        <a href="https://github.com/TarunK2003" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors duration-300">
          <FaGithub />
        </a>
        <a href="https://instagram.com/your-profile" target="_blank" rel="noopener noreferrer" className="hover:text-[#E1306C] transition-colors duration-300">
          <FaInstagram />
        </a>
        <a href="https://twitter.com/your-profile" target="_blank" rel="noopener noreferrer" className="hover:text-[#1DA1F2] transition-colors duration-300">
          <FaSquareXTwitter />
        </a>
      </div>
    </nav>
  )
}

export default Navbar
