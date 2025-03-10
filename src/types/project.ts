import { ImageType } from "./image"

export interface ProjectFeature {
    id: number
    title: string
}

export interface ProjectProcess {
    id: number
    step: string
    title: string
    description: string
}

export interface ProjectStat {
    id: number
    value: string | number
    suffix?: string
    label: string
}

export interface ProjectService {
    id: number
    name: string
}

export interface Project {
    id: number
    slug: string
    title: string
    description: string
    clientOverview: string
    websiteUrl: string
    heroImage: ImageType | null
    clientLogo: ImageType | null
    overviewVideo: string
    overviewImage?: ImageType | null
    detailImages: ImageType[]
    mobileImages: ImageType[]
    designSystemImage: ImageType | null
    stats: ProjectStat[]
    features: ProjectFeature[]
    services: ProjectService[]
    process: ProjectProcess[]
    createdAt: string
    updatedAt: string
    publishedAt: string
} 