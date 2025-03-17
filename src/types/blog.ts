export interface BlogPost {
    id: string
    title: string
    slug: string
    description: string
    content: {
        data: Record<string, unknown>
        content: unknown[]
        nodeType: string
    }
    heroImage?: {
        url: string
        alt: string
    }
    category: string
    date: string
    author?: {
        name: string
        avatar?: {
            url: string
            alt: string
        }
    }
    tags?: string[]
} 