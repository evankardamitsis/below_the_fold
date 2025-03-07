'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useMediaQuery } from '@/hooks/use-media-query'

const NAVIGATION_ITEMS = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Process', href: '/process' },
    { label: 'Works', href: '/works' },
    { label: 'Contact', href: '/contact' },
]

export function DynamicIsland() {
    const [isExpanded, setIsExpanded] = useState(false)
    const pathname = usePathname()
    const isLargeScreen = useMediaQuery('(min-width: 1024px)')

    return (
        <div className="fixed pr-[7.2rem] lg:pr-0 md:pr-0 md:left-1/2 lg:left-1/2 top-4 -translate-x-1/2 z-50">
            <motion.div
                className="bg-neutral-900 rounded-[24px] overflow-hidden shadow-lg relative"
                animate={{
                    width: isExpanded
                        ? isLargeScreen ? '600px' : '320px'
                        : '120px',
                    height: isExpanded
                        ? isLargeScreen ? '38px' : 'auto'
                        : '38px',
                    x: isExpanded && !isLargeScreen ? 'calc(50vw - 76% - 48px)' : 0
                }}
                transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 20
                }}
            >
                {/* Status Pill - Always Visible */}
                <motion.div
                    className="h-[38px] px-4 flex items-center justify-center cursor-pointer hover:bg-neutral-800 transition-colors"
                    onClick={() => setIsExpanded(!isExpanded)}
                >
                    <AnimatePresence mode="wait">
                        {!isExpanded && (
                            <motion.div
                                className="flex items-center gap-2"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                            >
                                <motion.div
                                    className="h-2 w-2 rounded-full bg-green-500"
                                    animate={{
                                        scale: [1, 1.2, 1],
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                    }}
                                />
                                <span className="text-xs font-medium text-white tracking-wide uppercase">
                                    Menu
                                </span>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>

                {/* Header Actions - Mobile Only */}
                <AnimatePresence>
                    {isExpanded && !isLargeScreen && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute top-0 right-0 h-[38px] flex items-center"
                        >
                            <button
                                className="w-[38px] h-full flex items-center justify-center text-white/60 hover:text-white hover:bg-white/5 transition-colors"
                                onClick={() => setIsExpanded(false)}
                            >
                                ✕
                            </button>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Close Button - Desktop Only */}
                <AnimatePresence>
                    {isExpanded && isLargeScreen && (
                        <motion.button
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute top-0 right-0 w-[38px] h-[38px] flex items-center justify-center text-white/60 hover:text-white hover:bg-white/5 transition-colors"
                            onClick={() => setIsExpanded(false)}
                        >
                            ✕
                        </motion.button>
                    )}
                </AnimatePresence>

                {/* Navigation Menu */}
                <AnimatePresence>
                    {isExpanded && (
                        <motion.div
                            initial={{ opacity: 0, y: isLargeScreen ? 0 : -10, x: isLargeScreen ? -10 : 0 }}
                            animate={{ opacity: 1, y: 0, x: 0 }}
                            exit={{ opacity: 0, y: isLargeScreen ? 0 : -10, x: isLargeScreen ? -10 : 0 }}
                            className={`px-0 ${isLargeScreen ? '-mt-[38px] ml-[80px]' : 'py-4'}`}
                        >
                            {/* Book a Free Call Button - Mobile Only */}
                            <AnimatePresence>
                                {!isLargeScreen && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        className="px-4 mb-6"
                                    >
                                        <Link
                                            href={process.env.NEXT_PUBLIC_CALENDLY_URL || '#'}
                                            target="_blank"
                                            className="w-full h-12 flex items-center justify-center bg-white text-black rounded-lg font-medium hover:bg-neutral-100 transition-colors"
                                            onClick={() => setIsExpanded(false)}
                                        >
                                            Book a Free Call
                                        </Link>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            <nav className={`flex ${isLargeScreen ? 'flex-row' : 'flex-col'} gap-3`}>
                                {NAVIGATION_ITEMS.map((item) => (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        className={`px-4 py-2.5 rounded-md text-sm font-medium transition-colors ${pathname === item.href
                                            ? 'bg-white/10 text-white'
                                            : 'text-white/60 hover:text-white hover:bg-white/5'
                                            }`}
                                        onClick={() => setIsExpanded(false)}
                                    >
                                        {item.label}
                                    </Link>
                                ))}
                            </nav>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </div>
    )
} 