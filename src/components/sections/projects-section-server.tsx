import { getProjects } from '@/lib/contentful'

export async function ProjectsSectionServer() {
    const projects = await getProjects()
    const latestProjects = projects.slice(0, 3)
    return latestProjects
} 