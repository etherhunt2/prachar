import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

export function randomRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function getRandomElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}

export function isMobile() {
  if (typeof window !== 'undefined') {
    return window.innerWidth < 768;
  }
  return false;
} 