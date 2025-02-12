'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useReCaptcha } from '@/hooks/use-recaptcha'

export default function ContactPage() {
    const { loaded, executeReCaptcha } = useReCaptcha()
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setIsSubmitting(true)
        setSubmitStatus('idle')

        try {
            if (!loaded) {
                throw new Error('Security check not loaded. Please refresh the page.')
            }

            const token = await executeReCaptcha('contact_form')
            if (!token) {
                throw new Error('Security verification failed. Please try again.')
            }

            const formData = new FormData(e.currentTarget)
            const data = {
                firstName: formData.get('firstName'),
                lastName: formData.get('lastName'),
                email: formData.get('workEmail'),
                company: formData.get('company'),
                platform: formData.get('platform'),
                country: formData.get('country'),
                phone: formData.get('phone'),
                description: formData.get('description'),
                recaptchaToken: token
            }

            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            })

            if (!response.ok) {
                const errorData = await response.json()
                throw new Error(errorData.error || 'Failed to send message')
            }

            setSubmitStatus('success')
            e.currentTarget.reset()
        } catch (error) {
            setSubmitStatus('error')
            console.error('Form submission error:', error instanceof Error ? error.message : 'Unknown error')
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <section className="py-24 bg-page-light">
            <div className="mx-auto max-w-[1620px] px-8">
                {/* Header */}
                <div className="mb-16">
                    <motion.h1
                        className="text-[2rem] font-bold mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        GET IN TOUCH
                    </motion.h1>
                    <motion.p
                        className="text-neutral-600 text-[14px] lg:text-[15px] leading-relaxed tracking-wide font-medium uppercase w-full lg:max-w-[550px]"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        Have a project in mind? Fill out the form to get in touch.
                    </motion.p>
                </div>

                {/* Contact Form */}
                <motion.form
                    onSubmit={handleSubmit}
                    className="max-w-[800px] space-y-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    {/* Name Fields */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <input
                            name="firstName"
                            type="text"
                            placeholder="First Name*"
                            required
                            className="w-full bg-neutral-100 px-4 h-12 rounded text-[15px] placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-neutral-900"
                        />
                        <input
                            name="lastName"
                            type="text"
                            placeholder="Last Name*"
                            required
                            className="w-full bg-neutral-100 px-4 h-12 rounded text-[15px] placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-neutral-900"
                        />
                    </div>

                    {/* Work Email and Company */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <input
                            name="workEmail"
                            type="email"
                            placeholder="Work Email*"
                            required
                            className="w-full bg-neutral-100 px-4 h-12 rounded text-[15px] placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-neutral-900"
                        />
                        <input
                            name="company"
                            type="text"
                            placeholder="Company Name*"
                            required
                            className="w-full bg-neutral-100 px-4 h-12 rounded text-[15px] placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-neutral-900"
                        />
                    </div>

                    {/* Platform */}
                    <input
                        name="platform"
                        type="text"
                        placeholder="Current Ecommerce Platform (Optional)"
                        className="w-full bg-neutral-100 px-4 h-12 rounded text-[15px] placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-neutral-900"
                    />

                    {/* Location and Phone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <input
                            name="country"
                            type="text"
                            placeholder="Country/Region*"
                            required
                            className="w-full bg-neutral-100 px-4 h-12 rounded text-[15px] placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-neutral-900"
                        />
                        <input
                            name="phone"
                            type="tel"
                            placeholder="Phone number (Optional)"
                            className="w-full bg-neutral-100 px-4 h-12 rounded text-[15px] placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-neutral-900"
                        />
                    </div>

                    {/* Project Description */}
                    <textarea
                        name="description"
                        placeholder="Project Description*"
                        required
                        rows={6}
                        className="w-full bg-neutral-100 p-4 rounded text-[15px] placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-neutral-900 resize-none"
                    />

                    {/* Privacy Policy Checkbox */}
                    <label className="flex items-start gap-3 cursor-pointer group">
                        <input
                            type="checkbox"
                            className="mt-1 rounded border-neutral-300 text-neutral-900 focus:ring-neutral-900"
                            required
                        />
                        <span className="text-[13px] text-neutral-600 leading-relaxed">
                            By checking this box, you agree to be contacted by Below The Fold regarding our products and services. You also consent to allow Below The Fold to store and process the personal information submitted in this form for the purpose of contacting you. For information on how to unsubscribe, our privacy practices, and our commitment to protecting your privacy, please see our{' '}
                            <Link href="/privacy" className="text-neutral-900 hover:opacity-70 transition-opacity underline">
                                Privacy Policy
                            </Link>
                            .
                        </span>
                    </label>

                    {/* Submit Button */}
                    <div className="flex items-center gap-4">
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full sm:w-auto px-8 h-12 bg-neutral-900 text-white rounded text-[15px] font-medium hover:bg-neutral-800 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isSubmitting ? 'SENDING...' : 'SUBMIT'}
                        </button>

                        {submitStatus === 'success' && (
                            <span className="text-green-600 text-sm">Message sent successfully!</span>
                        )}
                        {submitStatus === 'error' && (
                            <span className="text-red-600 text-sm">Failed to send message. Please try again.</span>
                        )}
                    </div>
                </motion.form>

                {/* Contact Info Card */}
                <motion.div
                    className="mt-16 max-w-[800px] bg-neutral-100 rounded-xl p-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                        {/* Email */}
                        <div>
                            <h3 className="text-[13px] font-medium text-neutral-600 uppercase mb-2">
                                Email
                            </h3>
                            <a
                                href="mailto:hello@belowthefold.gr"
                                className="text-[15px] font-medium text-neutral-900 hover:opacity-70 transition-opacity"
                            >
                                hello@belowthefold.gr
                            </a>
                        </div>

                        {/* Phone */}
                        <div>
                            <h3 className="text-[13px] font-medium text-neutral-600 uppercase mb-2">
                                Phone
                            </h3>
                            <a
                                href="tel:(210)-8045591"
                                className="text-[15px] font-medium text-neutral-900 hover:opacity-70 transition-opacity"
                            >
                                (210)-8045591
                            </a>
                        </div>

                        {/* Book a Call */}
                        <div>
                            <h3 className="text-[13px] font-medium text-neutral-600 uppercase mb-2">
                                Free Consultation
                            </h3>
                            <a
                                href="https://calendly.com/kardamitsis-e-belowthefold/30min"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[15px] font-medium text-neutral-900 hover:opacity-70 transition-opacity inline-flex items-center gap-2 group"
                            >
                                Book a call
                                <span className="opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300">
                                    →
                                </span>
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
} 