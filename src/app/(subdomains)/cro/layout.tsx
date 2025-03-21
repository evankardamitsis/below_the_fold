import { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    metadataBase: new URL('https://cro.belowthefold.gr'),
    title: "Transform Your Store's Performance in 4 Days | Below The Fold",
    description: "A focused, intensive process designed to identify where your Shopify store leaks revenue — and fix it fast.",
    openGraph: {
        title: "Transform Your Store's Performance in 4 Days | Below The Fold",
        description: "A focused, intensive process designed to identify where your Shopify store leaks revenue — and fix it fast.",
        url: 'https://cro.belowthefold.gr',
        siteName: 'Below The Fold CRO',
        locale: 'en_US',
        type: 'website'
    }
}

export default function SubdomainLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className="h-full scroll-smooth">
            <body className={`${inter.className} h-full bg-neutral-900`}>
                <header className="fixed top-0 left-0 right-0 z-50 bg-neutral-900/80 backdrop-blur-sm border-b border-white/10">
                    <div className="mx-auto max-w-[1620px] px-4 sm:px-6 md:px-8 h-16 flex items-center justify-between">
                        <a
                            href="https://belowthefold.gr"
                            className="text-white font-medium hover:text-brand-purple transition-colors"
                        >
                            ← Back to Below The Fold
                        </a>
                    </div>
                </header>

                <main className="pt-16">
                    {children}
                </main>
            </body>
        </html>
    )
} 