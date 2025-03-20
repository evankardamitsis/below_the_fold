'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { CloudinaryVideo } from '@/components/ui/cloudinary-video'
import { Check } from 'lucide-react'

const PRICING_TIERS = [
    {
        name: '🚀 Launch',
        subtitle: 'For brands ready to start strong.',
        tag: 'Popular',
        price: '5K',
        description: 'using modified premium theme',
        features: [
            'Complete Store Redesign',
            'Essential App Integrations',
            'Product & Collections setup',
            'Onpage SEO',
            'Basic Analytics setup',
            'Page Speed Optimization',
            '2-weeks post-launch support'
        ],
        gradient: 'from-neutral-900 to-neutral-800'
    },
    {
        name: '📈 Growth',
        subtitle: 'For scaling businesses',
        tag: 'Premium',
        price: '25k',
        description: 'bespoke Shopify theme',
        features: [
            'Complete Store Redesign',
            'Bespoke Theme',
            'App Integrations',
            'Custom Integrations',
            'Conversion Optimization',
            'Product catalog optimization (tags, collections, upsell/cross-sell logic)',
            'Advanced SEO',
            'Page Speed Optimization',
            'Klaviyo Email Marketing Setup (Starter flows: Welcome, Abandoned Cart, Post-Purchase)',
            'Advanced product filtering & search setup',
            '1 landing page design & build included (campaign, sale, product drop)',
            'Loyalty program integration or subscription model setup',
            'Analytics setup (GA4, Meta Pixel, reporting dashboards)',
            'Dedicated Slack channel for communication',
            'QA sessions',
            '3 Months of Support'
        ],
        gradient: 'from-neutral-900 to-neutral-800'
    },
    {
        name: 'Hourly Updates',
        subtitle: 'For ad hoc work',
        tag: 'Hourly',
        price: '120',
        description: 'per hour',
        features: [
            'Theme tweaks',
            'Design',
            'Development',
            'Marketing'
        ],
        gradient: 'from-neutral-900 to-neutral-800'
    }
]

const ADD_ONS = [
    {
        name: 'Product Migration',
        subtitle: 'WooCommerce, BigCommerce, etc.',
        price: '€1,500 – €4,000',
        description: 'Moving catalogs from another platform',
        gradient: 'from-neutral-900 to-neutral-800'
    },
    {
        name: 'Inventory Management',
        subtitle: 'Google Sheets / Excel Setup',
        price: 'Included',
        description: 'For brands managing inventory manually',
        gradient: 'from-neutral-900 to-neutral-800'
    },
    {
        name: 'ERP & Inventory Sync',
        subtitle: 'Integration Setup',
        price: 'Custom Quote',
        description: 'Larger brands needing full ERP sync, multi-location inventory control',
        gradient: 'from-neutral-900 to-neutral-800'
    },
    {
        name: 'Klaviyo Starter Flows',
        subtitle: 'Email Marketing Setup',
        price: '€1,200 – €2,200',
        description: 'Launching essential email marketing flows',
        gradient: 'from-neutral-900 to-neutral-800'
    },
    {
        name: 'Klaviyo Advanced Flows',
        subtitle: 'Advanced Email Marketing',
        price: '€2,000 – €4,000',
        description: 'Boosting retention & repeat purchases',
        gradient: 'from-neutral-900 to-neutral-800'
    },
    {
        name: 'Loyalty Program Integration',
        subtitle: 'Rewards Setup',
        price: '€1,500 – €3,000',
        description: 'Adding a loyalty program post-launch',
        gradient: 'from-neutral-900 to-neutral-800'
    },
    {
        name: 'Subscription Model Setup',
        subtitle: 'Recurring Revenue',
        price: '€2,000 – €4,000',
        description: 'Offering product subscriptions',
        gradient: 'from-neutral-900 to-neutral-800'
    },
    {
        name: 'Analytics & Reporting',
        subtitle: 'Dashboard Setup',
        price: '€1,500 – €2,500',
        description: 'Data-driven insights post-launch',
        gradient: 'from-neutral-900 to-neutral-800'
    },
    {
        name: 'Conversion Boost Sprint',
        subtitle: 'Optimization Package',
        price: '€2,500 – €4,000',
        description: 'Improve conversions, UX, trust signals',
        gradient: 'from-neutral-900 to-neutral-800'
    },
    {
        name: 'Mobile UX Optimization',
        subtitle: 'Mobile-First Sprint',
        price: '€2,500 – €4,000',
        description: 'Optimizing mobile shopping experience',
        gradient: 'from-neutral-900 to-neutral-800'
    },
    {
        name: 'Landing Page Design',
        subtitle: 'Custom Pages',
        price: '€1,200 – €2,500/page',
        description: 'Campaigns, product launches',
        gradient: 'from-neutral-900 to-neutral-800'
    },
    {
        name: 'Monthly Growth Report',
        subtitle: 'Strategy Session',
        price: '€1,200/month',
        description: 'Ongoing performance tracking + growth plan',
        gradient: 'from-neutral-900 to-neutral-800'
    }
]

const MONTHLY_PACKAGES = [
    {
        name: 'Main Retainer',
        subtitle: 'Worry-free ',
        tag: 'Tech Support',
        price: '1.5k+',
        description: 'per month',
        features: [
            'Store maintenance & monitoring',
            'Theme/app tweaks (up to 8hrs)',
            'Product/content uploads & adjustments',
            'Minor UX/UI tweaks (up to 8hrs)',
            'Priority troubleshooting & tech support',
            'Dedicated Slack channel for communication',
            'More hours = lower rate'
        ],
        gradient: 'from-neutral-900 to-neutral-800'
    },
    {
        name: 'Retention Engine',
        subtitle: 'Scale your reach',
        tag: 'Managed Growth',
        price: '2k+',
        description: 'per month (min. 3 months)',
        features: [
            'Klaviyo campaign management (up to 2 campaigns/month)',
            'Campaign planning for product drops, sales, launches (1 campaign/month)',
            'Monthly paid ads strategy & creative guidance (Meta, Google, TikTok)',
            'Audience segmentation & list growth strategy (Klaviyo)',
            'Loyalty program optimization (if applicable)',
            'Monthly analytics & growth report',
            'Monthly strategy session',
            'Priority Slack/Email support',
            'Dedicated Slack channel for communication',
        ],
        gradient: 'from-neutral-900 to-neutral-800'
    },
    {
        name: 'Revenue Booster',
        subtitle: '360° dedicated team',
        tag: 'Popular',
        price: '3k+',
        description: 'per month (custom scope)',
        features: [
            'Monthly landing page design & development (1 per month)',
            'Klaviyo campaign management (up to 4 campaigns/month)',
            'Campaign planning for product drops, sales, launches (2 campaigns/month)',
            'Monthly paid ads strategy & creative guidance (Meta, Google, TikTok)',
            'Product page enhancements (bundles, upsells, cross-sells)',
            'Monthly funnel & performance analysis',
            'Ongoing dev/design tweaks (up to 10 hours/month)',
            'Monthly strategy call',
            'Priority Slack/Email support',
            'Dedicated Slack channel for communication',
        ],
        gradient: 'from-neutral-900 to-neutral-800'
    },
]

export default function PricingPage() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative min-h-[80vh] md:min-h-screen bg-neutral-900 overflow-hidden">
                {/* Video Background */}
                <div className="absolute inset-0 w-full h-full overflow-hidden">
                    <CloudinaryVideo
                        publicId={process.env.NEXT_PUBLIC_PRICING_VIDEO_ID!}
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Content */}
                <div className="relative z-10 mx-auto max-w-[1620px] px-4 sm:px-6 md:px-8 h-full min-h-[80vh] md:min-h-screen flex flex-col justify-end md:justify-start pt-24 sm:pt-32 md:pt-48 pb-12 md:pb-0">
                    {/* Content Card */}
                    <div className="bg-neutral-900/30 backdrop-blur-sm rounded-xl lg:rounded-2xl p-6 sm:p-8 md:p-12 w-full sm:max-w-[90%]">
                        {/* Small Label */}
                        <motion.p
                            className="text-white/80 text-xs sm:text-sm font-medium mb-4 sm:mb-6 uppercase tracking-wider"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            Pricing
                        </motion.p>

                        {/* Main Heading */}
                        <motion.h1
                            className="text-[1.75rem] sm:text-[2rem] md:text-[3.5rem] lg:text-[4.5rem] leading-[1.1] font-bold text-white/90 max-w-full sm:max-w-[90%] md:max-w-[80%]"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                        >
                            A Transparent Guide to Our Pricing.
                        </motion.h1>

                        {/* Subheading */}
                        <motion.p
                            className="text-white/80 text-base sm:text-lg lg:text-xl max-w-full sm:max-w-[90%] md:max-w-[600px] mt-4 sm:mt-6"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            All projects/websites are unique & the below should serve only as a rough pricing guide.
                        </motion.p>

                        {/* CTA Button */}
                        <motion.div
                            className="mt-8 sm:mt-12"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                        >
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-between px-6 h-12 bg-white rounded text-[15px] font-medium hover:bg-neutral-100 transition-colors duration-300 group"
                            >
                                Get a Quote
                                <span className="ml-2 opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300">→</span>
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Pricing Tiers */}
            <section className="py-24 bg-page-light">
                <div className="mx-auto max-w-[1620px] px-4 sm:px-6 md:px-8">
                    <div className="flex flex-col items-center justify-center">
                        <h2 className="text-3xl font-bold text-center mb-4">Pricing</h2>
                        <p className="text-center text-black/60 mb-16 max-w-3xl mx-auto">
                            All projects/websites are unique & the below should serve only as a rough pricing guide.
                            Rates are reduced significantly for clients on monthly retainer contracts. All prices are shown without VAT.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {PRICING_TIERS.map((tier, index) => (
                            <motion.div
                                key={tier.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className={`bg-gradient-to-br ${tier.gradient} rounded-xl p-8 text-white`}
                            >
                                <div className="mb-6">
                                    <div className="flex items-center justify-between mb-2">
                                        <div>
                                            <h3 className="text-2xl font-bold">{tier.name}</h3>
                                            <p className="text-sm font-semibold text-white/60 mt-1">{tier.subtitle}</p>
                                        </div>
                                        {tier.tag && (
                                            <span className="text-xs font-medium px-2 py-1 bg-white/10 rounded-full">
                                                {tier.tag}
                                            </span>
                                        )}
                                    </div>
                                    <div className="flex items-baseline gap-2">
                                        <span className="text-4xl font-bold">€{tier.price}</span>
                                    </div>
                                    <p className="text-white/60 text-md font-semibold mt-1">/ {tier.description}</p>
                                </div>

                                <ul className="space-y-4 mb-8">
                                    {tier.features.map((feature) => (
                                        <li key={feature} className="flex items-center gap-3">
                                            <Check className="w-5 h-5 text-white/60" />
                                            <span className="text-white/80">{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <Link
                                    href="/contact"
                                    className="inline-flex items-center justify-center w-full px-6 h-12 bg-white text-black rounded text-[15px] font-medium hover:bg-neutral-100 transition-colors duration-300"
                                >
                                    Get a Quote
                                </Link>
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-16 text-center">
                        <p className="text-sm text-black/60">
                            Note that hourly rates can be as low as half this price for retainer clients with a monthly package.
                        </p>
                    </div>
                </div>
            </section>

            {/* Add-ons Section */}
            <section className="py-24 bg-neutral-900">
                <div className="mx-auto max-w-[1620px] px-4 sm:px-6 md:px-8">
                    <h2 className="text-3xl font-bold text-center mb-16 text-white">Add-On Services (À La Carte)</h2>

                    <div className="overflow-x-auto flex justify-center">
                        <table className="w-full max-w-5xl border-collapse">
                            <thead>
                                <tr className="border-b border-white/10">
                                    <th className="text-center py-4 px-6 text-sm font-semibold text-white/80">Add-On Service</th>
                                    <th className="text-center py-4 px-6 text-sm font-semibold text-white/80">Fee (€)</th>
                                    <th className="text-center py-4 px-6 text-sm font-semibold text-white/80">Ideal Scenario</th>
                                </tr>
                            </thead>
                            <tbody>
                                {ADD_ONS.map((addon, index) => (
                                    <motion.tr
                                        key={addon.name}
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.3, delay: index * 0.05 }}
                                        className="border-b border-white/10 hover:bg-white/5 transition-colors"
                                    >
                                        <td className="py-4 px-6">
                                            <div className="text-center">
                                                <div className="text-white font-medium">{addon.name}</div>
                                                <div className="text-sm text-white/60">{addon.subtitle}</div>
                                            </div>
                                        </td>
                                        <td className="py-4 px-6">
                                            <div className="text-white font-medium text-center">{addon.price}</div>
                                        </td>
                                        <td className="py-4 px-6">
                                            <div className="text-white/80 text-center">{addon.description}</div>
                                        </td>
                                    </motion.tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="mt-16 text-center">
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center px-8 h-12 bg-white text-black rounded text-[15px] font-medium hover:bg-neutral-100 transition-colors duration-300"
                        >
                            Get a Quote
                        </Link>
                    </div>
                </div>
            </section>

            {/* Monthly Packages */}
            <section className="py-24 bg-page-lighter">
                <div className="mx-auto max-w-[1620px] px-4 sm:px-6 md:px-8">
                    <h2 className="text-3xl font-bold text-center mb-4">Monthly Packages</h2>
                    <p className="text-center text-black/60 mb-16 max-w-2xl mx-auto">
                        For those who need ongoing support and regular updates we can create a retainer contract at a reduced hourly rate. All prices are shown without VAT.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {MONTHLY_PACKAGES.map((pkg, index) => (
                            <motion.div
                                key={pkg.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className={`bg-gradient-to-br ${pkg.gradient} rounded-xl p-8 text-white`}
                            >
                                <div className="mb-6">
                                    <div className="flex items-center justify-between mb-2">
                                        <div>
                                            <h3 className="text-2xl font-bold">{pkg.name}</h3>
                                            <p className="text-sm font-semibold text-white/60 mt-1">{pkg.subtitle}</p>
                                        </div>
                                        {pkg.tag && (
                                            <span className="text-xs font-medium px-2 py-1 bg-white/10 rounded-full">
                                                {pkg.tag}
                                            </span>
                                        )}
                                    </div>
                                    <div className="flex items-baseline gap-2">
                                        <span className="text-4xl font-bold">${pkg.price}</span>
                                    </div>
                                    <p className="text-white/60 text-sm mt-1">{pkg.description}</p>
                                </div>

                                <ul className="space-y-4 mb-8">
                                    {pkg.features.map((feature) => (
                                        <li key={feature} className="flex items-center gap-3">
                                            <Check className="w-5 h-5 text-white/60" />
                                            <span className="text-white/80">{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <Link
                                    href="/contact"
                                    className="inline-flex items-center justify-center w-full px-6 h-12 bg-white text-black rounded text-[15px] font-medium hover:bg-neutral-100 transition-colors duration-300"
                                >
                                    Get a Quote
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
} 