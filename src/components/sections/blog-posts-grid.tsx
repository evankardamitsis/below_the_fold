import { BlogCard } from '@/components/blog/blog-card'
import { BlogPost } from '@/types/blog'

interface BlogPostsGridProps {
    posts: BlogPost[]
}

export function BlogPostsGrid({ posts }: BlogPostsGridProps) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post, index) => (
                <BlogCard
                    key={post.slug}
                    title={post.title}
                    heroImage={post.heroImage}
                    category={post.category}
                    date={post.date}
                    slug={post.slug}
                    index={index}
                    content={post.content}
                />
            ))}
        </div>
    )
} 