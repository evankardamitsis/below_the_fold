import { Metadata } from 'next'
import { getBlogPostBySlug } from '@/lib/contentful/blog'
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
        description: post.description,
        openGraph: {
            title: post.title,
            description: post.description,
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
            description: post.description,
            images: post.heroImage ? [post.heroImage.url] : [],
        },
        alternates: {
            canonical: canonicalUrl,
        }
    }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
    const { slug } = await params
    const post = await getBlogPostBySlug(slug)

    if (!post) {
        notFound()
    }

    return (
        <main className="pt-32 pb-24">
            <div className="mx-auto max-w-[1620px] px-8">
                <BlogPost {...post} />
            </div>
        </main>
    )
} 