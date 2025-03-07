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
            <section className="relative min-h-[80vh] md:min-h-screen bg-neutral-900 overflow-hidden">
                {/* Video Background */}
                <VideoBackground
                    src={process.env.NEXT_PUBLIC_PROCESS_VIDEO_URL!}
                    poster="/images/process-poster.webp"
                />

                {/* Content */}
                <div className="relative z-10 mx-auto max-w-[1620px] px-4 sm:px-6 md:px-8 pt-24 sm:pt-32 md:pt-48">
                    {/* Content Card */}
                    <div className="bg-neutral-900/30 backdrop-blur-sm rounded-xl lg:rounded-2xl p-6 sm:p-8 md:p-12 w-full sm:max-w-[90%]">
                        <motion.p
                            className="text-white/80 text-xs sm:text-sm font-medium mb-4 sm:mb-6 uppercase tracking-wider"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            Our Process
                        </motion.p>

                        <motion.h1
                            className="text-[1.75rem] sm:text-[2rem] md:text-[3.5rem] lg:text-[4.5rem] leading-[1.1] font-bold text-white/90 max-w-full sm:max-w-[90%] md:max-w-[80%]"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                        >
                            From Concept to Launch in 6 Weeks
                        </motion.h1>

                        <motion.p
                            className="text-white/80 text-base sm:text-lg lg:text-xl max-w-full sm:max-w-[90%] md:max-w-[600px] mt-4 sm:mt-6"
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
                        <div className="py-16 sm:py-20 md:py-24 relative z-10">
                            <div className="mx-auto max-w-[1620px] px-4 sm:px-6 md:px-8">
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
                                                className={`text-[6rem] sm:text-[7rem] md:text-[8rem] font-bold ${index % 2 === 0 ? 'text-white/10' : 'text-neutral-900/10'} leading-none block`}
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
                                                <h2 className={`text-3xl sm:text-4xl font-bold ${index % 2 === 0 ? 'text-white' : 'text-neutral-900'} mt-4`}>
                                                    {step.title}
                                                </h2>
                                                <p className={`${index % 2 === 0 ? 'text-white/60' : 'text-neutral-600'} mt-4 text-base sm:text-lg max-w-[90%]`}>
                                                    {step.description}
                                                </p>
                                                <div
                                                    className={`mt-6 inline-block px-4 py-2 ${index % 2 === 0
                                                        ? 'bg-white text-black'
                                                        : 'bg-black text-white'
                                                        } rounded-full text-sm font-medium relative overflow-hidden`}
                                                >
                                                    <span className="relative z-10">{step.timeline}</span>
                                                </div>
                                            </motion.div>
                                        </div>
                                    </motion.div>

                                    {/* Deliverables Timeline */}
                                    <div className="lg:w-1/2">
                                        <div className="relative">
                                            {/* Timeline Line */}
                                            <motion.div
                                                className={`absolute left-2 top-0 w-[2px] h-full ${index % 2 === 0 ? 'bg-white/20' : 'bg-black/20'}`}
                                                initial={{ height: 0 }}
                                                whileInView={{ height: '100%' }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.8, delay: 0.2 }}
                                            />

                                            <div className="space-y-4 sm:space-y-6">
                                                {step.deliverables.map((deliverable, deliverableIndex) => (
                                                    <motion.div
                                                        key={`${step.number}-${deliverableIndex}`}
                                                        className="relative pl-12"
                                                        initial={{ opacity: 0, x: 20 }}
                                                        whileInView={{ opacity: 1, x: 0 }}
                                                        viewport={{ once: true }}
                                                        transition={{ duration: 0.5, delay: 0.3 + deliverableIndex * 0.1 }}
                                                    >
                                                        {/* Timeline Dot */}
                                                        <motion.div
                                                            className={`absolute left-0 top-1/2 -translate-y-1/2 w-[18px] h-[18px] rounded-full ${index % 2 === 0
                                                                ? 'bg-white shadow-glow-white'
                                                                : 'bg-black shadow-glow-black'
                                                                } flex items-center justify-center`}
                                                            initial={{ scale: 0 }}
                                                            whileInView={{ scale: 1 }}
                                                            viewport={{ once: true }}
                                                            transition={{
                                                                type: "spring",
                                                                stiffness: 260,
                                                                damping: 20,
                                                                delay: 0.4 + deliverableIndex * 0.1
                                                            }}
                                                        >
                                                            <div
                                                                className={`w-[8px] h-[8px] rounded-full ${index % 2 === 0
                                                                    ? 'bg-black'
                                                                    : 'bg-white'
                                                                    }`}
                                                            />
                                                        </motion.div>

                                                        {/* Deliverable Card */}
                                                        <div
                                                            className={`relative group p-4 rounded-lg transition-all duration-300 ${index % 2 === 0
                                                                ? 'bg-neutral-900/50 hover:bg-neutral-900/70 text-white/80'
                                                                : 'bg-white/50 hover:bg-white/70 text-neutral-800'
                                                                }`}
                                                        >
                                                            <div className="flex items-center justify-between">
                                                                <span className="font-medium text-sm sm:text-base">{deliverable}</span>
                                                                <motion.span
                                                                    className={`text-xs sm:text-sm ${index % 2 === 0
                                                                        ? 'text-white/40'
                                                                        : 'text-neutral-500'
                                                                        }`}
                                                                    initial={{ opacity: 0 }}
                                                                    whileInView={{ opacity: 1 }}
                                                                    viewport={{ once: true }}
                                                                    transition={{ delay: 0.5 + deliverableIndex * 0.1 }}
                                                                >
                                                                    {`Phase ${parseInt(step.number)}.${deliverableIndex + 1}`}
                                                                </motion.span>
                                                            </div>
                                                        </div>
                                                    </motion.div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </section>

            {/* Project Banner */}
            <div className="mx-auto max-w-[1620px] px-4 sm:px-6 md:px-8">
                <ProjectBanner className="my-16 sm:my-20 md:my-24" />
            </div>
        </>
    )
}