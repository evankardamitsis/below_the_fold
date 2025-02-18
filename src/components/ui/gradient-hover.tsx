'use client'

import { motion } from 'framer-motion'

interface GradientHoverProps {
    gradient: string
}

export function GradientHover({ gradient }: GradientHoverProps) {
    return (
        <motion.div
            className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br ${gradient}`}
            initial={false}
        />
    )
} 