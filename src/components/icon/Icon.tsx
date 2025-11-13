import { ComponentType, SVGProps } from 'react'
import { ArrowRightIcon } from './icons/ArrowRightIcon'
import { BadgeIcon } from './icons/BadgeIcon'
import { EmailIcon } from './icons/EmailIcon'
import { GithubIcon } from './icons/GithubIcon'
import { LogoIcon } from './icons/LogoIcon'
import { MoonIcon } from './icons/MoonIcon'
import { SunIcon } from './icons/SunIcon'
import { TelegramIcon } from './icons/TelegramIcon'

export type IconName =
	| 'LogoIcon'
	| 'GithubIcon'
	| 'TelegramIcon'
	| 'BadgeIcon'
	| 'ArrowRightIcon'
	| 'MoonIcon'
	| 'SunIcon'
	| 'EmailIcon'

export interface IconProps extends SVGProps<SVGSVGElement> {
	name: IconName
	width?: number
	height?: number
	color?: string
}

type IconComponent = ComponentType<SVGProps<SVGSVGElement>>

const icons: Record<IconName, IconComponent> = {
	LogoIcon,
	GithubIcon,
	TelegramIcon,
	BadgeIcon,
	ArrowRightIcon,
	MoonIcon,
	SunIcon,
	EmailIcon,
}

export const Icon = ({
	name,
	width = 24,
	height = 24,
	color = 'currentColor',
	...props
}: IconProps) => {
	const Component = icons[name]

	if (!Component) {
		console.warn(`Icon "${name}" not found`)
		return null
	}

	return <Component width={width} height={height} color={color} {...props} />
}
