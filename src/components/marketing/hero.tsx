'use client'

import Link from 'next/link'
import { ExploreArrow } from '@/components/icons/explore-arrow'
import { ArrowIcon } from '../icons/arrow-icon'
import { ScrollingText } from '@/components/marketing/scrolling-text'

export function MarketingHero() {
    return (
        <section className="relative min-h-screen bg-page-light">
            <div className="mx-auto max-w-[1620px] px-8 pt-24">
                {/* Main Content */}
                <div className="flex justify-between mt-12">
                    {/* Left Side - Main Heading */}
                    <div className="max-w-[75%]">
                        <h1 className="text-[6rem] md:text-[7rem] leading-[0.95] tracking-[-0.03em] font-bold text-neutral-900 flex flex-col">
                            <span>We build e-commerce</span>
                            <div className="flex items-center mt-4 gap-6 group">
                                <span>that works for you</span>
                                <div className="flex items-center justify-center w-[60px] h-[60px] rounded-full bg-purple-300/50 scale-[1.2]">
                                    <span className="text-neutral-900 flex items-center scale-[1.5]">
                                        <ArrowIcon />
                                    </span>
                                </div>
                            </div>
                        </h1>
                    </div>

                    {/* Right Side - Description */}
                    <div className="max-w-[20%] flex flex-col justify-between py-8">
                        <p className="text-neutral-600 text-[15px] leading-relaxed tracking-wide font-medium uppercase">
                            <span className="text-neutral-400">BELOW THE FOLD</span> is a <span className="text-[#96bf48]">Shopify Partner</span> agency specializing in e-commerce design and development. We create high-performing stores that help businesses grow.
                        </p>
                        <Link
                            href="/works"
                            className="text-[15px] text-neutral-900 hover:opacity-70 transition-opacity inline-flex items-center group mt-6"
                        >
                            <ExploreArrow />
                            <span>Explore works</span>
                        </Link>
                    </div>
                </div>

                {/* Scrolling Text */}
                <ScrollingText />
            </div>
        </section>
    )
} 