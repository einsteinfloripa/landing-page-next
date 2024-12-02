import { cn } from "@/lib/utils"

type StickerProps = {
    title?: string
    subtitle?: string
    className?: string
    appColor?: string
}

export const Sticker = ({ 
    title="Nos ajude a", subtitle="Mudar a educação do Brasil", className, appColor="bg-app-blue-500"
}:StickerProps) => {
    return(
        <div className={cn(className)}>
                <div className={cn("relative rounded-2xl h-[157px] w-[226px] pt-4", appColor)}>
                    <p className="text-white text-center uppercase font-semibold">
                        { title }
                    </p>
                    <div className="absolute top-24 left-1/2 transform -translate-x-1/2 -translate-y-1/2  h-[87px] w-[202px] bg-white flex items-center justify-center font-semibold">
                        <p className="text-black uppercase text-center">
                            { subtitle }
                        </p>
                    </div>
                </div>

        </div>
    )
}