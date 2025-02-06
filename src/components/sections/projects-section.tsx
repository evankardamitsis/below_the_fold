import { ProjectCard } from '@/components/cards/project-card'

const FEATURED_PROJECTS = [
    {
        title: 'Timex',
        description: 'Migrating from SFCC to Shopify, plus four global expansions',
        image: 'https://picsum.photos/800/1000',
        hoverImage: 'https://picsum.photos/800/1000?random=1',
        logo: '/projects/timex-logo.jpg',
        category: 'Enterprise',
        industry: 'Jewelry & Accessories',
        tags: ['Shopify Migration', 'UI/UX Audit', 'Dynamic Product Pages'],
        href: '/portfolio/timex'
    },
    {
        title: 'Architectural Firm',
        description: 'Modern web presence for a leading architectural studio',
        image: 'https://picsum.photos/800/1000?random=2',
        hoverImage: 'https://picsum.photos/800/1000?random=3',
        category: 'Web Design',
        tags: ['3D Integration', 'Portfolio System'],
        href: '/portfolio/architectural-firm'
    },
    {
        title: 'Ella Johnson',
        description: 'Fashion brand e-commerce with focus on mobile experience',
        image: 'https://picsum.photos/800/1000?random=4',
        hoverImage: 'https://picsum.photos/800/1000?random=5',
        category: 'E-commerce',
        tags: ['Mobile First', 'AR Try-on'],
        href: '/portfolio/ella-johnson'
    }
]

export function ProjectsSection() {
    return (
        <section className="py-12 bg-page-lighter">
            <div className="mx-auto max-w-[1620px] px-8">
                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {FEATURED_PROJECTS.map((project, index) => (
                        <ProjectCard
                            key={project.title}
                            {...project}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
} 