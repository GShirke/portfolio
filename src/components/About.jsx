import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaMobileAlt, FaRocket } from 'react-icons/fa';

const features = [
  {
    icon: <FaCode size={20} />,
    title: 'Clean Code',
    desc: 'Writing maintainable, scalable code following best practices.',
  },
  {
    icon: <FaMobileAlt size={20} />,
    title: 'Responsive Design',
    desc: 'Pixel-perfect UI that works beautifully across all devices.',
  },
  {
    icon: <FaRocket size={20} />,
    title: 'Performance',
    desc: 'Optimized apps for the fastest and smoothest user experience.',
  },
];

const About = () => {
  return (
    <div name='about' className='w-full py-24 bg-[#0d1224] text-gray-300'>
      <div className='max-w-[1000px] mx-auto px-8'>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className='mb-14'
        >
          <p className='text-4xl font-bold text-white inline-block relative'>
            About Me
            <span className='absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full' />
          </p>
        </motion.div>

        <div className='grid sm:grid-cols-2 gap-12 items-start'>

          {/* Left: intro text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className='text-2xl font-bold text-white mb-4'>
              Hi, I'm Ganesh Shirke 👋
            </h3>
            <p className='text-slate-400 leading-relaxed mb-4'>
              I am passionate about building excellent software that improves the
              lives of those around me. I specialize in creating software for
              clients ranging from individuals and small-businesses all the way
              to large enterprise corporations.
            </p>
            <p className='text-slate-400 leading-relaxed'>
              What would you do if you had a software expert available at your
              fingertips? Let's build something amazing together.
            </p>

            {/* Stats row */}
            <div className='flex gap-8 mt-8'>
              {[
                { value: '2+', label: 'Years Exp.' },
                { value: '6+', label: 'Projects' },
                { value: '2', label: 'Companies' },
              ].map((stat, i) => (
                <div key={i} className='text-center'>
                  <p className='text-3xl font-bold text-gradient'>{stat.value}</p>
                  <p className='text-slate-500 text-sm mt-1'>{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: feature cards */}
          <div className='space-y-4'>
            {features.map((feat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className='glass rounded-xl p-5 flex items-start gap-4 hover:border-indigo-500/30 hover:shadow-lg hover:shadow-indigo-500/5 transition-all duration-300'
              >
                <div className='w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400 flex-shrink-0'>
                  {feat.icon}
                </div>
                <div>
                  <h4 className='font-semibold text-white mb-1'>{feat.title}</h4>
                  <p className='text-slate-400 text-sm leading-relaxed'>{feat.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div className='section-divider mt-24 max-w-[1000px] mx-auto' />
    </div>
  );
};

export default About;
