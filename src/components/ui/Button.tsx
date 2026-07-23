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
      className={`inline-flex cursor-pointer items-center justify-center rounded-full border-2 px-7 py-3.5 font-heading text-sm font-bold tracking-wide whitespace-nowrap uppercase transition-[opacity,transform] duration-200 ease-out hover:scale-[1.03] hover:opacity-85 active:scale-95 disabled:hover:scale-100 disabled:active:scale-100 ${variantClasses[variant]} ${className}`}
      {...props}
    />
  )
}
