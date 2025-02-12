'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'

interface NewsletterFormInputs {
    email: string
}

export function NewsletterForm() {
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
    const [message, setMessage] = useState('')

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm<NewsletterFormInputs>()

    const onSubmit = async (data: NewsletterFormInputs) => {
        setStatus('loading')
        
        try {
            const response = await fetch('/api/newsletter', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            })

            const result = await response.json()

            if (!response.ok) throw new Error(result.error)

            setStatus('success')
            setMessage('Successfully subscribed to newsletter!')
            reset()
        } catch (error) {
            setStatus('error')
            setMessage(error instanceof Error ? error.message : 'Failed to subscribe')
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
                <input
                    {...register('email', {
                        required: 'Email is required',
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: 'Invalid email address'
                        }
                    })}
                    type="email"
                    placeholder="Email Address*"
                    className="w-full bg-neutral-800 text-white px-4 h-12 rounded text-[15px] placeholder:text-neutral-500"
                />
                {errors.email && (
                    <span className="text-red-500 text-sm mt-1">{errors.email.message}</span>
                )}
            </div>

            <button
                type="submit"
                disabled={status === 'loading'}
                className="text-[15px] font-medium text-white hover:opacity-60 transition-opacity disabled:opacity-50"
            >
                {status === 'loading' ? 'SUBSCRIBING...' : 'SUBMIT'}
            </button>

            {message && (
                <p className={status === 'success' ? 'text-green-500' : 'text-red-500'}>
                    {message}
                </p>
            )}
        </form>
    )
} 