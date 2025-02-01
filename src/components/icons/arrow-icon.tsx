export function ArrowIcon() {
    return (
        <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            className="mr-2 transition-all duration-300"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g className="origin-center transition-all duration-300 group-hover:rotate-[360deg]">
                <circle
                    cx="12"
                    cy="12"
                    r="3"
                    className="fill-current transition-all duration-300 group-hover:scale-75"
                />
                <path
                    d="M12 19L12 15M12 9L12 5M5 12L9 12M15 12L19 12"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    className="transition-all duration-300 group-hover:scale-125"
                />
            </g>
        </svg>
    )
} 