// Layout wrapper for marketing pages with shared navigation and footer
import { MarketingNav } from '@/components/marketing/nav'
import { MarketingFooter } from '@/components/marketing/footer'

export default function MarketingLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="flex min-h-screen flex-col">
            <MarketingNav />
            <main className="flex-1">{children}</main>
            <MarketingFooter />
        </div>
    )
} 