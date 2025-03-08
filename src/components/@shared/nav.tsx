'use client'

import Link from 'next/link'
import { ArrowIcon } from '@/components/icons/arrow-icon'
import { DynamicIsland } from '@/components/@shared/dynamic-island'
import { useEffect, useState } from 'react'
import { useMediaQuery } from '@/hooks/use-media-query'
import Image from 'next/image'

export function MarketingNav() {
    const [hasScrolled, setHasScrolled] = useState(false)
    const isLargeScreen = useMediaQuery('(min-width: 1024px)')

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY
            setHasScrolled(scrollPosition > 0)
        }

        window.addEventListener('scroll', handleScroll)
        handleScroll()

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <div className="fixed top-0 left-0 right-0 z-50 flex justify-center">
            <header className={`w-full max-w-[1620px] transition-all duration-300 ${hasScrolled ? 'bg-black/15 backdrop-blur-md border-b border-white/10 rounded-b-md' : ''
                }`}>
                <div className="flex h-[72px] items-center justify-between px-4 sm:px-8">
                    {/* Left side - Logo */}
                    <div className="flex items-center">
                        <Link
                            href="/"
                            className={`relative w-[120px] h-[16px] transition-opacity duration-300 ${hasScrolled ? 'hover:opacity-70' : 'hover:opacity-80'}`}
                        >
                            <Image
                                src="/images/belowthefold.svg"
                                alt="Below The Fold"
                                fill
                                className={`object-contain ${hasScrolled ? 'brightness-0 invert' : ''}`}
                                priority
                            />
                        </Link>
                    </div>

                    {/* Center - Dynamic Island (Desktop) */}
                    {isLargeScreen && (
                        <div className="relative z-50">
                            <DynamicIsland />
                        </div>
                    )}

                    {/* Right side */}
                    <div className="flex items-center gap-4 sm:gap-8">
                        {/* Book Call - Desktop only */}
                        <Link
                            href="/contact"
                            className={`hidden md:inline-block text-sm font-medium tracking-wide transition-colors duration-300 ${hasScrolled ? 'text-white hover:opacity-70' : 'text-neutral-900 hover:text-neutral-700'
                                }`}
                        >
                            Let&apos;s connect
                        </Link>

                        {/* Dynamic Island - Mobile only */}
                        {!isLargeScreen && (
                            <div className="relative z-50">
                                <DynamicIsland />
                            </div>
                        )}

                        {/* Contact Button - Desktop only */}
                        <Link
                            href="/contact"
                            target="_blank"
                            className={`hidden md:inline-flex items-center justify-between px-4 sm:px-6 h-10 rounded text-[15px] font-medium transition-colors duration-300 group ${hasScrolled
                                ? 'bg-black hover:bg-neutral-800 text-white'
                                : 'bg-neutral-900 hover:bg-neutral-800 text-white'
                                }`}
                        >
                            <span>
                                <ArrowIcon />
                            </span>
                            <span className="sm:ml-1">Book a free call</span>
                        </Link>
                    </div>
                </div>
            </header>
        </div>
    )
} 