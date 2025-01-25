import { cva } from 'class-variance-authority'

// Text style variants for consistent typography across the application
export const textStyles = cva('', {
  variants: {
    intent: {
      h1: 'text-4xl font-bold tracking-tight lg:text-5xl',
      h2: 'text-3xl font-semibold tracking-tight',
      h3: 'text-2xl font-semibold tracking-tight',
      body: 'leading-7 [&:not(:first-child)]:mt-6',
      large: 'text-lg font-semibold',
      small: 'text-sm font-medium leading-none',
      muted: 'text-sm text-muted-foreground',
    },
  },
  defaultVariants: {
    intent: 'body',
  },
})

// Container style variants for layout consistency
export const containerStyles = cva('mx-auto w-full', {
  variants: {
    size: {
      default: 'max-w-7xl',
      sm: 'max-w-3xl',
      md: 'max-w-5xl',
      lg: 'max-w-7xl',
    },
    padding: {
      default: 'px-4 sm:px-6 lg:px-8',
      none: '',
    },
  },
  defaultVariants: {
    size: 'default',
    padding: 'default',
  },
}) 