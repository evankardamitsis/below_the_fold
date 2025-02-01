'use client'

export function ScrollingText() {
    const content = (
        <>
            <span>UI/UX</span>
            <span className="text-[8px] transform translate-y-[-1px]">•</span>
            <span>E-COMMERCE</span>
            <span className="transform scale-x-125">→</span>
            <span>CONVERSION</span>
            <span className="text-[8px] transform translate-y-[-1px]">•</span>
            <span>ANALYTICS</span>
            <span className="text-[8px] transform translate-y-[-1px]">•</span>
            <span>SHOPIFY</span>
            <span className="text-[8px] transform translate-y-[-1px]">•</span>
            <span>GROWTH</span>
            <span className="transform scale-x-125">→</span>
            <span>PERFORMANCE</span>
            <span className="text-[8px] transform translate-y-[-1px]">•</span>
            <span>STRATEGY</span>
            <span className="transform scale-x-125">←</span>
            <span>OPTIMIZATION</span>
            <span className="text-[8px] transform translate-y-[-1px]">•</span>
            <span>SCALABILITY</span>
            <span className="transform scale-x-125">→</span>
        </>
    )

    return (
        <div className="mt-32 border-t border-neutral-200/60 pt-5">
            <div className="mx-auto max-w-[1620px]">
                <div className="overflow-hidden">
                    <div className="flex relative animate-scroll">
                        <div className="flex-shrink-0 flex items-center gap-3 text-[12px] tracking-[0.2em] text-neutral-400/80 whitespace-nowrap">
                            {content}
                        </div>
                        <div className="flex-shrink-0 flex items-center gap-3 text-[12px] tracking-[0.2em] text-neutral-400/80 whitespace-nowrap">
                            {content}
                        </div>
                        <div className="flex-shrink-0 flex items-center gap-3 text-[12px] tracking-[0.2em] text-neutral-400/80 whitespace-nowrap">
                            {content}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
} 