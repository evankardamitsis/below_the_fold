'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { CustomButton } from '../ui/custom-button'

interface Service {
    title: string
    category: string
    images: {
        main: string
        secondary: string
        tertiary: string
    }
    details: {
        title: string
        items: string[]
    }[]
}

const SERVICES: Service[] = [
    {
        title: 'Strategy',
        category: 'Consulting',
        images: {
            main: 'https://images.unsplash.com/photo-1552664730-d307ca884978',
            secondary: 'https://images.unsplash.com/photo-1557804506-669a67965ba0',
            tertiary: 'https://images.unsplash.com/photo-1590650046871-92c887180603'
        },
        details: [
            {
                title: 'Consulting',
                items: [
                    'Website Audits',
                    'Conversion Rate Optimization (CRO)',
                    'Persona Definition',
                    'Objective & KPI Development',
                    'Guided Ideation',
                    'Roadmapping & Prioritization',
                    'Personalization',
                ]
            }
        ]
    },
    {
        title: 'Creative',
        category: 'Design',
        images: {
            main: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2940&auto=format&fit=crop',
            secondary: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2940&auto=format&fit=crop',
            tertiary: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2940&auto=format&fit=crop'
        },
        details: [
            {
                title: 'Design',
                items: [
                    'UI/UX Design',
                    'Landing Page Design',
                    'Email Design',
                    'Brand Identity',
                    'Design Systems',
                    'Custom Illustrations',
                ]
            }
        ]
    },
    {
        title: 'Technology',
        category: 'Development',
        images: {
            main: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2940&auto=format&fit=crop',
            secondary: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2940&auto=format&fit=crop',
            tertiary: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2940&auto=format&fit=crop'
        },
        details: [
            {
                title: 'Analytics',
                items: [
                    'Dashboard Creation',
                    'GA4 / GTM Configuration & Maintenance',
                    'Customer Lifetime Value (LTV) Modeling',
                    'Customer Surveys',
                    'Customer Data Appends',
                    'Revenue Growth Modeling'
                ]
            }
        ]
    },
    {
        title: 'Marketing',
        category: 'Growth',
        images: {
            main: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2940&auto=format&fit=crop',
            secondary: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2940&auto=format&fit=crop',
            tertiary: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2940&auto=format&fit=crop'
        },
        details: [
            {
                title: 'Growth',
                items: [
                    'Digital Marketing',
                    'Social Media Strategy',
                    'SEO Optimization',
                    'Analytics & Tracking',
                    'Content Strategy'
                ]
            }
        ]
    }
]

// Define fixed positions for each service's images
const IMAGE_POSITIONS = {
    Strategy: [
        'top-[5%] right-[5%] w-[250px] h-[300px]',
        'top-[35%] left-[10%] w-[200px] h-[250px]',
        'bottom-[5%] right-[15%] w-[220px] h-[280px]',
    ],
    Creative: [
        'top-[5%] left-[5%] w-[240px] h-[280px]',
        'top-[25%] right-[10%] w-[220px] h-[300px]',
        'bottom-[8%] left-[15%] w-[200px] h-[250px]',
    ],
    Technology: [
        'top-[8%] left-[15%] w-[230px] h-[270px]',
        'top-[20%] right-[5%] w-[250px] h-[280px]',
        'bottom-[5%] right-[10%] w-[210px] h-[260px]',
    ],
    Marketing: [
        'top-[5%] right-[15%] w-[220px] h-[270px]',
        'top-[30%] left-[5%] w-[240px] h-[280px]',
        'bottom-[8%] right-[5%] w-[210px] h-[250px]',
    ],
} as const

export function ServicesSection() {
    const [activeService, setActiveService] = useState<string | null>(null)

    return (
        <section className="services-section relative py-24 bg-page-light overflow-hidden">
            <div className="relative mx-auto max-w-[1620px] px-8">
                {/* Header */}
                <div className="mb-16">
                    <h2 className="text-[2rem] font-bold mb-4">SERVICES</h2>
                    <p className="text-neutral-600 text-[14px] lg:text-[15px] leading-relaxed tracking-wide font-medium uppercase w-full lg:max-w-[550px] mb-8 lg:mb-0">
                        We craft high-performing Shopify stores through expert design, development, and optimization—turning e-commerce brands into industry leaders.
                    </p>
                </div>

                <div className="flex justify-between items-start gap-24">
                    {/* Left side - Service Categories */}
                    <div className="w-1/2 flex flex-col">
                        <div className="flex-1">
                            {SERVICES.map((service) => (
                                <div
                                    key={service.title}
                                    className="group relative mb-8"
                                    onMouseEnter={() => setActiveService(service.title)}
                                    onMouseLeave={() => setActiveService(null)}
                                    data-active={activeService === service.title}
                                >
                                    {/* Background animation */}
                                    <motion.div
                                        className="absolute inset-0 bg-neutral-900"
                                        initial={{ width: 0 }}
                                        animate={{
                                            width: activeService === service.title ? '100%' : 0
                                        }}
                                        transition={{
                                            duration: 0.5,
                                            ease: "easeOut"
                                        }}
                                    />

                                    <h3 className={`relative text-[3rem] md:text-[4rem] lg:text-[6rem] leading-[1.1] font-bold px-4 py-2 transition-colors duration-500 ${activeService === service.title ? 'text-white' : 'text-neutral-900'
                                        }`}>
                                        {service.title}
                                    </h3>
                                </div>
                            ))}
                        </div>

                        <CustomButton
                            href="/services"
                            label="Explore our Services"
                            variant="outline"
                            size="md"
                            className="mt-6"
                        />
                    </div>

                    {/* Right side - Images and Details */}
                    <div
                        className="w-1/2 relative h-[600px] services-right-area"
                        data-active={!!activeService}
                    >
                        {/* Background Images */}
                        <AnimatePresence mode="wait">
                            {activeService && (
                                <>
                                    {[0, 1, 2].map((index) => {
                                        const service = SERVICES.find(s => s.title === activeService)!
                                        const imageKey = service.title as keyof typeof IMAGE_POSITIONS
                                        const positions = IMAGE_POSITIONS[imageKey][index]
                                        const imageUrl = index === 0 ? service.images.main :
                                            index === 1 ? service.images.secondary :
                                                service.images.tertiary

                                        return (
                                            <motion.div
                                                key={`${service.title}-${index}`}
                                                initial={{ opacity: 0, scale: 0.9 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                exit={{ opacity: 0, scale: 0.9 }}
                                                transition={{
                                                    duration: 0.5,
                                                    delay: index * 0.1,
                                                    ease: [0.23, 1, 0.32, 1]
                                                }}
                                                className={`absolute ${positions}`}
                                            >
                                                <Image
                                                    src={imageUrl}
                                                    alt=""
                                                    fill
                                                    className="object-cover rounded-md"
                                                />
                                            </motion.div>
                                        )
                                    })}
                                </>
                            )}
                        </AnimatePresence>

                        {/* Service Details - Overlapping the images */}
                        <div className="relative z-10">
                            <AnimatePresence mode="wait">
                                {activeService && (
                                    <motion.div
                                        key={activeService}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: 20 }}
                                        transition={{ duration: 0.3 }}
                                        className="pt-4"
                                    >
                                        {/* Background Panel */}
                                        <div className="absolute inset-0 bg-page-light/80 backdrop-blur-xs rounded-xl -z-10" />

                                        {/* Content */}
                                        <div className="p-6">
                                            {SERVICES.find(s => s.title === activeService)?.details.map((detail) => (
                                                <div key={detail.title} className="mb-8">
                                                    <h4 className="text-lg font-bold text-neutral-800 mb-4">
                                                        {detail.title}
                                                    </h4>
                                                    <div className="flex flex-wrap gap-2">
                                                        {detail.items.map((item) => (
                                                            <span
                                                                key={item}
                                                                className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[13px] font-medium text-neutral-900"
                                                            >
                                                                {item}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
} 