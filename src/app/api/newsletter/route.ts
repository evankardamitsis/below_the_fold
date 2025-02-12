import { NextResponse } from 'next/server'

const CONVERTKIT_API_KEY = process.env.CONVERTKIT_API_KEY
const CONVERTKIT_FORM_ID = process.env.CONVERTKIT_FORM_ID
const CONVERTKIT_API_URL = 'https://api.convertkit.com/v3/forms'

export async function POST(req: Request) {
    try {
        const { email } = await req.json()

        // First, let's verify the form exists
        const formResponse = await fetch(`${CONVERTKIT_API_URL}/${CONVERTKIT_FORM_ID}`, {
            headers: {
                'Content-Type': 'application/json',
            }
        })

        console.log('Form check response:', await formResponse.json())

        // Now attempt to subscribe
        const response = await fetch(`${CONVERTKIT_API_URL}/${CONVERTKIT_FORM_ID}/subscribe`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                api_key: CONVERTKIT_API_KEY,
                email,
                confirmed: true
            }),
        })

        const data = await response.json()
        console.log('ConvertKit Response:', {
            status: response.status,
            data,
            formId: CONVERTKIT_FORM_ID,
            apiKey: CONVERTKIT_API_KEY?.substring(0, 5) + '...',
            url: `${CONVERTKIT_API_URL}/${CONVERTKIT_FORM_ID}/subscribe`
        })

        if (!response.ok) {
            console.error('ConvertKit Error:', data)
            throw new Error(data.message || 'Failed to subscribe')
        }

        return NextResponse.json({
            message: 'Successfully subscribed to newsletter'
        })

    } catch (error) {
        console.error('Newsletter subscription error:', error)
        return NextResponse.json(
            { 
                error: error instanceof Error ? error.message : 'Failed to subscribe',
                details: process.env.NODE_ENV === 'development' ? error : undefined
            },
            { status: 500 }
        )
    }
} 