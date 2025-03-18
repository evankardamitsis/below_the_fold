import { getAllBlogPosts } from '@/lib/contentful/blog'

export async function BlogPostsSectionServer() {
    const posts = await getAllBlogPosts()
    const latestPosts = posts.slice(0, 3)
    return latestPosts
}
