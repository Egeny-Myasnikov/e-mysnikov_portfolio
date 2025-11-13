'use client'
import { useCallback, useLayoutEffect, useState } from 'react'
import { Icon } from '../icon/Icon'
import s from './themeSwitcher.module.css'

type Theme = 'dark' | 'light'

export const ThemeSwitcher = () => {
	const [theme, setTheme] = useState<Theme>('dark')
	const [isMounted, setIsMounted] = useState(false)

	const applyThemeToDocument = useCallback((newTheme: Theme) => {
		if (typeof document === 'undefined') return

		const html = document.documentElement
		html.classList.toggle('dark', newTheme === 'dark')
		html.classList.toggle('light', newTheme === 'light')
		html.setAttribute('data-theme', newTheme)
	}, [])

	useLayoutEffect(() => {
		const timer = setTimeout(() => {
			try {
				const savedTheme = localStorage.getItem('theme') as Theme | null

				if (savedTheme && (savedTheme === 'dark' || savedTheme === 'light')) {
					setTheme(savedTheme)
					applyThemeToDocument(savedTheme)
				} else if (typeof window !== 'undefined') {
					const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
					const systemTheme: Theme = mediaQuery.matches ? 'dark' : 'light'
					setTheme(systemTheme)
					applyThemeToDocument(systemTheme)
				}
			} catch (error) {
				console.error('Error initializing theme:', error)
				setTheme('dark')
				applyThemeToDocument('dark')
			}

			setIsMounted(true)
		}, 0)

		return () => clearTimeout(timer)
	}, [applyThemeToDocument])

	useLayoutEffect(() => {
		if (!isMounted || typeof window === 'undefined') return

		const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

		const handleSystemThemeChange = (e: MediaQueryListEvent) => {
			const savedTheme = localStorage.getItem('theme') as Theme | null
			if (!savedTheme) {
				const systemTheme: Theme = e.matches ? 'dark' : 'light'
				setTheme(systemTheme)
				applyThemeToDocument(systemTheme)
			}
		}

		mediaQuery.addEventListener('change', handleSystemThemeChange)
		return () =>
			mediaQuery.removeEventListener('change', handleSystemThemeChange)
	}, [applyThemeToDocument, isMounted])

	const handleThemeToggle = useCallback(() => {
		const newTheme: Theme = theme === 'dark' ? 'light' : 'dark'
		setTheme(newTheme)
		applyThemeToDocument(newTheme)
		localStorage.setItem('theme', newTheme)
	}, [theme, applyThemeToDocument])

	if (!isMounted) {
		return (
			<label className={s.themeSwitcher} htmlFor='themeSwitch'>
				<div className={s.checkbox} />
				<span className={s.slider}>
					<Icon name='MoonIcon' />
				</span>
			</label>
		)
	}

	return (
		<label className={s.themeSwitcher} htmlFor='themeSwitch'>
			<input
				className={s.checkbox}
				type='checkbox'
				id='themeSwitch'
				checked={theme === 'dark'}
				onChange={handleThemeToggle}
				aria-label={`Переключиться на ${
					theme === 'dark' ? 'light' : 'dark'
				} режим`}
			/>
			<span className={s.slider}>
				{theme === 'dark' ? <Icon name='MoonIcon' /> : <Icon name='SunIcon' />}
			</span>
		</label>
	)
}
