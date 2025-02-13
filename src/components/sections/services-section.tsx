'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { CustomButton } from '../ui/custom-button'
import { ServiceModal } from '../ui/service-modal'
import { useMediaQuery } from '@/hooks/use-media-query'

export interface Service {
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
                    'Guided Workshops',
                    'Roadmapping & Prioritization',
                    'Personalization',
                ]
            },
            {
                title: 'Research & Analysis',
                items: [
                    'Competitor Analysis',
                    'Market Research',
                    'Customer Journey Mapping',
                    'E-commerce Trend Analysis',
                    'Shopify Store Performance Reviews',
                    'Gap & Opportunity Analysis',
                    'SWOT Analysis',
                ]
            }
        ]
    },
    {
        title: 'Design',
        category: 'Design',
        images: {
            main: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2400&auto=format&fit=crop',
            secondary: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?q=80&w=2400&auto=format&fit=crop',
            tertiary: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=2400&auto=format&fit=crop'
        },
        details: [
            {
                title: 'Design',
                items: [
                    'UI Design',
                    'Landing Page Design',
                    'Email Design',
                    'Brand Identity',
                    'Design Systems',
                    'Custom Illustrations',
                    'Animation & Interaction',
                ]
            },
            {
                title: 'User Experience',
                items: [
                    'User Experience (UX) Design',
                    'User Testing',
                    'Navigation & Information Architecture (IA)',
                    'User Flows',
                    'Wireframing',
                    'Prototyping',
                    'Feature Alignment & Prioritization',
                    'User Experience (UX) Consultation & Audits'
                ]
            }
        ]
    },
    {
        title: 'Development',
        category: 'Development',
        images: {
            main: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2400&auto=format&fit=crop',
            secondary: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=2400&auto=format&fit=crop',
            tertiary: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2400&auto=format&fit=crop'
        },
        details: [
            {
                title: 'Ecommerce Development',
                items: [
                    'Shopify Theme Development',
                    'Custom Shopify Apps',
                    'API Integrations',
                    'Performance Optimization',
                    'Responsive Design',
                    'Cross-Browser Compatibility',
                    'SEO Optimization',
                    'Accessibility Compliance',
                    'Internationalization'
                ]
            },
            {
                title: 'Migrations to Shopify',
                items: [
                    'WooCommerce Migrations',
                    'Salesforce Migrations',
                    'BigCommerce Migrations',
                    'Custom Platform Migrations',
                ]
            }
        ]
    },
    {
        title: 'Growth',
        category: 'Growth',
        images: {
            main: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2400&auto=format&fit=crop',
            secondary: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2400&auto=format&fit=crop',
            tertiary: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=2400&auto=format&fit=crop'
        },
        details: [
            {
                title: 'Growth',
                items: [
                    'Google Ads',
                    'Merchant Campaigns',
                    'Meta Ads',
                    'Social Media Strategy',
                    'Email Marketing',
                    'Email Automations',
                    'Analytics & Tracking',
                    'Content Strategy'
                ]
            }
        ]
    }
]

// Update IMAGE_POSITIONS to match new service titles
const IMAGE_POSITIONS = {
    Strategy: [
        'top-[5%] right-[5%] w-[250px] h-[300px]',
        'top-[35%] left-[10%] w-[200px] h-[250px]',
        'bottom-[5%] right-[15%] w-[220px] h-[280px]',
    ],
    Design: [
        'top-[8%] right-[10%] w-[280px] h-[320px]',
        'top-[35%] left-[5%] w-[220px] h-[280px]',
        'bottom-[10%] right-[15%] w-[240px] h-[260px]',
    ],
    Development: [
        'top-[5%] left-[8%] w-[300px] h-[280px]',
        'top-[25%] right-[5%] w-[260px] h-[300px]',
        'bottom-[8%] left-[15%] w-[240px] h-[260px]',
    ],
    Growth: [
        'top-[10%] right-[8%] w-[280px] h-[300px]',
        'top-[20%] left-[5%] w-[260px] h-[280px]',
        'bottom-[5%] right-[12%] w-[240px] h-[270px]',
    ],
} as const

export function ServicesSection() {
    const [activeService, setActiveService] = useState<string | null>(null)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const isMobile = useMediaQuery('(max-width: 1024px)')

    const handleServiceClick = (title: string) => {
        if (isMobile) {
            setActiveService(title)
            setIsModalOpen(true)
        }
    }

    const handleServiceHover = (title: string | null) => {
        if (!isMobile) {
            setActiveService(title)
        }
    }

    return (
        <section className="services-section relative py-12 bg-page-light overflow-hidden">
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
                                    onClick={() => handleServiceClick(service.title)}
                                    onMouseEnter={() => handleServiceHover(service.title)}
                                    onMouseLeave={() => handleServiceHover(null)}
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

            {/* Service Modal - Mobile Only */}
            <ServiceModal
                service={SERVICES.find(s => s.title === activeService) || null}
                isOpen={isModalOpen}
                onClose={() => {
                    setIsModalOpen(false)
                    setActiveService(null)
                }}
            />
        </section>
    )
} 