import type { ReactNode } from 'react'

export function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <h1 className="mt-2 text-center font-heading text-2xl font-normal uppercase md:mt-8 md:text-4xl lg:text-5xl">
      {children}
    </h1>
  )
}
