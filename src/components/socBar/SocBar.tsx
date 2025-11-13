import Link from 'next/link'
import s from './socBar.module.css'
import { Icon } from '../icon/Icon'
import { socBarData } from '../../data/soc-bar'

interface SocBarProps {
	className?: string
}

export const SocBar: React.FC<SocBarProps> = ({ className = '', ...props }) => {
	return (
		<div className={`${className} ${s.socBar}`} {...props}>
			{socBarData.map(({ href, title, nameIcon }) => (
				<Link
					className={`${s.link}`}
					key={href}
					href={href}
					target='_blank'
					title={title}
				>
					<Icon name={nameIcon} />
				</Link>
			))}
		</div>
	)
}
