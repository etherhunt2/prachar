'use client';

import {
  Camera, Search, Video, Mail, BarChart, Hash, Globe, Phone,
  Image, MessageCircle, Share2, PieChart, Megaphone
} from 'lucide-react';
import React, { JSX } from 'react';

export const MarketingIcons = {
  Camera: (props) => (
    <Camera {...props} />
  ),
  Ads: (props) => (
    <Megaphone {...props} />
  ),
  Search: (props) => (
    <Search {...props} />
  ),
  Video: (props) => (
    <Video {...props} />
  ),
  Mail: (props) => (
    <Mail {...props} />
  ),
  BarChart: (props) => (
    <BarChart {...props} />
  ),
  Hash: (props) => (
    <Hash {...props} />
  ),
  Globe: (props) => (
    <Globe {...props} />
  ),
  Phone: (props) => (
    <Phone {...props} />
  ),
  Image: (props) => (
    <Image {...props} />
  ),
  MessageCircle: (props) => (
    <MessageCircle {...props} />
  ),
  Share2: (props) => (
    <Share2 {...props} />
  ),
  PieChart: (props) => (
    <PieChart {...props} />
  ),
  // Custom SVG icons
  SEO: (props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="20"
      height="20"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <circle cx="12" cy="10" r="3" />
      <path d="M12 2a8 8 0 0 1 8 8c0 1.892-1.854 6.976-8 12-6.146-5.024-8-10.108-8-12a8 8 0 0 1 8-8z" />
      <line x1="4" y1="19" x2="20" y2="19" />
    </svg>
  ),
  ContentMarketing: (props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="20"
      height="20"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
      <polyline points="10 9 9 9 8 9" />
    </svg>
  ),
  SocialMedia: (props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="20"
      height="20"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  ),
  WebDesign: (props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="20"
      height="20"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
      <line x1="3" y1="9" x2="21" y2="9" />
      <line x1="9" y1="21" x2="9" y2="9" />
    </svg>
  ),
}; 