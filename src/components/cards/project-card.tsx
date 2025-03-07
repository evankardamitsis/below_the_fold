import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

interface ProjectCardProps {
    title: string
    description: string
    image: string
    category: string
    tags: string[]
    href: string
    index: number
}

export function ProjectCard({ title, description, image, category, tags, href, index }: ProjectCardProps) {
    const [isHovered, setIsHovered] = useState(false)

    // Get first sentence of description
    const firstSentence = description.split(/[.!?]+/)[0] + '.'

    useEffect(() => {
        const cursor = document.querySelector('.project-hover-text')
        if (!cursor) return

        if (isHovered) {
            cursor.animate([
                { opacity: 0, width: '32px' },
                { opacity: 1, width: '100px' }
            ], {
                duration: 200,
                fill: 'forwards',
                easing: 'cubic-bezier(0.23, 1, 0.32, 1)'
            })
        } else {
            cursor.animate([
                { opacity: 1, width: '100px' },
                { opacity: 0, width: '32px' }
            ], {
                duration: 200,
                fill: 'forwards',
                easing: 'cubic-bezier(0.23, 1, 0.32, 1)'
            })
        }
    }, [isHovered])

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                duration: 1,
                delay: index * 0.2,
                ease: [0.23, 1, 0.32, 1]
            }}
        >
            <div className="block">
                {/* Image area with separate hover handlers */}
                <div
                    className="overflow-hidden rounded-md bg-neutral-100 relative project-card-image"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    {/* Main Image with project-card-image class */}
                    <Link href={href} className="block">
                        <div className="relative aspect-[3/4]">
                            <Image
                                src={image}
                                alt={title}
                                fill
                                className={`object-cover transition-all duration-500 ${isHovered ? 'blur-[2px] scale-[1.02]' : 'blur-0 scale-100'}`}
                            />
                        </div>

                        {/* Hover Content */}
                        <motion.div
                            initial={false}
                            animate={isHovered ? { opacity: 1 } : { opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="absolute inset-0"
                        >
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-black/20" />

                            {/* All Services as Badges */}
                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                animate={isHovered ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2"
                            >
                                {tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="bg-white/90 backdrop-blur-sm px-2 py-1 rounded-md text-xs font-medium text-neutral-900"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </motion.div>
                        </motion.div>
                    </Link>
                </div>

                {/* Project Info */}
                <Link href={href} className="block mt-4">
                    <div className="flex items-start gap-3">
                        {/* Left - Logo */}
                        <div className="w-12 h-12 rounded-md bg-neutral-100 overflow-hidden flex-shrink-0">
                            <Image
                                src={image}
                                alt={`${title} logo`}
                                width={48}
                                height={48}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Right - Info */}
                        <div className="flex-1">
                            {/* Categories */}
                            <div className="flex items-center gap-2">
                                <span className="text-xs font-medium text-neutral-400 tracking-wide">
                                    {category}
                                </span>
                            </div>

                            {/* Title */}
                            <div className="relative inline-block overflow-hidden mt-1">
                                <h3 className="relative text-sm font-bold">
                                    <motion.div
                                        initial={{ scaleX: 0 }}
                                        animate={isHovered ? { scaleX: 1 } : { scaleX: 0 }}
                                        transition={{
                                            duration: 1,
                                            ease: [0.32, 0.72, 0, 1]
                                        }}
                                        className="absolute inset-0 bg-neutral-900"
                                        style={{
                                            originX: 0,
                                            transformOrigin: '0% 50%',
                                        }}
                                    />
                                    <span className={`relative inline-block px-2 ${isHovered ? 'text-white' : 'text-neutral-900'}`}>
                                        {title}
                                    </span>
                                </h3>
                            </div>

                            {/* Description */}
                            <p className="text-xs text-neutral-600 tracking-wide font-medium mt-[-0.3rem] line-clamp-2">
                                {firstSentence}
                            </p>
                        </div>
                    </div>
                </Link>
            </div>
        </motion.div>
    )
} 