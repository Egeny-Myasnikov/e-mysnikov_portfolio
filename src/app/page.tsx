import Contact from '../components/contact/Contact'
import Hero from '../components/hero/Hero'
import Projects from '../components/projects/Projects'
import Skills from '../components/skills/Skills'

export default function MainPage() {
	return (
		<main className='page-transition'>
			<Hero />
			<Skills />
			<Projects />
			<Contact />
		</main>
	)
}
