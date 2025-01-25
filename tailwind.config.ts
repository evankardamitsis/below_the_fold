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
                sans: [tokens.typography.fonts.body],
                heading: [tokens.typography.fonts.heading],
            },
            fontSize: tokens.typography.sizes,
            lineHeight: tokens.typography.lineHeights,
            fontWeight: tokens.typography.weights,
            spacing: tokens.spacing,
            borderRadius: tokens.radii,
            boxShadow: tokens.shadows,
            screens: tokens.breakpoints,
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
        require('tailwindcss-animate'),
    ],
} satisfies Config;
