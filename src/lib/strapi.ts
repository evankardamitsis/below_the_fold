import qs from 'qs'
import { Project, ProjectFeature, ProjectProcess, ProjectService, ProjectStat } from '@/types/project'
import { ImageType } from '@/types/image'

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL
const STRAPI_TOKEN = process.env.STRAPI_API_TOKEN || ''

if (!STRAPI_URL) throw new Error('NEXT_PUBLIC_STRAPI_URL is not defined')

interface StrapiAttributes {
    [key: string]: unknown
}

interface StrapiResponse<T extends StrapiAttributes> {
    data: Array<{
        id: number
        attributes: T
    }> | {
        id: number
        attributes: T
    }
}

interface StrapiImageData {
    id: number
    attributes: {
        url: string
        width: number
        height: number
        alternativeText: string | null
        caption: string | null
        formats: {
            thumbnail?: {
                url: string
                width: number
                height: number
            }
            small?: {
                url: string
                width: number
                height: number
            }
            medium?: {
                url: string
                width: number
                height: number
            }
            large?: {
                url: string
                width: number
                height: number
            }
        }
    }
}

interface StrapiImage {
    data: StrapiImageData | null
}

interface StrapiImageCollection {
    data: StrapiImageData[]
}

interface StrapiProjectAttributes extends StrapiAttributes {
    slug: string
    title: string
    description: string
    clientOverview: string
    websiteUrl: string
    heroImage: StrapiImage
    overviewImage: StrapiImage
    detailImages: StrapiImageCollection
    userExperienceVideo?: {
        url: string
        thumbnailUrl: string
    }
    mobileImages: StrapiImageCollection
    designSystemImage: StrapiImage
    stats: ProjectStat[]
    features: ProjectFeature[]
    services: ProjectService[]
    process: ProjectProcess[]
    createdAt: string
    updatedAt: string
    publishedAt: string
}

function transformStrapiImage(image: StrapiImage): ImageType | null {
    if (!image.data) return null
    
    const { id, attributes } = image.data
    return {
        id,
        url: `${STRAPI_URL}${attributes.url}`,
        width: attributes.width,
        height: attributes.height,
        alternativeText: attributes.alternativeText,
        caption: attributes.caption,
        formats: Object.entries(attributes.formats || {}).reduce<ImageType['formats']>((acc, [key, format]) => ({
            ...acc,
            [key]: {
                url: `${STRAPI_URL}${format.url}`,
                width: format.width,
                height: format.height
            }
        }), {})
    }
}

async function fetchAPI<T>(endpoint: string, urlParamsObject = {}, options = {}): Promise<T> {
    const queryString = qs.stringify(urlParamsObject, { encodeValuesOnly: true })
    const requestUrl = `${STRAPI_URL}/api${endpoint}${queryString ? `?${queryString}` : ''}`

    const mergedOptions = {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${STRAPI_TOKEN}`,
        },
        ...options,
    }

    const response = await fetch(requestUrl, mergedOptions)

    if (!response.ok) {
        throw new Error(`An error occurred: ${response.statusText}`)
    }

    const data = await response.json()
    return data
}

export async function getProjects(): Promise<Project[]> {
    const response = await fetchAPI<StrapiResponse<StrapiProjectAttributes>>('/projects', {
        populate: {
            heroImage: {
                fields: ['url', 'width', 'height', 'alternativeText', 'caption', 'formats'],
            },
        },
    })

    const projects = Array.isArray(response.data) ? response.data : [response.data]
    
    return projects.map(project => {
        const heroImage = transformStrapiImage(project.attributes.heroImage)
        const overviewImage = transformStrapiImage(project.attributes.overviewImage)
        const designSystemImage = transformStrapiImage(project.attributes.designSystemImage)
        const detailImages = project.attributes.detailImages.data
            .map(img => transformStrapiImage({ data: img }))
            .filter((img): img is ImageType => img !== null)
        const mobileImages = project.attributes.mobileImages.data
            .map(img => transformStrapiImage({ data: img }))
            .filter((img): img is ImageType => img !== null)

        if (!heroImage || !overviewImage || !designSystemImage) {
            throw new Error('Required images are missing')
        }

        return {
            ...project.attributes,
            id: project.id,
            heroImage,
            overviewImage,
            designSystemImage,
            detailImages,
            mobileImages,
            stats: project.attributes.stats,
            features: project.attributes.features,
            services: project.attributes.services,
            process: project.attributes.process
        } as Project
    })
}

export async function getProjectBySlug(slug: string): Promise<Project> {
    const response = await fetchAPI<StrapiResponse<StrapiProjectAttributes>>('/projects', {
        filters: {
            slug: {
                $eq: slug,
            },
        },
        populate: {
            heroImage: {
                fields: ['url', 'width', 'height', 'alternativeText', 'caption', 'formats'],
            },
            overviewImage: {
                fields: ['url', 'width', 'height', 'alternativeText', 'caption', 'formats'],
            },
            detailImages: {
                fields: ['url', 'width', 'height', 'alternativeText', 'caption', 'formats'],
            },
            userExperienceVideo: true,
            mobileImages: {
                fields: ['url', 'width', 'height', 'alternativeText', 'caption', 'formats'],
            },
            designSystemImage: {
                fields: ['url', 'width', 'height', 'alternativeText', 'caption', 'formats'],
            },
            stats: true,
            features: true,
            services: true,
            process: true,
        },
    })

    const projects = Array.isArray(response.data) ? response.data : [response.data]
    if (!projects[0]) {
        throw new Error('Project not found')
    }

    const project = projects[0]
    const heroImage = transformStrapiImage(project.attributes.heroImage)
    const overviewImage = transformStrapiImage(project.attributes.overviewImage)
    const designSystemImage = transformStrapiImage(project.attributes.designSystemImage)

    if (!heroImage || !overviewImage || !designSystemImage) {
        throw new Error('Required images are missing')
    }

    const detailImages = project.attributes.detailImages.data
        .map(img => transformStrapiImage({ data: img }))
        .filter((img): img is ImageType => img !== null)

    const mobileImages = project.attributes.mobileImages.data
        .map(img => transformStrapiImage({ data: img }))
        .filter((img): img is ImageType => img !== null)

    return {
        ...project.attributes,
        id: project.id,
        heroImage,
        overviewImage,
        detailImages,
        mobileImages,
        designSystemImage,
        stats: project.attributes.stats,
        features: project.attributes.features,
        services: project.attributes.services,
        process: project.attributes.process
    } as Project
} 