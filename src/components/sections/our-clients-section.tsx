'use client'

import { motion } from 'framer-motion'
import { ContentAwareLogo } from '@/components/ui/content-aware-logo'

const CLIENTS = [
    {
        name: 'LNR',
        logo: '/images/client-logos/LNR-HEART-1.png',
        url: 'https://shop.luvnroll.com/'
    },
    {
        name: 'Swaplanet',
        logo: '/images/client-logos/swaplanet.webp',
        url: 'https://swaplanet.gr'
    },
    {
        name: 'Maggoosh',
        logo: '/images/client-logos/maggoosh.png',
        url: 'https://maggoosh.com'
    },
    {
        name: 'Fresh',
        logo: '/images/client-logos/fresh.png',
        url: 'https://order-freshpatisserie.gr/'
    },
    {
        name: 'More Than This',
        logo: '/images/client-logos/morethanthis.png',
        url: 'https://morethanthis.gr'
    },
    {
        name: 'Philoselfie',
        logo: '/images/client-logos/philoselfie.png',
        url: 'https://philoselfie.gr'
    },
    {
        name: 'Miss Beauty',
        logo: '/images/client-logos/logo-miss-beauty.png',
        url: 'https://missbeauty.gr'
    },
    {
        name: 'Racquet Creation',
        logo: '/images/client-logos/racquetcreation.webp',
        url: 'https://racquetcreation.gr'
    },
    {
        name: 'Vitamelia',
        logo: '/images/client-logos/vitamelia.png',
        url: 'https://vitamelia.gr'
    }
]

function ClientLogoSlide({
    name,
    logo,
    url,
}: {
    name: string
    logo: string
    url: string
}) {
    return (
        <div className="flex items-center justify-center min-w-[300px] h-[120px] px-12">
            <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center h-full group"
            >
                <ContentAwareLogo
                    src={logo}
                    alt={name}
                    width={200}
                    height={80}
                    imageClassName="w-auto max-h-[50px] object-contain opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                />
            </a>
        </div>
    )
}

export function OurClientsSection() {
    return (
        <section className="py-24 bg-page-lighter overflow-hidden">
            <div className="mx-auto max-w-[1620px] px-8">
                {/* Header */}
                <motion.h2
                    className="text-[2.5rem] md:text-[3rem] leading-[1.1] font-bold text-neutral-900 mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    We empower brands across<br />
                    multiple industries.
                </motion.h2>

                {/* Logos Slider */}
                <div className="relative">
                    {/* Gradient Overlays */}
                    <div className="absolute left-0 top-0 bottom-0 w-[100px] bg-gradient-to-r from-page-lighter to-transparent z-10" />
                    <div className="absolute right-0 top-0 bottom-0 w-[100px] bg-gradient-to-l from-page-lighter to-transparent z-10" />

                    {/* Scrolling Container */}
                    <div className="flex overflow-hidden">
                        <div className="flex animate-scroll">
                            {CLIENTS.map((client) => (
                                <ClientLogoSlide key={client.name} {...client} />
                            ))}
                            {CLIENTS.map((client) => (
                                <ClientLogoSlide
                                    key={`${client.name}-duplicate`}
                                    {...client}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
