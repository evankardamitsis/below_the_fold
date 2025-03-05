import { getProjects } from '@/lib/contentful'
import { WorksPageClient } from '@/components/works-page-client'

export default async function WorksPage() {
    const projects = await getProjects()
    return <WorksPageClient projects={projects} />
} 