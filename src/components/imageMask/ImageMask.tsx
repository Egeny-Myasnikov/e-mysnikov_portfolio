import { useEffect, useRef, useState } from 'react'
import styles from './icons.module.css'

interface ImageMaskProps {
	size?: 'small' | 'medium' | 'large' | 'xlarge' | number
	imageSrc?: string
	className?: string
	responsive?: boolean
	delay?: number
	animationType?: 'fly' | 'scale' | 'fade'
}

export const ImageMask: React.FC<ImageMaskProps> = ({
	size = 'medium',
	imageSrc = '/ava-from-vk.jpg',
	className = '',
	responsive = false,
	delay = 0,
	animationType = 'fly',
}) => {
	const [isMounted, setIsMounted] = useState(false)
	const containerRef = useRef<HTMLDivElement>(null)

	const getDimensions = () => {
		const sizeMap = {
			small: { width: 200, height: 231 },
			medium: { width: 300, height: 347 },
			large: { width: 450, height: 520 },
			xlarge: { width: 600, height: 693 },
		}

		if (typeof size === 'number') {
			const aspectRatio = 450 / 520
			const width = size
			const height = Math.round(size / aspectRatio)
			return { width, height }
		}

		return sizeMap[size] || sizeMap.medium
	}

	useEffect(() => {
		const timer = setTimeout(() => {
			setIsMounted(true)
		}, delay)

		return () => clearTimeout(timer)
	}, [delay])

	const { width, height } = getDimensions()
	const viewBox = '0 0 450 520'

	const diamondPaths = [
		{
			id: 1,
			d: 'M225.426 98L280.851 130V194L225.426 226L170 194V130L225.426 98Z',
		},
		{ id: 2, d: 'M168.426 0L223.851 32V96L168.426 128L113 96V32L168.426 0Z' },
		{
			id: 3,
			d: 'M168.426 392L223.851 424V488L168.426 520L113 488V424L168.426 392Z',
		},
		{
			id: 4,
			d: 'M281.426 392L336.851 424V488L281.426 520L226 488V424L281.426 392Z',
		},
		{ id: 5, d: 'M281.426 0L336.851 32V96L281.426 128L226 96V32L281.426 0Z' },
		{
			id: 6,
			d: 'M281.426 196L336.851 228V292L281.426 324L226 292V228L281.426 196Z',
		},
		{
			id: 7,
			d: 'M394.426 196L449.851 228V292L394.426 324L339 292V228L394.426 196Z',
		},
		{
			id: 8,
			d: 'M55.4256 196L110.851 228V292L55.4256 324L0 292V228L55.4256 196Z',
		},
		{
			id: 9,
			d: 'M338.426 294L393.851 326V390L338.426 422L283 390V326L338.426 294Z',
		},
		{
			id: 10,
			d: 'M225.426 294L280.851 326V390L225.426 422L170 390V326L225.426 294Z',
		},
		{
			id: 11,
			d: 'M168.426 196L223.851 228V292L168.426 324L113 292V228L168.426 196Z',
		},
		{
			id: 12,
			d: 'M112.426 98L167.851 130V194L112.426 226L57 194V130L112.426 98Z',
		},
		{
			id: 13,
			d: 'M338.426 98L393.851 130V194L338.426 226L283 194V130L338.426 98Z',
		},
		{
			id: 14,
			d: 'M112.426 294L167.851 326V390L112.426 422L57 390V326L112.426 294Z',
		},
	]

	return (
		<div
			ref={containerRef}
			className={`${styles.container} ${className} ${
				isMounted ? styles.mounted : ''
			} ${styles[animationType]}`}
		>
			<svg
				width={responsive ? '100%' : width}
				height={responsive ? 'auto' : height}
				viewBox={viewBox}
				className={styles.svg}
			>
				<defs>
					<pattern
						id='imagePattern'
						patternUnits='userSpaceOnUse'
						width='450'
						height='520'
					>
						<image
							href={imageSrc}
							width='450'
							height='520'
							preserveAspectRatio='xMidYMid slice'
						/>
					</pattern>

					<mask id='shapeMask'>
						{diamondPaths.map(diamond => (
							<path
								key={diamond.id}
								d={diamond.d}
								fill='white'
								className={styles.diamond}
								style={{
									animationDelay: isMounted ? `${diamond.id * 50}ms` : '0ms',
								}}
							/>
						))}
					</mask>
				</defs>

				<rect
					width='450'
					height='520'
					fill='url(#imagePattern)'
					mask='url(#shapeMask)'
					className={styles.image}
					style={{
						animationDelay: isMounted
							? `${diamondPaths.length * 50 + 100}ms`
							: '0ms',
					}}
				/>

				{diamondPaths.map(diamond => (
					<path
						key={`stroke-${diamond.id}`}
						d={diamond.d}
						fill='none'
						className={styles.diamondStroke}
						style={{
							animationDelay: isMounted ? `${diamond.id * 50}ms` : '0ms',
						}}
					/>
				))}
			</svg>
		</div>
	)
}
