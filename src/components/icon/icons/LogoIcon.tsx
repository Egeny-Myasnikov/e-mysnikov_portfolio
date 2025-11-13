import { TypesIconProps } from './typesIcon'

export const LogoIcon = ({
	color = 'currentColor',
	height = 24,
	width = 81,
	...props
}: TypesIconProps) => {
	return (
		<svg
			width={width}
			height={height}
			fill={'none'}
			viewBox='0 0 81 24'
			xmlns='http://www.w3.org/2000/svg'
			aria-hidden='true'
			{...props}
		>
			<path
				d='M0 13.3043V10.6957L26 0V4.17391L6.0559 11.9348L6.21739 11.6739V12.3261L6.0559 12.0652L26 19.8261V24L0 13.3043Z'
				fill={color}
			/>
			<path d='M41 0L30.6077 6V18L41 24L51.3923 18V6L41 0Z' fill={color} />
			<path
				d='M81 13.3043V10.6957L55 0V4.17391L74.9441 11.9348L74.7826 11.6739V12.3261L74.9441 12.0652L55 19.8261V24L81 13.3043Z'
				fill={color}
			/>
		</svg>
	)
}
