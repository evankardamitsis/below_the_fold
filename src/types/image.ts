export interface ImageType {
    id: number
    url: string
    width: number
    height: number
    alternativeText: string | null
    caption: string | null
    formats?: {
        thumbnail?: ImageFormat
        small?: ImageFormat
        medium?: ImageFormat
        large?: ImageFormat
    }
}

interface ImageFormat {
    url: string
    width: number
    height: number
} 