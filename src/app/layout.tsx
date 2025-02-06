import type { Metadata } from "next";
import localFont from 'next/font/local'
import "./globals.css";
import { AnimatedCursor } from '@/components/ui/animated-cursor'

// Satoshi font family
const satoshi = localFont({
    src: '../fonts/Satoshi-Variable.woff2',
    variable: '--font-satoshi',
})

export const metadata: Metadata = {
    title: "Below The Fold",
    description: "Ecommerce Design & Development Agency",
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
            </body>
        </html>
    )
}
