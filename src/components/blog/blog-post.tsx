'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { BlogPost as BlogPostType } from '@/types/blog'

interface BlogPostProps extends BlogPostType { }

export function BlogPost({
    title,
    description,
    content,
    heroImage,
    category,
    date,
    author,
    tags
}: BlogPostProps) {
    return (
        <article className="max-w-3xl mx-auto">
            {/* Hero Image */}
            {heroImage && (
                <motion.div
                    className="relative aspect-[16/9] rounded-lg overflow-hidden mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <Image
                        src={heroImage.url}
                        alt={heroImage.alt}
                        fill
                        className="object-cover"
                        priority
                    />
                </motion.div>
            )}

            {/* Header */}
            <header className="mb-8">
                <div className="flex items-center gap-4 mb-4">
                    <span className="text-sm text-neutral-600">{category}</span>
                    <span className="text-sm text-neutral-400">{date}</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-medium text-neutral-900 mb-4">
                    {title}
                </h1>
                <p className="text-xl text-neutral-600">
                    {description}
                </p>
                {author && (
                    <div className="flex items-center gap-3 mt-6">
                        {author.avatar && (
                            <div className="relative w-10 h-10 rounded-full overflow-hidden">
                                <Image
                                    src={author.avatar.url}
                                    alt={author.name}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        )}
                        <span className="text-sm text-neutral-600">
                            By {author.name}
                        </span>
                    </div>
                )}
            </header>

            {/* Content */}
            <div
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: content }}
            />

            {/* Tags */}
            {tags && tags.length > 0 && (
                <div className="mt-12 pt-8 border-t border-neutral-200">
                    <h2 className="text-sm font-medium text-neutral-900 mb-4">Tags</h2>
                    <div className="flex flex-wrap gap-2">
                        {tags.map((tag) => (
                            <span
                                key={tag}
                                className="px-3 py-1 bg-neutral-100 text-neutral-600 rounded-full text-sm"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            )}
        </article>
    )
} 