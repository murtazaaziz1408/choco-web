import React from 'react';
import { motion } from 'framer-motion';
const Header = () => {
  const navLinks = [{
    name: 'Products',
    href: '#products'
  }, {
    name: 'About',
    href: '#about'
  }, {
    name: 'Socials',
    href: '#socials'
  }];
  return <motion.header initial={{
    opacity: 0,
    y: -20
  }} animate={{
    opacity: 1,
    y: 0
  }} transition={{
    duration: 0.6
  }} className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-20">
          <a href="#hero" className="font-serif text-2xl font-semibold text-primary hover:text-primary/80 transition-colors duration-200">
            Munira's Brownie
          </a>
          
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map(link => <a key={link.name} href={link.href} className="text-base font-medium text-foreground/80 hover:text-primary transition-all duration-200 relative group">
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
              </a>)}
          </nav>

          <button className="md:hidden p-2 text-foreground hover:text-primary transition-colors duration-200">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </motion.header>;
};
export default Header;