import {ComponentProps} from 'react'
import classNames from 'classnames'
 
export interface ButtonProps extends ComponentProps<'button'> {
    children: React.ReactNode
    buttonType?: 'primary' | 'secondary'
    className?: string
}
 
export default function Button({children, buttonType = 'primary', className, ...props}: ButtonProps) {
    const classes = classNames(
        'py-2.5 px-6 rounded-full text-sm font-bold',
        buttonType === 'primary' && 'bg-blue-600 text-white hover:bg-blue-700',
        buttonType === 'secondary' &&
        'bg-white text-neutral-900 hover:bg-gray-100',
        className
    )
 
    return (
        <button className={classes} {...props}>
            {children}
        </button>
    )
}