'use client'
import Image from 'next/image'
import { useState } from 'react'
import s from './slider.module.css'

interface SliderProps {
	images?: string[]
}

export const Slider = ({ images = [] }: SliderProps) => {
	const [position, setPosition] = useState<number>(0)
	const [count, setCount] = useState<number>(1)
	const [animationCount, setAnimationCount] = useState<number>(0)

	const moveRight = (): void => {
		if (position !== (images.length - 1) * -100) {
			setPosition(position - 100)
			setAnimationCount(prev => prev + 360)
			setCount(count + 1)
			return
		}
		setPosition(0)
		setAnimationCount(0)
		setCount(1)
	}
	const moveLeft = (): void => {
		if (position < 0) {
			setPosition(position + 100)
			setAnimationCount(prev => prev - 360)
			setCount(count - 1)
			return
		}
		setPosition((images.length - 1) * -100)
		setAnimationCount(0)
		setCount(images.length)
	}

	return (
		<div className={s.sliderWrap}>
			<div className={`${s.control}`}>
				<button
					disabled={images.length < 2}
					type='button'
					onClick={moveLeft}
					className={`${s.btn} ${s.btnControl} ${s.btnControlLeft}`}
				>
					&#10094;
				</button>

				<span
					style={{ '--rotate': `${animationCount}deg` } as React.CSSProperties}
					className={s.count}
				>
					{count} / {images.length}
				</span>

				<button
					disabled={images.length < 2}
					type='button'
					onClick={moveRight}
					className={`${s.btn} ${s.btnControl} ${s.btnControlRight}`}
				>
					&#10095;
				</button>
			</div>

			<div
				style={{ transform: `translateX(${position}%)` }}
				className={s.sliderContainer}
			>
				{images.length !== 0 &&
					images.map((img, idx) => (
						<Image
							alt={`Slide ${idx + 1}`}
							className={s.img}
							src={img}
							width={1000}
							height={1000}
							sizes='2200px'
							quality={75}
							placeholder='empty'
							key={idx}
						/>
					))}
			</div>
		</div>
	)
}
