import { contactInfo } from '@/data/portfolio-data'
import s from './contact.module.css'
import Link from 'next/link'
import { TitleSection } from '../titleSection/TitleSection'
import { SocBar } from '../socBar/SocBar'

export default function Contact() {
	return (
		<section id='contact' className={s.contact}>
			<div className={`container`}>
				<TitleSection>Связаться со мной</TitleSection>

				<div className={s.content}>
					<div className={s.info}>
						<div className={s.contactItem}>
							<label className={s.label}>Email</label>
							<a href={`mailto:${contactInfo.email}`} className={s.link}>
								{contactInfo.email}
							</a>
						</div>

						<div className={s.contactItem}>
							<label className={s.label}>GitHub</label>
							<Link
								href={`https://github.com/${contactInfo.github}`}
								target='_blank'
								rel='noopener noreferrer'
								className={s.link}
							>
								{contactInfo.github}
							</Link>
						</div>

						{contactInfo.telegram && (
							<div className={s.contactItem}>
								<label className={s.label}>Telegram</label>
								<a
									href={`https://t.me/${contactInfo.telegram.replace('@', '')}`}
									target='_blank'
									rel='noopener noreferrer'
									className={s.link}
								>
									{contactInfo.telegram}
								</a>
							</div>
						)}
					</div>
				</div>
			</div>
		</section>
	)
}
