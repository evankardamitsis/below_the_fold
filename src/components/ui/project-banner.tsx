'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

interface ProjectBannerProps {
    className?: string
}

export function ProjectBanner({ className = "" }: ProjectBannerProps) {
    return (
        <motion.div
            className={`relative overflow-hidden bg-black p-12 rounded-xl lg:rounded-2xl ${className}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
        >
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
                {/* Text Content */}
                <div>
                    <h2 className="text-[2rem] md:text-[2.5rem] lg:text-[3rem] font-bold text-white leading-tight">
                        Ready to start your project?
                    </h2>
                    <p className="text-white/60 text-lg mt-4 max-w-[600px]">
                        Let&apos;s discuss your goals and see how we can help your business grow.
                    </p>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                        href="/contact"
                        className="inline-flex items-center justify-between px-4 sm:px-6 h-12 bg-white rounded text-[15px] font-medium text-black hover:bg-neutral-100 hover:text-black hover:border-white border border-transparent transition-colors duration-300 group whitespace-nowrap"
                    >
                        Let&apos;s Work Together
                        <span className="ml-2 opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300">→</span>
                    </Link>
                    <Link
                        href={process.env.NEXT_PUBLIC_CALENDLY_URL || '#'}
                        target="_blank"
                        className="inline-flex items-center justify-between px-4 sm:px-6 h-12 bg-transparent border border-white/20 rounded text-[15px] font-medium text-white hover:bg-white/5 transition-colors duration-300 group whitespace-nowrap"
                    >
                        Book a free call
                        <span className="ml-2 opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300">→</span>
                    </Link>
                </div>
            </div>
        </motion.div>
    )
} 