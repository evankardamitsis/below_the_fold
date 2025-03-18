import { createClient, EntrySkeletonType } from 'contentful'
import { BlogPost } from '@/types/blog'
import { Document } from '@contentful/rich-text-types'

if (!process.env.CONTENTFUL_SPACE_ID) {
    throw new Error('CONTENTFUL_SPACE_ID is not defined')
}

if (!process.env.CONTENTFUL_ACCESS_TOKEN) {
    throw new Error('CONTENTFUL_ACCESS_TOKEN is not defined')
}

const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
})

interface ContentfulImage {
    fields: {
        file: {
            url: string
            details: {
                image: {
                    width: number
                    height: number
                }
            }
        }
        title: string
    }
}

interface ContentfulAuthor {
    fields: {
        name: string
        avatar?: ContentfulImage
    }
}

interface BlogPostFields extends EntrySkeletonType {
    contentTypeId: 'blogPost'
    fields: {
        title: string
        slug: string
        content: Document
        heroImage: ContentfulImage
        category: string
        date: string
        author?: ContentfulAuthor
        tags?: string[]
    }
}

function mapContentfulImage(image: ContentfulImage | undefined | null): { url: string; alt: string } | undefined {
    if (!image) return undefined
    return {
        url: image.fields.file.url.startsWith('//') ? `https:${image.fields.file.url}` : image.fields.file.url,
        alt: image.fields.title
    }
}

export async function getAllBlogPosts(): Promise<BlogPost[]> {
    try {
        const response = await client.getEntries<BlogPostFields>({
            content_type: 'blogPost',
            order: ['-sys.createdAt'],
        })
        
        return response.items.map((item: { sys: { id: string }, fields: BlogPostFields['fields'] }) => ({
            id: item.sys.id,
            title: item.fields.title,
            slug: item.fields.slug,
            content: item.fields.content,
            heroImage: mapContentfulImage(item.fields.heroImage),
            category: item.fields.category,
            date: item.fields.date,
            author: item.fields.author ? {
                name: item.fields.author.fields.name,
                avatar: mapContentfulImage(item.fields.author.fields.avatar)
            } : undefined,
            tags: item.fields.tags || []
        }))
    } catch (error) {
        throw error
    }
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
    try {
        // Get all posts
        const response = await client.getEntries<BlogPostFields>({
            content_type: 'blogPost',
        })

        if (!response.items.length) {
            return null
        }

        // Find current post index
        const currentPostIndex = response.items.findIndex(item => item.fields.slug === slug)
        if (currentPostIndex === -1) {
            return null
        }

        const currentPost = response.items[currentPostIndex] as { sys: { id: string }, fields: BlogPostFields['fields'] }

        // Get all posts except current
        const otherPosts = response.items.filter((_, index) => index !== currentPostIndex)
        
        // Randomly select previous and next posts
        const randomIndex1 = Math.floor(Math.random() * otherPosts.length)
        const randomIndex2 = Math.floor(Math.random() * (otherPosts.length - 1))
        const nextIndex = randomIndex2 >= randomIndex1 ? randomIndex2 + 1 : randomIndex2

        const previousPost = {
            title: (otherPosts[randomIndex1] as { fields: BlogPostFields['fields'] }).fields.title,
            slug: (otherPosts[randomIndex1] as { fields: BlogPostFields['fields'] }).fields.slug,
            heroImage: mapContentfulImage((otherPosts[randomIndex1] as { fields: BlogPostFields['fields'] }).fields.heroImage),
        }

        const nextPost = {
            title: (otherPosts[nextIndex] as { fields: BlogPostFields['fields'] }).fields.title,
            slug: (otherPosts[nextIndex] as { fields: BlogPostFields['fields'] }).fields.slug,
            heroImage: mapContentfulImage((otherPosts[nextIndex] as { fields: BlogPostFields['fields'] }).fields.heroImage),
        }

        return {
            id: currentPost.sys.id,
            title: currentPost.fields.title,
            slug: currentPost.fields.slug,
            content: currentPost.fields.content,
            heroImage: mapContentfulImage(currentPost.fields.heroImage),
            category: currentPost.fields.category,
            date: currentPost.fields.date,
            author: currentPost.fields.author ? {
                name: currentPost.fields.author.fields.name,
                avatar: mapContentfulImage(currentPost.fields.author.fields.avatar)
            } : undefined,
            tags: currentPost.fields.tags || [],
            previousPost,
            nextPost,
        }
    } catch (error) {
        console.error('Error fetching blog post:', error)
        return null
    }
} 