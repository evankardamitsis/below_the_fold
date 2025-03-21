'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function ConversionBoostSprintPage() {
    return (
        <main className="relative">
            {/* Hero Section */}
            <section className="relative min-h-screen bg-gradient-to-br from-brand-purple via-purple-600 to-purple-900">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.4)_100%)]" />
                <div className="relative z-10 mx-auto max-w-[1620px] px-4 sm:px-6 md:px-8 h-screen flex items-center justify-center">
                    <div className="max-w-3xl text-center">
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                            Transform Your Store&apos;s Performance in 4 Days
                        </h1>
                        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
                            A focused, intensive process designed to identify where your Shopify store leaks revenue — and fix it fast.
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
            <section className="py-24 bg-neutral-900 relative overflow-hidden">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-purple/20 to-transparent" />
                <div className="mx-auto max-w-[1620px] px-4 sm:px-6 md:px-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-3xl"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 leading-tight">
                            Why Conversion Optimization Matters
                        </h2>
                        <p className="text-2xl text-white/90 mb-6 leading-relaxed">
                            You&apos;re already driving traffic.<br />
                            But how much of that traffic actually buys?
                        </p>
                        <p className="text-lg text-white/80 mb-8 leading-relaxed">
                            Even small friction points — a clunky product page, a confusing checkout, poor mobile UX — can cost you thousands in missed revenue.
                        </p>
                        <p className="text-lg text-white/90 mb-4 leading-relaxed">
                            At <span className="font-bold text-brand-purple">belowthefold</span>, we specialize in helping brands remove those blockers and turn more visitors into paying customers.
                        </p>
                        <p className="text-2xl font-bold text-brand-purple">
                            Fast.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* What's the Conversion Boost Sprint? */}
            <section className="py-24 bg-page-light relative">
                <div className="mx-auto max-w-[1620px] px-4 sm:px-6 md:px-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-3xl"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-8 leading-tight">
                            What&apos;s the Conversion Boost Sprint?
                        </h2>
                        <p className="text-xl text-neutral-900/90 mb-8 leading-relaxed">
                            A no-nonsense, 4-day intensive process built specifically for Shopify stores.
                        </p>
                        <div className="space-y-4 text-lg text-neutral-900/80 leading-relaxed">
                            <p>We don&apos;t do endless audits and long reports you&apos;ll never act on.</p>
                            <p>Instead, we combine data, design, and dev expertise to deliver real, measurable results in just 4 days.</p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Who's It For */}
            <section className="py-24 bg-neutral-900 relative">
                <div className="mx-auto max-w-[1620px] px-4 sm:px-6 md:px-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 leading-tight">
                            Who&apos;s It For
                        </h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                'Shopify brands already driving solid traffic, but struggling to convert.',
                                'Stores with high cart abandonment, low average order value, or plateauing sales.',
                                'Brands ready to move fast and see improvements immediately.'
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    whileHover={{ y: -5 }}
                                    className="bg-white/10 backdrop-blur p-8 rounded-lg border border-white/10 hover:border-brand-purple/50 transition-all duration-300 shadow-lg hover:shadow-xl"
                                >
                                    <p className="text-lg text-white/90 leading-relaxed">{item}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Our 4-Day Process */}
            <section className="py-24 bg-page-light relative">
                <div className="mx-auto max-w-[1620px] px-4 sm:px-6 md:px-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-center text-neutral-900 mb-12 leading-tight">
                            Our 4-Day Process
                        </h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {[
                                {
                                    day: 'Day 1',
                                    title: 'Data Deep Dive & Funnel Audit',
                                    items: [
                                        'Shopify Analytics, GA4, heatmaps, session recordings',
                                        'Homepage → Product → Cart → Checkout',
                                        'Mobile vs. desktop behavior',
                                        'Friction points & revenue leaks identified'
                                    ]
                                },
                                {
                                    day: 'Day 2',
                                    title: 'Live CRO Workshop (2-3 Hours)',
                                    items: [
                                        'Present key findings clearly',
                                        'Align on business priorities (AOV, conversions, retention)',
                                        'Collaboratively prioritize fixes (quick wins + high-impact)'
                                    ]
                                },
                                {
                                    day: 'Day 3',
                                    title: 'Execution Sprint',
                                    items: [
                                        'Product page improvements',
                                        'Checkout simplification',
                                        'Trust signal & CTA optimization',
                                        'Upsell, cross-sell opportunities',
                                        'Mobile UX tweaks'
                                    ]
                                },
                                {
                                    day: 'Day 4',
                                    title: 'Testing + Results Roadmap',
                                    items: [
                                        'QA & testing across devices',
                                        'Post-implementation performance benchmarks',
                                        'Roadmap for longer-term CRO strategy'
                                    ]
                                }
                            ].map((phase, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    whileHover={{ y: -5 }}
                                    className="bg-neutral-900 p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                                >
                                    <div className="text-brand-purple font-semibold mb-2">{phase.day}</div>
                                    <h3 className="text-xl font-bold text-white mb-4 leading-tight">{phase.title}</h3>
                                    <ul className="space-y-2">
                                        {phase.items.map((item, i) => (
                                            <li key={i} className="text-neutral-400 text-sm leading-relaxed">{item}</li>
                                        ))}
                                    </ul>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Why Choose Our Sprint & Results */}
            <section className="py-24 bg-neutral-900 relative">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-purple/20 to-transparent" />
                <div className="mx-auto max-w-[1620px] px-4 sm:px-6 md:px-8">
                    <div className="grid md:grid-cols-2 gap-16">
                        {/* Why Choose */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 leading-tight">
                                Why Brands Choose Our CRO Sprint
                            </h2>
                            <ul className="space-y-4">
                                {[
                                    'Shopify-specific — no generalist fluff',
                                    'Real implementation, not just reports',
                                    'Collaborative & business goal-driven',
                                    'Done in 4 days — no dragging it out'
                                ].map((item, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <span className="text-brand-purple">✔️</span>
                                        <span className="text-white/90 leading-relaxed">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Results */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 leading-tight">
                                What Kind of Results Can You Expect?
                            </h2>
                            <ul className="space-y-4">
                                {[
                                    'Higher conversion rates',
                                    'Increased AOV',
                                    'Reduced cart abandonment',
                                    'Improved mobile experience',
                                    'More revenue without more ad spend'
                                ].map((item, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <span className="text-brand-purple">✅</span>
                                        <span className="text-white/90 leading-relaxed">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
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
                        <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                            <div className="p-12">
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                >
                                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                                        Keep The Momentum Going
                                    </h2>
                                    <p className="text-xl text-white/90 mb-8 leading-relaxed">
                                        Continue improving through our Revenue Booster Retainer — your dedicated CRO team, ready to drive ongoing growth.
                                    </p>
                                </motion.div>
                            </div>
                            <div className="lg:p-12">
                                <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    className="grid sm:grid-cols-2 gap-4"
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
                                    className="mt-8 text-center lg:text-left"
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
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-24 bg-gradient-to-br from-brand-purple via-purple-600 to-purple-900 relative">
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
        </main>
    )
} 