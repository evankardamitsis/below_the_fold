import { NextResponse } from 'next/server'
import { revalidatePath } from 'next/cache'

// Called by a Contentful webhook on entry publish/unpublish.
// Configure the webhook URL as: https://www.belowthefold.gr/api/revalidate?secret=<CONTENTFUL_REVALIDATE_SECRET>
const REVALIDATE_SECRET = process.env.CONTENTFUL_REVALIDATE_SECRET

export async function POST(req: Request) {
    if (!REVALIDATE_SECRET) {
        return NextResponse.json({ error: 'CONTENTFUL_REVALIDATE_SECRET is not configured' }, { status: 500 })
    }

    const { searchParams } = new URL(req.url)
    if (searchParams.get('secret') !== REVALIDATE_SECRET) {
        return NextResponse.json({ error: 'Invalid secret' }, { status: 401 })
    }

    // Contentful sends the entry's content type in sys.contentType.sys.id
    let contentType: string | undefined
    try {
        const body = await req.json()
        contentType = body?.sys?.contentType?.sys?.id
    } catch {
        // No/invalid body — revalidate everything below
    }

    const paths = ['/']
    if (!contentType || contentType === 'project') {
        paths.push('/works', '/works/[slug]')
    }
    if (!contentType || contentType !== 'project') {
        paths.push('/blog', '/blog/[slug]')
    }

    for (const path of paths) {
        revalidatePath(path, path.includes('[slug]') ? 'page' : undefined)
    }

    return NextResponse.json({ revalidated: true, paths, contentType: contentType ?? null, now: Date.now() })
}
