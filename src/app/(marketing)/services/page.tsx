'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { SERVICES } from '@/constants/services'
import { ProjectBanner } from '@/components/ui/project-banner'
import { ChevronDown, Plus } from 'lucide-react'
import { CloudinaryVideo } from '@/components/ui/cloudinary-video'

// Services page displaying agency's service offerings
export default function ServicesPage() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative min-h-[80vh] md:min-h-screen bg-neutral-900 overflow-hidden">
                {/* Video Background */}
                <div className="absolute inset-0 w-full h-full overflow-hidden">
                    <CloudinaryVideo
                        publicId={process.env.NEXT_PUBLIC_SERVICES_VIDEO_ID!}
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Content */}
                <div className="relative z-10 mx-auto max-w-[1620px] px-4 sm:px-6 md:px-8 pt-24 sm:pt-32 md:pt-48">
                    {/* Content Card */}
                    <div className="bg-neutral-900/30 backdrop-blur-sm rounded-xl lg:rounded-2xl p-6 sm:p-8 md:p-12 w-full sm:max-w-[90%]">
                        {/* Small Label */}
                        <motion.p
                            className="text-white/80 text-xs sm:text-sm font-medium mb-4 sm:mb-6 uppercase tracking-wider"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            Services
                        </motion.p>

                        {/* Main Heading */}
                        <motion.h1
                            className="text-[1.75rem] sm:text-[2rem] md:text-[3.5rem] lg:text-[4.5rem] leading-[1.1] font-bold text-white/90 max-w-full sm:max-w-[90%] md:max-w-[80%]"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                        >
                            Strategic. Creative.<br />Built for Results.
                        </motion.h1>

                        {/* CTA Button */}
                        <motion.div
                            className="mt-8 sm:mt-12"
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
                </div>
            </section>

            {/* Individual Service Sections */}
            <section className="py-12 sm:py-16 md:py-24 bg-page-light text-black">
                <div className="mx-auto max-w-[1620px] px-4 sm:px-6 md:px-8">
                    {/* Strategy Section */}
                    <div className="mb-12 sm:mb-16 md:mb-24 bg-black p-4 sm:p-6 md:p-8 rounded-xl">
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 sm:gap-8 mb-6 sm:mb-8 md:mb-12">
                            <h2 className="text-[2rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[3.5rem] font-bold text-white leading-tight">Strategy</h2>
                            <p className="text-[14px] sm:text-[15px] md:text-[16px] text-white/60 max-w-[400px] uppercase leading-relaxed">
                                Providing actionable insights to help build the best version of each ecommerce presence.
                            </p>
                        </div>

                        <div className="space-y-0">
                            {SERVICES[0].details.map((detail) => (
                                <motion.div
                                    key={detail.title}
                                    className="mb-8 sm:mb-12 md:mb-16 text-white"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <h3 className="text-[16px] sm:text-[18px] md:text-[22px] text-white/60 uppercase mb-3 sm:mb-4">{detail.title}</h3>
                                    {detail.items.map((item) => (
                                        <div
                                            key={item.name}
                                            className="group relative border-t border-white/10 transition-all duration-200"
                                        >
                                            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between py-4 sm:py-5 md:py-6 px-3 sm:px-6 md:px-12 group-hover:bg-neutral-900 gap-2 sm:gap-4">
                                                <div className="flex items-center justify-between w-full sm:w-auto">
                                                    <h4 className="text-[1.125rem] sm:text-[1.25rem] md:text-[1.5rem] font-medium group-hover:text-white transition-colors duration-200">
                                                        {item.name}
                                                    </h4>
                                                    {/* Mobile/Tablet Indicator */}
                                                    <div className="sm:hidden flex items-center gap-2">
                                                        <Plus className="w-4 h-4 text-white/40 group-hover:text-white/60 transition-all duration-200 group-hover:translate-y-0.5" />
                                                    </div>
                                                </div>
                                                <div className="opacity-0 group-hover:opacity-100 transition-all duration-200">
                                                    <p className="text-[13px] sm:text-[14px] md:text-[15px] text-white/80 max-w-[400px] leading-relaxed">
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
                    <div className="mb-12 sm:mb-16 md:mb-24 bg-page-lighter p-4 sm:p-6 md:p-8 rounded-xl">
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 sm:gap-8 mb-6 sm:mb-8 md:mb-12">
                            <h2 className="text-[2rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[3.5rem] font-bold leading-tight">Design</h2>
                            <p className="text-[14px] sm:text-[15px] md:text-[16px] text-black/60 max-w-[400px] uppercase leading-relaxed">
                                Creating beautiful, functional, and user-centric digital experiences.
                            </p>
                        </div>

                        <div className="space-y-0">
                            {SERVICES[1].details.map((detail) => (
                                <motion.div
                                    key={detail.title}
                                    className="mb-8 sm:mb-12 md:mb-16"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <h3 className="text-[16px] sm:text-[18px] md:text-[22px] text-black/60 uppercase mb-3 sm:mb-4">{detail.title}</h3>
                                    {detail.items.map((item) => (
                                        <div
                                            key={item.name}
                                            className="group relative border-t border-black/10 transition-all duration-200"
                                        >
                                            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between py-4 sm:py-5 md:py-6 px-3 sm:px-6 md:px-12 group-hover:bg-neutral-900 gap-2 sm:gap-4">
                                                <h4 className="text-[1.125rem] sm:text-[1.25rem] md:text-[1.5rem] font-medium group-hover:text-white transition-colors duration-200">
                                                    {item.name}
                                                </h4>
                                                <div className="opacity-0 group-hover:opacity-100 transition-all duration-200">
                                                    <p className="text-[13px] sm:text-[14px] md:text-[15px] text-white/80 max-w-[400px] leading-relaxed">
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
                    <div className="mb-12 sm:mb-16 md:mb-24 bg-black p-4 sm:p-6 md:p-8 rounded-xl">
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 sm:gap-8 mb-6 sm:mb-8 md:mb-12">
                            <h2 className="text-[2rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[3.5rem] font-bold text-white leading-tight">Development</h2>
                            <p className="text-[14px] sm:text-[15px] md:text-[16px] text-white/60 max-w-[400px] uppercase leading-relaxed">
                                Building robust, scalable, and high-performing ecommerce solutions.
                            </p>
                        </div>

                        <div className="space-y-0">
                            {SERVICES[2].details.map((detail) => (
                                <motion.div
                                    key={detail.title}
                                    className="mb-8 sm:mb-12 md:mb-16"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <h3 className="text-[16px] sm:text-[18px] md:text-[22px] text-white/60 uppercase mb-3 sm:mb-4">{detail.title}</h3>
                                    {detail.items.map((item) => (
                                        <div
                                            key={item.name}
                                            className="group relative border-t border-white/10 transition-all duration-200 text-white"
                                        >
                                            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between py-4 sm:py-5 md:py-6 px-3 sm:px-6 md:px-12 group-hover:bg-neutral-900 gap-2 sm:gap-4">
                                                <div className="flex items-center justify-between w-full sm:w-auto">
                                                    <h4 className="text-[1.125rem] sm:text-[1.25rem] md:text-[1.5rem] font-medium group-hover:text-white transition-colors duration-200">
                                                        {item.name}
                                                    </h4>
                                                    {/* Mobile/Tablet Indicator */}
                                                    <div className="sm:hidden flex items-center gap-2">
                                                        <span className="text-[12px] text-white/40 group-hover:text-white/60 transition-colors duration-200">
                                                            Tap to expand
                                                        </span>
                                                        <ChevronDown className="w-4 h-4 text-white/40 group-hover:text-white/60 transition-all duration-200 group-hover:translate-y-0.5" />
                                                    </div>
                                                </div>
                                                <div className="opacity-0 group-hover:opacity-100 transition-all duration-200">
                                                    <p className="text-[13px] sm:text-[14px] md:text-[15px] text-white/80 max-w-[400px] leading-relaxed">
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
                    <div className="mb-12 sm:mb-16 md:mb-24 bg-page-lighter p-4 sm:p-6 md:p-8 rounded-xl">
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 sm:gap-8 mb-6 sm:mb-8 md:mb-12">
                            <h2 className="text-[2rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[3.5rem] font-bold leading-tight">Growth</h2>
                            <p className="text-[14px] sm:text-[15px] md:text-[16px] text-black/60 max-w-[400px] uppercase leading-relaxed">
                                Optimizing and scaling your ecommerce business for sustainable growth.
                            </p>
                        </div>

                        <div className="space-y-0">
                            {SERVICES[3].details.map((detail) => (
                                <motion.div
                                    key={detail.title}
                                    className="mb-8 sm:mb-12 md:mb-16"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <h3 className="text-[16px] sm:text-[18px] md:text-[22px] text-black/60 uppercase mb-3 sm:mb-4">{detail.title}</h3>
                                    {detail.items.map((item) => (
                                        <div
                                            key={item.name}
                                            className="group relative border-t border-black/10 transition-all duration-200"
                                        >
                                            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between py-4 sm:py-5 md:py-6 px-3 sm:px-6 md:px-12 group-hover:bg-neutral-900 gap-2 sm:gap-4">
                                                <h4 className="text-[1.125rem] sm:text-[1.25rem] md:text-[1.5rem] font-medium group-hover:text-white transition-colors duration-200">
                                                    {item.name}
                                                </h4>
                                                <div className="opacity-0 group-hover:opacity-100 transition-all duration-200">
                                                    <p className="text-[13px] sm:text-[14px] md:text-[15px] text-white/80 max-w-[400px] leading-relaxed">
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

                    {/* Project Banner */}
                    <ProjectBanner className="mt-12 sm:mt-16 md:mt-24" />
                </div>
            </section>
        </>
    )
} 