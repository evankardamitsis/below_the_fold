'use client'

import { useEffect, useRef } from 'react'

interface CloudinaryVideoProps {
    publicId: string
    className?: string
}

export function CloudinaryVideo({ publicId, className = '' }: CloudinaryVideoProps) {
    const videoRef = useRef<HTMLVideoElement>(null)

    useEffect(() => {
        if (!videoRef.current) return

        const video = videoRef.current
        video.playbackRate = 0.75
        video.muted = true
        video.loop = true
        video.playsInline = true
    }, [])

    const videoUrl = `https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/video/upload/${publicId}`

    return (
        <video
            ref={videoRef}
            className={className}
            src={videoUrl}
            autoPlay
            muted
            loop
            playsInline
            style={{ aspectRatio: '16/9' }}
        />
    )
} 