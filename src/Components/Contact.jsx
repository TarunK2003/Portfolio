import React from 'react'
import { CONTACT } from '../constants'
import { motion } from "motion/react"

const Contact = () => {
  return (
    <div className='border-b border-neutral-900 pb-20'>
        <h1 className='my-20 text-center text-5xl'>Get in Touch</h1>
        <div className='text-center tracking-tighter'>
            <p className='my-4'>{CONTACT.address}</p>
            <p className='my-4'>{CONTACT.phoneNo}</p>
            <a href="#" className='border-b'>{CONTACT.email}</a>

        </div>

        
    
    
    </div>
  )
}

export default Contact