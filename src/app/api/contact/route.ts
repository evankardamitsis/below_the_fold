import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

async function verifyRecaptcha(token: string) {
    const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`,
    })

    const data = await response.json()
    return data.success && data.score >= 0.5 // Adjust threshold as needed
}

export async function POST(req: Request) {
    try {
        const body = await req.json()
        const { recaptchaToken, ...formData } = body

        // Verify reCAPTCHA
        const isValid = await verifyRecaptcha(recaptchaToken)
        if (!isValid) {
            return NextResponse.json(
                { error: 'Invalid reCAPTCHA token' },
                { status: 400 }
            )
        }

        // Rate limiting (optional)
        const ip = req.headers.get('x-forwarded-for') || 'unknown'
        // Add rate limiting logic here if needed

        const { data, error } = await resend.emails.send({
            from: 'Below The Fold <hello@belowthefold.gr>',
            to: ['hello@belowthefold.gr'],
            subject: 'New Contact Form Submission',
            html: `
                <h2>New Contact Form Submission</h2>
                <p><strong>Name:</strong> ${formData.firstName} ${formData.lastName}</p>
                <p><strong>Email:</strong> ${formData.email}</p>
                <p><strong>Company:</strong> ${formData.company}</p>
                <p><strong>Platform:</strong> ${formData.platform || 'Not specified'}</p>
                <p><strong>Country:</strong> ${formData.country}</p>
                <p><strong>Phone:</strong> ${formData.phone || 'Not specified'}</p>
                <h3>Project Description:</h3>
                <p>${formData.description}</p>
                <p><small>IP: ${ip}</small></p>
            `
        })

        if (error) {
            return NextResponse.json({ error }, { status: 400 })
        }

        return NextResponse.json({ message: 'Email sent successfully', data })
    } catch (error) {
        console.error('Contact form error:', error)
        return NextResponse.json(
            { error: 'Internal Server Error' },
            { status: 500 }
        )
    }
} 