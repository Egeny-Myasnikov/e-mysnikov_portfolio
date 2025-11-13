'use client'
import Link from 'next/link'
import { useState } from 'react'
import { Icon } from '../icon/Icon'
import { Navigation } from '../navigation/Navigation'
import { SocBar } from '../socBar/SocBar'
import { ThemeSwitcher } from '../themeSwitcher/ThemeSwitcher'
import s from './header.module.css'

export default function Header() {
	const [isOpenBurger, setIsOpenBurger] = useState(false)

	const showBurger = () => {
		setIsOpenBurger(!isOpenBurger)
	}

	return (
		<header className={`${s.header}`}>
			<div className={` container`}>
				<div className={`${s.wrapper}`}>
					<Link href='/' title='Главная' className={`${s.logo}`}>
						<Icon name={'LogoIcon'} width={50} />
					</Link>

					<div className={`${s.centerSide} ${isOpenBurger ? s.show : ''}`}>
						<Navigation className={`${s.headerNav}`} />
						<SocBar className={`${s.socBar}`} />
					</div>
					<button
						onClick={showBurger}
						aria-label='burger'
						className={`${s.burger}`}
					></button>

					<div className={`${s.headerSwitcherTheme}`}>
						<ThemeSwitcher />
					</div>
				</div>
			</div>
		</header>
	)
}
