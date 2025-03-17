'use client'

import { ProjectCard } from '@/components/cards/project-card'
import { motion } from 'framer-motion'
import { Project } from '@/types/project'

interface ProjectsSectionProps {
    projects: Project[]
}

export function ProjectsSection({ projects }: ProjectsSectionProps) {
    return (
        <section className="py-24 bg-page-lighter">
            <div className="mx-auto max-w-[1620px] px-8">
                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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

                {/* View All Button */}
                <motion.div
                    className="mt-16 flex justify-start"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <motion.a
                        href="/works"
                        className="text-neutral-900 text-[15px] font-medium tracking-wide uppercase relative group"
                        whileHover={{ x: 10 }}
                    >
                        View all
                        <span className="absolute left-0 right-0 bottom-0 h-[1px] bg-neutral-900 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                    </motion.a>
                </motion.div>
            </div>
        </section>
    )
} 