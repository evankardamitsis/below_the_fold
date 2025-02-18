'use client'

import { motion } from 'framer-motion'
import { GradientHover } from '@/components/ui/gradient-hover'
import { VideoBackground } from '@/components/ui/video-background'
import { ProjectBanner } from '@/components/ui/project-banner'

const PROCESS_STEPS = [
    {
        number: '01',
        title: 'Discovery & Strategy',
        description: 'We start by understanding your business, goals, and target audience. Through in-depth discussions and research, we create a strategic roadmap for your Shopify store.',
        timeline: 'Week 1',
        deliverables: [
            'Business Requirements Document',
            'User Personas',
            'Competitive Analysis',
            'Project Timeline',
            'Technical Specifications'
        ],
        gradient: 'from-emerald-500/20 to-emerald-400/20'
    },
    {
        number: '02',
        title: 'Design & Prototyping',
        description: 'Our design team creates a unique, conversion-focused design that reflects your brand identity and meets user needs.',
        timeline: 'Week 2-3',
        deliverables: [
            'Wireframes',
            'UI Design Mockups',
            'Interactive Prototypes',
            'Brand Style Guide',
            'Design System'
        ],
        gradient: 'from-blue-500/20 to-cyan-400/20'
    },
    {
        number: '03',
        title: 'Development & Testing',
        description: 'We build your Shopify store with clean, efficient code, ensuring optimal performance and seamless functionality.',
        timeline: 'Week 4-5',
        deliverables: [
            'Custom Theme Development',
            'Responsive Implementation',
            'Performance Optimization',
            'Cross-browser Testing',
            'Quality Assurance'
        ],
        gradient: 'from-rose-500/20 to-rose-400/20'
    },
    {
        number: '04',
        title: 'Launch & Support',
        description: 'After thorough testing, we launch your store and provide comprehensive support to ensure smooth operations.',
        timeline: 'Week 6',
        deliverables: [
            'Store Launch',
            'SEO Implementation',
            'Analytics Setup',
            'Staff Training',
            'Post-launch Support'
        ],
        gradient: 'from-purple-500/20 to-indigo-400/20'
    }
]

export default function ProcessPage() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative min-h-screen bg-neutral-900 overflow-hidden">
                {/* Video Background */}
                <VideoBackground
                    src={process.env.NEXT_PUBLIC_PROCESS_VIDEO_URL!}
                    poster="/images/process-poster.webp"
                />

                {/* Content */}
                <div className="relative z-10 mx-auto max-w-[1620px] px-8 pt-48">
                    {/* Content Card */}
                    <div className="bg-neutral-900/80 backdrop-blur-sm rounded-xl lg:rounded-2xl p-12 max-w-[90%]">
                        <motion.p
                            className="text-white/60 text-sm font-medium mb-6 uppercase"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            Our Process
                        </motion.p>

                        <motion.h1
                            className="text-[2.5rem] md:text-[5rem] lg:text-[6rem] leading-[1.1] font-bold text-white max-w-[80%] mb-8"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                        >
                            From Concept to Launch in 6 Weeks
                        </motion.h1>

                        <motion.p
                            className="text-white/80 text-lg lg:text-xl max-w-[600px]"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            A proven, systematic approach to building successful Shopify stores. Every step is carefully planned and executed to ensure quality and timely delivery.
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* Process Steps Section */}
            <section className="bg-page-light">
                {PROCESS_STEPS.map((step, index) => (
                    <motion.div
                        key={step.number}
                        className={`relative group overflow-hidden ${index % 2 === 0 ? 'bg-black' : 'bg-page-lighter'}`}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <GradientHover gradient={step.gradient} />
                        <div className="py-24 relative z-10">
                            <div className="mx-auto max-w-[1620px] px-8">
                                <div className="flex flex-col lg:flex-row lg:items-start lg:gap-12">
                                    {/* Step Number & Title */}
                                    <motion.div
                                        className="lg:w-1/2 mb-8 lg:mb-0"
                                        initial={{ opacity: 0, x: -50 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.6, delay: 0.2 }}
                                    >
                                        <div className="relative">
                                            <motion.span
                                                className={`text-[8rem] font-bold ${index % 2 === 0 ? 'text-white/5' : 'text-neutral-900/5'} leading-none block`}
                                                initial={{ scale: 0.5, opacity: 0 }}
                                                whileInView={{ scale: 1, opacity: 1 }}
                                                viewport={{ once: true }}
                                                transition={{
                                                    duration: 0.5,
                                                    type: "spring",
                                                    bounce: 0.4
                                                }}
                                            >
                                                {step.number}
                                            </motion.span>
                                            <motion.div
                                                initial={{ opacity: 0, y: 20 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.5, delay: 0.3 }}
                                            >
                                                <h2 className={`text-4xl font-bold ${index % 2 === 0 ? 'text-white' : 'text-neutral-900'} mt-4`}>
                                                    {step.title}
                                                </h2>
                                                <p className={`${index % 2 === 0 ? 'text-white/60' : 'text-neutral-600'} mt-4 text-lg max-w-[90%]`}>
                                                    {step.description}
                                                </p>
                                                <motion.div
                                                    className={`mt-6 inline-block px-4 py-2 ${index % 2 === 0 ? 'bg-white text-black hover:bg-brand-purple hover:text-white' : 'bg-black text-white hover:bg-brand-purple'} rounded-full text-sm font-medium relative overflow-hidden group`}
                                                    whileHover={{ scale: 1.05 }}
                                                    transition={{ duration: 0.2 }}
                                                >
                                                    <span className="relative z-10">{step.timeline}</span>
                                                </motion.div>
                                            </motion.div>
                                        </div>
                                    </motion.div>

                                    {/* Deliverables */}
                                    <div className="lg:w-1/2">
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            {step.deliverables.map((deliverable, deliverableIndex) => (
                                                <motion.div
                                                    key={`${step.number}-${deliverableIndex}`}
                                                    className={`p-4 rounded-lg ${index % 2 === 0 ? 'bg-neutral-900/50 text-white/80' : 'bg-white/50 text-neutral-800'}`}
                                                    initial={{ opacity: 0, y: 20 }}
                                                    whileInView={{ opacity: 1, y: 0 }}
                                                    viewport={{ once: true }}
                                                    transition={{ duration: 0.5, delay: 0.2 + deliverableIndex * 0.1 }}
                                                >
                                                    {deliverable}
                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </section>

            {/* Project Banner */}
            <div className="mx-auto max-w-[1620px] px-8">
                <ProjectBanner className="my-24" />
            </div>
        </>
    )
}