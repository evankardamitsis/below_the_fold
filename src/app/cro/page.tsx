'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function ConversionBoostSprintPage() {
    const [activeQuestion, setActiveQuestion] = useState<number | null>(0)

    const faqQuestions = [
        {
            question: 'What exactly is the Conversion Boost Sprint?',
            answer: "It's a focused, 4-day intensive process specifically designed for Shopify stores. We combine data analysis, design improvements, and development to deliver measurable results — not just another audit report."
        },
        {
            question: 'How long does it take to see results?',
            answer: "You'll see the first improvements within the 4-day sprint period. We don't do endless audits — we focus on quick, high-impact changes that can boost your conversion rates immediately."
        },
        {
            question: 'What happens after the sprint?',
            answer: 'You can continue optimizing through our Revenue Booster Retainer program, where we provide ongoing CRO support, or take the insights and roadmap we provide to implement future improvements on your own.'
        },
        {
            question: "What kind of changes do you actually make during the sprint?",
            answer: "We don’t just give you a list of suggestions — we roll up our sleeves. From sticky CTAs and simplified checkouts to fixing friction on mobile, we implement real improvements that can move the needle right away."
        },
        {
            question: "Do I need to pause my live campaigns or promos?",
            answer: "Not at all. We work in the background while your store keeps running. No traffic disruptions, no drama — just smart changes, quietly making your funnel better."
        },
        {
            question: "Is this only for stores with low conversion rates?",
            answer: "Definitely not. Even top-performing brands have blind spots. We’ve helped 7-figure stores uncover leaks, improve mobile UX, and scale with confidence. There’s always room to optimize."
        },
        {
            question: "How do you decide what to test or change?",
            answer: "We don’t guess. We dig into your data, heatmaps, and customer behavior to spot friction and opportunity. Then we prioritize what’ll make the biggest impact, fastest. No fluff. Just focused action."
        }
    ]

    return (
        <main className="relative">
            {/* Hero Section */}
            <section className="relative min-h-screen bg-neutral-900">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.4)_100%)]" />
                <div className="relative z-10 mx-auto max-w-[1620px] px-4 sm:px-6 md:px-8 h-screen flex items-center justify-center">
                    <div className="max-w-3xl text-center">
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                            Unlock More Sales in Just 4 Days.
                        </h1>
                        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
                            A focused, intensive process designed to uncover exactly why visitors aren&apos;t converting — and fix it fast.
                        </p>
                        <Link
                            href="https://calendly.com/kardamitsis-e-belowthefold/30min"
                            target="_blank"
                            className="inline-flex items-center justify-between px-6 h-12 bg-white border border-white/20 rounded text-[15px] font-medium text-neutral-900 transition-colors duration-300 group cursor-pointer"
                        >
                            Book your free CRO Discovery Call
                            <span className="ml-2 opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300">→</span>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Why Conversion Optimization Matters */}
            <section className="py-24 bg-page-lighter relative overflow-hidden">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-purple/20 to-transparent" />
                <div className="mx-auto max-w-[1620px] px-4 sm:px-6 md:px-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-3xl"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-8 leading-tight">
                            Why Conversion Optimization Matters
                        </h2>
                        <p className="text-2xl text-black/90 mb-6 leading-relaxed">
                            You&apos;re already driving traffic.<br />
                            But how much of that traffic actually buys?
                        </p>
                        <p className="text-lg text-black/80 mb-8 leading-relaxed">
                            Even small friction points — a clunky product page, a confusing checkout, poor mobile UX — can cost you thousands in missed revenue.
                        </p>
                        <p className="text-lg text-black/90 mb-4 leading-relaxed">
                            At <span className="font-bold bg-brand-purple">belowthefold</span>, we specialize in helping brands remove those blockers and turn more visitors into paying customers.
                        </p>
                        <p className="text-2xl w-14 font-bold bg-brand-purple">
                            Fast.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Who's It For */}
            <section className="pb-24 bg-page-lighter relative">
                <div className="mx-auto max-w-[1620px] px-4 sm:px-6 md:px-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="w-full"
                    >
                        <h2 className="text-xl text-neutral-900 mb-6 leading-tight">
                            Who&apos;s It For
                        </h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            {[
                                'Brands already driving traffic but struggling to convert',
                                'Stores with high cart abandonment, low AOV, or poor mobile conversions',
                                'Shopify brands ready to act fast, not sit on reports'
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="bg-white rounded-xl p-3 shadow-[0_2px_8px_rgba(0,0,0,0.08)] flex items-center gap-3"
                                >
                                    <span className="text-[#96BF48] text-2xl font-bold flex-shrink-0">✓</span>
                                    <p className="text-md text-neutral-600 leading-relaxed">{item}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Why This Sprint Works & What Makes Our Sprint Different */}
            <section className="py-24 bg-page-light relative">
                <div className="mx-auto max-w-[1620px] px-4 sm:px-6 md:px-8 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        {/* Why This Sprint Works */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="max-w-3xl"
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-8 leading-tight">
                                Why This Sprint Works
                            </h2>
                            <p className="text-lg text-neutral-600 mb-4 leading-tight">
                                Most audits drag on for weeks. We don&apos;t waste time.
                            </p>
                            <p className="text-lg text-neutral-600 leading-tight">
                                In 4 days, we deep-dive, prioritize, and implement fixes that move the needle.
                            </p>
                        </motion.div>

                        {/* What Makes Our Sprint Different */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="w-full"
                        >
                            <h2 className="text-xl text-neutral-900 mb-6 leading-tight">
                                What Makes Our Sprint Different
                            </h2>
                            <div className="grid md:grid-cols-2 gap-6 items-center">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className="bg-white rounded-xl p-6 shadow-[0_2px_8px_rgba(0,0,0,0.08)]"
                                >
                                    <div className="flex items-center gap-4">
                                        <Image
                                            src="/images/shopify_icon.svg"
                                            alt="Shopify Specific"
                                            width={40}
                                            height={40}
                                            className="flex-shrink-0"
                                        />
                                        <div>
                                            <h3 className="text-lg font-semibold text-neutral-900 mb-1">Shopify Specific</h3>
                                            <p className="text-neutral-600 text-sm leading-tight">No generalized CRO fluff</p>
                                        </div>
                                    </div>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className="bg-white rounded-xl p-6 shadow-[0_2px_8px_rgba(0,0,0,0.08)] items-center"
                                >
                                    <div className="flex items-center gap-4">
                                        <Image
                                            src="/images/data_icon.svg"
                                            alt="Data + design driven"
                                            width={40}
                                            height={40}
                                            className="flex-shrink-0"
                                        />
                                        <div>
                                            <h3 className="text-lg font-semibold text-neutral-900 mb-1">Data + design driven</h3>
                                            <p className="text-neutral-600 text-sm leading-tight">We don&apos;t rely on gut feelings</p>
                                        </div>
                                    </div>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className="bg-white rounded-xl p-6 shadow-[0_2px_8px_rgba(0,0,0,0.08)] items-center"
                                >
                                    <div className="flex items-center gap-4">
                                        <Image
                                            src="/images/speed_icon.svg"
                                            alt="Speed"
                                            width={40}
                                            height={40}
                                            className="flex-shrink-0"
                                        />
                                        <div>
                                            <h3 className="text-lg font-semibold text-neutral-900 mb-1">Speed</h3>
                                            <p className="text-neutral-600 text-sm leading-tight">Done in 4 days, not 4 weeks</p>
                                        </div>
                                    </div>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className="bg-white rounded-xl p-6 shadow-[0_2px_8px_rgba(0,0,0,0.08)]"
                                >
                                    <div className="flex items-center gap-4">
                                        <Image
                                            src="/images/code_icon.svg"
                                            alt="Implement, not just audit"
                                            width={40}
                                            height={40}
                                            className="flex-shrink-0 items-center"
                                        />
                                        <div>
                                            <h3 className="text-lg font-semibold text-neutral-900 mb-1">Implement, not just audit</h3>
                                            <p className="text-neutral-600 text-sm leading-tight">Real fixes, not theory</p>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Our 4-Day Process */}
            <section className="py-24 bg-neutral-900 relative">
                <div className="mx-auto max-w-[1620px] px-4 sm:px-6 md:px-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-16"
                    >
                        <h2 className="text-[2rem] font-bold text-white mb-4 leading-tight">
                            Our 4-Day Process
                        </h2>
                        <p className="text-neutral-400 text-[14px] lg:text-[15px] leading-relaxed tracking-wide font-medium uppercase w-full lg:max-w-[550px]">
                            A no-nonsense, 4-day intensive process built specifically for Shopify stores.
                        </p>
                    </motion.div>

                    {/* Process Steps Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
                        {/* Main Connecting Line */}
                        <div className="absolute top-1/2 left-0 right-0 h-[2px] hidden lg:block">
                            <motion.div
                                className="h-full bg-white/10"
                                initial={{ scaleX: 0 }}
                                whileInView={{ scaleX: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, delay: 0.5 }}
                            />
                        </div>

                        {[
                            {
                                number: '01',
                                day: 'Day 1',
                                title: 'Data Deep Dive & Funnel Audit',
                                items: [
                                    'Shopify Analytics, GA4, heatmaps, session recordings',
                                    'Homepage → Product → Cart → Checkout',
                                    'Mobile vs. desktop behavior',
                                    'Friction points & revenue leaks identified'
                                ],
                                gradient: 'from-emerald-500/70 to-emerald-400/70'
                            },
                            {
                                number: '02',
                                day: 'Day 2',
                                title: 'Live Workshop',
                                items: [
                                    'Present key findings clearly',
                                    'Align on business priorities (AOV, conversions, retention)',
                                    'Collaboratively prioritize fixes (quick wins + high-impact)'
                                ],
                                gradient: 'from-blue-500/70 to-cyan-400/70'
                            },
                            {
                                number: '03',
                                day: 'Day 3',
                                title: 'Execution Sprint',
                                items: [
                                    'Product page improvements',
                                    'Checkout simplification',
                                    'Trust signal & CTA optimization',
                                    'Upsell, cross-sell opportunities',
                                    'Mobile UX tweaks'
                                ],
                                gradient: 'from-rose-500/70 to-rose-400/70'
                            },
                            {
                                number: '04',
                                day: 'Day 4',
                                title: 'Testing + Results Roadmap',
                                items: [
                                    'QA & testing across devices',
                                    'Post-implementation performance benchmarks',
                                    'Roadmap for longer-term CRO strategy'
                                ],
                                gradient: 'from-purple-500/70 to-indigo-400/70'
                            }
                        ].map((phase, index) => (
                            <motion.div
                                key={phase.day}
                                className="group relative bg-neutral-900 rounded-xl p-6 min-h-[400px] border border-white/10"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ scale: 1.02 }}
                            >
                                {/* Gradient Background */}
                                <motion.div
                                    className={`absolute inset-0 bg-gradient-to-b ${phase.gradient} rounded-xl opacity-0 group-hover:opacity-15 transition-opacity duration-300`}
                                />

                                {/* Content */}
                                <div className="relative h-full flex flex-col">
                                    <span className="block text-[3rem] font-bold text-white/20 mb-4 group-hover:text-white/40 transition-colors duration-300">
                                        {phase.number}
                                    </span>
                                    <div className="text-brand-purple font-semibold mb-2">{phase.day}</div>
                                    <h3 className="text-[1.25rem] font-bold text-white mb-4 leading-tight group-hover:translate-x-2 transition-transform duration-300">
                                        {phase.title}
                                    </h3>
                                    <ul className="space-y-2">
                                        {phase.items.map((item, i) => (
                                            <li key={i} className="text-neutral-400 text-[15px] leading-relaxed tracking-wide font-medium group-hover:translate-x-2 transition-transform duration-300">
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Step Connector */}
                                {index < 3 && (
                                    <motion.div
                                        className="absolute -right-6 top-1/2 w-12 h-[2px] hidden lg:block bg-white/10 group-hover:bg-white/40 group-hover:h-[3px] transition-all duration-300"
                                    />
                                )}

                                {/* Border Highlight */}
                                <motion.div
                                    className="absolute inset-0 rounded-xl border border-white/0 group-hover:border-white/20 transition-colors duration-300"
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Results You Can Expect */}
            <section className="py-24 bg-neutral-900 relative">
                <div className="absolute inset-x-0 top-0 bg-gradient-to-r from-transparent via-brand-purple/20 to-transparent" />
                <div className="mx-auto max-w-[1620px] px-4 sm:px-6 md:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 leading-tight">
                            Results You Can Expect
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            'Higher conversion rates',
                            'Improved AOV',
                            'Less cart abandonment',
                            'Faster site performance',
                            'Improved mobile experience',
                            'More revenue without more ad spend'
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-neutral-800 rounded-xl p-6 flex items-center gap-3 group hover:bg-neutral-800/80 transition-colors duration-300"
                            >
                                <span className="text-brand-purple text-xl">✓</span>
                                <p className="text-white/90 text-lg font-medium">{item}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonial */}
            <section className="py-24 bg-page-light relative">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-purple/20 to-transparent" />
                <div className="mx-auto max-w-[1620px] px-4 sm:px-6 md:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-3xl mx-auto text-center"
                    >
                        <p className="text-xl text-neutral-900 mb-6 leading-relaxed">
                            &ldquo;We thought our traffic was solid, but we had no idea how much friction our product pages were causing. After the sprint, conversion rates jumped by 25%.&rdquo;
                        </p>
                        {/* <p className="text-white/80">
                            – John Smith, Brand Name
                        </p> */}
                    </motion.div>
                </div>
            </section>

            {/* Revenue Booster Retainer */}
            <section className="py-24 bg-neutral-900 relative overflow-hidden">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-purple/20 to-transparent" />
                <div className="mx-auto max-w-[1620px] px-4 sm:px-6 md:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="relative overflow-hidden"
                    >
                        <div className="relative z-10">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="max-w-3xl mx-auto text-center mb-12"
                            >
                                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                                    Keep The Momentum Going
                                </h2>
                                <p className="text-xl text-white/90 mb-8 leading-relaxed">
                                    Continue improving through our Revenue Booster Retainer — your dedicated CRO team, ready to drive ongoing growth.
                                </p>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="grid sm:grid-cols-2 gap-4 max-w-4xl mx-auto"
                            >
                                {[
                                    {
                                        title: 'Ongoing CRO',
                                        description: 'Continuous optimization based on real data and user behavior'
                                    },
                                    {
                                        title: 'Landing Pages',
                                        description: 'High-converting pages for campaigns and product launches'
                                    },
                                    {
                                        title: 'Dev Tweaks',
                                        description: 'Quick technical improvements and feature additions'
                                    },
                                    {
                                        title: 'Strategy',
                                        description: 'Monthly planning and performance reviews'
                                    }
                                ].map((feature, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        whileHover={{ scale: 1.02 }}
                                        className="bg-white/10 backdrop-blur p-6 rounded-lg border border-white/10 hover:border-brand-purple/50 transition-all duration-300 shadow-lg hover:shadow-xl"
                                    >
                                        <h3 className="text-lg font-bold text-white mb-2 leading-tight">{feature.title}</h3>
                                        <p className="text-sm text-white/80 leading-relaxed">{feature.description}</p>
                                    </motion.div>
                                ))}
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="mt-8 text-center"
                            >
                                <Link
                                    href="https://belowthefold.gr/pricing"
                                    target="_blank"
                                    className="inline-flex items-center justify-center px-8 h-12 bg-white text-black rounded-lg text-[15px] font-medium hover:bg-neutral-100 transition-all duration-300 shadow-lg hover:shadow-xl group cursor-pointer"
                                >
                                    Learn More About Our Retainer
                                    <span className="ml-2 transform translate-x-0 group-hover:translate-x-1 transition-transform duration-300">→</span>
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-24 bg-page-light relative">
                <div className="mx-auto max-w-[1620px] px-4 sm:px-6 md:px-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-3xl mx-auto"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-12 leading-tight text-center">
                            Frequently Asked Questions
                        </h2>
                        <div className="space-y-4">
                            {faqQuestions.map((faq, index) => (
                                <motion.div
                                    key={index}
                                    initial={false}
                                    className="border border-neutral-200 rounded-lg overflow-hidden"
                                >
                                    <button
                                        onClick={() => setActiveQuestion(activeQuestion === index ? null : index)}
                                        className="w-full px-6 py-4 flex items-center justify-between text-left bg-white hover:bg-neutral-50 transition-colors duration-200"
                                    >
                                        <h3 className="text-lg font-semibold text-neutral-900">
                                            {faq.question}
                                        </h3>
                                        <span className={`transform transition-transform duration-200 ${activeQuestion === index ? 'rotate-180' : ''}`}>
                                            ↓
                                        </span>
                                    </button>
                                    <AnimatePresence>
                                        {activeQuestion === index && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.2 }}
                                                className="overflow-hidden"
                                            >
                                                <div className="px-6 py-4 bg-white border-t border-neutral-200">
                                                    <p className="text-neutral-700 leading-relaxed">
                                                        {faq.answer}
                                                    </p>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-24 bg-neutral-900 relative">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.4)_100%)]" />
                <div className="relative z-10 mx-auto max-w-[1620px] px-4 sm:px-6 md:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-3xl mx-auto text-center"
                    >
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                            Ready to Turn More Visitors Into Customers?
                        </h2>
                        <p className="text-xl text-white/90 mb-8 leading-relaxed">
                            Let&apos;s boost your store&apos;s conversions — in just 4 days.
                        </p>
                        <Link
                            href="https://calendly.com/kardamitsis-e-belowthefold/30min"
                            target="_blank"
                            className="inline-flex items-center justify-between px-6 h-12 bg-white border border-white/20 rounded text-[15px] font-medium text-neutral-900 transition-colors duration-300 group cursor-pointer"
                        >
                            Book your free CRO Discovery Call
                            <span className="ml-2 opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300">→</span>
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-6 bg-neutral-900 border-t border-white/10">
                <div className="mx-auto max-w-[1620px] px-4 sm:px-6 md:px-8">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                        <Link
                            href="https://belowthefold.gr"
                            className="hover:opacity-80 transition-opacity"
                        >
                            <Image
                                src="/images/belowthefold_white.svg"
                                alt="Below The Fold"
                                width={85}
                                height={11}
                                className="h-4 w-auto cursor-pointer"
                            />
                        </Link>
                        <a
                            href="mailto:hello@belowthefold.gr"
                            className="text-white/80 hover:text-brand-purple transition-colors cursor-pointer"
                        >
                            hello@belowthefold.gr
                        </a>
                    </div>
                </div>
            </footer>
        </main>
    )
} 