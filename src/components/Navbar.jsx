import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

import { Link } from 'react-scroll';
import { socialMedia } from '../data/data';
import { navlinks } from '../data/data';
import Resume from '../assets/Resume.pdf';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => setNav(!nav);

  return (
    <>
    <div
      className={`fixed w-full h-[70px] flex justify-between items-center px-6 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0d1224]/90 backdrop-blur-md border-b border-white/5 shadow-lg shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      {/* Logo */}
      <a href="/" className="flex items-center gap-2 group">
        <div className="w-10 h-10 rounded-xl btn-gradient flex items-center justify-center shadow-lg shadow-indigo-500/30 group-hover:opacity-90 transition-opacity">
          <span className="text-white font-bold text-lg tracking-tight">GS</span>
        </div>
      </a>

      {/* Desktop menu */}
      <ul className="hidden md:flex items-center gap-1">
        {navlinks.map((link, i) => (
          <li key={i} className="px-0">
            <Link
              to={link.to}
              smooth={true}
              duration={500}
              className="relative px-4 py-2 text-slate-400 hover:text-white text-sm font-medium transition-colors duration-200 cursor-pointer group"
            >
              {link.name}
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 group-hover:w-4/5 h-0.5 bg-gradient-to-r from-indigo-400 to-pink-400 transition-all duration-300 rounded-full" />
            </Link>
          </li>
        ))}
        <li className="px-0 ml-2">
          <a
            href={Resume}
            download={true}
            className="btn-gradient px-4 py-2 rounded-lg text-sm font-semibold text-white hover:opacity-90 transition-opacity"
          >
            Resume
          </a>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-50 cursor-pointer text-slate-300 hover:text-white">
        {!nav ? <FaBars size={22} /> : <FaTimes size={22} />}
      </div>

      {/* Mobile menu */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-[#0d1224]/95 backdrop-blur-xl flex flex-col justify-center items-center gap-8 transition-all duration-300 ${
          nav ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <Link onClick={handleClick} to="home" smooth duration={500} className="text-3xl font-bold text-slate-300 hover:text-gradient cursor-pointer hover:text-white transition-colors">Home</Link>
        {navlinks.map((link, i) => (
          <Link
            key={i}
            onClick={handleClick}
            to={link.to}
            smooth
            duration={500}
            className="text-3xl font-bold text-slate-300 hover:text-white cursor-pointer transition-colors"
          >
            {link.name}
          </Link>
        ))}
        <a
          href={Resume}
          download
          onClick={handleClick}
          className="btn-gradient px-8 py-3 rounded-xl text-white font-semibold text-lg hover:opacity-90 transition-opacity mt-4"
        >
          Resume
        </a>
      </div>

    </div>

    {/* Social sidebar — outside navbar div to avoid stacking context clash */}
    <div className="hidden lg:flex fixed flex-col top-[35%] left-0 z-30">
      <ul className="space-y-2">
        {socialMedia.map((social, i) => (
          <li
            key={i}
            className="w-[160px] h-[52px] flex justify-between items-center ml-[-108px] hover:ml-[-8px] duration-300 glass rounded-r-xl px-3"
          >
            <a
              className="flex justify-between items-center w-full text-slate-300 hover:text-white transition-colors"
              href={social.link}
              target="_blank"
              rel="noreferrer"
            >
              <span className="text-sm font-medium">{social.name}</span>
              <span className="text-indigo-400">{social.svgIcon}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
    </>
  );
};

export default Navbar;
