'use client'

import Link from 'next/link'
import { ExploreArrow } from '@/components/icons/explore-arrow'
import { ArrowIcon } from '../icons/arrow-icon'
import { ScrollingText } from '@/components/@shared/scrolling-text'

export function MarketingHero() {
    return (
        <section className="relative min-h-screen bg-page-light pb-24">
            <div className="mx-auto max-w-[1620px] px-4 sm:px-6 lg:px-8 pt-20 md:pt-24">
                {/* Main Content */}
                <div className="flex flex-col lg:flex-row lg:justify-between mt-12 md:mt-8 lg:mt-12">
                    {/* Left Side - Main Heading */}
                    <div className="lg:max-w-[75%]">
                        <h1 className="text-[3.25rem] sm:text-[4rem] md:text-[5rem] lg:text-[6rem] leading-[0.95] tracking-[-0.03em] font-bold text-neutral-900 flex flex-col">
                            <span className="mb-3 md:mb-4">We make e-shops</span>
                            <div className="flex items-center gap-4 lg:gap-6 group">
                                <span>that work for you</span>
                                <div className="flex items-center justify-center w-[45px] h-[45px] lg:w-[60px] lg:h-[60px] rounded-full bg-brand-purple scale-100 lg:scale-[1.2]">
                                    <span className="text-neutral-900 flex items-center scale-[1.2] lg:scale-[1.5]">
                                        <ArrowIcon />
                                    </span>
                                </div>
                            </div>
                        </h1>
                    </div>

                    {/* Right Side - Description */}
                    <div className="mt-12 lg:mt-0 lg:max-w-[20%] flex flex-col justify-between py-4 lg:py-8">
                        <p className="text-neutral-600 text-[14px] lg:text-[15px] leading-relaxed tracking-wide font-medium uppercase">
                            <span className="text-neutral-400">BELOW THE FOLD</span> is a <span className="text-[#96bf48]">Shopify Partner</span> agency specializing in e-commerce design and development. We create high-performing stores that help businesses grow.
                        </p>
                        <Link
                            href="/works"
                            className="text-[14px] lg:text-[15px] text-neutral-900 hover:opacity-70 transition-opacity inline-flex items-center group mt-6"
                        >
                            <ExploreArrow />
                            <span>Explore projects</span>
                        </Link>
                    </div>
                </div>

                {/* Scrolling Text */}
                <ScrollingText />

                {/* Hero Video */}
                <div className="mt-8 lg:mt-10 w-full aspect-[16/9] lg:aspect-[21/9] rounded-xl lg:rounded-2xl overflow-hidden bg-neutral-100">
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        poster="/video-poster.webp"
                        className="w-full h-full object-cover"
                    >
                        <source
                            src={process.env.NEXT_PUBLIC_HERO_VIDEO_URL}
                            type="video/mp4"
                        />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
        </section>
    )
} 