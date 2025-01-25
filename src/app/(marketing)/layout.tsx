// Layout wrapper for marketing pages with shared navigation and footer
export default function MarketingLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="flex min-h-screen flex-col">
            {/* Navigation will be added here */}
            <main className="flex-1">{children}</main>
            {/* Footer will be added here */}
        </div>
    )
} 