'use client'

import { skills } from '@/data/portfolio-data'
import { ProgressBar } from '../progressBar/ProgressBar'
import { TitleSection } from '../titleSection/TitleSection'
import s from './skills.module.css'

export default function Skills() {
	const categories = {
		frontend: 'Frontend',
		backend: 'Backend',
		tools: 'Инструменты',
	}

	return (
		<section id='skills' className={`${s.skills}`}>
			<div className={`${s.container} container`}>
				<TitleSection variant={'primary'}> Навыки </TitleSection>

				<div className={s.grid}>
					{Object.entries(categories).map(([key, categoryTitle]) => (
						<div key={key} className={s.category}>
							<h3 className={s.categoryTitle}>{categoryTitle}</h3>
							<div className={s.skillsList}>
								{skills
									.filter(skill => skill.category === key)
									.map(skill => (
										<div key={skill.name} className={s.skill}>
											<div className={s.skillHeader}>
												<span className={s.skillName}>{skill.name}</span>
												<span className={s.skillLevel}>{skill.level}%</span>
												<ProgressBar
													fillPercentage={skill.level}
													className={`${s.skillProgressBar}`}
												/>
											</div>
										</div>
									))}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
