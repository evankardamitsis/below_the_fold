'use client'

import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import { ProjectBanner } from '@/components/ui/project-banner'
import Image from 'next/image'
import Link from 'next/link'
import { useRef, useState, useEffect } from 'react'
import { ArrowIcon } from '@/components/icons/arrow-icon'
import { ImageLightbox } from '@/components/ui/image-lightbox'
import { Project } from '@/types/project'

function CountingNumber({ value, suffix = '' }: { value: string | number, suffix?: string }) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })
    const [displayValue, setDisplayValue] = useState(typeof value === 'number' ? 0 : '')

    useEffect(() => {
        if (isInView) {
            if (typeof value === 'number') {
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
            } else {
                setDisplayValue(value)
            }
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

export function ProjectPageClient({ project }: { project: Project }) {
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
                {project.heroImage && (
                    <motion.div
                        className="absolute inset-0 w-full h-full"
                        style={{
                            scale: imageScale,
                            opacity: imageOpacity
                        }}
                    >
                        <Image
                            src={project.heroImage.url}
                            alt={project.heroImage.alternativeText || project.title}
                            width={project.heroImage.width}
                            height={project.heroImage.height}
                            className="w-full h-full object-cover"
                            priority
                        />
                        <div className="absolute inset-0 bg-black/30" />
                    </motion.div>
                )}

                {/* Hero Content */}
                <div className="relative h-full mx-auto max-w-[1620px] px-8 flex items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="max-w-3xl"
                        style={{ y: titleY }}
                    >
                        <h1 className="text-[3.5rem] md:text-[9.5rem] lg:text-[12.5rem] leading-[0.95] tracking-[-0.02em] font-bold text-white mt-4">
                            {project.title}
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
                                {project.description}
                            </motion.p>

                            {/* Visit Website Button */}
                            {project.websiteUrl && (
                                <motion.div
                                    className="mt-12"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 }}
                                >
                                    <Link
                                        href={project.websiteUrl}
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
                            )}
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
                                        {project.clientOverview}
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-sm font-medium text-white/50 uppercase mb-3">
                                        Services
                                    </h3>
                                    <ul className="space-y-2">
                                        {project.services.map((service) => (
                                            <li key={service.id} className="text-white/80">
                                                {service.name}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Image Grid Section */}
            {project.detailImages.length > 0 && (
                <section className="bg-neutral-900 py-24">
                    <div className="mx-auto max-w-[1620px] px-8">
                        <motion.div
                            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            {project.detailImages.map((image, index) => (
                                <div key={index} className="aspect-[4/5] rounded-xl overflow-hidden">
                                    <ImageLightbox
                                        src={image.url}
                                        alt={image.alternativeText || `${project.title} Detail ${index + 1}`}
                                    />
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </section>
            )}

            {/* Full Width Video */}
            {project.overviewVideo && (
                <section className="bg-page-lighter">
                    <div className="mx-auto max-w-[1620px] px-8 rounded-full py-24">
                        <motion.div
                            className="w-full h-full]"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <video
                                src={project.overviewVideo}
                                className="w-full h-full object-cover"
                                autoPlay
                                loop
                                muted
                                playsInline
                                onError={(e) => {
                                    console.error('Video loading error:', e);
                                    e.currentTarget.style.display = 'none';
                                }}
                            >
                                Your browser does not support the video tag.
                            </video>
                        </motion.div>
                    </div>
                </section>
            )}

            {/* Mobile Showcase */}
            {project.mobileImages.length > 0 && (
                <section className="bg-page-lighter py-24">
                    <div className="mx-auto max-w-[1620px] px-8">
                        <motion.div
                            className="space-y-8"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="text-2xl font-bold text-neutral-900">
                                Mobile Experience
                            </h3>
                            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
                                {project.mobileImages.map((image, index) => (
                                    <div key={index} className="aspect-auto rounded-sm overflow-hidden shadow-md">
                                        <ImageLightbox
                                            src={image.url}
                                            alt={image.alternativeText || `Mobile View ${index + 1}`}
                                        />
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </section>
            )}

            {/* Design System Section */}
            {project.designSystemImage && (
                <section className="bg-page-lighter py-24">
                    <div className="mx-auto max-w-[1620px] px-8">
                        <motion.div
                            className="space-y-8"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="text-2xl font-bold text-neutral-900">
                                Design System
                            </h3>
                            <div className="aspect-[16/9] rounded-xl overflow-hidden">
                                <ImageLightbox
                                    src={project.designSystemImage.url}
                                    alt={project.designSystemImage.alternativeText || `${project.title} Design System`}
                                />
                            </div>
                        </motion.div>
                    </div>
                </section>
            )}

            {/* Results Grid */}
            <section className="relative w-screen left-1/2 right-1/2 -mx-[50vw] bg-neutral-900 py-24">
                <div className="mx-auto max-w-[1620px] px-8">
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-3 gap-8"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        {project.stats.map((stat, index) => (
                            <motion.div
                                key={stat.id}
                                className="bg-neutral-800 p-8 rounded-2xl overflow-hidden relative group"
                                whileHover={{ scale: 1.02 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <motion.div
                                    className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity"
                                    initial={false}
                                />
                                <CountingNumber value={stat.value} suffix={stat.suffix} />
                                <motion.p
                                    className="mt-2 text-white/60 text-lg relative z-10"
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.5 + index * 0.1 }}
                                >
                                    {stat.label}
                                </motion.p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Process & Features */}
            <section className="bg-neutral-900 py-24">
                <div className="mx-auto max-w-[1620px] px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
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
                                {project.process.map((item, index) => (
                                    <motion.div
                                        key={item.id}
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
                                {project.features.map((feature, index) => (
                                    <motion.div
                                        key={feature.id}
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
                                            {feature.title}
                                        </p>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
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