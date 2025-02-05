import { ProjectCard } from '@/components/cards/project-card'

const FEATURED_PROJECTS = [
    {
        title: 'Timex',
        description: 'E-commerce redesign and development for the iconic watch brand',
        image: 'https://picsum.photos/1200/800',
        category: 'E-commerce',
        href: '/portfolio/timex'
    },
    {
        title: 'Architectural Firm',
        description: 'Modern web presence for a leading architectural studio',
        image: 'https://picsum.photos/1200/800?random=2',
        category: 'Web Design',
        href: '/portfolio/architectural-firm'
    },
    {
        title: 'Ella Johnson',
        description: 'Fashion brand e-commerce with focus on mobile experience',
        image: 'https://picsum.photos/1200/800?random=3',
        category: 'E-commerce',
        href: '/portfolio/ella-johnson'
    }
]

export function ProjectsSection() {
    return (
        <section className="py-24 bg-page-lighter">
            <div className="mx-auto max-w-[1620px] px-8">
                {/* Projects Grid */}
                <div className="grid grid-cols-3 gap-8">
                    {FEATURED_PROJECTS.map((project) => (
                        <ProjectCard
                            key={project.title}
                            {...project}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
} 