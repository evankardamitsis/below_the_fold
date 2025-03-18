'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { BlogPost } from '@/types/blog'

interface BlogNavigationProps {
    previousPost?: Pick<BlogPost, 'title' | 'slug' | 'heroImage'>
    nextPost?: Pick<BlogPost, 'title' | 'slug' | 'heroImage'>
    onPrevious: () => void
    onNext: () => void
}

export function BlogNavigation({ previousPost, nextPost, onPrevious, onNext }: BlogNavigationProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="py-12 sm:py-24 bg-neutral-50"
        >
            <div className="mx-auto max-w-[1620px] px-4 sm:px-6 md:px-8">
                <div className="max-w-3xl mx-auto">
                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-8">
                        {/* Previous Post */}
                        <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-4">
                                <motion.button
                                    onClick={onPrevious}
                                    whileTap={{ scale: 0.95 }}
                                    className={`w-12 h-12 rounded-full bg-neutral-100 flex items-center justify-center hover:bg-neutral-200 transition-colors duration-300 shrink-0 ${!previousPost ? 'pointer-events-none opacity-50' : ''}`}
                                >
                                    <svg
                                        className="w-6 h-6 text-neutral-600"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M15 19l-7-7 7-7"
                                        />
                                    </svg>
                                </motion.button>
                                <div className="relative w-full overflow-hidden">
                                    <AnimatePresence mode="wait" custom={-1}>
                                        <motion.div
                                            key={previousPost?.slug}
                                            custom={-1}
                                            initial={{ opacity: 0, x: -100 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: 100 }}
                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                            className="flex items-center gap-4 min-w-0"
                                        >
                                            {previousPost?.heroImage && (
                                                <Link
                                                    href={`/blog/${previousPost.slug}`}
                                                    className="relative w-16 sm:w-20 h-16 sm:h-20 rounded-lg overflow-hidden shrink-0 group"
                                                >
                                                    <Image
                                                        src={previousPost.heroImage.url}
                                                        alt={previousPost.heroImage.alt}
                                                        fill
                                                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                                                    />
                                                </Link>
                                            )}
                                            <div className="min-w-0">
                                                <span className="text-sm text-neutral-500 block mb-1">Previous Post</span>
                                                <Link
                                                    href={`/blog/${previousPost?.slug || '#'}`}
                                                    className={`text-neutral-900 font-medium hover:text-neutral-600 transition-colors duration-300 line-clamp-2 ${!previousPost ? 'pointer-events-none opacity-50' : ''}`}
                                                >
                                                    {previousPost?.title || 'No previous post'}
                                                </Link>
                                            </div>
                                        </motion.div>
                                    </AnimatePresence>
                                </div>
                            </div>
                        </div>

                        {/* Next Post */}
                        <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-end gap-4">
                                <div className="relative w-full overflow-hidden">
                                    <AnimatePresence mode="wait" custom={1}>
                                        <motion.div
                                            key={nextPost?.slug}
                                            custom={1}
                                            initial={{ opacity: 0, x: 100 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -100 }}
                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                            className="flex items-center gap-4 min-w-0"
                                        >
                                            <div className="min-w-0 text-right">
                                                <span className="text-sm text-neutral-500 block mb-1">Next Post</span>
                                                <Link
                                                    href={`/blog/${nextPost?.slug || '#'}`}
                                                    className={`text-neutral-900 font-medium hover:text-neutral-600 transition-colors duration-300 line-clamp-2 ${!nextPost ? 'pointer-events-none opacity-50' : ''}`}
                                                >
                                                    {nextPost?.title || 'No next post'}
                                                </Link>
                                            </div>
                                            {nextPost?.heroImage && (
                                                <Link
                                                    href={`/blog/${nextPost.slug}`}
                                                    className="relative w-16 sm:w-20 h-16 sm:h-20 rounded-lg overflow-hidden shrink-0 group"
                                                >
                                                    <Image
                                                        src={nextPost.heroImage.url}
                                                        alt={nextPost.heroImage.alt}
                                                        fill
                                                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                                                    />
                                                </Link>
                                            )}
                                        </motion.div>
                                    </AnimatePresence>
                                </div>
                                <motion.button
                                    onClick={onNext}
                                    whileTap={{ scale: 0.95 }}
                                    className={`w-12 h-12 rounded-full bg-neutral-100 flex items-center justify-center hover:bg-neutral-200 transition-colors duration-300 shrink-0 ${!nextPost ? 'pointer-events-none opacity-50' : ''}`}
                                >
                                    <svg
                                        className="w-6 h-6 text-neutral-600"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M9 5l7 7-7 7"
                                        />
                                    </svg>
                                </motion.button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
} 