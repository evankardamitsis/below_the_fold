// Layout wrapper for marketing pages with shared navigation and footer
import { MarketingNav } from '@/components/@shared/nav'
import { MarketingFooter } from '@/components/@shared/footer'
import { SpeedInsights } from "@vercel/speed-insights/next"

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
            <MarketingFooter />
        </div>
    )
} 