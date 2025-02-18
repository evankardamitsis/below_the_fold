'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { SERVICES } from '@/constants/services'

// Services page displaying agency's service offerings
export default function ServicesPage() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative min-h-screen bg-neutral-900 overflow-hidden">
                {/* Video Background */}
                <div className="absolute inset-0 w-full h-full">
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        poster="/images/services-poster.webp"
                        className="object-cover w-full h-full opacity-90"
                    >
                        <source
                            src={process.env.NEXT_PUBLIC_SERVICES_VIDEO_URL}
                            type="video/mp4"
                        />
                        Your browser does not support the video tag.
                    </video>
                </div>

                {/* Content */}
                <div className="relative z-10 mx-auto max-w-[1620px] px-8 pt-48">
                    {/* Content Card */}
                    <div className="bg-neutral-900/80 backdrop-blur-sm rounded-xl lg:rounded-2xl p-12 max-w-[90%]">
                        {/* Small Label */}
                        <motion.p
                            className="text-white/60 text-sm font-medium mb-6 uppercase"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            Services
                        </motion.p>

                        {/* Main Heading */}
                        <motion.h1
                            className="text-[3.5rem] md:text-[5rem] lg:text-[7rem] leading-[0.9] font-bold text-white max-w-[80%]"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                        >
                            Strategic. Creative.<br />Built for Results.
                        </motion.h1>

                        {/* CTA Button */}
                        <motion.div
                            className="mt-12"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-between px-6 h-12 bg-white rounded text-[15px] font-medium hover:bg-neutral-100 transition-colors duration-300 group"
                            >
                                Let&apos;s Work Together
                                <span className="ml-2 opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300">→</span>
                            </Link>
                        </motion.div>
                    </div>

                    {/* Search Bar - Optional */}
                    <motion.div
                        className="mt-12 max-w-xl"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search services..."
                                className="w-full h-12 pl-12 pr-4 bg-white/10 backdrop-blur-sm text-white placeholder:text-white/40 rounded-md border border-white/20 focus:outline-none focus:border-white/40 transition-colors"
                            />
                            <svg
                                className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <circle cx="11" cy="11" r="8" />
                                <path d="M21 21l-4.35-4.35" />
                            </svg>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Individual Service Sections */}
            <section className="py-24 bg-page-light text-black">
                <div className="mx-auto max-w-[1620px] px-8">
                    {/* Strategy Section */}
                    <div className="mb-24 bg-black p-8 rounded-xl">
                        <div className="flex items-center justify-between mb-12">
                            <h2 className="text-[7rem] font-bold text-white">Strategy</h2>
                            <p className="text-[18px] text-white/60 max-w-[400px] uppercase">
                                Providing actionable insights to help build the best version of each ecommerce presence.
                            </p>
                        </div>

                        <div className="space-y-0">
                            {SERVICES[0].details.map((detail) => (
                                <motion.div
                                    key={detail.title}
                                    className="mb-16 text-white"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <h3 className="text-[22px] text-white/60 uppercase">{detail.title}</h3>
                                    {detail.items.map((item) => (
                                        <div
                                            key={item.name}
                                            className="group relative border-t border-white/10 transition-all duration-200"
                                        >
                                            <div className="flex items-center justify-between py-6 px-12 group-hover:bg-neutral-900">
                                                <h4 className="text-[1.75rem] font-medium group-hover:text-white transition-colors duration-200">
                                                    {item.name}
                                                </h4>
                                                <div className="opacity-0 group-hover:opacity-100 transition-all duration-200">
                                                    <p className="text-[15px] text-white max-w-[400px]">
                                                        {item.description}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Design Section */}
                    <div className="mb-24 bg-page-lighter p-8 rounded-xl">
                        <div className="flex items-center justify-between mb-12">
                            <h2 className="text-[7rem] font-bold">Design</h2>
                            <p className="text-[18px] text-black/60 max-w-[400px] uppercase">
                                Creating beautiful, functional, and user-centric digital experiences.
                            </p>
                        </div>

                        <div className="space-y-0">
                            {SERVICES[1].details.map((detail) => (
                                <motion.div
                                    key={detail.title}
                                    className="mb-16"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <h3 className="text-[22px] text-black/60 uppercase">{detail.title}</h3>
                                    {detail.items.map((item) => (
                                        <div
                                            key={item.name}
                                            className="group relative border-t border-black/10 transition-all duration-200"
                                        >
                                            <div className="flex items-center justify-between py-6 px-12 group-hover:bg-neutral-900">
                                                <h4 className="text-[1.75rem] font-medium group-hover:text-white transition-colors duration-200">
                                                    {item.name}
                                                </h4>
                                                <div className="opacity-0 group-hover:opacity-100 transition-all duration-200">
                                                    <p className="text-[15px] text-white max-w-[400px]">
                                                        {item.description}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Development Section */}
                    <div className="mb-24 bg-black p-8 rounded-xl">
                        <div className="flex items-center justify-between mb-12">
                            <h2 className="text-[7rem] font-bold text-white">Development</h2>
                            <p className="text-[18px] text-white/60 max-w-[400px] uppercase">
                                Building robust, scalable, and high-performing ecommerce solutions.
                            </p>
                        </div>

                        <div className="space-y-0">
                            {SERVICES[2].details.map((detail) => (
                                <motion.div
                                    key={detail.title}
                                    className="mb-16"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <h3 className="text-[22px] text-white/60 uppercase">{detail.title}</h3>
                                    {detail.items.map((item) => (
                                        <div
                                            key={item.name}
                                            className="group relative border-t border-white/10 transition-all duration-200 text-white"
                                        >
                                            <div className="flex items-center justify-between py-6 px-12 group-hover:bg-neutral-900">
                                                <h4 className="text-[1.75rem] font-medium group-hover:text-white transition-colors duration-200">
                                                    {item.name}
                                                </h4>
                                                <div className="opacity-0 group-hover:opacity-100 transition-all duration-200">
                                                    <p className="text-[15px] text-white max-w-[400px]">
                                                        {item.description}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Growth Section */}
                    <div className="mb-24 bg-page-lighter p-8 rounded-xl">
                        <div className="flex items-center justify-between mb-12">
                            <h2 className="text-[7rem] font-bold">Growth</h2>
                            <p className="text-[18px] text-black/60 max-w-[400px] uppercase">
                                Optimizing and scaling your ecommerce business for sustainable growth.
                            </p>
                        </div>

                        <div className="space-y-0">
                            {SERVICES[3].details.map((detail) => (
                                <motion.div
                                    key={detail.title}
                                    className="mb-16"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <h3 className="text-[22px] text-black/60 uppercase">{detail.title}</h3>
                                    {detail.items.map((item) => (
                                        <div
                                            key={item.name}
                                            className="group relative border-t border-black/10 transition-all duration-200"
                                        >
                                            <div className="flex items-center justify-between py-6 px-12 group-hover:bg-neutral-900">
                                                <h4 className="text-[1.75rem] font-medium group-hover:text-white transition-colors duration-200">
                                                    {item.name}
                                                </h4>
                                                <div className="opacity-0 group-hover:opacity-100 transition-all duration-200">
                                                    <p className="text-[15px] text-white max-w-[400px]">
                                                        {item.description}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
} 