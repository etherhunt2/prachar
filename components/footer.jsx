'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import logo from '@/public/mainlogo_.png';

const footerLinks = [
  {
    title: 'Company',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Services', href: '/services' },
      { label: 'Team', href: '/team' },
      { label: 'Portfolio', href: '/portfolio' }
    ],
  },
  {
    title: 'Services',
    links: [
      { label: 'Videography', href: '/services/videography' },
      { label: 'Photography', href: '/services/photography' },
      { label: 'SEO', href: '/services/seo' },
      { label: 'Social Media', href: '/services/social-media' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Blog', href: '/blog' },
      { label: 'Case Studies', href: '/case-studies' },
      { label: 'FAQs', href: '/faqs' },
      { label: 'Terms', href: '/terms' },
    ],
  },
];

const socialLinks = [
  { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
  { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
  { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
];

const footerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 relative overflow-hidden pt-20">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-mustard/50 to-transparent"></div>
      <div className="absolute -bottom-48 -left-48 w-96 h-96 bg-mustard/10 rounded-full filter blur-3xl"></div>
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-mustard/5 rounded-full filter blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 mb-16"
          variants={footerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Brand section */}
          <motion.div className="lg:col-span-2" variants={itemVariants}>
            <Link href="/" className="flex items-center space-x-2 mb-6 group">
              <div className="relative h-10 w-10 flex-shrink-0">
                <Image
                  src={logo}
                  alt="Hey Prachar"
                  fill
                  className="object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <span className="font-bold text-xl text-white group-hover:text-mustard transition-colors duration-300">
                Hey Prachar
              </span>
            </Link>

            <p className="text-white/70 mb-6 max-w-md">
              We're a digital marketing agency that helps brands tell their story with impact and authenticity. Let us help you reach your audience and grow your business.
            </p>

            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-white/5 hover:bg-mustard/20 flex items-center justify-center text-white transition-colors duration-300"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Links sections */}
          {footerLinks.map((section) => (
            <motion.div key={section.title} variants={itemVariants}>
              <h3 className="font-bold text-white mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-white/70 hover:text-mustard transition-colors duration-300">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Contact info */}
          <motion.div variants={itemVariants}>
            <h3 className="font-bold text-white mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="text-mustard mt-1 flex-shrink-0" />
                <span className="text-white/70">
                  Olympus Mons, <br />
                  Mars, Sun <br />
                  Milky Way, KBC Void
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} className="text-mustard flex-shrink-0" />
                <span className="text-white/70">+917973825465</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} className="text-mustard flex-shrink-0" />
                <span className="text-white/70">hello@heyprachar.com</span>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Newsletter subscription */}
        <motion.div
          className="border-t border-white/10 pt-8 pb-6"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Subscribe to our newsletter</h3>
              <p className="text-white/70">Get the latest marketing insights straight to your inbox</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded-md bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-mustard"
              />
              <Button variant="mustard" className="whitespace-nowrap">
                Subscribe
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Copyright */}
        <motion.div
          className="border-t border-white/10 py-6 text-center md:text-left text-white/50 text-sm"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>© {new Date().getFullYear()} Hey Prachar. All rights reserved.</p>
            <div className="flex space-x-6 mt-3 md:mt-0">
              <Link href="/privacy" className="hover:text-mustard transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-mustard transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
} 