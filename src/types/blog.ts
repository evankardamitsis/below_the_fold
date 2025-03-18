import { Document } from '@contentful/rich-text-types'

export interface BlogPost {
    id: string
    title: string
    slug: string
    content: Document
    heroImage?: {
        url: string
        alt: string
    }
    category: string
    date: string
    excerpt?: string
    author?: {
        name: string
        avatar?: {
            url: string
            alt: string
        }
    }
    tags?: string[]
} 