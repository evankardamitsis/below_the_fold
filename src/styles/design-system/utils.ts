import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { tokens } from './tokens'

// Utility for merging Tailwind classes safely
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Helper for handling responsive values based on breakpoints
export function getResponsiveValue(
  value: string | Record<string, string>, 
  breakpoint?: keyof typeof tokens.breakpoints
) {
  if (typeof value === 'string') return value
  if (!breakpoint) return value.default || value.base || Object.values(value)[0]
  return value[breakpoint]
} 