'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { getProjects } from '@/lib/strapi'
import { Project } from '@/types/project'

export default function WorksPage() {
    const [projects, setProjects] = useState<Project[]>([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        async function loadProjects() {
            try {
                setIsLoading(true)
                const data = await getProjects()
                setProjects(data)
            } catch (err) {
                setError(err instanceof Error ? err.message : 'Failed to load projects')
            } finally {
                setIsLoading(false)
            }
        }

        loadProjects()
    }, [])

    if (isLoading) {
        return <div className="min-h-screen flex items-center justify-center">
            <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-white"></div>
        </div>
    }

    if (error) {
        return <div className="min-h-screen flex items-center justify-center">
            <div className="text-center">
                <h1 className="text-2xl font-bold text-white mb-4">Error</h1>
                <p className="text-white/60">{error}</p>
            </div>
        </div>
    }

    return (
        <div className="min-h-screen bg-neutral-900">
            <div className="mx-auto max-w-[1620px] px-8 py-32">
                <motion.h1
                    className="text-4xl md:text-6xl font-bold text-white mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    Our Work
                </motion.h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Link href={`/works/${project.slug}`} className="block group">
                                <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-4">
                                    <Image
                                        src={project.heroImage.url}
                                        alt={project.heroImage.alternativeText || project.title}
                                        width={project.heroImage.width}
                                        height={project.heroImage.height}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
                                </div>
                                <h2 className="text-2xl font-bold text-white mb-2">
                                    {project.title}
                                </h2>
                                <p className="text-white/60 line-clamp-2">
                                    {project.description}
                                </p>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    )
} 