'use client'

import { ProjectCard } from '@/components/cards/project-card'
import { Project } from '@/types/project'

interface WorksPageClientProps {
    projects: Project[]
}

export function WorksPageClient({ projects }: WorksPageClientProps) {
    return (
        <div className="min-h-screen bg-page-background text-black">
            <div className="mx-auto max-w-[1620px] px-8 py-24">
                <h1 className="text-[4rem] sm:text-[3.5rem] md:text-[5rem] lg:text-[6rem] leading-[0.95] tracking-[-0.02em] font-bold mb-16">
                    Our Work
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
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
        </div>
    )
} 