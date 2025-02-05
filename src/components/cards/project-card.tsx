import Image from 'next/image'
import Link from 'next/link'
import { ArrowIcon } from '@/components/icons/arrow-icon'

interface ProjectCardProps {
    title: string
    description: string
    image: string
    category: string
    href: string
}

export function ProjectCard({ title, description, image, category, href }: ProjectCardProps) {
    return (
        <Link href={href} className="group block">
            <div className="overflow-hidden rounded-2xl bg-neutral-100">
                <div className="relative aspect-[16/10]">
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                </div>
            </div>
            <div className="mt-6 flex items-start justify-between gap-4">
                <div>
                    <p className="text-[13px] font-medium text-neutral-400 tracking-wide uppercase mb-2">
                        {category}
                    </p>
                    <h3 className="text-2xl font-bold text-neutral-900 mb-2">
                        {title}
                    </h3>
                    <p className="text-[15px] text-neutral-600 tracking-wide font-medium">
                        {description}
                    </p>
                </div>
                <div className="pt-1">
                    <ArrowIcon />
                </div>
            </div>
        </Link>
    )
} 