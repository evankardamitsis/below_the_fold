import { getProjects } from '@/lib/contentful'
import { WorksPageClient } from '@/components/works-page-client'

export default async function WorksPage() {
    try {
        const projects = await getProjects()

        if (!projects || projects.length === 0) {
            return (
                <div className="min-h-screen flex items-center justify-center">
                    <div className="text-center">
                        <h1 className="text-2xl font-bold text-white mb-4">No Projects Found</h1>
                        <p className="text-white/60">Please check your Contentful configuration</p>
                    </div>
                </div>
            )
        }

        return <WorksPageClient projects={projects} />
    } catch (error) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-white mb-4">Error</h1>
                    <p className="text-white/60">Failed to load projects</p>
                </div>
            </div>
        )
    }
} 