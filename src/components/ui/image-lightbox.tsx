'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { useState, useEffect } from 'react'

interface ImageLightboxProps {
    src: string
    alt: string
}

export function ImageLightbox({ src, alt }: ImageLightboxProps) {
    const [isOpen, setIsOpen] = useState(false)
    const [dimensions, setDimensions] = useState({ width: 1920, height: 1080 })

    // Preload image and calculate dimensions
    useEffect(() => {
        const img = document.createElement('img')
        img.src = src
        img.onload = () => {
            const windowWidth = window.innerWidth * 0.9
            const windowHeight = window.innerHeight * 0.9
            const imageRatio = img.width / img.height
            const windowRatio = windowWidth / windowHeight

            let newWidth, newHeight
            if (imageRatio > windowRatio) {
                newWidth = windowWidth
                newHeight = windowWidth / imageRatio
            } else {
                newHeight = windowHeight
                newWidth = windowHeight * imageRatio
            }

            setDimensions({
                width: Math.round(newWidth),
                height: Math.round(newHeight)
            })
        }
    }, [src])

    return (
        <>
            <div
                className="cursor-pointer w-full h-full"
                onClick={() => setIsOpen(true)}
            >
                <Image
                    src={src}
                    alt={alt}
                    width={1920}
                    height={1080}
                    className="w-full h-full object-cover"
                    priority
                />
            </div>

            <AnimatePresence mode="wait">
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.15 }}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/95"
                        onClick={() => setIsOpen(false)}
                    >
                        <motion.div
                            className="relative"
                            onClick={(e) => e.stopPropagation()}
                            style={{
                                width: dimensions.width,
                                height: dimensions.height,
                            }}
                        >
                            <Image
                                src={src}
                                alt={alt}
                                fill
                                className="object-contain"
                                sizes="90vw"
                                priority
                                quality={90}
                            />
                            <button
                                className="absolute -top-12 right-0 text-white/60 hover:text-white transition-colors p-2"
                                onClick={(e) => {
                                    e.stopPropagation()
                                    setIsOpen(false)
                                }}
                            >
                                <span className="text-3xl">×</span>
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
} 