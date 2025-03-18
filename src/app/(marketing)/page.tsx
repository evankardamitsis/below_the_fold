
import { ProjectsSection } from '@/components/sections/projects-section'
import { ProjectsSectionServer } from '@/components/sections/projects-section-server'
import { ServicesSection } from '@/components/sections/services-section'
import { HowWeWorkSection } from '@/components/sections/how-we-work-section'
import { OurClientsSection } from '@/components/sections/our-clients-section'
import { BlogPostsSectionClient } from '@/components/sections/blog-posts-section-client'
import { BlogPostsSectionServer } from '@/components/sections/blog-posts-section-server'
import { MarketingHero } from '@/components/@shared/hero'
import { ShortPitch } from '@/components/sections/partner-section'

export default async function HomePage() {
    const projects = await ProjectsSectionServer()
    const posts = await BlogPostsSectionServer()

    return (
        <main>
            <MarketingHero />
            <ShortPitch />
            <ProjectsSection projects={projects} />
            <ServicesSection />
            <HowWeWorkSection />
            <OurClientsSection />
            <BlogPostsSectionClient posts={posts} />
        </main>
    )
} 