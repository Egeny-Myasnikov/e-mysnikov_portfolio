import { ContactInfo, Project, Skill } from '@/types/portfolio'

export const projects: Project[] = [
	{
		id: 1,
		title: 'Аутентификация Full-Stack',
		description: 'Система аутентификации с Next.js, NestJS, PostgreSQL и Redis',
		technologies: ['Next.js', 'NestJS', 'PostgreSQL', 'Redis', 'Docker'],
		images: [
			'/projects/fullAuth/homePage.png',
			'/projects/fullAuth/login.png',
			'/projects/fullAuth/register.png',
		],
		githubUrl: 'https://github.com/Egeny-Myasnikov/auth-nestjs-server',
	},
	{
		id: 2,
		title: 'Наши люди',
		description: 'Сайт event агентства',
		technologies: ['Next 14', 'Zustand', 'GitHub', 'Vercel'],
		liveUrl: 'https://event-agency-our-people.vercel.app/',
		githubUrl: 'https://github.com/Egeny-Myasnikov/event-agency-our-people',
		images: ['/projects/our_people/our_people.png'],
	},
	{
		id: 3,
		title: 'Taskana App ',
		description: 'Список задач',
		technologies: ['React 19', 'GitHub', 'Vercel'],
		liveUrl: 'https://taskana-app-phi.vercel.app/',
		githubUrl: 'https://github.com/Egeny-Myasnikov/taskana-app',
		images: [
			'/projects/taskanaApp/taskana1-dark.png',
			'/projects/taskanaApp/taskana1-light.png',
			'/projects/taskanaApp/taskana2-dark.png',
			'/projects/taskanaApp/taskana2-light.png',
			'/projects/taskanaApp/taskana3-light.png',
		],
	},
	{
		id: 4,
		title: 'Портфолио сайт',
		description: 'Персональный сайт-портфолио с автоматическим деплоем на vps',
		technologies: ['Next.js 15', 'TypeScript', 'Docker', 'GitHub Actions'],
		liveUrl: 'https://e-myasnikov.ru',
		images: ['/projects/portfolio/portfolio.png'],
	},
]

export const skills: Skill[] = [
	// Frontend
	{ name: 'HTML/CSS', category: 'frontend', level: 90 },
	{ name: 'JavaScript', category: 'frontend', level: 85 },
	{ name: 'TypeScript', category: 'frontend', level: 80 },
	{ name: 'React', category: 'frontend', level: 85 },
	{ name: 'Next.js', category: 'frontend', level: 80 },

	// Backend
	{ name: 'Node.js', category: 'backend', level: 75 },
	{ name: 'NestJS', category: 'backend', level: 70 },
	{ name: 'PostgreSQL', category: 'backend', level: 70 },

	// Tools
	{ name: 'Git', category: 'tools', level: 85 },
	{ name: 'Docker', category: 'tools', level: 75 },
	{ name: 'Figma', category: 'tools', level: 70 },
]

export const contactInfo: ContactInfo = {
	email: 'fl-jenya@yandex.ru',
	telegram: '@fljenya',
	github: 'Egeny-Myasnikov',
}
