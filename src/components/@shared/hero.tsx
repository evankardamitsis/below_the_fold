'use client'

import Link from 'next/link'
import { ExploreArrow } from '@/components/icons/explore-arrow'
import { ArrowIcon } from '../icons/arrow-icon'
import { ScrollingText } from '@/components/@shared/scrolling-text'
import { motion } from 'framer-motion'
import { CloudinaryVideo } from '@/components/ui/cloudinary-video'

export function MarketingHero() {
    return (
        <section className="relative min-h-screen bg-page-light">
            <div className="mx-auto max-w-[1620px] px-4 sm:px-6 lg:px-8 pt-20 md:pt-24">
                {/* Main Content */}
                <div className="flex flex-col lg:flex-row lg:justify-between mt-12 md:mt-8 lg:mt-12">
                    {/* Left Side - Main Heading */}
                    <div className="lg:max-w-[75%]">
                        <h1 className="text-[2.5rem] sm:text-[4rem] md:text-[5rem] lg:text-[5rem] leading-[0.85] tracking-[-0.03em] font-bold text-neutral-900 flex flex-col">
                            <span className="mb-3 md:mb-4">We Build Shopify Stores.</span>
                            <div className="flex items-center gap-4 lg:gap-6 group">
                                <span>We Grow Brands.</span>
                                <div className="flex items-center justify-center w-[45px] h-[45px] lg:w-[60px] lg:h-[60px] rounded-full bg-brand-purple scale-100 lg:scale-[1.2]">
                                    <span className="text-neutral-900 flex items-center scale-[1.2] lg:scale-[1.5]">
                                        <ArrowIcon />
                                    </span>
                                </div>
                            </div>
                        </h1>

                        {/* Buttons */}
                        <motion.div
                            className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-8 sm:mt-12"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            <Link
                                href="/contact"
                                className="flex items-center justify-center sm:justify-between px-4 sm:px-6 h-12 bg-black/90 rounded text-[15px] font-medium text-white hover:bg-neutral-100 hover:text-black hover:border-black border border-transparent transition-colors duration-300 group"
                            >
                                Let&apos;s Work Together
                                <span className="hidden sm:inline-block ml-2 opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300">→</span>
                            </Link>
                            <Link
                                href={process.env.NEXT_PUBLIC_CALENDLY_URL || '#'}
                                target="_blank"
                                className="flex items-center justify-center sm:justify-between px-4 sm:px-6 h-12 bg-transparent border border-black/20 rounded text-[15px] font-medium text-black hover:bg-black/5 transition-colors duration-300 group"
                            >
                                Book a free call
                                <span className="hidden sm:inline-block ml-2 opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300">→</span>
                            </Link>
                        </motion.div>
                    </div>

                    {/* Right Side - Description */}
                    <div className="mt-8 sm:mt-12 lg:mt-0 lg:max-w-[20%] flex flex-col justify-between py-4 lg:py-8">
                        <p className="text-neutral-600 text-[14px] lg:text-[15px] leading-relaxed tracking-wide font-medium uppercase">
                            <span className="text-neutral-400">BELOW THE FOLD</span> is a <span className="text-[#96bf48]">Shopify Partner</span> agency. We design, build, and grow Shopify stores. We deliver results in 6 weeks and stay by your side as you scale.
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

                {/* Video Section */}
                <div className="relative mt-12 md:mt-16 lg:mt-20">
                    <div className="relative w-full max-w-[1620px] h-[30vh] md:h-[70vh] lg:h-[100vh] mx-auto rounded-2xl overflow-hidden">
                        <CloudinaryVideo
                            publicId={process.env.NEXT_PUBLIC_HERO_VIDEO_ID!}
                            className="w-full rounded-2xl"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
} 