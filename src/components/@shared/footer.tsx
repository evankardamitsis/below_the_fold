import Link from 'next/link'

export function MarketingFooter() {
    return (
        <footer className="border-t bg-background">
            <div className="container py-12 md:py-16 lg:py-20">
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    <div className="space-y-4">
                        <h3 className="text-lg font-bold">Below The Fold</h3>
                        <p className="text-sm text-muted-foreground">
                            Crafting exceptional ecommerce experiences that drive growth and engagement.
                        </p>
                    </div>
                    <div>
                        <h4 className="mb-4 text-sm font-semibold">Links</h4>
                        <ul className="space-y-3 text-sm">
                            <li>
                                <Link href="/about" className="text-muted-foreground hover:text-foreground">
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link href="/portfolio" className="text-muted-foreground hover:text-foreground">
                                    Portfolio
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-muted-foreground hover:text-foreground">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="mb-4 text-sm font-semibold">Connect</h4>
                        <ul className="space-y-3 text-sm">
                            <li>
                                <a href="https://twitter.com" className="text-muted-foreground hover:text-foreground">
                                    Twitter
                                </a>
                            </li>
                            <li>
                                <a href="https://github.com" className="text-muted-foreground hover:text-foreground">
                                    GitHub
                                </a>
                            </li>
                            <li>
                                <a href="https://linkedin.com" className="text-muted-foreground hover:text-foreground">
                                    LinkedIn
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="mb-4 text-sm font-semibold">Contact</h4>
                        <ul className="space-y-3 text-sm text-muted-foreground">
                            <li>hello@belowthefold.gr</li>
                            <li>Athens, Greece</li>
                        </ul>
                    </div>
                </div>
                <div className="mt-12 border-t pt-8">
                    <p className="text-center text-sm text-muted-foreground">
                        © {new Date().getFullYear()} Below The Fold. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
} 