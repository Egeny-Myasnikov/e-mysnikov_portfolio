import { TypesIconProps } from './typesIcon'

export const ArrowRightIcon = ({
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
			viewBox='0 0 24 24'
			xmlns='http://www.w3.org/2000/svg'
			aria-hidden='true'
			{...props}
		>
			<path
				d='M5 12H19M19 12L12 5M19 12L12 19'
				stroke={color}
				strokeWidth='2'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	)
}
