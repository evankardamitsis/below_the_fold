'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { CustomButton } from '../ui/custom-button'
import { ServiceModal } from '../ui/service-modal'
import { useMediaQuery } from '@/hooks/use-media-query'
import { SERVICES, IMAGE_POSITIONS } from '@/constants/services'

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
                        We craft high-performing Shopify stores through expert design, development, and optimization <span className="bg-brand-purple px-1 rounded-sm font-bold">turning e-commerce brands into industry leaders.</span>
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
                                                                key={item.name}
                                                                className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[13px] font-medium text-neutral-900"
                                                            >
                                                                {item.name}
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