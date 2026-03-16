import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { data } from '../data/data.js';

const Work = () => {
  return (
    <div name='work' id='works' className='w-full py-24 bg-[#0d1224] text-gray-300'>
      <div className='max-w-[1000px] mx-auto px-8'>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className='mb-14'
        >
          <p className='text-4xl font-bold text-white inline-block relative'>
            Projects
            <span className='absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full' />
          </p>
          <p className='text-slate-400 mt-6 text-base'>
            Check out some of my recent work
          </p>
        </motion.div>

        <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6'>
          {data.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className='glass rounded-2xl overflow-hidden group hover:border-indigo-500/30
                         hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300
                         flex flex-col'
            >
              {/* Project image with overlay */}
              <div className='relative overflow-hidden h-44'>
                <img
                  src={item.image}
                  alt={item.name}
                  className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500'
                />
                {/* Hover overlay with buttons */}
                <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent
                                opacity-0 group-hover:opacity-100 transition-opacity duration-300
                                flex items-end justify-center gap-3 pb-4'>
                  <a href={item.source_code_link} target='_blank' rel='noreferrer'>
                    <button className='flex items-center gap-2 glass text-white px-3 py-2 rounded-lg
                                       text-sm font-medium hover:border-white/30 transition-colors'>
                      <FaGithub size={13} /> Code
                    </button>
                  </a>
                  <a href={item.project_link} target='_blank' rel='noreferrer'>
                    <button className='flex items-center gap-2 btn-gradient text-white px-3 py-2
                                       rounded-lg text-sm font-medium hover:opacity-90 transition-opacity'>
                      <FaExternalLinkAlt size={11} /> Live
                    </button>
                  </a>
                </div>
              </div>

              {/* Card body */}
              <div className='p-5 flex flex-col flex-1'>
                <h3 className='text-white font-bold text-base mb-2'>{item.name}</h3>
                <p className='text-slate-400 text-sm leading-relaxed line-clamp-2 flex-1'>
                  {item.description}
                </p>
                <div className='flex flex-wrap gap-2 mt-4'>
                  {item.tags.map((tag, t) => (
                    <span
                      key={t}
                      className='text-xs px-2.5 py-1 rounded-full bg-indigo-500/10 text-indigo-300
                                 border border-indigo-500/20 font-medium'
                    >
                      #{tag.name}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
