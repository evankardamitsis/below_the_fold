import type { Metadata } from "next";
import localFont from 'next/font/local'
import "./globals.css";
import { AnimatedCursor } from '@/components/ui/animated-cursor'
import { Analytics } from "@vercel/analytics/react"

// Satoshi font family
const satoshi = localFont({
    src: '../fonts/Satoshi-Variable.woff2',
    variable: '--font-satoshi',
})

export const metadata: Metadata = {
    title: "Below The Fold",
    description: "We build high-performing ecommerce experiences that drive growth.",
    icons: {
        icon: [
            {
                url: '/images/btf-favicon.svg',
                type: 'image/svg+xml',
            },
        ],
        apple: [
            {
                url: '/images/btf-favicon.svg',
                type: 'image/svg+xml',
            },
        ],
    }
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={`${satoshi.variable} font-sans antialiased`}>
                {children}
                <AnimatedCursor />
                <Analytics />
            </body>
        </html>
    )
}
