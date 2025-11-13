'use client'
import Image from 'next/image'
import Link from 'next/link'
import { projects } from '../../data/portfolio-data'
import { TitleSection } from '../titleSection/TitleSection'
import s from './portfolioSlider.module.css'

// interface PortfolioSliderProps {

// }

// export const PortfolioSlider: React.FC<PortfolioSliderProps> = () => {

export const PortfolioSlider = () => {
	return (
		<div className={`${s.portfolioSlider} container`}>
			<TitleSection className={`${s.title}`} variant='secondary'>
				Проекты
			</TitleSection>
			<div className={`${s.projects}`}>
				<ul className={`${s.projectsList}`}>
					{projects?.map(
						(
							{
								id,
								title,
								description,
								technologies,
								images,
								githubUrl,
								liveUrl,
							},
							idx
						) => (
							<li key={id} className={`${s.projectsItem}`}>
								<div className={`${s.projectsItemSideDescription}`}>
									<h3 className={`${s.projectsItemTitle}`}>{title}</h3>
									<p className={`${s.projectsItemDescription}`}>
										{description}
									</p>
									<div className={`${s.projectsItemTechnologies}`}>
										{technologies.map((tech, idx) => (
											<span key={idx} className={`${s.projectsItemTechnology}`}>
												{tech}
											</span>
										))}
									</div>

									<div className={`${s.links}`}>
										{liveUrl && (
											<Link
												href={liveUrl}
												rel='noopener noreferrer'
												target='_blank'
												className={`${s.link}`}
											>
												Смотреть демо
											</Link>
										)}
										{githubUrl && (
											<Link
												href={githubUrl}
												rel='noopener noreferrer'
												target='_blank'
												className={`${s.link}`}
											>
												Код на GitHub
											</Link>
										)}
									</div>

									<span className={`${s.numProject}`}>{idx + 1}</span>
								</div>
								<div className={`${s.projectsItemSideImage}`}>
									{images && (
										<Image
											className={`${s.projectImg}`}
											alt=''
											src={images[0]}
											fill
										/>
									)}
								</div>
							</li>
						)
					)}
				</ul>
			</div>
		</div>
	)
}
