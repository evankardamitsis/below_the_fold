'use client'

import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useEffect, useState, useCallback } from 'react'

interface CursorState {
    isVisible: boolean
    text: string
    type: 'project' | 'service-hint' | null
}

export function AnimatedCursor() {
    const cursorX = useMotionValue(-100)
    const cursorY = useMotionValue(-100)
    const [cursorState, setCursorState] = useState<CursorState>({
        isVisible: false,
        text: '',
        type: null
    })

    const springConfig = { damping: 25, stiffness: 700 }
    const cursorXSpring = useSpring(cursorX, springConfig)
    const cursorYSpring = useSpring(cursorY, springConfig)

    const handleServiceHint = useCallback((e: MouseEvent) => {
        const rightArea = document.querySelector('.services-right-area')
        if (!rightArea) return

        const rect = rightArea.getBoundingClientRect()
        const isOverRightArea = (
            e.clientX >= rect.left &&
            e.clientX <= rect.right &&
            e.clientY >= rect.top &&
            e.clientY <= rect.bottom
        )

        const isActive = rightArea.getAttribute('data-active') === 'true'

        if (isOverRightArea && !isActive) {
            setCursorState({
                isVisible: true,
                text: 'Move me to the left to explore services',
                type: 'service-hint'
            })
        } else if (cursorState.type === 'service-hint') {
            setCursorState({
                isVisible: false,
                text: '',
                type: null
            })
        }
    }, [cursorState.type])

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX - 50)
            cursorY.set(e.clientY - 25)
            handleServiceHint(e)
        }

        const handleProjectEnter = () => {
            setCursorState({
                isVisible: true,
                text: 'View Project',
                type: 'project'
            })
        }

        const handleProjectLeave = () => {
            setCursorState({
                isVisible: false,
                text: '',
                type: null
            })
        }

        // Add listeners to project card images
        const projectCardImages = document.querySelectorAll('.project-card-image')
        projectCardImages.forEach(card => {
            card.addEventListener('mouseenter', handleProjectEnter)
            card.addEventListener('mouseleave', handleProjectLeave)
        })

        window.addEventListener('mousemove', moveCursor)

        return () => {
            window.removeEventListener('mousemove', moveCursor)
            projectCardImages.forEach(card => {
                card.removeEventListener('mouseenter', handleProjectEnter)
                card.removeEventListener('mouseleave', handleProjectLeave)
            })
        }
    }, [cursorX, cursorY, handleServiceHint])

    return (
        <motion.div
            className="fixed top-0 left-0 z-50 pointer-events-none hidden lg:block"
            style={{
                x: cursorXSpring,
                y: cursorYSpring,
                opacity: cursorState.isVisible ? 1 : 0,
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
                    className="text-sm text-center font-medium whitespace-nowrap"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: cursorState.isVisible ? 1 : 0 }}
                    transition={{ duration: 0.2 }}
                >
                    {cursorState.text}
                </motion.span>
            </motion.div>
        </motion.div>
    )
} 