'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import s from './navigation.module.css'

interface NavigationProps {
	className?: string
}

export const Navigation: React.FC<NavigationProps> = ({
	className = '',
	...props
}) => {
	const pathName = usePathname()
	const homePageInnerLinks = [
		{ href: '#skills', title: 'Навыки' },
		{ href: '#projects', title: 'Проекты' },
		{ href: '#contact', title: 'Контакты' },
	]
	const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
		e.preventDefault()
		const element = document.getElementById(id.slice(1))
		if (element) {
			element.scrollIntoView({
				behavior: 'smooth',
				block: 'start',
			})
		}
	}
	return (
		<nav className={` ${className} ${s.navigation}`} {...props}>
			<Link
				href={'/portfolio'}
				className={`${s.link}`}
				aria-label='Портфолио'
				title='Портфолио'
			>
				Портфолио
			</Link>
			{pathName === '/' &&
				homePageInnerLinks.map(({ href, title }, idx) => (
					<Link
						key={idx}
						href={href}
						className={`${s.link}`}
						aria-label={title}
						title={title}
						onClick={e => handleClick(e, href)}
					>
						{title}
					</Link>
				))}
		</nav>
	)
}
