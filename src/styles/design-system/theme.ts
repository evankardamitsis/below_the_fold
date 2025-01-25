import { tokens } from './tokens'

// Theme configuration for light and dark modes
export const theme = {
  light: {
    // Light theme color assignments
    background: tokens.colors.brand.primary[50],
    foreground: tokens.colors.brand.primary[900],
    muted: tokens.colors.brand.primary[100],
    'muted-foreground': tokens.colors.brand.primary[700],
    border: tokens.colors.brand.primary[200],
    input: tokens.colors.brand.primary[200],
    ring: tokens.colors.brand.primary[300],
  },
  dark: {
    // Dark theme color assignments
    background: tokens.colors.brand.primary[900],
    foreground: tokens.colors.brand.primary[50],
    muted: tokens.colors.brand.primary[800],
    'muted-foreground': tokens.colors.brand.primary[400],
    border: tokens.colors.brand.primary[800],
    input: tokens.colors.brand.primary[800],
    ring: tokens.colors.brand.primary[700],
  }
} 