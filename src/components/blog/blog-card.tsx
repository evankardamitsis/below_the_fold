'use client'

import Image from 'next/image'
import Link from 'next/link'

interface BlogCardProps {
    title: string
    image: string
    category: string
    date: string
    slug: string
}

export function BlogCard({ title, image, category, date, slug }: BlogCardProps) {
    return (
        <Link href={`/blog/${slug}`} className="group block">
            <article className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="relative aspect-[16/9] overflow-hidden">
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                </div>
                <div className="p-6">
                    <div className="flex items-center gap-4 mb-3">
                        <span className="text-sm text-neutral-600">{category}</span>
                        <span className="text-sm text-neutral-400">{date}</span>
                    </div>
                    <h2 className="text-xl font-medium text-neutral-900 mb-2 group-hover:text-neutral-600 transition-colors duration-300">
                        {title}
                    </h2>
                </div>
            </article>
        </Link>
    )
} 