'use client'

import Link from 'next/link'
import { ArrowIcon } from '@/components/icons/arrow-icon'
import { DynamicIsland } from '@/components/@shared/dynamic-island'
import { useMediaQuery } from '@/hooks/use-media-query'
import Image from 'next/image'

export function MarketingNav() {
    const isLargeScreen = useMediaQuery('(min-width: 1024px)')

    return (
        <div className="fixed top-3 left-0 right-0 z-50 flex justify-center">
            <header className="w-full max-w-[1620px] bg-black/40 backdrop-blur-md border-b border-white/10 rounded-full transition-all duration-300">
                <div className="flex h-[72px] items-center justify-between px-4 sm:px-8">
                    {/* Left side - Logo */}
                    <div className="flex items-center">
                        <Link
                            href="/"
                            className={`relative w-[120px] h-[16px] transition-opacity duration-300 hover:opacity-70`}
                        >
                            <Image
                                src="/images/belowthefold.svg"
                                alt="Below The Fold"
                                fill
                                className={`object-contain brightness-0 invert`}
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
                            className="hidden md:inline-block text-sm font-medium tracking-wide text-white hover:opacity-70 transition-opacity duration-300"
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
                            href="https://calendly.com/kardamitsis-e-belowthefold/30min"
                            target="_blank"
                            className="hidden md:inline-flex items-center justify-between px-4 sm:px-6 h-10 rounded text-[15px] font-medium bg-black hover:bg-neutral-800 text-white transition-colors duration-300 group"
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