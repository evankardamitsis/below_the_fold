// About page showcasing agency's story, values, and team
export default function AboutPage() {
    return (
        <div className="container mx-auto px-4 py-12">
            <header className="mb-12">
                <h1 className="text-4xl font-bold">About Below The Fold</h1>
                <p className="mt-4 text-lg text-muted-foreground">
                    Crafting exceptional ecommerce experiences
                </p>
            </header>

            {/* Company Story Section */}
            <section className="mb-16">
                <h2 className="text-3xl font-semibold mb-6">Our Story</h2>
                <div className="prose prose-lg dark:prose-invert">
                    {/* Story content will be added here */}
                </div>
            </section>

            {/* Values Section */}
            <section className="mb-16">
                <h2 className="text-3xl font-semibold mb-6">Our Values</h2>
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {/* Values cards will be added here */}
                </div>
            </section>

            {/* Team Section */}
            <section className="mb-16">
                <h2 className="text-3xl font-semibold mb-6">Our Team</h2>
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {/* Team member cards will be added here */}
                </div>
            </section>
        </div>
    )
} 