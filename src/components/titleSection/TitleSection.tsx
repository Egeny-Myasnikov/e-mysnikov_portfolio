import { HTMLAttributes } from 'react'
import { Icon } from '../icon/Icon'
import s from './titleSection.module.css'

interface TitleSectionProps extends HTMLAttributes<HTMLHeadingElement> {
	children: string
	variant?: 'primary' | 'secondary'
	className?: string
}

export const TitleSection: React.FC<TitleSectionProps> = ({
	variant = 'primary',
	children,
	className = '',
	...props
}) => {
	return (
		<h2 className={`${s.titleSection} ${s[variant]} ${className}`} {...props}>
			<Icon
				name='BadgeIcon'
				className={`${s.titleIcon} ${
					variant ? s[`titleIcon--${variant}`] : s[`titleIcon--primary`]
				}`}
			/>
			{children}
		</h2>
	)
}
