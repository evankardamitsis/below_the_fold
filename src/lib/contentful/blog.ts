import { createClient, EntrySkeletonType, EntriesQueries } from 'contentful'
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
    const response = await client.getEntries<BlogPostFields>({
        content_type: 'blogPost',
        'fields.slug': slug,
        limit: 1,
    } as EntriesQueries<BlogPostFields, undefined>)

    if (!response.items.length) {
        return null
    }

    const item = response.items[0] as { sys: { id: string }, fields: BlogPostFields['fields'] }

    return {
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
    }
} 