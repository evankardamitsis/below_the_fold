export default function AuthLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="w-full">{children}</div>
        </div>
    )
} 