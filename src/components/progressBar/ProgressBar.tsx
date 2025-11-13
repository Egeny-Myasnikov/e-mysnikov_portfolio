import { HTMLProps } from 'react'
import s from './progressBar.module.css'

interface ProgressBarProps extends HTMLProps<HTMLDivElement> {
	fillPercentage: number
	className: string | undefined
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
	fillPercentage,
	className = '',
	...props
}) => {
	return (
		<div className={`${s.progressBar} ${className}`} {...props}>
			<span
				style={{ width: fillPercentage + '%' }}
				className={`${s.progressBarFill}`}
			></span>
		</div>
	)
}
