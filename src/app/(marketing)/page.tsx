import { MarketingHero } from '@/components/@shared/hero'
import { ShortPitch } from '@/components/sections/partner-section'
import { ProjectsSection } from '@/components/sections/projects-section'
import { ProjectsSectionServer } from '@/components/sections/projects-section-server'
import { ServicesSection } from '@/components/sections/services-section'
import { HowWeWorkSection } from '@/components/sections/how-we-work-section'
import { OurClientsSection } from '@/components/sections/our-clients-section'
import { BlogPostsSection } from '@/components/sections/blog-posts-section'

export default async function HomePage() {
    const projects = await ProjectsSectionServer()

    return (
        <main>
            <MarketingHero />
            <ShortPitch />
            <ProjectsSection projects={projects} />
            <ServicesSection />
            <HowWeWorkSection />
            <OurClientsSection />
            <BlogPostsSection />
        </main>
    )
} 