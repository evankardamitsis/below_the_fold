// Design system tokens - Single source of truth for design values
export const tokens = {
  colors: {
    // Brand Colors - Primary palette for consistent brand identity
    brand: {
      primary: {
        50: 'hsl(var(--primary) / 0.05)',
        100: 'hsl(var(--primary) / 0.1)',
        200: 'hsl(var(--primary) / 0.2)',
        300: 'hsl(var(--primary) / 0.3)',
        400: 'hsl(var(--primary) / 0.4)',
        500: 'hsl(var(--primary))', // Primary brand color
        600: 'hsl(var(--primary) / 0.6)',
        700: 'hsl(var(--primary) / 0.7)',
        800: 'hsl(var(--primary) / 0.8)',
        900: 'hsl(var(--primary) / 0.9)',
      },
      secondary: {
        // Secondary brand color scale
      }
    },
    
    // Semantic Colors - Purpose-driven color assignments
    semantic: {
      success: 'hsl(142.1 76.2% 36.3%)',
      error: 'hsl(var(--destructive))',
      warning: 'hsl(38 92% 50%)',
      info: 'hsl(221 83% 53%)',
    },
    
    // UI Colors - Interface-specific color tokens
    ui: {
      background: {
        primary: 'var(--background)',
        secondary: 'var(--secondary)',
      },
      text: {
        primary: 'var(--foreground)',
        secondary: 'var(--muted-foreground)',
      }
    }
  },

  // Typography system - Font definitions and scale
  typography: {
    fonts: {
      body: 'var(--font-inter)',
      heading: 'var(--font-plus-jakarta)',
    },
    sizes: {
      xs: '0.75rem',    // 12px
      sm: '0.875rem',   // 14px
      base: '1rem',     // 16px
      lg: '1.125rem',   // 18px
      xl: '1.25rem',    // 20px
      '2xl': '1.5rem',  // 24px
      '3xl': '1.875rem',// 30px
      '4xl': '2.25rem', // 36px
      '5xl': '3rem',    // 48px
    },
    lineHeights: {
      tight: '1.2',
      normal: '1.5',
      relaxed: '1.75',
    },
    weights: {
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
    }
  },

  // Spacing scale - Consistent spacing values
  spacing: {
    0: '0',
    px: '1px',
    0.5: '0.125rem',
    1: '0.25rem',
    2: '0.5rem',
    3: '0.75rem',
    4: '1rem',
    5: '1.25rem',
    6: '1.5rem',
    8: '2rem',
    10: '2.5rem',
    12: '3rem',
    16: '4rem',
    20: '5rem',
    24: '6rem',
  },

  // Breakpoints - Responsive design breakpoints
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },

  // Border radius scale
  radii: {
    none: '0',
    sm: '0.125rem',
    DEFAULT: 'var(--radius)',
    md: 'calc(var(--radius) - 2px)',
    lg: 'var(--radius)',
    xl: 'calc(var(--radius) + 4px)',
    '2xl': 'calc(var(--radius) + 8px)',
    full: '9999px',
  },

  // Shadow scale - Elevation system
  shadows: {
    sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    DEFAULT: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
    md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
    lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
    xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
  }
} 