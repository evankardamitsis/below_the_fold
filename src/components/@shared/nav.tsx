'use client'

import Link from 'next/link'
import { ArrowIcon } from '@/components/icons/arrow-icon'
import { DynamicIsland } from '@/components/@shared/dynamic-island'
import { useEffect, useState } from 'react'
import { useMediaQuery } from '@/hooks/use-media-query'

export function MarketingNav() {
    const [currentBackground, setCurrentBackground] = useState('bg-page-light')
    const isLargeScreen = useMediaQuery('(min-width: 1024px)')

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('section')
            const scrollPosition = window.scrollY + 72

            sections.forEach((section) => {
                const sectionTop = section.offsetTop
                const sectionHeight = section.offsetHeight

                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    const hasLightBg = section.classList.contains('bg-page-light')
                    const hasLighterBg = section.classList.contains('bg-page-lighter')

                    if (hasLightBg) {
                        setCurrentBackground('bg-page-light')
                    } else if (hasLighterBg) {
                        setCurrentBackground('bg-page-lighter')
                    }
                }
            })
        }

        window.addEventListener('scroll', handleScroll)
        handleScroll()

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <div className="fixed top-0 left-0 right-0 z-50 flex justify-center">
            <header className={`w-full max-w-[1620px] transition-colors duration-300 ${currentBackground}`}>
                <div className="flex h-[72px] items-center justify-between px-4 sm:px-8">
                    {/* Left side - Logo */}
                    <div className="flex items-center">
                        <Link
                            href="/"
                            className={`text-lg font-medium hover:opacity-70 transition-opacity ${currentBackground}`}
                        >
                            BelowTheFold
                        </Link>
                    </div>

                    {/* Center - Dynamic Island (Desktop) */}
                    {isLargeScreen && (
                        <div>
                            <DynamicIsland />
                        </div>
                    )}

                    {/* Right side */}
                    <div className="flex items-center gap-4 sm:gap-8">
                        {/* Book Call - Desktop only */}
                        <Link
                            href="https://calendly.com/kardamitsis-e-belowthefold/30min"
                            target="_blank"
                            className={`hidden md:inline-block text-sm font-medium tracking-wide hover:opacity-70 transition-opacity ${currentBackground}`}
                        >
                            Book a call
                        </Link>

                        {/* Dynamic Island - Mobile only */}
                        {!isLargeScreen && (
                            <DynamicIsland />
                        )}

                        {/* Contact Button - Desktop only */}
                        <Link
                            href="/contact"
                            className="hidden md:inline-flex items-center justify-between px-4 sm:px-6 h-10 bg-neutral-900 rounded text-white text-[15px] font-medium hover:bg-neutral-800 transition-colors duration-300 group"
                        >
                            <span>
                                <ArrowIcon />
                            </span>
                            <span className="sm:ml-1">Let&apos;s connect</span>
                        </Link>
                    </div>
                </div>
            </header>
        </div>
    )
} 