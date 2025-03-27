'use client'

import Script from 'next/script'

export function GoogleAnalytics() {
    return (
        <>
            <Script
                src="https://www.googletagmanager.com/gtag/js?id=G-HW88RMS774"
                strategy="afterInteractive"
            />
            <Script
                id="ga4-config"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'G-HW88RMS774');
                    `
                }}
            />
        </>
    )
} 