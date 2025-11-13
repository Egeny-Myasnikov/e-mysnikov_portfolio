export interface Project {
	id: number
	title: string
	description: string
	technologies: string[]
	githubUrl?: string
	liveUrl?: string
	images?: string[]
}

export interface Skill {
	name: string
	category: 'frontend' | 'backend' | 'tools'
	level: number
}

export interface ContactInfo {
	email: string
	telegram?: string
	github: string
}
