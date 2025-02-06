import { RocketIcon } from '@/components/icons/rocket-icon'
import { OptimizeIcon } from '@/components/icons/optimize-icon'
import { IntegrateIcon } from '@/components/icons/integrate-icon'

export function FeaturesSection() {
    return (
        <section className="py-24 bg-page-lighter">
            <div className="mx-auto max-w-[1620px] px-8">
                <div className="grid grid-cols-3 gap-8 max-w-[85%] mx-auto">
                    {/* Rapid Store Launches */}
                    <div className="flex flex-col items-center text-center">
                        <div className="mb-6 w-12 h-12 flex items-center justify-center">
                            <RocketIcon />
                        </div>
                        <div className="text-[1.25rem] font-bold text-neutral-900 mb-3">
                            Rapid store launches
                        </div>
                        <div className="text-[15px] text-neutral-600 tracking-wide font-medium max-w-[80%]">
                            Quick deployment, faster time-to-market
                        </div>
                    </div>

                    {/* Tested & Optimized */}
                    <div className="flex flex-col items-center text-center">
                        <div className="mb-6 w-12 h-12 flex items-center justify-center">
                            <OptimizeIcon />
                        </div>
                        <div className="text-[1.25rem] font-bold text-neutral-900 mb-3">
                            Tested & optimized
                        </div>
                        <div className="text-[15px] text-neutral-600 tracking-wide font-medium max-w-[80%]">
                            Conversion-focused development
                        </div>
                    </div>

                    {/* Seamless Integrations */}
                    <div className="flex flex-col items-center text-center">
                        <div className="mb-6 w-12 h-12 flex items-center justify-center">
                            <IntegrateIcon />
                        </div>
                        <div className="text-[1.25rem] font-bold text-neutral-900 mb-3">
                            Seamless integrations
                        </div>
                        <div className="text-[15px] text-neutral-600 tracking-wide font-medium max-w-[80%]">
                            Perfect Shopify compatibility
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
} 