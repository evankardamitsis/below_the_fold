'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Document, Text } from '@contentful/rich-text-types'

interface BlogCardProps {
    title: string
    heroImage?: {
        url: string
        alt: string
    }
    category: string
    date: string
    slug: string
    index: number
    content: Document
}

export function BlogCard({ title, heroImage, category, date, slug, index, content }: BlogCardProps) {
    const formattedDate = new Date(date).toLocaleDateString('en-US', {
        month: 'long',
        year: 'numeric'
    })

    // Extract text from the start of the content
    const excerpt = content.content
        .flatMap(node => node.content || [])
        .filter((node): node is Text => node.nodeType === 'text')
        .map(node => node.value)
        .join(' ')
        .slice(0, 400) + '...'

    return (
        <motion.div
            className="group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
        >
            <Link href={`/blog/${slug}`} className="block">
                {/* Image */}
                <div className="relative aspect-[16/10] mb-6 overflow-hidden">
                    <Image
                        src={heroImage?.url || ''}
                        alt={heroImage?.alt || title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                </div>

                {/* Content */}
                <div className="space-y-4">
                    <div className="flex items-center gap-4 text-[13px] font-medium tracking-wide uppercase">
                        <span className="text-neutral-600">{category}</span>
                        <span className="text-neutral-400">•</span>
                        <span className="text-neutral-600">{formattedDate}</span>
                    </div>
                    <h3 className="text-[1.5rem] font-bold text-neutral-900 leading-tight group-hover:text-neutral-600 transition-colors duration-300">
                        {title}
                    </h3>
                    <p className="text-neutral-600 line-clamp-2">
                        {excerpt}
                    </p>
                </div>
            </Link>
        </motion.div>
    )
} 