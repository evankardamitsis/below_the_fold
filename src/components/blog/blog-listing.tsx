'use client'

import { BlogPost } from '@/types/blog'
import { motion } from 'framer-motion'
import { BlogCard } from '@/components/blog/blog-card'

interface BlogListingProps {
    posts?: BlogPost[]
}

export function BlogListing({ posts = [] }: BlogListingProps) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
                <motion.div
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                    <BlogCard
                        title={post.title}
                        description={post.description}
                        image={post.heroImage?.url || ''}
                        category={post.category}
                        date={post.date}
                        slug={post.slug}
                    />
                </motion.div>
            ))}
        </div>
    )
} 