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
    title: "Below The Fold | Ecommerce Design & Development Agency | Shopify Experts",
    description: "We build high-performing ecommerce experiences that drive growth.",
    metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'https://belowthefold.com'),
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: '/',
        siteName: 'Below The Fold',
        title: 'Below The Fold - High-Performing Ecommerce Experiences',
        description: 'We build high-performing ecommerce experiences that drive growth.',
        images: [
            {
                url: '/images/og-image.png',
                width: 1200,
                height: 630,
                alt: 'Below The Fold - Ecommerce Design & Development Agency',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Below The Fold - High-Performing Ecommerce Experiences',
        description: 'We build high-performing ecommerce experiences that drive growth.',
        images: ['/images/og-image.png'],
        creator: '@belowthefold',
    },
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
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    verification: {
        google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
    },
    alternates: {
        canonical: '/',
    },
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
