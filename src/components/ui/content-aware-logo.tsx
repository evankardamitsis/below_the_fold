'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

interface ContentAwareLogoProps {
    src: string
    alt: string
    width: number
    height: number
    className?: string
    imageClassName?: string
    /** Applied when the logo is not predominantly light */
    lightBackgroundClassName?: string
    /** Applied when a white/light logo needs contrast */
    darkBackgroundClassName?: string
}

function isPredominantlyLightLogo(imageData: ImageData): boolean {
    const { data } = imageData
    let opaqueCount = 0
    let lightCount = 0
    let darkCount = 0

    for (let i = 0; i < data.length; i += 4) {
        const alpha = data[i + 3]
        // Ignore near-transparent pixels so baked-in empty space doesn't skew results
        if (alpha < 25) continue

        const red = data[i]
        const green = data[i + 1]
        const blue = data[i + 2]
        const luminance = 0.2126 * red + 0.7152 * green + 0.0722 * blue

        opaqueCount++
        if (luminance > 200) lightCount++
        // Dark letterforms / marks that already read on light backgrounds
        else if (luminance < 90) darkCount++
    }

    if (!opaqueCount) return false

    const lightRatio = lightCount / opaqueCount
    const darkRatio = darkCount / opaqueCount

    // Only force a dark bg for mostly-white logos with little/no dark content.
    // Logos that already have dark letters stay as-is.
    return lightRatio >= 0.6 && darkRatio < 0.1
}

export function ContentAwareLogo({
    src,
    alt,
    width,
    height,
    className,
    imageClassName,
    lightBackgroundClassName,
    darkBackgroundClassName = 'rounded-md bg-neutral-900 px-5 py-3',
}: ContentAwareLogoProps) {
    const [needsDarkBackground, setNeedsDarkBackground] = useState(false)

    useEffect(() => {
        let isCancelled = false

        const image = new window.Image()
        image.crossOrigin = 'anonymous'

        image.onload = () => {
            try {
                const canvas = document.createElement('canvas')
                const maxSampleSize = 64
                const scale = Math.min(1, maxSampleSize / Math.max(image.width, image.height))
                canvas.width = Math.max(1, Math.floor(image.width * scale))
                canvas.height = Math.max(1, Math.floor(image.height * scale))

                const context = canvas.getContext('2d', { willReadFrequently: true })
                if (!context) return

                context.drawImage(image, 0, 0, canvas.width, canvas.height)
                const sample = context.getImageData(0, 0, canvas.width, canvas.height)

                if (!isCancelled) {
                    setNeedsDarkBackground(isPredominantlyLightLogo(sample))
                }
            } catch {
                // Tainted canvas / decode errors — leave logo without forced background
            }
        }

        image.src = src

        return () => {
            isCancelled = true
        }
    }, [src])

    return (
        <div
            className={cn(
                'flex items-center justify-center transition-colors duration-300',
                needsDarkBackground ? darkBackgroundClassName : lightBackgroundClassName,
                className
            )}
        >
            <Image
                src={src}
                alt={alt}
                width={width}
                height={height}
                className={imageClassName}
            />
        </div>
    )
}
