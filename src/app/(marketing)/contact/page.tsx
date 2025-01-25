// Contact page with form and company information
export default function ContactPage() {
    return (
        <div className="container mx-auto px-4 py-12">
            <header className="mb-12">
                <h1 className="text-4xl font-bold">Contact Us</h1>
                <p className="mt-4 text-lg text-muted-foreground">
                    Let&apos;s discuss your next ecommerce project
                </p>
            </header>

            <div className="grid gap-12 lg:grid-cols-2">
                {/* Contact Form Section */}
                <section className="space-y-8">
                    <div className="prose prose-lg dark:prose-invert">
                        <h2>Send us a Message</h2>
                        <p>Fill out the form below and we&apos;ll get back to you shortly.</p>
                    </div>
                    {/* Contact form will be added here */}
                </section>

                {/* Contact Information Section */}
                <section className="space-y-8">
                    <div className="prose prose-lg dark:prose-invert">
                        <h2>Get in Touch</h2>
                        <div className="space-y-4">
                            <p>Email: hello@belowthefold.gr</p>
                            <p>Location: Athens, Greece</p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
} 