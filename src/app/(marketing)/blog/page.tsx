import { Metadata } from 'next'
import { BlogListing } from '@/components/blog/blog-listing'
import { getAllBlogPosts } from '@/lib/contentful/blog'

export const metadata: Metadata = {
    title: 'Blog | Below The Fold',
    description: 'Insights, thoughts, and updates from our team about ecommerce design and development.',
}

export default async function BlogPage() {
    const posts = await getAllBlogPosts()
    console.log('Fetched blog posts:', posts)

    return (
        <main className="pt-32 pb-24">
            <div className="mx-auto max-w-[1620px] px-8">
                <div className="max-w-3xl">
                    <h1 className="text-4xl md:text-5xl font-medium text-neutral-900 mb-6">
                        Blog
                    </h1>
                    <p className="text-lg text-neutral-600 mb-12">
                        Insights, thoughts, and updates from our team about ecommerce design and development.
                    </p>
                </div>
                <BlogListing posts={posts} />
            </div>
        </main>
    )
} 