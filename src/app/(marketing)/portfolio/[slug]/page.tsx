// Dynamic portfolio item page displaying project details
export default function PortfolioItemPage({
    params
}: {
    params: { slug: string }
}) {
    return (
        <article className="container mx-auto px-4 py-12">
            <header className="mb-12">
                <h1 className="text-4xl font-bold">Portfolio Item: {params.slug}</h1>
                <p className="mt-4 text-lg text-muted-foreground">
                    Project details and case study
                </p>
            </header>
            {/* Portfolio content will be added here */}
        </article>
    )
} 