import { TypesIconProps } from './typesIcon'

export const BadgeIcon = ({
	color = 'currentColor',
	height = 24,
	width = 24,
	...props
}: TypesIconProps) => {
	return (
		<svg
			width={width}
			height={height}
			fill={'none'}
			viewBox='0 0 12 12'
			xmlns='http://www.w3.org/2000/svg'
			aria-hidden='true'
			{...props}
		>
			<path
				d='M5.19615 0L10.3923 3V9L5.19615 12L-4.76837e-07 9V3L5.19615 0Z'
				fill={color}
			/>
		</svg>
	)
}
