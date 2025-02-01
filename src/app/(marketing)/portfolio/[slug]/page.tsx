import { Metadata } from 'next'

// Use Next.js built-in types
export default async function PortfolioPage({
    params,
}: {
    params: { slug: string }
}) {
    const { slug } = params

    return (
        <article className="container mx-auto px-4 py-12">
            <header className="mb-12">
                <h1 className="text-4xl font-bold">Portfolio Item: {slug}</h1>
                <p className="mt-4 text-lg text-muted-foreground">
                    Project details and case study
                </p>
            </header>
            {/* Portfolio content will be added here */}
        </article>
    )
}

// Generate static paths
export async function generateStaticParams() {
    return [
        { slug: 'project-1' },
        { slug: 'project-2' },
    ]
}

// Generate metadata
export async function generateMetadata({
    params,
}: {
    params: { slug: string }
}): Promise<Metadata> {
    return {
        title: `Portfolio - ${params.slug}`,
    }
} 