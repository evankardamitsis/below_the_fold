'use client'

import { MarketingHero } from '@/components/@shared/hero'
import { ShortPitch } from '@/components/sections/partner-section'
import { ProjectsSection } from '@/components/sections/projects-section'
import { ServicesSection } from '@/components/sections/services-section'
import { HowWeWorkSection } from '@/components/sections/how-we-work-section'
export default function HomePage() {
    return (
        <main>
            <MarketingHero />
            <ShortPitch />
            <ProjectsSection />
            <ServicesSection />
            <HowWeWorkSection />
        </main>
    )
} 