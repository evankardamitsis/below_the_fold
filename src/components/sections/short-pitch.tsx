import Image from 'next/image'
import { RocketIcon } from '@/components/icons/rocket-icon'
import { OptimizeIcon } from '@/components/icons/optimize-icon'
import { IntegrateIcon } from '@/components/icons/integrate-icon'

export function ShortPitch() {
    return (
        <section className="py-24 bg-page-light">
            <div className="mx-auto max-w-[1620px] px-8">
                {/* Header with Title and Badge */}
                <div className="flex justify-between items-start mb-12">
                    <h2 className="text-[4rem] leading-[0.95] tracking-[-0.03em] font-bold text-neutral-900 max-w-[65%]">
                        We Build, You Grow. Fast.
                    </h2>

                    {/* Shopify Partner Badge */}
                    <div className="bg-[#95BF47] text-white rounded-lg p-6 flex items-start gap-4 max-w-[400px]">
                        <Image
                            src="/shopify-icon.svg"
                            alt="Shopify"
                            width={32}
                            height={32}
                            className="w-8 h-8"
                        />
                        <div>
                            <div className="font-medium tracking-wide mb-1">SHOPIFY PARTNER</div>
                            <div className="text-[15px] tracking-wide">
                                Looking to partner with Below The Fold for your Shopify needs?
                            </div>
                        </div>
                    </div>
                </div>

                {/* Description and Features */}
                <div className="flex justify-between">
                    {/* Left side - Description */}
                    <div className="max-w-[40%] flex flex-col justify-between">
                        <p className="text-neutral-600 text-[15px] leading-relaxed tracking-wide font-medium">
                            We&apos;ve built and optimized numerous Shopify stores, turning ideas into high-performing businesses. We help you launch, scale, and optimize your Shopify store with speed and precision—so you&apos;re always ahead of the game.
                            <br /><br />
                            From startups to established brands, our proven process has delivered results across industries. As trusted Shopify Partners, we combine strategy, design, and development to create e-commerce experiences that drive growth and maximize conversions.
                        </p>
                    </div>

                    {/* Right side - Features */}
                    <div className="flex gap-12 self-end">
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
            </div>
        </section>
    )
} 