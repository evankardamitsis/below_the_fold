import { createClient, EntrySkeletonType, EntriesQueries } from 'contentful'
import { Project } from '@/types/project'
import { ImageType } from '@/types/image'

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

interface ContentfulRichText {
    nodeType: string
    data: Record<string, string | number | boolean | null>
    content: ContentfulRichText[]
    value?: string
}

interface ContentfulStat {
    fields: {
        label: string
        value: ContentfulRichText
    }
}

interface ContentfulFeature {
    fields: {
        title: string
        description?: string
    }
}

interface ContentfulService {
    fields: {
        title: string
        description?: string
    }
}

interface ContentfulProcess {
    fields: {
        title: string
        description?: string
    }
}

interface ContentfulVideo {
    fields: {
        file: {
            url: string
        }
        title: string
    }
}

interface IProject extends EntrySkeletonType {
    contentTypeId: 'project'
    fields: {
        title: string
        slug: string
        description: string
        clientOverview?: string
        websiteUrl?: string
        heroImage: ContentfulImage
        clientLogo?: ContentfulImage
        overviewVideo?: ContentfulVideo
        detailImages?: ContentfulImage[]
        mobileImages?: ContentfulImage[]
        designSystemImage?: ContentfulImage
        stats?: ContentfulStat[]
        features?: ContentfulFeature[]
        services?: ContentfulService[]
        process?: ContentfulProcess[]
    }
}

function mapContentfulImage(image: ContentfulImage | undefined | null): ImageType | null {
    if (!image) return null
    return {
        id: 0,
        url: image.fields.file.url.startsWith('//') ? `https:${image.fields.file.url}` : image.fields.file.url,
        width: image.fields.file.details.image.width,
        height: image.fields.file.details.image.height,
        alternativeText: image.fields.title,
        caption: null,
    }
}

function mapRichText(richText: ContentfulRichText | undefined | null): string {
    if (!richText) return ''
    
    // If it's a text node, return its value
    if (richText.nodeType === 'text') {
        return richText.value || ''
    }
    
    // If it's a document or paragraph, process its content
    if (richText.nodeType === 'document' || richText.nodeType === 'paragraph') {
        return richText.content?.map(mapRichText).join('') || ''
    }
    
    // For other node types, just process their content
    return richText.content?.map(mapRichText).join('') || ''
}

export async function getProjects(): Promise<Project[]> {
    try {
        const response = await client.getEntries<IProject>({
            content_type: 'project',
            order: ['-sys.createdAt'],
        })
        
        const projects = response.items.map((item, index) => ({
            id: index + 1,
            title: item.fields.title,
            slug: item.fields.slug,
            description: item.fields.description,
            clientOverview: item.fields.clientOverview || '',
            websiteUrl: item.fields.websiteUrl || '',
            heroImage: mapContentfulImage(item.fields.heroImage),
            clientLogo: mapContentfulImage(item.fields.clientLogo),
            overviewVideo: (item.fields.overviewVideo as ContentfulVideo | undefined)?.fields.file.url.startsWith('//') 
                ? `https:${(item.fields.overviewVideo as ContentfulVideo | undefined)?.fields.file.url}`
                : (item.fields.overviewVideo as ContentfulVideo | undefined)?.fields.file.url || '',
            detailImages: ((item.fields.detailImages || []) as ContentfulImage[]).map(mapContentfulImage).filter((img): img is ImageType => img !== null),
            mobileImages: ((item.fields.mobileImages || []) as ContentfulImage[]).map(mapContentfulImage).filter((img): img is ImageType => img !== null),
            designSystemImage: mapContentfulImage(item.fields.designSystemImage),
            stats: ((item.fields.stats || []) as ContentfulStat[]).map((stat, index) => ({
                id: index + 1,
                label: stat.fields.label,
                value: mapRichText(stat.fields.value),
                suffix: undefined,
            })),
            features: ((item.fields.features || []) as ContentfulFeature[]).map((feature, index) => ({
                id: index + 1,
                title: feature.fields.title,
            })),
            services: ((item.fields.services || []) as ContentfulService[]).map((service, index) => ({
                id: index + 1,
                name: service.fields.title,
            })),
            process: ((item.fields.process || []) as ContentfulProcess[]).map((process, index) => ({
                id: index + 1,
                step: `Step ${index + 1}`,
                title: process.fields.title,
                description: process.fields.description || '',
            })),
            createdAt: item.sys.createdAt,
            updatedAt: item.sys.updatedAt,
            publishedAt: item.sys.createdAt,
        }))
        
        return projects
    } catch (error) {
        throw error
    }
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
    const response = await client.getEntries<IProject>({
        content_type: 'project',
        'fields.slug': slug,
        limit: 1,
    } as EntriesQueries<IProject, undefined>)

    if (!response.items.length) {
        return null
    }

    const item = response.items[0]
    return {
        id: 1,
        title: item.fields.title,
        slug: item.fields.slug,
        description: item.fields.description,
        clientOverview: item.fields.clientOverview || '',
        websiteUrl: item.fields.websiteUrl || '',
        heroImage: mapContentfulImage(item.fields.heroImage),
        clientLogo: mapContentfulImage(item.fields.clientLogo),
        overviewVideo: (item.fields.overviewVideo as ContentfulVideo | undefined)?.fields.file.url.startsWith('//') 
            ? `https:${(item.fields.overviewVideo as ContentfulVideo | undefined)?.fields.file.url}`
            : (item.fields.overviewVideo as ContentfulVideo | undefined)?.fields.file.url || '',
        detailImages: ((item.fields.detailImages || []) as ContentfulImage[]).map(mapContentfulImage).filter((img): img is ImageType => img !== null),
        mobileImages: ((item.fields.mobileImages || []) as ContentfulImage[]).map(mapContentfulImage).filter((img): img is ImageType => img !== null),
        designSystemImage: mapContentfulImage(item.fields.designSystemImage),
        stats: ((item.fields.stats || []) as ContentfulStat[]).map((stat, index) => ({
            id: index + 1,
            label: stat.fields.label,
            value: mapRichText(stat.fields.value),
            suffix: undefined,
        })),
        features: ((item.fields.features || []) as ContentfulFeature[]).map((feature, index) => ({
            id: index + 1,
            title: feature.fields.title,
        })),
        services: ((item.fields.services || []) as ContentfulService[]).map((service, index) => ({
            id: index + 1,
            name: service.fields.title,
        })),
        process: ((item.fields.process || []) as ContentfulProcess[]).map((process, index) => ({
            id: index + 1,
            step: `Step ${index + 1}`,
            title: process.fields.title,
            description: process.fields.description || '',
        })),
        createdAt: item.sys.createdAt,
        updatedAt: item.sys.updatedAt,
        publishedAt: item.sys.createdAt,
    }
} 