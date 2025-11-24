import '@/assets/styles/global.css'
import type { Metadata } from 'next'
import {
	Inter,
	League_Spartan,
	Roboto_Mono,
	Rubik_Vinyl,
} from 'next/font/google'
import Header from '../components/header/Header'
import { FetchingProjects } from '../components/FetchingProjects'

const inter = Inter({
	subsets: ['cyrillic', 'latin'],
	display: 'swap',
	variable: '--font-inter',
	preload: true,
})

const robotoMono = Roboto_Mono({
	subsets: ['cyrillic', 'latin'],
	display: 'swap',
	variable: '--font-roboto-mono',
})
const rubik = Rubik_Vinyl({
	subsets: ['cyrillic', 'latin'],
	display: 'swap',
	weight: '400',
	variable: '--font-rubik',
	preload: true,
})
const leagueSpartan = League_Spartan({
	subsets: ['latin', 'latin-ext'],
	display: 'swap',
	weight: '400',
	variable: '--font-leagueSpartan',
})

export const metadata: Metadata = {
	title: 'Евгений Мясников - Frontend Developer',
	description: 'Персональное портфолио фронтенд разработчика',
	keywords: ['frontend', 'React', 'Next.js', 'разработчик'],
	openGraph: {
		title: 'Евгений Мясников - Frontend Developer',
		description: 'Персональное портфолио фронтенд разработчика',
		type: 'website',
	},
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html
			data-scroll-behavior='smooth'
			lang='ru'
			className={`${inter.variable} ${robotoMono.variable} ${rubik.variable} ${leagueSpartan.variable}`}
		>
			<body>
				<FetchingProjects>
					<Header />
					{children}
				</FetchingProjects>
			</body>
		</html>
	)
}
