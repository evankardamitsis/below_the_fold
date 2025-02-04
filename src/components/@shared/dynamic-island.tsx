export function DynamicIsland() {
    return (
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="bg-neutral-900 rounded-full h-[38px] w-[120px] flex items-center justify-center group cursor-pointer transition-all duration-300 hover:w-[140px] hover:bg-neutral-800">
                <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-green-500 transition-all duration-300 group-hover:scale-110" />
                    <span className="text-xs font-medium text-white tracking-wide">Available</span>
                </div>
            </div>
        </div>
    )
} 