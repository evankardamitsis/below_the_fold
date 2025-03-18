import { Metadata } from 'next'
import { getBlogPostBySlug, getAllBlogPosts } from '@/lib/contentful/blog'
import { notFound } from 'next/navigation'
import { BlogPost } from '@/components/blog/blog-post'

interface BlogPostPageProps {
    params: Promise<{
        slug: string
    }>
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
    const { slug } = await params
    const post = await getBlogPostBySlug(slug)

    if (!post) {
        return {
            title: 'Blog Post Not Found | Below The Fold',
            description: 'The requested blog post could not be found.',
        }
    }

    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://belowthefold.com'
    const canonicalUrl = `${baseUrl}/blog/${post.slug}`

    return {
        title: `${post.title} | Below The Fold Blog`,
        openGraph: {
            title: post.title,
            type: 'article',
            url: canonicalUrl,
            images: post.heroImage ? [
                {
                    url: post.heroImage.url,
                    width: 1200,
                    height: 630,
                    alt: post.heroImage.alt,
                }
            ] : [],
        },
        twitter: {
            card: 'summary_large_image',
            title: post.title,
            images: post.heroImage ? [post.heroImage.url] : [],
        },
        alternates: {
            canonical: canonicalUrl,
        }
    }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
    const { slug } = await params
    const [currentPost, allPosts] = await Promise.all([
        getBlogPostBySlug(slug),
        getAllBlogPosts()
    ])

    if (!currentPost) {
        notFound()
    }

    return (
        <BlogPost
            currentPost={currentPost}
            posts={allPosts}
        />
    )
} 