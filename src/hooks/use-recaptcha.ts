import { useState, useEffect } from 'react'

interface ReCaptchaInstance {
    execute: (siteKey: string, options: { action: string }) => Promise<string>
}

declare global {
    interface Window {
        grecaptcha: ReCaptchaInstance
        onRecaptchaLoad?: () => void
    }
}

export function useReCaptcha() {
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        // Skip if already loaded
        if (document.querySelector('script[src*="recaptcha"]')) return

        // Load the script
        const script = document.createElement('script')
        script.src = `https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`
        
        window.onRecaptchaLoad = () => setLoaded(true)
        script.async = true
        script.defer = true
        script.onload = window.onRecaptchaLoad
        
        document.head.appendChild(script)

        return () => {
            document.head.removeChild(script)
            window.onRecaptchaLoad = undefined
        }
    }, [])

    const executeReCaptcha = async (action: string) => {
        if (!loaded) throw new Error('reCAPTCHA not loaded')
        
        try {
            return await window.grecaptcha.execute(
                process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!,
                { action }
            )
        } catch (error) {
            console.error('reCAPTCHA execution failed:', error)
            throw error
        }
    }

    return { loaded, executeReCaptcha }
} 