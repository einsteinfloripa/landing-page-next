import { cn } from "@/lib/utils"
import { cva, VariantProps } from "class-variance-authority"

const pulsingDotVariants = cva('', {
    variants: {
        color: {
            green: 'bg-app-green-500',
            red: 'bg-app-orange-500'
        }
    },
    defaultVariants: {
        color: "green"
    }
})

type PulsinDotsProps = VariantProps<typeof pulsingDotVariants>

export const PulsingDot = ({ color }: PulsinDotsProps) => {
    return(
        <div className="relative flex items-center">
            <div className={
                cn('w-2 h-2 rounded-full', 
                pulsingDotVariants({ color }))
            }/>
            <div className={
                cn('absolute -left-1/4 w-3 h-3 rounded-full animate-ripple bg-app-green-500', 
                pulsingDotVariants({ color }))
            }/>
        </div>
    )
}