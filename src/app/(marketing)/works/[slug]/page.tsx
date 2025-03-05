import { getProjectBySlug } from '@/lib/contentful'
import { ProjectPageClient } from '@/components/project-page-client'
import { Suspense } from 'react'

interface PageProps {
    params: {
        slug: string
    }
}

export default async function ProjectPage({ params }: PageProps) {
    const { slug } = await params
    const project = await getProjectBySlug(slug)

    if (!project) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-white mb-4">Error</h1>
                    <p className="text-white/60">Project not found</p>
                </div>
            </div>
        )
    }

    return (
        <Suspense fallback={
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-white mb-4">Loading...</h1>
                    <p className="text-white/60">Please wait</p>
                </div>
            </div>
        }>
            <ProjectPageClient project={project} />
        </Suspense>
    )
} 