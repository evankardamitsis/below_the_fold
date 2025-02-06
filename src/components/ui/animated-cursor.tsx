'use client'

import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useEffect, useState } from 'react'

export function AnimatedCursor() {
    const cursorX = useMotionValue(-100)
    const cursorY = useMotionValue(-100)
    const [isVisible, setIsVisible] = useState(false)

    const springConfig = { damping: 25, stiffness: 700 }
    const cursorXSpring = useSpring(cursorX, springConfig)
    const cursorYSpring = useSpring(cursorY, springConfig)

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX - 50)
            cursorY.set(e.clientY - 25)
        }

        const handleMouseEnter = () => {
            setIsVisible(true)
        }

        const handleMouseLeave = () => {
            setIsVisible(false)
        }

        // Add listeners to project card images only
        const addProjectCardListeners = () => {
            const projectCardImages = document.querySelectorAll('.project-card-image')
            projectCardImages.forEach(card => {
                card.addEventListener('mouseenter', handleMouseEnter)
                card.addEventListener('mouseleave', handleMouseLeave)
            })
        }

        // Initial setup
        window.addEventListener('mousemove', moveCursor)
        addProjectCardListeners()

        // Cleanup
        return () => {
            window.removeEventListener('mousemove', moveCursor)
            const projectCardImages = document.querySelectorAll('.project-card-image')
            projectCardImages.forEach(card => {
                card.removeEventListener('mouseenter', handleMouseEnter)
                card.removeEventListener('mouseleave', handleMouseLeave)
            })
        }
    }, [cursorX, cursorY])

    return (
        <motion.div
            className="fixed top-0 left-0 z-50 pointer-events-none"
            style={{
                x: cursorXSpring,
                y: cursorYSpring,
                opacity: isVisible ? 1 : 0,
            }}
        >
            <motion.div
                className="relative flex items-center justify-center bg-black/80 text-white rounded-full px-6 py-3 min-w-[100px]"
                layoutId="cursor"
                transition={{
                    type: "spring",
                    damping: 25,
                    stiffness: 700
                }}
            >
                <motion.span
                    className="project-hover-text text-sm text-center font-medium whitespace-nowrap"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isVisible ? 1 : 0 }}
                    transition={{ duration: 0.2 }}
                >
                    View Project
                </motion.span>
            </motion.div>
        </motion.div>
    )
} 