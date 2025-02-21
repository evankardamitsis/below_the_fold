'use client'

import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import { ProjectBanner } from '@/components/ui/project-banner'
import Image from 'next/image'
import Link from 'next/link'
import { useRef, useState, useEffect } from 'react'
import { ArrowIcon } from '@/components/icons/arrow-icon'
import { ImageLightbox } from '@/components/ui/image-lightbox'

function CountingNumber({ value, suffix = '' }: { value: number, suffix?: string }) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })
    const [displayValue, setDisplayValue] = useState(0)

    useEffect(() => {
        if (isInView) {
            const duration = 1000 // Animation duration in ms
            const startTime = Date.now()

            const animate = () => {
                const now = Date.now()
                const progress = Math.min((now - startTime) / duration, 1)
                const currentValue = Math.floor(progress * value)

                setDisplayValue(currentValue)

                if (progress < 1) {
                    requestAnimationFrame(animate)
                }
            }

            requestAnimationFrame(animate)
        }
    }, [isInView, value])

    return (
        <motion.span
            ref={ref}
            className="text-[4rem] font-bold text-white inline-block"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? {
                opacity: 1,
                y: 0
            } : {}}
        >
            {displayValue}{suffix}
        </motion.span>
    )
}

export default function ProjectPage() {
    const containerRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    })

    const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.2])
    const imageOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.5])
    const titleY = useTransform(scrollYProgress, [0, 1], [0, 150])

    return (
        <article>
            {/* Hero Section */}
            <section
                ref={containerRef}
                className="relative h-screen overflow-hidden"
            >
                {/* Background Image with Parallax */}
                <motion.div
                    className="absolute inset-0 w-full h-full"
                    style={{
                        scale: imageScale,
                        opacity: imageOpacity
                    }}
                >
                    <Image
                        src="https://images.unsplash.com/photo-1526045431048-f857369baa09?auto=format&fit=crop&q=80"
                        alt="Timex Project Hero"
                        width={1920}
                        height={1080}
                        className="w-full h-full object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-black/30" />
                </motion.div>

                {/* Hero Content */}
                <div className="relative h-full mx-auto max-w-[1620px] px-8 flex items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="max-w-3xl"
                        style={{ y: titleY }}
                    >
                        <h1 className="text-[7.5rem] sm:text-[3.5rem] md:text-[9.5rem] lg:text-[12.5rem] leading-[0.95] tracking-[-0.02em] font-bold text-white mt-4">
                            Timex
                        </h1>
                    </motion.div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    className="absolute bottom-12 left-1/2 -translate-x-1/2"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 0.5 }}
                >
                    <motion.div
                        className="w-[1px] h-[60px] bg-white/30"
                        animate={{
                            scaleY: [1, 0.5, 1],
                            opacity: [0.3, 0.6, 0.3]
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                    />
                </motion.div>
            </section>

            {/* Project Overview Section */}
            <section className="bg-neutral-900 py-24">
                <div className="mx-auto max-w-[1620px] px-8">
                    <div className="flex flex-col lg:flex-row lg:justify-between gap-12 lg:gap-24">
                        {/* Left Side - Main Content */}
                        <div className="lg:max-w-[60%]">
                            <motion.p
                                className="text-white/80 text-[1.5rem] sm:text-[1.75rem] md:text-[2rem] leading-tight font-medium"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                            >
                                A complete platform migration from Salesforce Commerce Cloud to Shopify Plus, enabling global expansion and improved customer experience. A complete platform migration from Salesforce Commerce Cloud to Shopify Plus, enabling global expansion and improved customer experience.
                            </motion.p>

                            {/* Visit Website Button */}
                            <motion.div
                                className="mt-12"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                            >
                                <Link
                                    href="https://timex.com"
                                    target="_blank"
                                    className="inline-flex items-center gap-3 px-8 py-4 bg-white rounded-full text-neutral-900 hover:bg-white/90 transition-colors group"
                                >
                                    <span className="text-lg font-medium">Visit Website</span>
                                    <motion.span
                                        className="text-xl"
                                        initial={{ x: 0 }}
                                        whileHover={{ x: 5 }}
                                    >
                                        ↗
                                    </motion.span>
                                </Link>
                            </motion.div>
                        </div>

                        {/* Right Side - Project Details Card */}
                        <div className="lg:max-w-[35%]">
                            <motion.div
                                className="bg-neutral-800 rounded-2xl p-8 space-y-8"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                            >
                                <div>
                                    <h3 className="text-sm font-medium text-white/50 uppercase mb-3">
                                        Client Overview
                                    </h3>
                                    <p className="text-white/80">
                                        Timex, a global leader in watchmaking since 1854, needed to modernize their digital presence and streamline operations across multiple markets.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-sm font-medium text-white/50 uppercase mb-3">
                                        Services
                                    </h3>
                                    <ul className="space-y-2">
                                        <li className="text-white/80">Platform Migration</li>
                                        <li className="text-white/80">UI/UX Design</li>
                                        <li className="text-white/80">Custom Theme Development</li>
                                        <li className="text-white/80">International Expansion</li>
                                    </ul>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Full Width Image */}
            <section className="bg-page-light">
                <motion.div
                    className="w-full h-[80vh]"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <ImageLightbox
                        src="https://images.unsplash.com/photo-1526045431048-f857369baa09?auto=format&fit=crop&q=80"
                        alt="Timex Project Overview"
                    />
                </motion.div>
            </section>

            {/* Project Content */}
            <section className="bg-page-lighter py-24">
                <div className="mx-auto max-w-[1620px] px-8">
                    {/* Overview */}
                    <motion.div
                        className="mb-32"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl font-bold text-neutral-900 mb-8">
                            Project Overview
                        </h2>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                            <p className="text-neutral-600 text-lg">
                                Timex approached us with the challenge of migrating their global e-commerce presence from Salesforce Commerce Cloud to Shopify Plus. The goal was to improve site performance, reduce operational costs, and enable faster market expansion.
                            </p>
                            <p className="text-neutral-600 text-lg">
                                Our solution involved a phased migration approach, custom theme development, and implementation of a scalable multi-market architecture. The result was a faster, more efficient platform that could easily scale to new markets.
                            </p>
                        </div>
                    </motion.div>

                    {/* Image Grid Section */}
                    <motion.div
                        className="grid grid-cols-2 gap-8 mb-32"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="aspect-[4/5] rounded-xl overflow-hidden">
                            <ImageLightbox
                                src="https://images.unsplash.com/photo-1547996160-81dfa63595aa?auto=format&fit=crop&q=80"
                                alt="Product Detail"
                            />
                        </div>
                        <div className="aspect-[4/5] rounded-xl overflow-hidden">
                            <ImageLightbox
                                src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80"
                                alt="Collection Page"
                            />
                        </div>
                    </motion.div>

                    {/* Video Section - Using an image placeholder for now */}
                    <motion.div
                        className="mb-32"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-2xl font-bold text-neutral-900 mb-8">
                            User Experience
                        </h3>
                        <div className="aspect-video rounded-xl overflow-hidden bg-neutral-200">
                            <Image
                                src="https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?auto=format&fit=crop&q=80"
                                alt="User Experience Video"
                                width={1920}
                                height={1080}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </motion.div>

                    {/* Results Grid */}
                    <section className="relative w-screen left-1/2 right-1/2 -mx-[50vw] bg-neutral-900 py-24">
                        <div className="mx-auto max-w-[1620px] px-8">
                            <motion.div
                                className="grid grid-cols-1 md:grid-cols-3 gap-8"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                            >
                                <motion.div
                                    className="bg-neutral-800 p-8 rounded-2xl overflow-hidden relative group"
                                    whileHover={{ scale: 1.02 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    <motion.div
                                        className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity"
                                        initial={false}
                                    />
                                    <CountingNumber value={45} suffix="%" />
                                    <motion.p
                                        className="mt-2 text-white/60 text-lg relative z-10"
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.5 }}
                                    >
                                        Faster page load times
                                    </motion.p>
                                </motion.div>

                                <motion.div
                                    className="bg-neutral-800 p-8 rounded-2xl overflow-hidden relative group"
                                    whileHover={{ scale: 1.02 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    <motion.div
                                        className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity"
                                        initial={false}
                                    />
                                    <CountingNumber value={32} suffix="%" />
                                    <motion.p
                                        className="mt-2 text-white/60 text-lg relative z-10"
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.6 }}
                                    >
                                        Increase in conversion rate
                                    </motion.p>
                                </motion.div>

                                <motion.div
                                    className="bg-neutral-800 p-8 rounded-2xl overflow-hidden relative group"
                                    whileHover={{ scale: 1.02 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    <motion.div
                                        className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity"
                                        initial={false}
                                    />
                                    <CountingNumber value={4} />
                                    <motion.p
                                        className="mt-2 text-white/60 text-lg relative z-10"
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.7 }}
                                    >
                                        New markets launched
                                    </motion.p>
                                </motion.div>
                            </motion.div>
                        </div>
                    </section>

                    {/* Mobile Showcase */}
                    <motion.div
                        className="my-32"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-2xl font-bold text-neutral-900 mb-8">
                            Mobile Experience
                        </h3>
                        <div className="grid grid-cols-3 gap-8">
                            <div className="aspect-[9/16] rounded-xl overflow-hidden">
                                <ImageLightbox
                                    src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&q=80"
                                    alt="Mobile Home"
                                />
                            </div>
                            <div className="aspect-[9/16] rounded-xl overflow-hidden">
                                <ImageLightbox
                                    src="https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?auto=format&fit=crop&q=80"
                                    alt="Mobile Collection"
                                />
                            </div>
                            <div className="aspect-[9/16] rounded-xl overflow-hidden">
                                <ImageLightbox
                                    src="https://images.unsplash.com/photo-1509048191080-d2984bad6ae5?auto=format&fit=crop&q=80"
                                    alt="Mobile Product"
                                />
                            </div>
                        </div>
                    </motion.div>

                    {/* Full Width Image */}
                    <motion.div
                        className="mb-32"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="aspect-[21/9] rounded-xl overflow-hidden">
                            <Image
                                src="https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80"
                                alt="Design System"
                                width={2100}
                                height={900}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </motion.div>

                    {/* Process & Deliverables */}
                    <div className="relative py-24">
                        {/* Background Accent */}
                        <div className="absolute inset-0 bg-neutral-900 rounded-3xl -mx-8" />

                        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-24 px-8">
                            {/* Process Column */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                            >
                                <h3 className="text-3xl font-bold text-white mb-12">
                                    The Process
                                </h3>
                                <div className="space-y-8">
                                    {[
                                        {
                                            step: "01",
                                            title: "Technical Audit",
                                            description: "Comprehensive analysis of existing infrastructure and migration planning"
                                        },
                                        {
                                            step: "02",
                                            title: "Design System",
                                            description: "Development of scalable design components and guidelines"
                                        },
                                        {
                                            step: "03",
                                            title: "Implementation",
                                            description: "Custom theme development and platform integration"
                                        },
                                        {
                                            step: "04",
                                            title: "Market Customization",
                                            description: "Region-specific features and content adaptation"
                                        },
                                        {
                                            step: "05",
                                            title: "Optimization",
                                            description: "Performance tuning and conversion optimization"
                                        },
                                        {
                                            step: "06",
                                            title: "Launch",
                                            description: "Phased market rollout and monitoring"
                                        }
                                    ].map((item, index) => (
                                        <motion.div
                                            key={item.step}
                                            className="flex gap-6 group"
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.1 }}
                                        >
                                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                                                <span className="text-white/60 text-sm font-medium">
                                                    {item.step}
                                                </span>
                                            </div>
                                            <div>
                                                <h4 className="text-white text-lg font-medium mb-2">
                                                    {item.title}
                                                </h4>
                                                <p className="text-white/60">
                                                    {item.description}
                                                </p>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>

                            {/* Key Features Column */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                            >
                                <h3 className="text-3xl font-bold text-white mb-12">
                                    Key Features
                                </h3>
                                <div className="grid grid-cols-2 gap-6">
                                    {[
                                        "Custom Product Configurator",
                                        "Market-specific Pricing",
                                        "Advanced Filtering",
                                        "Localized Content",
                                        "Size Guide Integration",
                                        "Cross-market Analytics"
                                    ].map((feature, index) => (
                                        <motion.div
                                            key={feature}
                                            className="bg-white/5 rounded-xl p-6 hover:bg-white/10 transition-colors group"
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.1 }}
                                        >
                                            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mb-4 text-white group-hover:bg-white/20 transition-colors">
                                                <ArrowIcon />
                                            </div>
                                            <p className="text-white font-medium">
                                                {feature}
                                            </p>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Project Banner */}
            <div className="bg-page-light py-24">
                <div className="mx-auto max-w-[1620px] px-8">
                    <ProjectBanner />
                </div>
            </div>
        </article>
    )
} 