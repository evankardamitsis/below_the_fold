'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { toast } from 'sonner'

interface NewsletterFormInputs {
    email: string
    consent: boolean
}

export function BlogNewsletter() {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const { register, handleSubmit, reset, formState: { errors } } = useForm<NewsletterFormInputs>()

    const onSubmit = async (data: NewsletterFormInputs) => {
        if (isSubmitting) return
        setIsSubmitting(true)

        try {
            const response = await fetch('/api/newsletter', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            })

            const result = await response.json()

            if (!response.ok) throw new Error(result.error)

            toast.success('Successfully subscribed to newsletter!')
            reset()
        } catch (error) {
            toast.error(error instanceof Error ? error.message : 'Failed to subscribe')
        } finally {
            setIsSubmitting(false)
        }
    }

    const onError = () => {
        if (errors.email) {
            toast.error(errors.email.message)
        }
        if (errors.consent) {
            toast.error(errors.consent.message)
        }
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="py-24 bg-neutral-900"
        >
            <div className="mx-auto max-w-[1620px] px-4 sm:px-6 md:px-8">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-[2.3rem] md:text-[4rem] leading-[1.1] font-bold text-white mb-6">
                        Subscribe & Stay Ahead
                    </h2>
                    <p className="text-neutral-400 text-[15px] leading-relaxed mb-8">
                        We&apos;re sharing more sharp insights soon. Subscribe to get the next one straight to your inbox.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                        <form onSubmit={handleSubmit(onSubmit, onError)} className="flex-1 max-w-md">
                            <div className="flex gap-4">
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
                                    className="flex-1 bg-neutral-800 text-white px-4 h-12 rounded text-[15px] placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-neutral-700"
                                />
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="px-8 h-12 bg-white text-neutral-900 rounded text-[15px] font-medium hover:bg-neutral-200 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
                                >
                                    {isSubmitting ? 'SUBSCRIBING...' : 'SUBSCRIBE'}
                                </button>
                            </div>
                            {errors.email && (
                                <span className="text-red-500 text-sm mt-1 block">{errors.email.message}</span>
                            )}
                        </form>
                    </div>
                    <div className="flex flex-col items-center">
                        <label className="flex items-start gap-3 cursor-pointer group">
                            <input
                                {...register('consent', { required: 'Please accept the terms' })}
                                type="checkbox"
                                className="mt-1 rounded border-neutral-700 text-brand-purple focus:ring-brand-purple"
                            />
                            <span className="text-[13px] text-neutral-400 leading-relaxed">
                                By checking this box, you agree to be contacted by Below The Fold regarding our products and services. We will store and process your personal information for the purpose of contacting you. For details on how we manage your data and your rights, please see our{' '}
                                <Link href="/privacy" className="text-white hover:opacity-60 transition-opacity">
                                    Privacy Policy
                                </Link>
                                .
                            </span>
                        </label>
                        {errors.consent && (
                            <span className="text-red-500 text-sm mt-1">{errors.consent.message}</span>
                        )}
                    </div>
                </div>
            </div>
        </motion.div>
    )
} 