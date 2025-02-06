import Image from 'next/image'

export function ShortPitch() {
    return (
        <section className="py-16 md:py-20 lg:py-24 bg-page-lighter">
            <div className="mx-auto max-w-[1620px] px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row lg:justify-between lg:gap-8">
                    {/* Left side - Title and Description */}
                    <div className="lg:max-w-[65%]">
                        <h2 className="text-[2.5rem] sm:text-[3rem] md:text-[3.5rem] lg:text-[4rem] leading-[0.95] tracking-[-0.03em] font-bold text-neutral-900 mb-6 lg:mb-8">
                            We Build, You Grow. Fast.
                        </h2>
                        <p className="text-neutral-600 text-[14px] lg:text-[15px] leading-relaxed tracking-wide font-medium uppercase w-full lg:max-w-[60%] mb-8 lg:mb-0">
                            We&apos;ve built and optimized numerous Shopify stores, turning ideas into high-performing businesses. We help you <span className="bg-brand-purple px-1 rounded-sm font-bold">launch, scale, and optimize your Shopify store</span> with speed and precision—so you&apos;re always ahead of the game.
                        </p>
                    </div>

                    {/* Shopify Partner Badge */}
                    <div className="bg-[#95BF47] text-white rounded-lg p-4 lg:p-5 flex items-start gap-4 w-full lg:w-[400px] cursor-pointer hover:bg-[#85A940] transition-colors duration-300 lg:self-start">
                        <Image
                            src="/shopify-icon.svg"
                            alt="Shopify"
                            width={32}
                            height={32}
                            className="w-7 h-7 lg:w-8 lg:h-8"
                        />
                        <div className="flex-1">
                            <div className="font-medium tracking-wide mb-1 text-[14px] lg:text-base">
                                SHOPIFY PARTNER
                            </div>
                            <div className="text-[14px] lg:text-[15px] tracking-wide font-medium">
                                Looking to partner with BelowTheFold for your Shopify needs?
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
} 