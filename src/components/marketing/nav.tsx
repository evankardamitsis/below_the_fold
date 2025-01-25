'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Contact', href: '/contact' },
]

export function MarketingNav() {
    const pathname = usePathname()
    const isHome = pathname === '/'

    if (isHome) return null // Don't render nav on home page as it has its own header

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 items-center">
                <div className="mr-8">
                    <Link href="/" className="font-sans text-xl font-bold">
                        Below The Fold
                    </Link>
                </div>
                <nav className="flex flex-1 items-center justify-between">
                    <div className="flex gap-6">
                        {navigation.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={cn(
                                    'text-sm font-medium transition-colors hover:text-foreground/80',
                                    pathname === item.href ? 'text-foreground' : 'text-foreground/60'
                                )}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                    <div>
                        <Link
                            href="/contact"
                            className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow hover:bg-primary/90"
                        >
                            Get in Touch
                        </Link>
                    </div>
                </nav>
            </div>
        </header>
    )
} 