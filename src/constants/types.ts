export interface Service {
    title: string
    category: string
    images: {
        main: string
        secondary: string
        tertiary: string
    }
    details: {
        title: string
        items: Array<{
            name: string
            description: string
        }>
    }[]
} 