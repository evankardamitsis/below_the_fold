'use client'

import Link from 'next/link'
import { ArrowIcon } from '@/components/icons/arrow-icon'
import { DynamicIsland } from '@/components/@shared/dynamic-island'
import { useEffect, useState } from 'react'

export function MarketingNav() {
    const [currentBackground, setCurrentBackground] = useState('bg-page-light')

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('section')
            const scrollPosition = window.scrollY + 72 // Account for nav height

            // Find the current section
            sections.forEach((section) => {
                const sectionTop = section.offsetTop
                const sectionHeight = section.offsetHeight

                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    // Get the background class from the section
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
        handleScroll() // Initial check

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <div className="fixed top-0 left-0 right-0 z-50 flex justify-center">
            <header className={`w-full max-w-[1620px] transition-colors duration-300 ${currentBackground}`}>
                <div className="flex h-[72px] items-center justify-between px-8 relative">
                    {/* Left side - Logo */}
                    <Link
                        href="/"
                        className={`text-lg font-medium hover:opacity-70 transition-opacity ${currentBackground}`}
                    >
                        BelowTheFold
                    </Link>

                    {/* Dynamic Island */}
                    <DynamicIsland />

                    {/* Right side - Navigation */}
                    <div className={`flex items-center gap-8 ${currentBackground}`}>
                        <Link
                            href="https://calendly.com/kardamitsis-e-belowthefold/30min"
                            target="_blank"
                            className={`text-sm font-medium tracking-wide hover:opacity-70 transition-opacity ${currentBackground} py-3`}
                        >
                            Book a call
                        </Link>
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-between px-6 h-10 bg-neutral-900 rounded text-white text-[15px] font-medium hover:bg-neutral-800 transition-colors duration-300 group"
                        >
                            <ArrowIcon />
                            Let&apos;s connect
                        </Link>
                    </div>
                </div>
            </header>
        </div>
    )
} 