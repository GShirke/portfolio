import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../data/data';

const Skills = () => {
  return (
    <div name='skills' className='w-full py-24 bg-[#0d1224] text-gray-300'>
      <div className='max-w-[1000px] mx-auto px-8'>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className='mb-14'
        >
          <p className='text-4xl font-bold text-white inline-block relative'>
            Skills
            <span className='absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full' />
          </p>
          <p className='text-slate-400 mt-6 text-base'>
            Technologies I've worked with
          </p>
        </motion.div>

        <div className='grid grid-cols-2 sm:grid-cols-4 gap-4'>
          {skills.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className='glass rounded-2xl p-6 flex flex-col items-center gap-3 group
                         hover:border-indigo-500/40 hover:shadow-lg hover:shadow-indigo-500/10
                         transition-all duration-300 cursor-default'
            >
              <img
                className='w-14 h-14 object-contain group-hover:scale-110 transition-transform duration-300'
                src={item.image}
                alt={item.title}
              />
              <p className='font-medium text-slate-300 group-hover:text-white transition-colors duration-300 text-sm'>
                {item.title}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className='section-divider mt-24 max-w-[1000px] mx-auto' />
    </div>
  );
};

export default Skills;
