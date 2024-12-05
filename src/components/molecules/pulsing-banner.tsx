import { PulsingDot } from "../atoms/pulsing-dot"

type PulsingDotProps = {
    announcement: string
    dotColor?: 'green' | 'red'
}

export const PulsingBanner = ({ announcement, dotColor='green' }:PulsingDotProps) => {
    return (
        <div className="w-full bg-app-yellow-500">
            <div className="flex gap-2 items-center justify-center py-2 body-small-medium">
                <PulsingDot color={dotColor}/>
                <p>{ announcement }</p>
            </div>
        </div>
    )
}