'use client';

import Link from 'next/link';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '@/public/mainlogo_.png';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/team', label: 'Team' },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navbarClasses = cn(
    'fixed top-0 left-0 w-full z-50 transition-all duration-300',
    scrollY > 50
      ? 'bg-black/85 backdrop-blur-md py-3 shadow-lg shadow-black/20'
      : 'bg-black/30 backdrop-blur-sm py-4'
  );

  return (
    <header className={navbarClasses}>
      <div className="container mx-auto px-4 flex items-center justify-between h-16"> {/* Fixed height */}
        {/* Logo - Perfectly aligned */}
        <Link href="/" className="flex items-center h-full gap-2">
          <div className="relative h-8 w-8 md:h-10 md:w-10 flex items-center">
            <Image
              src={logo}
              alt="Hey Prachar"
              fill
              className="object-contain hover:scale-110 transition-transform duration-300"
            />
          </div>
          <span className="font-bold text-xl md:text-2xl text-white group-hover:text-mustard transition-colors duration-300">

            Hey Prachar

          </span>
        </Link>

        {/* Desktop Navigation - Vertically centered */}
        <nav className="hidden md:flex items-center h-full space-x-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-4 py-2 text-white/90 hover:text-mustard font-medium rounded-lg hover:bg-white/5 transition-all duration-300 flex items-center h-full"
            >
              {link.label}
            </Link>
          ))}
          <Button
            variant="mustard"
            size="sm"
            className="ml-2 rounded-full h-9 flex items-center cursor-pointer"
            onClick={() => window.location.href = '/contact'}
          >
            Contact
          </Button>
        </nav>

        {/* Mobile Menu Button - Centered */}
        <Button
          variant="ghost"
          size="icon"
          className="text-white md:hidden h-9 w-9 flex items-center justify-center"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </Button>
      </div>

      {/* Mobile Menu with Blur Effect */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 top-16 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {/* Blur Overlay */}
            <div
              className="absolute inset-0 bg-black/70 backdrop-blur-sm"
              onClick={toggleMenu}
            />

            {/* Menu Content */}
            <motion.div
              className="relative bg-black/95 border-t border-white/10"
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              exit={{ y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <nav className="flex flex-col items-center justify-center space-y-4 p-6">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="w-full"
                  >
                    <Link
                      href={link.href}
                      onClick={toggleMenu}
                      className="text-white text-lg font-medium hover:text-mustard transition-colors px-6 py-3 rounded-lg hover:bg-white/5 block text-center w-full"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}

                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: navLinks.length * 0.1 }}
                  className="w-full pt-2"
                >
                  <Button
                    variant="mustard"
                    size="lg"
                    className="rounded-full w-full cursor-pointer"
                    onClick={() => window.location.href = '/contact'}
                  >
                    Contact
                  </Button>
                </motion.div>
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}