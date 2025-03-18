'use client'

import { motion } from 'framer-motion'
import { BlogPostsGrid } from './blog-posts-grid'
import { BlogPost } from '@/types/blog'

interface BlogPostsSectionClientProps {
    posts: BlogPost[]
}

export function BlogPostsSectionClient({ posts }: BlogPostsSectionClientProps) {
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
                <BlogPostsGrid posts={posts} />

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