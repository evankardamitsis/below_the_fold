export function StarIcon() {
    return (
        <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            className="transition-all duration-500"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g className="origin-center">
                {/* Center Circle */}
                <circle
                    cx="12"
                    cy="12"
                    r="3"
                    className="fill-current transition-all duration-500 group-hover:scale-[0.8]"
                />

                {/* Star Points */}
                <g className="origin-center transition-all duration-500 group-hover:rotate-[90deg]">
                    {/* Main Lines */}
                    <path
                        d="M12 5V2M12 22V19M19 12h3M2 12h3M17.657 17.657l2.121 2.121M4.222 4.222l2.121 2.121M17.657 6.343l2.121-2.121M4.222 19.778l2.121-2.121"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        className="transition-all duration-500"
                    />
                </g>
            </g>
        </svg>
    )
} 