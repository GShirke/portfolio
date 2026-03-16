import React from 'react';
import { Link } from 'react-scroll';
import { navlinks } from '../data/data';
import { FaLinkedin, FaGithub, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const socialIcons = [
  { icon: <FaLinkedin size={18} />, href: 'https://www.linkedin.com/in/ganesh-shirke-4b3531234' },
  { icon: <FaGithub size={18} />, href: 'https://www.github.com/GShirke' },
  { icon: <FaInstagram size={18} />, href: 'https://www.instagram.com/ganesh_.shirke_?igsh=czF4aWt2N2JrYWU3' },
  { icon: <FaWhatsapp size={18} />, href: 'https://wa.me/7769013792' },
];

const Footer = () => {
  return (
    <footer className='bg-[#080e1a] border-t border-white/5'>
      <div className='max-w-[1000px] mx-auto px-8 py-10'>
        <div className='flex flex-col sm:flex-row justify-between items-center gap-6'>

          {/* Brand */}
          <p className='text-sm text-slate-500'>
            &copy; {new Date().getFullYear()}{' '}
            <span className='text-gradient font-semibold'>Ganesh Shirke</span>
            {' '}— All rights reserved.
          </p>

          {/* Nav links */}
          <div className='flex flex-wrap justify-center gap-6'>
            {navlinks.map((link, i) => (
              <Link
                key={i}
                to={link.to}
                smooth
                duration={500}
                className='text-sm text-slate-500 hover:text-indigo-400 cursor-pointer transition-colors duration-200'
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Social icons */}
          <div className='flex items-center gap-3'>
            {socialIcons.map((s, i) => (
              <a
                key={i}
                href={s.href}
                target='_blank'
                rel='noreferrer'
                className='w-8 h-8 rounded-lg glass flex items-center justify-center text-slate-400
                           hover:text-indigo-400 hover:border-indigo-500/30 transition-all duration-200'
              >
                {s.icon}
              </a>
            ))}
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
