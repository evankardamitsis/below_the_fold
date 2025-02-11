'use client'

import { motion, useAnimationControls } from 'framer-motion'
import { useState } from 'react'

const WORK_STEPS = [
    {
        number: '01',
        title: 'Customer Insight',
        description: 'We dive deep into your audience and analyze how your brand performs across channels. This reveals key opportunities to enhance the shopping experience.',
        gradient: 'from-emerald-500/70 to-emerald-400/70'
    },
    {
        number: '02',
        title: 'Strategic Planning',
        description: 'We develop a clear plan based on your goals, outlining the steps and priorities needed to achieve them.',
        gradient: 'from-blue-500/70 to-cyan-400/70'
    },
    {
        number: '03',
        title: 'Execute & Adapt',
        description: 'We bring the plan to life, staying agile and refining along the way to maximize impact.',
        gradient: 'from-rose-500/70 to-rose-400/70'
    },
    {
        number: '04',
        title: 'Testing & Learning',
        description: 'Once live, we track performance, test improvements, and optimize continuously to ensure long-term success.',
        gradient: 'from-purple-500/70 to-indigo-400/70'
    }
]

export function HowWeWorkSection() {
    const [activeStep, setActiveStep] = useState<number | null>(null)
    const [selectedStep, setSelectedStep] = useState<number | null>(null)

    const control1 = useAnimationControls()
    const control2 = useAnimationControls()
    const control3 = useAnimationControls()
    const control4 = useAnimationControls()

    const controls = [control1, control2, control3, control4]

    const handleStepHover = async (index: number) => {
        setActiveStep(index)
        await controls[index].start({
            scale: 1.05,
            y: -10,
            transition: { duration: 0.3, ease: "easeOut" }
        })
    }

    const handleStepLeave = async (index: number) => {
        setActiveStep(null)
        await controls[index].start({
            scale: 1,
            y: 0,
            transition: { duration: 0.3, ease: "easeOut" }
        })
    }

    const handleStepClick = (index: number) => {
        setSelectedStep(selectedStep === index ? null : index)
    }

    return (
        <section className="py-24 bg-neutral-900">
            {/* Backdrop blur when modal is open */}
            <motion.div
                className="fixed inset-0 bg-neutral-900/50 backdrop-blur-sm z-40"
                initial={{ opacity: 0 }}
                animate={{ opacity: selectedStep !== null ? 1 : 0 }}
                onClick={() => setSelectedStep(null)}
                style={{ pointerEvents: selectedStep !== null ? 'auto' : 'none' }}
            />

            <div className="mx-auto max-w-[1620px] px-8 relative">
                {/* Header */}
                <div className="mb-16">
                    <motion.h2
                        className="text-[2rem] font-bold mb-4 text-white"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        HOW WE WORK
                    </motion.h2>
                    <motion.p
                        className="text-neutral-400 text-[14px] lg:text-[15px] leading-relaxed tracking-wide font-medium uppercase w-full lg:max-w-[550px]"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        Our streamlined 4-step process ensures your Shopify store is built for success—efficiently and strategically.
                    </motion.p>
                </div>

                {/* Work Steps Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
                    {/* Main Connecting Line */}
                    <div className="absolute top-1/2 left-0 right-0 h-[2px] hidden lg:block">
                        <motion.div
                            className="h-full bg-white/10"
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.5 }}
                        />
                    </div>

                    {WORK_STEPS.map((step, index) => (
                        <motion.div
                            key={step.number}
                            className="group relative bg-neutral-900 rounded-xl p-6 min-h-[400px] border border-white/10 cursor-pointer"
                            animate={controls[index]}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            onHoverStart={() => handleStepHover(index)}
                            onHoverEnd={() => handleStepLeave(index)}
                            onClick={() => handleStepClick(index)}
                            style={{
                                zIndex: selectedStep === index ? 50 : 1,
                                position: selectedStep === index ? 'relative' : 'relative'
                            }}
                            layout
                            layoutId={`step-${index}`}
                        >
                            {/* Gradient Background */}
                            <motion.div
                                className={`absolute inset-0 bg-gradient-to-b ${step.gradient} rounded-xl`}
                                initial={{ opacity: 0 }}
                                animate={{
                                    opacity: activeStep === index ? 0.15 : 0,
                                    scale: activeStep === index ? 1.02 : 1
                                }}
                                transition={{ duration: 0.3 }}
                            />

                            {/* Content */}
                            <motion.div
                                className="relative h-full flex flex-col"
                                animate={{
                                    scale: selectedStep === index ? 1.1 : 1,
                                    y: selectedStep === index ? -20 : 0
                                }}
                            >
                                <motion.span
                                    className="block text-[3rem] font-bold text-white/20 mb-4"
                                    animate={{
                                        scale: activeStep === index ? 1.1 : 1,
                                        color: activeStep === index ? 'rgba(255, 255, 255, 0.4)' : 'rgba(255, 255, 255, 0.2)'
                                    }}
                                    transition={{ duration: 0.3 }}
                                >
                                    {step.number}
                                </motion.span>
                                <motion.h3
                                    className="text-[1.25rem] font-bold text-white mb-3"
                                    animate={{ x: activeStep === index ? 10 : 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    {step.title}
                                </motion.h3>
                                <motion.p
                                    className="text-[15px] text-neutral-400 tracking-wide font-medium"
                                    animate={{ x: activeStep === index ? 10 : 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    {step.description}
                                </motion.p>

                                {/* Step Connector */}
                                {index < WORK_STEPS.length - 1 && (
                                    <motion.div
                                        className="absolute -right-6 top-1/2 w-12 h-[2px] hidden lg:block"
                                        animate={{
                                            backgroundColor: activeStep === index || activeStep === index + 1
                                                ? 'rgba(255, 255, 255, 0.4)'
                                                : 'rgba(255, 255, 255, 0.1)',
                                            height: activeStep === index || activeStep === index + 1 ? '3px' : '2px'
                                        }}
                                        transition={{ duration: 0.3 }}
                                    />
                                )}
                            </motion.div>

                            {/* Border Highlight */}
                            <motion.div
                                className="absolute inset-0 rounded-xl border border-white/0"
                                animate={{
                                    borderColor: activeStep === index || selectedStep === index
                                        ? 'rgba(255, 255, 255, 0.2)'
                                        : 'rgba(255, 255, 255, 0)',
                                    scale: selectedStep === index
                                        ? 1.1
                                        : activeStep === index
                                            ? 1.02
                                            : 1
                                }}
                                transition={{ duration: 0.3 }}
                            />
                        </motion.div>
                    ))}
                </div>

                {/* Action Button */}
                <motion.div
                    className="mt-16 flex justify-start"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <motion.a
                        href="/process"
                        className="text-white text-[15px] font-medium tracking-wide uppercase relative group"
                        whileHover={{ x: 10 }}
                    >
                        See it in action
                        <span className="absolute left-0 right-0 bottom-0 h-[1px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                    </motion.a>
                </motion.div>
            </div>
        </section>
    )
} 