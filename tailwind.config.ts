import type { Config } from "tailwindcss";
import { tokens } from './src/styles/design-system/tokens'

export default {
    darkMode: ["class"],
    content: ['./src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                border: "hsl(var(--border))",
                input: "hsl(var(--input))",
                ring: "hsl(var(--ring))",
                background: "hsl(var(--background))",
                page: {
                    light: '#EBEBEB',
                    lighter: '#F5F5F5'
                },
                brand: {
                    purple: '#E2D0F5',
                },
                foreground: "hsl(var(--foreground))",
                primary: {
                    DEFAULT: "hsl(var(--primary))",
                    foreground: "hsl(var(--primary-foreground))",
                    ...tokens.colors.brand.primary,
                },
                secondary: {
                    DEFAULT: "hsl(var(--secondary))",
                    foreground: "hsl(var(--secondary-foreground))",
                },
                destructive: {
                    DEFAULT: "hsl(var(--destructive))",
                    foreground: "hsl(var(--destructive-foreground))",
                },
                muted: {
                    DEFAULT: "hsl(var(--muted))",
                    foreground: "hsl(var(--muted-foreground))",
                },
                accent: {
                    DEFAULT: "hsl(var(--accent))",
                    foreground: "hsl(var(--accent-foreground))",
                },
                ...tokens.colors.semantic,
            },
            fontFamily: {
                sans: ['var(--font-satoshi)'],
                heading: ['var(--font-satoshi)'],
            },
            fontSize: tokens.typography.sizes,
            lineHeight: tokens.typography.lineHeights,
            fontWeight: tokens.typography.weights,
            spacing: tokens.spacing,
            borderRadius: tokens.radii,
            boxShadow: tokens.shadows,
            screens: tokens.breakpoints,
            animation: {
                scroll: 'scroll 8s linear infinite',
                'float': 'float 3s ease-in-out infinite',
                'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'bounce-slow': 'bounce 3s infinite',
                'float-subtle': 'float-subtle 3s ease-in-out infinite',
                'fade-in': 'fadeIn 1.5s ease-out forwards',
            },
            keyframes: {
                scroll: {
                    '0%': { transform: 'translateX(0)' },
                    '100%': { transform: 'translateX(-33.33333%)' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
                'float-subtle': {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-4px)' },
                },
                fadeIn: {
                    '0%': { 
                        opacity: '0',
                        transform: 'translateX(-10px)'
                    },
                    '100%': { 
                        opacity: '1',
                        transform: 'translateX(0)'
                    },
                },
            },
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
        require('tailwindcss-animate'),
    ],
} satisfies Config;
