'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const LATEST_POSTS = [
    {
        title: 'The New Domaine Site: Designed for the Shopify Ecosystem',
        category: 'Domaine News',
        date: '10.19.2024',
        image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&auto=format&fit=crop&q=60',
        slug: 'new-domaine-site'
    },
    {
        title: 'The True Meaning of Customization on Shopify: Custom vs "Out-of-The-Box" Themes',
        category: 'Technology',
        date: '10.18.2024',
        image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&auto=format&fit=crop&q=60',
        slug: 'customization-on-shopify'
    },
    {
        title: 'Shopify New Customer Accounts: Powerful Updates to Boost Enterprise Growth',
        category: 'Technology',
        date: '10.11.2024',
        image: 'https://images.unsplash.com/photo-1552581234-26160f608093?w=800&auto=format&fit=crop&q=60',
        slug: 'shopify-customer-accounts'
    }
]

export function BlogPostsSection() {
    return (
        <section className="py-24 bg-page-light">
            <div className="mx-auto max-w-[1620px] px-8">
                {/* Header */}
                <motion.h2
                    className="text-[2rem] font-bold mb-16 text-neutral-900"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    LATEST INSIGHTS
                </motion.h2>

                {/* Blog Posts Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {LATEST_POSTS.map((post, index) => (
                        <motion.div
                            key={post.slug}
                            className="group"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Link href={`/blog/${post.slug}`} className="block">
                                {/* Image */}
                                <div className="relative aspect-[16/10] mb-6 overflow-hidden">
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>

                                {/* Content */}
                                <div className="space-y-4">
                                    <div className="flex items-center gap-4 text-[13px] font-medium tracking-wide uppercase">
                                        <span className="text-neutral-600">{post.category}</span>
                                        <span className="text-neutral-400">•</span>
                                        <span className="text-neutral-600">{post.date}</span>
                                    </div>
                                    <h3 className="text-[1.5rem] font-bold text-neutral-900 leading-tight group-hover:text-neutral-600 transition-colors duration-300">
                                        {post.title}
                                    </h3>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                {/* Action Button */}
                <motion.div
                    className="mt-16 flex justify-start"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <motion.a
                        href="/blog"
                        className="text-neutral-900 text-[15px] font-medium tracking-wide uppercase relative group"
                        whileHover={{ x: 10 }}
                    >
                        Explore more
                        <span className="absolute left-0 right-0 bottom-0 h-[1px] bg-neutral-900 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                    </motion.a>
                </motion.div>
            </div>
        </section>
    )
} 