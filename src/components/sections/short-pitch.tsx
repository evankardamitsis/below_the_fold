import Image from 'next/image'
import { RocketIcon } from '@/components/icons/rocket-icon'
import { OptimizeIcon } from '@/components/icons/optimize-icon'
import { IntegrateIcon } from '@/components/icons/integrate-icon'

export function ShortPitch() {
    return (
        <section className="py-24 bg-page-lighter">
            <div className="mx-auto max-w-[1620px] px-8">
                <div className="flex justify-between gap-8">
                    {/* Left side - Title and Description */}
                    <div className="max-w-[65%]">
                        <h2 className="text-[4rem] leading-[0.95] tracking-[-0.03em] font-bold text-neutral-900 mb-8">
                            We Build, You Grow. Fast.
                        </h2>
                        <p className="text-neutral-600 text-[15px] leading-relaxed tracking-wide font-medium uppercase max-w-[60%]">
                            We&apos;ve built and optimized numerous Shopify stores, turning ideas into high-performing businesses. We help you <span className="bg-brand-purple px-1 rounded-sm font-bold">launch, scale, and optimize your Shopify store</span> with speed and precision—so you&apos;re always ahead of the game.
                        </p>
                    </div>

                    {/* Shopify Partner Badge */}
                    <div className="bg-[#95BF47] text-white rounded-lg p-5 flex items-start gap-4 w-[400px] cursor-pointer hover:bg-[#85A940] transition-colors duration-300 self-start">
                        <Image
                            src="/shopify-icon.svg"
                            alt="Shopify"
                            width={32}
                            height={32}
                            className="w-8 h-8"
                        />
                        <div className="flex-1">
                            <div className="font-medium tracking-wide mb-1">SHOPIFY PARTNER</div>
                            <div className="text-[15px] tracking-wide font-medium">
                                Looking to partner with BelowTheFold for your Shopify needs?
                            </div>
                        </div>
                    </div>
                </div>

                {/* Features */}
                <div className="flex justify-end gap-12 mt-16">
                    {/* Rapid Store Launches */}
                    <div>
                        <div className="mb-4 w-12 h-12 flex items-center justify-center">
                            <RocketIcon />
                        </div>
                        <div className="text-[1.25rem] font-bold text-neutral-900 mb-2">Rapid store launches</div>
                        <div className="text-[15px] text-neutral-600 tracking-wide font-medium">Quick deployment, faster time-to-market</div>
                    </div>

                    {/* Tested & Optimized */}
                    <div>
                        <div className="mb-4 w-12 h-12 flex items-center justify-center">
                            <OptimizeIcon />
                        </div>
                        <div className="text-[1.25rem] font-bold text-neutral-900 mb-2">Tested & optimized</div>
                        <div className="text-[15px] text-neutral-600 tracking-wide font-medium">Conversion-focused development</div>
                    </div>

                    {/* Seamless Integrations */}
                    <div>
                        <div className="mb-4 w-12 h-12 flex items-center justify-center">
                            <IntegrateIcon />
                        </div>
                        <div className="text-[1.25rem] font-bold text-neutral-900 mb-2">Seamless integrations</div>
                        <div className="text-[15px] text-neutral-600 tracking-wide font-medium">Perfect Shopify compatibility</div>
                    </div>
                </div>
            </div>
        </section>
    )
} 