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
            <section className="relative min-h-screen bg-neutral-900 overflow-hidden">
                {/* Video Background */}
                <VideoBackground
                    src={process.env.NEXT_PUBLIC_WORKS_VIDEO_URL!}
                    poster="/images/works-poster.webp"
                />

                {/* Content */}
                <div className="relative z-10 mx-auto max-w-[1620px] px-8 pt-48">
                    {/* Content Card */}
                    <div className="bg-neutral-900/30 backdrop-blur-sm rounded-xl lg:rounded-2xl p-12 max-w-[90%]">
                        <motion.p
                            className="text-white/80 text-sm font-medium mb-6 uppercase"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            Our Work
                        </motion.p>

                        <motion.h1
                            className="text-[2rem] md:text-[3.5rem] lg:text-[4.5rem] leading-[1.1] font-bold text-white/90 max-w-[80%]"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                        >
                            Featured Projects
                        </motion.h1>

                        <motion.p
                            className="text-white/80 text-lg lg:text-xl max-w-[600px]"
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
            <section className="py-24">
                <div className="mx-auto max-w-[1620px] px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <ProjectCard
                                key={project.id}
                                title={project.title}
                                description={project.description}
                                image={project.heroImage?.url || ''}
                                hoverImage={project.overviewImage?.url || project.heroImage?.url || ''}
                                category={project.services[0]?.name || 'Web Development'}
                                tags={project.services.map(service => service.name)}
                                href={`/works/${project.slug}`}
                                index={index}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Project Banner */}
            <div className="mx-auto max-w-[1620px] px-8">
                <ProjectBanner className="my-24" />
            </div>
        </div>
    )
} 