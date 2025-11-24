import { create } from 'zustand'

export interface IProject {
	_id: string
	title: string
	description: string
	images: string[]
	technologies: string[]
	githubUrl?: string
	liveUrl?: string
	createdAt?: string | Date
	updatedAt?: string | Date
}
export type SerializeProject = ReturnType<typeof serializeProject>
const serializeProject = (project: IProject): IProject => ({
	...project,
	_id: project._id.toString(),
	createdAt: project.createdAt?.toString(),
	updatedAt: project.updatedAt?.toString(),
})
export interface ProjectsState {
	projects: IProject[]
	isLoading: boolean
	error: string | null
	fetchProjects: () => Promise<void>
}

export const useProjectsStore = create<ProjectsState>(set => ({
	projects: [],
	isLoading: false,
	error: null,

	fetchProjects: async () => {
		const res = await fetch('api/projects')
		const projects = await res.json()

		set({ projects })
	},
}))
