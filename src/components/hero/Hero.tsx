'use client'
import { Icon } from '../icon/Icon'
import { ImageMask } from '../imageMask/ImageMask'
import s from './hero.module.css'

export default function Hero() {
	return (
		<section className={`${s.hero}`}>
			<div className={`${s.container} container`}>
				<h1 className={`${s.title}`}>Front-end Developer</h1>

				<div className={`${s.content}`}>
					<div className={`${s.contentLeftBlock}`}>
						<p className={`${s.contentBadge}`}>
							<Icon className={`${s.badgeIcon}`} name={'BadgeIcon'} />
							Готов к работе
						</p>
						<p className={`${s.contentTitle}`}>Frontend - разработчик</p>
					</div>
					<div className={`${s.contentCenterBlock}`}>
						<ImageMask
							className={`${s.centerImg}`}
							size={'large'}
							imageSrc='/ava-from-vk.jpg'
						/>
					</div>
					<div className={`${s.contentRightBlock}`}>
						<p className={`${s.contentDescription}`}>
							Создаю цифровые продукты, которые работают. Превращаю идеи в
							интерфейсы, которые привлекают, удерживают и приносят пользу.
						</p>
						<a href='#projects' className={`${s.primaryButton}`}>
							<Icon className={`${s.buttonIcon}`} name='ArrowRightIcon' />
							Смотреть мои работы
						</a>
					</div>
				</div>
				<div className={`${s.contentName}`}>
					<span>Евгений</span> <span>Мясников</span>
				</div>
			</div>
		</section>
	)
}
