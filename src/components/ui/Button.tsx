import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react'

type ButtonVariant = 'solid' | 'outline'

type ButtonAsButton = ButtonHTMLAttributes<HTMLButtonElement> & {
  href?: undefined
}

type ButtonAsAnchor = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string
}

type ButtonProps = (ButtonAsButton | ButtonAsAnchor) & {
  variant?: ButtonVariant
}

const variantClasses: Record<ButtonVariant, string> = {
  solid: 'bg-purple-deep text-cream border-transparent',
  outline: 'bg-transparent',
}

const baseClasses =
  'inline-flex cursor-pointer items-center justify-center rounded-full border-2 px-7 py-3.5 font-heading text-sm font-bold tracking-wide whitespace-nowrap uppercase transition-[opacity,transform] duration-200 ease-out hover:scale-[1.03] hover:opacity-85 active:scale-95 disabled:hover:scale-100 disabled:active:scale-100'

export function Button({ variant = 'solid', className = '', ...props }: ButtonProps) {
  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`

  if (props.href !== undefined) {
    return <a className={classes} {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)} />
  }

  return <button className={classes} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)} />
}