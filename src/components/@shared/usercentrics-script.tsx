'use client'

import Script from 'next/script'

export function UsercentricsScript() {
    return (
        <Script
            id="usercentrics-cmp"
            src="https://app.usercentrics.eu/browser-ui/latest/loader.js"
            data-settings-id="LVDPzpvW0A20UV"
            strategy="afterInteractive"
        />
    )
} 