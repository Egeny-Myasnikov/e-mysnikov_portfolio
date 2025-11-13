import '@/assets/styles/global.css'
import type { Metadata } from 'next'
import {
	Inter,
	Roboto_Mono,
	Rubik_Vinyl,
	League_Spartan,
} from 'next/font/google'
import Header from '../components/header/Header'

const inter = Inter({
	subsets: ['cyrillic', 'latin'],
	display: 'swap',
	variable: '--font-inter',
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
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html
			lang='ru'
			className={`${inter.variable} ${robotoMono.variable} ${rubik.variable} ${leagueSpartan.variable}`}
		>
			<body>
				<Header />
				{children}
			</body>
		</html>
	)
}
