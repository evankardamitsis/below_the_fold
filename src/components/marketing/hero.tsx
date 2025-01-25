'use client'

import Image from 'next/image'
import Link from 'next/link'

export function MarketingHero() {
    const currentYear = new Date().getFullYear()

    return (
        <section className="relative min-h-screen overflow-hidden bg-[#6B46C1]">
            {/* Top Bar */}
            <div className="absolute top-0 left-0 right-0 flex justify-between px-12 py-10 text-white z-40">
                <div className="text-sm font-medium tracking-[0.2em]">BELOW.THE.FOLD</div>
                <div className="text-sm font-medium tracking-[0.2em]">©{currentYear}</div>
                <div className="text-sm font-medium tracking-[0.2em] cursor-pointer hover:opacity-80 transition-opacity">MENU</div>
            </div>

            {/* Hero Content */}
            <div className="relative h-screen z-20">
                <div className="container mx-auto px-12 h-full">
                    {/* Left Side Content */}
                    <div className="absolute top-32 left-12">
                        <h1 className="text-[10rem] leading-[0.85] text-white font-normal tracking-[-0.02em]">
                            E-Commerce
                        </h1>
                    </div>
                    <div className="absolute bottom-32 left-12">
                        <div className="flex flex-col gap-8">
                            <span className="text-white/70 text-lg font-semibold tracking-[0.2em] w-[50%]">
                                We create exceptional
                                e-commerce experiences for growing brands on Shopify
                            </span>
                            <Link
                                href="/contact"
                                className="inline-flex items-center px-8 py-4 text-sm font-semibold tracking-[0.2em] text-white border-2 border-white/20 hover:bg-white/10 transition-colors"
                            >
                                LET&apos;S START
                            </Link>
                        </div>
                    </div>

                    {/* Right Side Content */}
                    <div className="absolute bottom-32 right-12">
                        <div className="text-right space-y-3 mb-8">
                            {['UI/UX DESIGN', 'WEB DEVELOPMENT', 'GROWTH CONSULTING', 'LIFECYCLE MARKETING'].map((service) => (
                                <p key={service} className="text-white text-sm font-semibold tracking-[0.2em] hover:opacity-60 transition-opacity cursor-pointer">
                                    {service}
                                </p>
                            ))}
                        </div>
                        <h1 className="text-[10rem] leading-[0.85] text-white font-normal tracking-[-0.02em]">
                            Agency
                        </h1>
                    </div>
                </div>
            </div>

            {/* Hero Image & Overlay */}
            <div className="absolute inset-0 z-10">
                <Image
                    src="/images/hero.jpg"
                    alt="Creative professional with orange glasses"
                    fill
                    priority
                    className="object-cover object-center"
                />
                {/* Overlays - Increased opacity for better readability */}
                <div className="absolute inset-0 bg-[#6B46C1]/30" />
                <div className="absolute inset-0 bg-gradient-to-b from-[#6B46C1]/10 via-[#6B46C1]/30 to-[#6B46C1]/60" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#6B46C1]/40 to-transparent" />
            </div>
        </section>
    )
} 