import type { ButtonHTMLAttributes } from 'react'

type ButtonVariant = 'solid' | 'outline'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
}

const variantClasses: Record<ButtonVariant, string> = {
  solid: 'bg-purple-deep text-cream border-transparent',
  outline: 'bg-transparent',
}

export function Button({ variant = 'solid', className = '', ...props }: ButtonProps) {
  return (
    <button
      className={`inline-flex cursor-pointer items-center justify-center rounded-full border-2 px-7 py-3.5 font-heading text-sm font-bold tracking-wide uppercase transition-opacity hover:opacity-85 ${variantClasses[variant]} ${className}`}
      {...props}
    />
  )
}
