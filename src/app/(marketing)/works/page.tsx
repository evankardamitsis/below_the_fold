import { getProjects } from '@/lib/contentful'

export default async function WorksPage() {
    const projects = await getProjects()

    console.log('Projects from Contentful:', projects)

    return (
        <div className="min-h-screen bg-neutral-900 text-white p-8">
            <h1 className="text-4xl font-bold mb-8">Projects</h1>
            <div className="grid gap-8">
                {projects.map((project) => (
                    <div key={project.id} className="bg-neutral-800 p-6 rounded-lg">
                        <h2 className="text-2xl font-bold mb-4">{project.title}</h2>
                        <p className="text-neutral-400 mb-4">{project.description}</p>
                        {project.heroImage && (
                            <img
                                src={project.heroImage.url}
                                alt={project.heroImage.alternativeText || project.title}
                                width={project.heroImage.width}
                                height={project.heroImage.height}
                                className="rounded-lg mb-4"
                            />
                        )}
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <h3 className="text-xl font-semibold mb-2">Stats</h3>
                                <ul className="space-y-2">
                                    {project.stats.map((stat) => (
                                        <li key={stat.id}>
                                            {stat.label}: {stat.value}{stat.suffix}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold mb-2">Features</h3>
                                <ul className="space-y-2">
                                    {project.features.map((feature) => (
                                        <li key={feature.id}>{feature.title}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
} 