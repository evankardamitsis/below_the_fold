import { forwardRef, ElementType } from 'react'
import { textStyles } from '@/styles/design-system/variants'
import { cn } from '@/styles/design-system/utils'

// Generic interface for Text component props with customizable element type
interface TextProps<C extends ElementType = 'p'> {
    intent?: 'h1' | 'h2' | 'h3' | 'body' | 'large' | 'small' | 'muted'
    as?: C                     // Element type to render
    className?: string         // Additional CSS classes
    children?: React.ReactNode // Component children
}

// Polymorphic Text component with configurable styling and element type
export const Text = forwardRef(
    <C extends ElementType = 'p'>(
        { intent = 'body', as, className, children, ...props }: TextProps<C>,
        ref: React.ComponentPropsWithRef<C>['ref']
    ) => {
        const Component = as || 'p'
        return (
            <Component
                ref={ref}
                className={cn(textStyles({ intent }), className)}
                {...props}
            >
                {children}
            </Component>
        )
    }
)

Text.displayName = 'Text' 