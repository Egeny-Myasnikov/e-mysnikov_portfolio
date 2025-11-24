'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useProjectsStore } from '../../stores/projectStore'
import { TitleSection } from '../titleSection/TitleSection'
import s from './projects.module.css'

export default function Projects() {
	const projects = useProjectsStore(state => state.projects)

	return (
		<section id='projects' className={s.projects}>
			<div className={`${s.container} container`}>
				<TitleSection variant={'secondary'}>Проекты</TitleSection>

				<div className={s.grid}>
					{projects.length !== 0 &&
						projects.map(project => (
							<div key={project.githubUrl} className={s.project}>
								{project.images && (
									<Image
										className={`${s.bgImg}`}
										fill
										sizes='1200px'
										quality={75}
										placeholder='empty'
										alt={project.title}
										src={project.images[0]}
									/>
								)}
								<div className={s.content}>
									<h3 className={s.projectTitle}>{project.title}</h3>
									<p className={s.description}>{project.description}</p>

									<div className={s.technologies}>
										{project.technologies.length !== 0 &&
											project.technologies.map((tech, idx) => (
												<span key={idx} className={s.tech}>
													{tech}
												</span>
											))}
									</div>

									<div className={s.links}>
										{project.githubUrl && (
											<Link
												href={project.githubUrl}
												target='_blank'
												rel='noopener noreferrer'
												className={s.link}
											>
												Код на GitHub
											</Link>
										)}
										{project.liveUrl && (
											<Link
												href={project.liveUrl}
												target='_blank'
												rel='noopener noreferrer'
												className={s.link}
											>
												Посмотреть демо
											</Link>
										)}
									</div>
								</div>
							</div>
						))}
				</div>
			</div>
		</section>
	)
}
