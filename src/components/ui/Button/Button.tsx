import React, {
    ButtonHTMLAttributes,
    ComponentType,
    forwardRef
  } from 'react'
  
  export interface ButtonProps
    extends Omit<ButtonHTMLAttributes<unknown>, 'style'> {
    href?: string
    as?: keyof JSX.IntrinsicElements | ComponentType
  }
  
  export const Button = forwardRef<HTMLButtonElement & HTMLAnchorElement, ButtonProps>(
    (props, ref): JSX.Element => {
      const { children, ...rest } = props
  
      if (props.href) {
        rest.as = 'a'
      }
  
      return (
        <button
          ref={ref}
          {...rest}>
          {children}
        </button>
      )
    })
  
  Button.displayName = 'Button'
  