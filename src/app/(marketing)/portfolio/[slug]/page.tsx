import { Metadata } from 'next'

// Dynamic portfolio item page displaying project details
interface PageProps {
    params: {
        slug: string
    }
}

export default async function PortfolioPage({ params }: PageProps) {
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

// If you need to generate static paths
export async function generateStaticParams() {
    // Return an array of possible slug values
    return [
        { slug: 'project-1' },
        { slug: 'project-2' },
        // ... more slugs
    ]
}

// Generate metadata for each page
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    return {
        title: `Portfolio - ${params.slug}`,
        // ... other metadata
    }
} 