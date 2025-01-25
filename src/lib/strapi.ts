const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337'
const STRAPI_API_TOKEN = process.env.STRAPI_API_TOKEN

interface PortfolioItem {
  id: number
  attributes: {
    title: string
    description: string
    slug: string
    featured: boolean
    coverImage: {
      data: {
        attributes: {
          url: string
          alternativeText: string
        }
      }
    }
    technologies: string[]
    projectUrl?: string
    createdAt: string
    updatedAt: string
  }
}

interface StrapiResponse<T> {
  data: T
  meta: {
    pagination: {
      page: number
      pageSize: number
      pageCount: number
      total: number
    }
  }
}

async function fetchAPI<T>(endpoint: string, options = {}): Promise<T> {
  const defaultOptions = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${STRAPI_API_TOKEN}`,
    },
  }

  const mergedOptions = {
    ...defaultOptions,
    ...options,
  }

  const response = await fetch(`${STRAPI_URL}/api/${endpoint}`, mergedOptions)

  if (!response.ok) {
    throw new Error(`An error occurred: ${response.statusText}`)
  }

  const data = await response.json()
  return data
}

export async function getPortfolioItems(params = {}): Promise<PortfolioItem[]> {
  try {
    const response = await fetchAPI<StrapiResponse<PortfolioItem[]>>('portfolio-items', {
      params: {
        populate: '*',
        ...params,
      },
    })
    return response.data
  } catch (error) {
    console.error('Error fetching portfolio items:', error)
    return []
  }
}

export async function getPortfolioItem(slug: string): Promise<PortfolioItem | null> {
  try {
    const response = await fetchAPI<StrapiResponse<PortfolioItem[]>>('portfolio-items', {
      params: {
        'filters[slug][$eq]': slug,
        populate: '*',
      },
    })
    return response.data[0] || null
  } catch (error) {
    console.error('Error fetching portfolio item:', error)
    return null
  }
} 