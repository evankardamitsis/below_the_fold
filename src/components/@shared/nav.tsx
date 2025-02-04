'use client'

import Link from 'next/link'
import { ArrowIcon } from '@/components/icons/arrow-icon'
import { DynamicIsland } from '@/components/@shared/dynamic-island'

export function MarketingNav() {
    return (
        <div className="fixed top-0 left-0 right-0 z-50 flex justify-center">
            <header className="w-full max-w-[1620px] rounded-full bg-page-light">
                <div className="flex h-[72px] items-center justify-between px-8 relative">
                    {/* Left side - Logo */}
                    <Link
                        href="/"
                        className="text-lg font-medium hover:opacity-70 transition-opacity bg-page-light"
                    >
                        BelowTheFold
                    </Link>

                    {/* Dynamic Island */}
                    <DynamicIsland />

                    {/* Right side - Navigation */}
                    <div className="flex items-center gap-8 bg-page-light">
                        <Link
                            href="/book-call"
                            className="text-sm font-medium tracking-wide hover:opacity-70 transition-opacity bg-page-light py-3"
                        >
                            Book a call
                        </Link>
                        <Link
                            href="/contact"
                            className="group rounded-full bg-neutral-900 px-6 py-3.5 text-sm font-medium text-white transition-colors hover:bg-neutral-800 inline-flex items-center"
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