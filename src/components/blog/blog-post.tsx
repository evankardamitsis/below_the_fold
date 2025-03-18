'use client'

import Image from 'next/image'
import { BlogPost as BlogPostType } from '@/types/blog'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { motion } from 'framer-motion'
import { BlogNewsletter } from './blog-newsletter'
import { BlogNavigation } from './blog-navigation'
import { useState, useEffect, useCallback } from 'react'

interface BlogPostProps {
    posts: BlogPostType[]
    currentPost: BlogPostType
}

export function BlogPost({ posts, currentPost }: BlogPostProps) {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [previousPost, setPreviousPost] = useState<BlogPostType | undefined>()
    const [nextPost, setNextPost] = useState<BlogPostType | undefined>()

    const updateNavigation = useCallback((index: number) => {
        const otherPosts = posts.filter((_, i) => i !== index)
        if (otherPosts.length === 0) {
            setPreviousPost(undefined)
            setNextPost(undefined)
            return
        }

        const randomIndex1 = Math.floor(Math.random() * otherPosts.length)
        const randomIndex2 = Math.floor(Math.random() * (otherPosts.length - 1))
        const nextIndex = randomIndex2 >= randomIndex1 ? randomIndex2 + 1 : randomIndex2

        setPreviousPost(otherPosts[randomIndex1])
        setNextPost(otherPosts[nextIndex])
    }, [posts])

    useEffect(() => {
        const index = posts.findIndex(post => post.id === currentPost.id)
        setCurrentIndex(index)
        updateNavigation(index)
    }, [currentPost.id, posts, updateNavigation])

    const handlePrevious = () => {
        updateNavigation(currentIndex)
    }

    const handleNext = () => {
        updateNavigation(currentIndex)
    }

    const formattedDate = new Date(currentPost.date).toLocaleDateString('en-US', {
        month: 'long',
        year: 'numeric'
    })

    return (
        <motion.article
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full"
        >
            {/* Hero Section - Full Width */}
            <section className="relative min-h-[80vh] md:min-h-screen bg-neutral-900">
                {currentPost.heroImage && (
                    <div className="absolute inset-0 w-full h-full overflow-hidden">
                        <Image
                            src={currentPost.heroImage.url}
                            alt={currentPost.heroImage.alt}
                            fill
                            className="object-cover object-center md:object-top"
                            priority
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                        />
                    </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/50 to-black/30 md:bg-black/20" />
                <div className="relative z-10 mx-auto max-w-[1620px] px-4 sm:px-6 md:px-8 h-full min-h-[80vh] md:min-h-screen flex flex-col justify-end md:justify-start pt-24 sm:pt-32 md:pt-48 pb-12 md:pb-0">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="max-w-4xl"
                    >
                        <div className="flex items-center gap-4 mb-4">
                            <span className="text-sm text-white/80">{currentPost.category}</span>
                            <span className="text-sm text-white/60">•</span>
                            <span className="text-sm text-white/80">{formattedDate}</span>
                        </div>
                        <h1 className="text-[1.75rem] sm:text-[2rem] md:text-[3.5rem] lg:text-[4.5rem] leading-[1.1] font-bold text-white/90 max-w-full mb-4">
                            {currentPost.title}
                        </h1>
                        {currentPost.author && (
                            <div className="flex items-center gap-3">
                                {currentPost.author.avatar && (
                                    <div className="relative w-10 h-10 rounded-full overflow-hidden">
                                        <Image
                                            src={currentPost.author.avatar.url}
                                            alt={currentPost.author.name}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                )}
                                <span className="text-sm text-white/80">
                                    By {currentPost.author.name}
                                </span>
                            </div>
                        )}
                    </motion.div>
                </div>
            </section>

            {/* Content */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="py-24"
            >
                <div className="mx-auto max-w-[1620px] px-4 sm:px-6 md:px-8">
                    <div className="max-w-3xl mx-auto">
                        <div className="prose prose-lg max-w-none">
                            {documentToReactComponents(currentPost.content)}
                        </div>

                        {/* Tags */}
                        {currentPost.tags && currentPost.tags.length > 0 && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.6 }}
                                className="mt-12 pt-8 border-t border-neutral-200"
                            >
                                <h2 className="text-sm font-medium text-neutral-900 mb-4">Tags</h2>
                                <div className="flex flex-wrap gap-2">
                                    {currentPost.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-3 py-1 bg-neutral-100 text-neutral-600 rounded-full text-sm"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        )}
                    </div>
                </div>
            </motion.div>

            {/* Newsletter Section */}
            <BlogNewsletter />

            {/* Navigation Section */}
            <BlogNavigation
                previousPost={previousPost}
                nextPost={nextPost}
                onPrevious={handlePrevious}
                onNext={handleNext}
            />
        </motion.article>
    )
} 