import Link from 'next/link'
import { StarIcon } from '../icons/star-icon'

interface CustomButtonProps {
    href: string
    label: string
    icon?: React.ReactNode
    className?: string
    variant?: 'default' | 'outline'
    size?: 'sm' | 'md' | 'lg'
}

export function CustomButton({
    href,
    label,
    icon = <StarIcon />,
    className = '',
    variant = 'default',
    size = 'md'
}: CustomButtonProps) {
    const baseStyles = "group inline-flex items-center gap-3 uppercase font-bold transition-all duration-500 hover:shadow-xs"

    const variants = {
        default: "bg-neutral-900 text-white hover:bg-neutral-800",
        outline: "bg-page-lighter hover:bg-neutral-50 text-neutral-900"
    }

    const sizes = {
        sm: "text-[12px] px-4 py-2 w-[250px]",
        md: "text-[14px] px-5 py-3 w-[300px]",
        lg: "text-[16px] px-6 py-4 w-[350px]"
    }

    const iconSizes = {
        sm: "w-6 h-6",
        md: "w-8 h-8",
        lg: "w-10 h-10"
    }

    return (
        <Link
            href={href}
            className={`${baseStyles} ${variants[variant]} ${sizes[size]} rounded-md ${className}`}
        >
            <span>{label}</span>
            <div className={`flex items-center justify-center ${iconSizes[size]} rounded-full bg-brand-purple`}>
                <span className="text-neutral-900 flex items-center scale-90">
                    {icon}
                </span>
            </div>
        </Link>
    )
} 