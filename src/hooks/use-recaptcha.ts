'use client'

import { useState, useEffect } from 'react'

interface ReCaptchaInstance {
    ready: (callback: () => void) => void
    execute: (siteKey: string, options: { action: string }) => Promise<string>
}

declare global {
    interface Window {
        grecaptcha: ReCaptchaInstance
    }
}

export function useReCaptcha() {
    const [ready, setReady] = useState(false)

    useEffect(() => {
        // Load the script only once
        if (typeof window === 'undefined') return
        if (window.grecaptcha) {
            setReady(true)
            return
        }

        const script = document.createElement('script')
        script.src = `https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`
        script.async = true
        script.defer = true
        
        script.onload = () => {
            window.grecaptcha.ready(() => {
                setReady(true)
            })
        }

        document.head.appendChild(script)

        return () => {
            document.head.removeChild(script)
        }
    }, [])

    const execute = async (action: string): Promise<string> => {
        if (!ready) throw new Error('reCAPTCHA not ready')
        
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

    return { ready, execute }
} 