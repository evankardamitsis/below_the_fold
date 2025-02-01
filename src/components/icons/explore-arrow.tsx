export function ExploreArrow() {
    return (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            className="mr-2 transition-all duration-300 group-hover:translate-y-1"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M12 4L12 17M12 17L7 12M12 17L17 12"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M7 16L12 20L17 16"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
        </svg>
    )
} 