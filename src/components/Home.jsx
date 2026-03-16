import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { FaArrowCircleUp } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div name='home' className='relative w-full h-screen bg-[#0d1224] overflow-hidden flex items-center'>

      {/* Animated background blobs */}
      <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-indigo-600/20 rounded-full blur-3xl animate-blob pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-pink-500/15 rounded-full blur-3xl animate-blob animation-delay-2000 pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-blob animation-delay-4000 pointer-events-none" />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Content */}
      <div className='relative max-w-[1000px] mx-auto px-8 w-full'>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className='text-indigo-400 font-medium tracking-[0.2em] uppercase text-sm mb-3'
        >
          Hi, my name is
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className='text-5xl sm:text-7xl font-bold text-white leading-tight'
        >
          Ganesh Shirke
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className='text-4xl sm:text-6xl font-bold text-gradient mt-2'
        >
          Web Developer.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className='text-slate-400 py-6 max-w-[580px] text-lg leading-relaxed'
        >
          I specialize in crafting high-performance, responsive web applications.
          With a focus on clean design and seamless user experiences, I build
          modern solutions that deliver real impact.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className='flex gap-4 flex-wrap'
        >
          <a href="#works">
            <button className='group btn-gradient px-8 py-3.5 rounded-xl font-semibold text-white flex items-center gap-3 hover:opacity-90 transition-all duration-300 shadow-lg shadow-indigo-500/25'>
              View My Work
              <HiArrowNarrowRight
                className='group-hover:translate-x-1 transition-transform duration-300'
                size={18}
              />
            </button>
          </a>
          <a href="mailto:ganeshshirke81923@gmail.com">
            <button className='px-8 py-3.5 rounded-xl font-semibold text-slate-300 border border-white/10 hover:border-indigo-400/50 hover:text-white transition-all duration-300 glass'>
              Hire Me
            </button>
          </a>
        </motion.div>
      </div>

      {/* Scroll to top */}
      <div className='fixed bottom-6 right-6 z-50'>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="w-10 h-10 rounded-full btn-gradient flex items-center justify-center hover:opacity-80 transition-opacity shadow-lg shadow-indigo-500/30"
          aria-label="Scroll to top"
        >
          <FaArrowCircleUp size={18} className="text-white" />
        </button>
      </div>
    </div>
  );
};

export default Home;
