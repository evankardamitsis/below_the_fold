'use client'

import { ProjectCard } from '@/components/cards/project-card'
import { Project } from '@/types/project'
import { motion } from 'framer-motion'
import { VideoBackground } from '@/components/ui/video-background'
import { ProjectBanner } from '@/components/ui/project-banner'

interface WorksPageClientProps {
    projects: Project[]
}

export function WorksPageClient({ projects }: WorksPageClientProps) {
    return (
        <div className="min-h-screen bg-page-background text-black">
            {/* Hero Section */}
            <section className="relative min-h-[80vh] md:min-h-screen bg-neutral-900 overflow-hidden">
                {/* Video Background */}
                <VideoBackground
                    src={process.env.NEXT_PUBLIC_WORKS_VIDEO_URL!}
                    poster="/images/works-poster.webp"
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
                            Our Work
                        </motion.p>

                        <motion.h1
                            className="text-[1.75rem] sm:text-[2rem] md:text-[3.5rem] lg:text-[4.5rem] leading-[1.1] font-bold text-white/90 max-w-full sm:max-w-[90%] md:max-w-[80%]"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                        >
                            Featured Projects
                        </motion.h1>

                        <motion.p
                            className="text-white/80 text-base sm:text-lg lg:text-xl max-w-full sm:max-w-[90%] md:max-w-[600px] mt-4 sm:mt-6"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            Explore our portfolio of successful e-commerce projects, showcasing our expertise in creating beautiful and functional online stores.
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* Projects Grid */}
            <section className="py-16 sm:py-20 md:py-24">
                <div className="mx-auto max-w-[1620px] px-4 sm:px-6 md:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                        {projects.map((project, index) => (
                            <ProjectCard
                                key={project.id}
                                title={project.title}
                                description={project.description}
                                image={project.heroImage?.url || ''}
                                clientLogo={project.clientLogo?.url || null}
                                category={project.services.slice(0, 2).map(service => service.name).join(' • ')}
                                tags={project.services.map(service => service.name)}
                                href={`/works/${project.slug}`}
                                index={index}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Project Banner */}
            <div className="mx-auto max-w-[1620px] px-4 sm:px-6 md:px-8">
                <ProjectBanner className="my-16 sm:my-20 md:my-24" />
            </div>
        </div>
    )
} 