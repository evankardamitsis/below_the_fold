'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const CLIENTS = [
    {
        name: 'Aite',
        logo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&auto=format&fit=crop&q=60'
    },
    {
        name: 'Bombas',
        logo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&auto=format&fit=crop&q=60'
    },
    {
        name: 'Fenty Beauty',
        logo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&auto=format&fit=crop&q=60'
    },
    {
        name: 'Industry West',
        logo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop&q=60'
    },
    {
        name: 'Daily Harvest',
        logo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&auto=format&fit=crop&q=60'
    },
    {
        name: 'Peloton',
        logo: 'https://images.unsplash.com/photo-1463453091185-61582044d556?w=800&auto=format&fit=crop&q=60'
    }
]

export function OurClientsSection() {
    return (
        <section className="py-24 bg-page-lighter overflow-hidden">
            <div className="mx-auto max-w-[1620px] px-8">
                {/* Header */}
                <motion.h2
                    className="text-[3rem] md:text-[3rem] leading-[1.1] font-bold text-neutral-900 mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    We grow brands across<br />
                    all industries and verticals.
                </motion.h2>

                {/* Logos Slider */}
                <div className="relative">
                    {/* Gradient Overlays */}
                    <div className="absolute left-0 top-0 bottom-0 w-[100px] bg-gradient-to-r from-page-lighter to-transparent z-10" />
                    <div className="absolute right-0 top-0 bottom-0 w-[100px] bg-gradient-to-l from-page-lighter to-transparent z-10" />

                    {/* Scrolling Container */}
                    <div className="flex overflow-hidden">
                        <div className="flex animate-scroll">
                            {/* First Set */}
                            {CLIENTS.map((client) => (
                                <div
                                    key={client.name}
                                    className="flex items-center justify-center min-w-[300px] px-12"
                                >
                                    <Image
                                        src={client.logo}
                                        alt={client.name}
                                        width={200}
                                        height={80}
                                        className="w-auto h-[80px] object-contain opacity-60 hover:opacity-100 transition-opacity duration-300"
                                    />
                                </div>
                            ))}
                            {/* Duplicate Set for Seamless Loop */}
                            {CLIENTS.map((client) => (
                                <div
                                    key={`${client.name}-duplicate`}
                                    className="flex items-center justify-center min-w-[300px] px-12"
                                >
                                    <Image
                                        src={client.logo}
                                        alt={client.name}
                                        width={200}
                                        height={80}
                                        className="w-auto h-[80px] object-contain opacity-60 hover:opacity-100 transition-opacity duration-300"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
} 