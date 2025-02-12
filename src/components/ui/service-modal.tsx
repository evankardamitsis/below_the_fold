'use client'

import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import type { Service } from '@/components/sections/services-section'
import Image from 'next/image'

interface ServiceModalProps {
    service: Service | null
    isOpen: boolean
    onClose: () => void
}

export function ServiceModal({ service, isOpen, onClose }: ServiceModalProps) {
    // Lock body scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }
        return () => {
            document.body.style.overflow = 'unset'
        }
    }, [isOpen])

    return (
        <AnimatePresence>
            {isOpen && service && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        className="fixed inset-0 bg-neutral-900/40 backdrop-blur-sm z-50"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                    />

                    {/* Modal */}
                    <motion.div
                        className="fixed inset-4 sm:inset-8 md:inset-12 bg-page-light/95 backdrop-blur-sm rounded-xl z-50 overflow-auto"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                    >
                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-neutral-900/90 text-white"
                        >
                            ✕
                        </button>

                        <div className="p-6 sm:p-8">
                            {/* Service Title */}
                            <h3 className="text-[2rem] font-bold text-neutral-900 mb-8">
                                {service.title}
                            </h3>

                            {/* Service Details */}
                            <div className="space-y-8 mb-12">
                                {service.details.map((detail) => (
                                    <div key={detail.title}>
                                        <h4 className="text-lg font-bold text-neutral-800 mb-4">
                                            {detail.title}
                                        </h4>
                                        <div className="flex flex-wrap gap-2">
                                            {detail.items.map((item) => (
                                                <span
                                                    key={item}
                                                    className="bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full text-[13px] font-medium text-neutral-900"
                                                >
                                                    {item}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Service Images */}
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                <Image
                                    src={service.images.main}
                                    alt={service.title}
                                    width={400}
                                    height={300}
                                    className="w-full aspect-[4/3] object-cover rounded-lg"
                                />
                                <Image
                                    src={service.images.secondary}
                                    alt={service.title}
                                    width={400}
                                    height={300}
                                    className="w-full aspect-[4/3] object-cover rounded-lg"
                                />
                                <Image
                                    src={service.images.tertiary}
                                    alt={service.title}
                                    width={400}
                                    height={300}
                                    className="w-full aspect-[4/3] object-cover rounded-lg"
                                />
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    )
} 