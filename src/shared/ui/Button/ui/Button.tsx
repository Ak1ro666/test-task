import styles from './Button.module.scss'

import { ButtonProps } from './Button.props.ts';
import cn from '@/shared/lib/classNames/classNames.ts';

export const Button = (props: ButtonProps) => {

    const {
        children,
        className ,
        type = "button",
        square = false,
        onClick,
        ...otherProps
    } = props

    return <button className={cn(
        styles.Button,
        {
            [styles.square]: square,
        },
        // @ts-ignore
        [className],
    )} onClick={onClick} type={type} {...otherProps}>
        {children}
    </button>
}