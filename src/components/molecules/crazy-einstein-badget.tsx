import { cn } from "@/lib/utils";
import Image from "next/image";
import { StarShape } from "../atoms/svg/star-shape";

type CrazyEinsteinBadgetProps = {
    className?: string
}

export const CrazyEinsteinBadget = ({ className }:CrazyEinsteinBadgetProps) => {
    return (
        <div className={cn(className)}>
            <div 
                className="relative flex items-center justify-center"
            >
                <StarShape 
                    width="180"
                    height="180"
                />
                <Image 
                    className="absolute top-10" 
                    src='/images/rosto-einstein.png' 
                    alt="Rosto de Albert Einstein" 
                    width={106} 
                    height={106}
                />
            </div>
        </div>
    )
};