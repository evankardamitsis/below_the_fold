import { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/styles/globals.css'
import { MarketingNav } from '@/components/@shared/nav'
import Footer from '@/components/@shared/footer'
import { Toaster } from 'sonner'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    metadataBase: new URL('https://cro.belowthefold.gr'),
    title: {
        default: 'CRO Services | Below The Fold',
        template: '%s | Below The Fold CRO'
    },
    description: 'Expert Conversion Rate Optimization services to boost your ecommerce performance.',
    openGraph: {
        title: 'CRO Services | Below The Fold',
        description: 'Expert Conversion Rate Optimization services to boost your ecommerce performance.',
        url: 'https://cro.belowthefold.gr',
        siteName: 'Below The Fold CRO',
        locale: 'en_US',
        type: 'website',
    },
    robots: {
        index: true,
        follow: true,
    },
    twitter: {
        card: 'summary_large_image',
        title: 'CRO Services | Below The Fold',
        description: 'Expert Conversion Rate Optimization services to boost your ecommerce performance.',
    }
}

export default function SubdomainLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className="h-full scroll-smooth">
            <body className={`${inter.className} h-full bg-white`}>
                <div className="flex min-h-screen flex-col">
                    <MarketingNav />
                    <main className="flex-1">
                        {children}
                    </main>
                    <Footer />
                    <Toaster
                        position="bottom-right"
                        toastOptions={{
                            style: {
                                background: '#1c1c1c',
                                color: '#fff',
                                border: '1px solid #333'
                            }
                        }}
                    />
                </div>
            </body>
        </html>
    )
} 