// Layout wrapper for marketing pages with shared navigation and footer
import { MarketingNav } from '@/components/@shared/nav'
import { SpeedInsights } from "@vercel/speed-insights/next"
import Footer from '@/components/@shared/footer'
import { Toaster } from 'sonner'

export default function MarketingLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="flex min-h-screen flex-col">
            <MarketingNav />
            <main className="flex-1">
                {children}
                <SpeedInsights />
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
    )
} 