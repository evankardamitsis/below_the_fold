'use client'

interface VideoBackgroundProps {
    src: string
    poster?: string
}

export function VideoBackground({ src, poster }: VideoBackgroundProps) {
    return (
        <div className="absolute inset-0 w-full h-full">
            <video
                autoPlay
                loop
                muted
                playsInline
                poster={poster}
                className="object-cover w-full h-full opacity-90"
                onError={(e) => {
                    console.error('Video loading error:', e);
                }}
            >
                <source src={src} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    )
} 