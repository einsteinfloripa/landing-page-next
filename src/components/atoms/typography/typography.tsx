import React from 'react'

import { cn } from '@/lib/utils'

type TypographyProps = {
    children: React.ReactNode
    className?: string
}

export default function Heading({ children, className }: TypographyProps) {
  return (
    <h1 className={cn('font-bold leading-[70px] text-6xl', className)}>{children}</h1>
  )
}
