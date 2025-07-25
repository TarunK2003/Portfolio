import React from "react";
import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/kevinRushProfile.png";
import { motion } from "motion/react";
const Hero = () => {
 
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              animate={{ x: 100 }}
              className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-6xl font-light antialiased "
            >
              Tarun Kumar
            </motion.h1>
            <motion.span
              
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01],
              }}
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent"
            >
              Full Stack Developer
            </motion.span>
            <motion.p
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              className="my-2 max-w-xl py-6 font-light tracking-tighter font-light"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <img src={profilePic} alt="image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
