'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { useReCaptcha } from '@/hooks/use-recaptcha'
import { toast } from 'sonner'

interface FormInputs {
    firstName: string
    lastName: string
    workEmail: string
    company: string
    platform?: string
    country: string
    phone?: string
    description: string
    privacyPolicy: boolean
}

export default function ContactPage() {
    const { ready: recaptchaReady, execute: executeRecaptcha } = useReCaptcha()
    const [isSubmitting, setIsSubmitting] = useState(false)
    const { register, handleSubmit, reset, formState: { errors } } = useForm<FormInputs>()

    const onSubmit = async (formData: FormInputs) => {
        if (isSubmitting) return
        setIsSubmitting(true)

        try {
            if (!recaptchaReady) {
                throw new Error('Security check not ready. Please refresh the page.')
            }

            const token = await executeRecaptcha('contact_form')

            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...formData,
                    recaptchaToken: token
                })
            })

            const data = await response.json()

            if (!response.ok) {
                throw new Error(data.error || 'Failed to send message')
            }

            toast.success('Message sent successfully!')
            reset()
        } catch (error) {
            toast.error(error instanceof Error ? error.message : 'Failed to send message')
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
                    onSubmit={handleSubmit(onSubmit)}
                    className="max-w-[800px] space-y-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    {/* Name Fields */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                            <input
                                {...register('firstName', { required: 'First name is required' })}
                                type="text"
                                placeholder="First Name*"
                                className="w-full bg-neutral-100 px-4 h-12 rounded text-[15px] placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-neutral-900"
                            />
                            {errors.firstName && (
                                <span className="text-red-500 text-sm mt-1">{errors.firstName.message}</span>
                            )}
                        </div>
                        <div>
                            <input
                                {...register('lastName', { required: 'Last name is required' })}
                                type="text"
                                placeholder="Last Name*"
                                className="w-full bg-neutral-100 px-4 h-12 rounded text-[15px] placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-neutral-900"
                            />
                            {errors.lastName && (
                                <span className="text-red-500 text-sm mt-1">{errors.lastName.message}</span>
                            )}
                        </div>
                    </div>

                    {/* Work Email and Company */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                            <input
                                {...register('workEmail', {
                                    required: 'Email is required',
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                        message: 'Invalid email address'
                                    }
                                })}
                                type="email"
                                placeholder="Work Email*"
                                className="w-full bg-neutral-100 px-4 h-12 rounded text-[15px] placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-neutral-900"
                            />
                            {errors.workEmail && (
                                <span className="text-red-500 text-sm mt-1">{errors.workEmail.message}</span>
                            )}
                        </div>
                        <div>
                            <input
                                {...register('company', { required: 'Company name is required' })}
                                type="text"
                                placeholder="Company Name*"
                                className="w-full bg-neutral-100 px-4 h-12 rounded text-[15px] placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-neutral-900"
                            />
                            {errors.company && (
                                <span className="text-red-500 text-sm mt-1">{errors.company.message}</span>
                            )}
                        </div>
                    </div>

                    {/* Platform */}
                    <input
                        {...register('platform')}
                        type="text"
                        placeholder="Current Ecommerce Platform (Optional)"
                        className="w-full bg-neutral-100 px-4 h-12 rounded text-[15px] placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-neutral-900"
                    />

                    {/* Location and Phone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                            <input
                                {...register('country', { required: 'Country/Region is required' })}
                                type="text"
                                placeholder="Country/Region*"
                                className="w-full bg-neutral-100 px-4 h-12 rounded text-[15px] placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-neutral-900"
                            />
                            {errors.country && (
                                <span className="text-red-500 text-sm mt-1">{errors.country.message}</span>
                            )}
                        </div>
                        <div>
                            <input
                                {...register('phone')}
                                type="tel"
                                placeholder="Phone number (Optional)"
                                className="w-full bg-neutral-100 px-4 h-12 rounded text-[15px] placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-neutral-900"
                            />
                        </div>
                    </div>

                    {/* Project Description */}
                    <div>
                        <textarea
                            {...register('description', {
                                required: 'Project description is required',
                                minLength: {
                                    value: 20,
                                    message: 'Please provide more details (minimum 20 characters)'
                                }
                            })}
                            placeholder="Project Description*"
                            rows={6}
                            className="w-full bg-neutral-100 p-4 rounded text-[15px] placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-neutral-900 resize-none"
                        />
                        {errors.description && (
                            <span className="text-red-500 text-sm mt-1">{errors.description.message}</span>
                        )}
                    </div>

                    {/* Privacy Policy Checkbox */}
                    <div>
                        <label className="flex items-start gap-3 cursor-pointer group">
                            <input
                                type="checkbox"
                                {...register('privacyPolicy', {
                                    required: 'You must accept the privacy policy'
                                })}
                                className="mt-1 rounded border-neutral-300 text-neutral-900 focus:ring-neutral-900"
                            />
                            <span className="text-[13px] text-neutral-600 leading-relaxed">
                                By checking this box, you agree to be contacted by Below The Fold regarding our products and services. You also consent to allow Below The Fold to store and process the personal information submitted in this form for the purpose of contacting you. For information on how to unsubscribe, our privacy practices, and our commitment to protecting your privacy, please see our{' '}
                                <Link href="/privacy" className="text-neutral-900 hover:opacity-70 transition-opacity underline">
                                    Privacy Policy
                                </Link>
                                .
                            </span>
                        </label>
                        {errors.privacyPolicy && (
                            <span className="text-red-500 text-sm mt-1 block">{errors.privacyPolicy.message}</span>
                        )}
                    </div>

                    {/* Submit Button */}
                    <div className="flex items-center gap-4">
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full sm:w-auto px-8 h-12 bg-neutral-900 text-white rounded text-[15px] font-medium hover:bg-neutral-800 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isSubmitting ? 'SENDING...' : 'SUBMIT'}
                        </button>
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