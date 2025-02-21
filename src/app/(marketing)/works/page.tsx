'use client'

import { ProjectCard } from '@/components/cards/project-card'
import { motion } from 'framer-motion'

const ALL_PROJECTS = [
    {
        title: 'Timex',
        description: 'Migrating from SFCC to Shopify, plus four global expansions',
        image: 'https://picsum.photos/800/1000',
        hoverImage: 'https://picsum.photos/800/1000?random=1',
        logo: '/projects/timex-logo.jpg',
        category: 'Enterprise',
        industry: 'Jewelry & Accessories',
        tags: ['Shopify Migration', 'UI/UX Audit', 'Dynamic Product Pages'],
        href: '/works/timex'
    },
    {
        title: 'Architectural Firm',
        description: 'Modern web presence for a leading architectural studio',
        image: 'https://picsum.photos/800/1000?random=2',
        hoverImage: 'https://picsum.photos/800/1000?random=3',
        category: 'Web Design',
        tags: ['3D Integration', 'Portfolio System'],
        href: '/works/architectural-firm'
    },
    {
        title: 'Ella Johnson',
        description: 'Fashion brand e-commerce with focus on mobile experience',
        image: 'https://picsum.photos/800/1000?random=4',
        hoverImage: 'https://picsum.photos/800/1000?random=5',
        category: 'E-commerce',
        tags: ['Mobile First', 'AR Try-on'],
        href: '/works/ella-johnson'
    },
    // Add more projects here...
]

const CATEGORIES = ['All', 'Enterprise', 'E-commerce', 'Web Design', 'Branding']

export default function WorksPage() {
    return (
        <section className="py-24 bg-page-light">
            <div className="mx-auto max-w-[1620px] px-8">
                {/* Header */}
                <motion.div
                    className="mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-[2.5rem] sm:text-[3.5rem] md:text-[4rem] font-bold text-neutral-900">
                        Our Work
                    </h1>
                    <p className="mt-4 text-lg text-neutral-600 max-w-[600px]">
                        Showcasing our best e-commerce projects and digital experiences.
                    </p>
                </motion.div>

                {/* Filters */}
                <motion.div
                    className="mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    <div className="flex gap-4 flex-wrap">
                        {CATEGORIES.map((category) => (
                            <button
                                key={category}
                                className="px-6 py-2 rounded-full text-sm font-medium transition-colors
                                    hover:bg-neutral-900 hover:text-white
                                    data-[active=true]:bg-neutral-900 data-[active=true]:text-white
                                    bg-neutral-100 text-neutral-900"
                                data-active={category === 'All'}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </motion.div>

                {/* Projects Grid */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    {ALL_PROJECTS.map((project, index) => (
                        <ProjectCard
                            key={project.title}
                            {...project}
                            index={index}
                        />
                    ))}
                </motion.div>
            </div>
        </section>
    )
} 