'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { LinkedinIcon } from '../icons/social/linkedin-icon'
import { InstagramIcon } from '../icons/social/instagram-icon'
import { FacebookIcon } from '../icons/social/facebook-icon'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { toast } from 'sonner'
import Image from 'next/image'

const FOOTER_LINKS = [
    { label: 'Services', href: '/services' },
    { label: 'Works', href: '/works' },
    { label: 'Process', href: '/process' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
]

const SOCIAL_LINKS = [
    {
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/company/below-the-fold-digital/?viewAsMember=true',
        icon: LinkedinIcon
    },
    {
        label: 'Instagram',
        href: 'https://www.instagram.com/below_the_fold_digital/',
        icon: InstagramIcon
    },
    {
        label: 'Facebook',
        href: 'https://www.facebook.com/belowthefolddigital/',
        icon: FacebookIcon
    }
]

interface NewsletterFormInputs {
    email: string
}

export default function Footer() {
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

    const currentYear = new Date().getFullYear()

    return (
        <footer className="py-24 bg-neutral-900">
            <div className="mx-auto max-w-[1620px] px-8">
                {/* Main Content */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 mb-24">
                    {/* Left Column */}
                    <div className="space-y-8">
                        <motion.h2
                            className="text-[2.3rem] md:text-[4rem]  leading-[1.1] font-bold text-white"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            We make e-shops<br />
                            that work for you.
                        </motion.h2>

                        {/* Consultation Text */}
                        <motion.p
                            className="text-neutral-400 text-[15px] leading-relaxed max-w-[90%]"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                        >
                            We&apos;re offering free consultations—no catch. Let&apos;s chat about your Shopify store, tackle your challenges, and find the best way to grow your business.
                        </motion.p>

                        {/* Buttons */}
                        <motion.div
                            className="flex flex-col sm:flex-row gap-4"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-between px-6 h-12 bg-white rounded text-[15px] font-medium hover:bg-neutral-100 transition-colors duration-300 group"
                            >
                                Let&apos;s Work Together
                                <span className="ml-2 opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300">→</span>
                            </Link>
                            <Link
                                href="https://calendly.com/kardamitsis-e-belowthefold/30min"
                                target="_blank"
                                className="inline-flex items-center justify-between px-6 h-12 bg-transparent border border-white/20 rounded text-[15px] font-medium text-white hover:bg-white/5 transition-colors duration-300 group"
                            >
                                Book a free call
                                <span className="ml-2 opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300">→</span>
                            </Link>
                        </motion.div>

                        {/* Award Badge - Moved below buttons */}
                        <motion.div
                            className="pt-10"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                        >
                            <Image
                                src="/images/E-volution-Awards-2022_Stickers_Silver.png"
                                alt="E-volution Awards 2022 Silver Award"
                                width={80}
                                height={80}
                                className="object-contain"
                            />
                        </motion.div>
                    </div>

                    {/* Right Column */}
                    <div className="space-y-12">
                        {/* Navigation Links */}
                        <nav className="flex flex-col space-y-4">
                            {FOOTER_LINKS.map((link) => (
                                <Link
                                    key={link.label}
                                    href={link.href}
                                    className="text-white text-[15px] font-medium hover:opacity-60 transition-opacity w-fit"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </nav>

                        {/* Newsletter Form */}
                        <div>
                            <h3 className="text-white text-[15px] font-medium mb-6">
                                Sign up for monthly Below The Fold Insights.
                            </h3>
                            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
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
                                        className="w-full bg-neutral-800 text-white px-4 h-12 rounded text-[15px] placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-neutral-700"
                                    />
                                    {errors.email && (
                                        <span className="text-red-500 text-sm mt-1">{errors.email.message}</span>
                                    )}
                                </div>
                                <label className="flex items-start gap-3 cursor-pointer group">
                                    <input
                                        type="checkbox"
                                        className="mt-1 rounded border-neutral-700 text-brand-purple focus:ring-brand-purple"
                                        required
                                    />
                                    <span className="text-[13px] text-neutral-400 leading-relaxed">
                                        By checking this box, you agree to be contacted by Below The Fold regarding our products and services. We will store and process your personal information for the purpose of contacting you. For details on how we manage your data and your rights, please see our{' '}
                                        <Link href="/privacy" className="text-white hover:opacity-60 transition-opacity">
                                            Privacy Policy
                                        </Link>
                                        .
                                    </span>
                                </label>
                                <div className="flex items-center gap-4">
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="px-8 h-12 bg-white text-neutral-900 rounded text-[15px] font-medium hover:bg-neutral-200 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        {isSubmitting ? 'SUBSCRIBING...' : 'SUBMIT'}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="pt-12 border-t border-neutral-800">
                    <div className="flex flex-col md:flex-row md:items-center gap-8 relative">
                        {/* Social Links */}
                        <div className="flex items-center gap-6 md:w-1/3">
                            {SOCIAL_LINKS.map((link) => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-white hover:opacity-60 transition-opacity"
                                    aria-label={link.label}
                                >
                                    <link.icon />
                                </a>
                            ))}
                        </div>

                        {/* Contact Info */}
                        <div className="flex items-center justify-center gap-6 md:w-1/3">
                            <a
                                href="mailto:hello@belowthefold.gr"
                                className="text-[15px] font-medium text-white hover:opacity-60 transition-opacity"
                            >
                                hello@belowthefold.gr
                            </a>
                            <a
                                href="tel:(210)-8045591"
                                className="text-[15px] font-medium text-white hover:opacity-60 transition-opacity"
                            >
                                (210)-8045591
                            </a>
                        </div>

                        {/* Copyright & Policy */}
                        <div className="flex items-center justify-end gap-6 md:w-1/3">
                            <Link
                                href="/privacy"
                                className="text-[15px] font-medium text-white hover:opacity-60 transition-opacity"
                            >
                                Privacy Policy
                            </Link>
                            <span className="text-[15px] font-medium text-white">
                                ©{currentYear} Below The Fold.
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
} 