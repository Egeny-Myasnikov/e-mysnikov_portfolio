'use client'
import Image from 'next/image'
import s from './style.module.css'
import { useState } from 'react'

interface MySliderProps {
	images?: string[]
}

export const MySlider = ({ images = [] }: MySliderProps) => {
	const [position, setPosition] = useState<number>(0)
	const [count, setCount] = useState<number>(1)

	const moveRight = (): void => {
		if (position !== (images.length - 1) * -100) {
			setPosition(position - 100)
			setCount(count + 1)
			return
		}
		setPosition(0)
		setCount(1)
	}
	const moveLeft = (): void => {
		if (position < 0) {
			setPosition(position + 100)
			setCount(count - 1)
			return
		}
		setPosition((images.length - 1) * -100)
		setCount(images.length)
	}

	return (
		<div className={s.sliderWrap}>
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
							width={100}
							height={100}
							key={idx}
						/>
					))}
			</div>
			<span className={s.count}>
				{count} / {images.length}
			</span>
			<button
				type='button'
				onClick={moveLeft}
				className={`${s.btn} ${s.btnControl} ${s.btnControlLeft}`}
			>
				&#10094;
			</button>
			<button
				type='button'
				onClick={moveRight}
				className={`${s.btn} ${s.btnControl} ${s.btnControlRight}`}
			>
				&#10095;
			</button>
		</div>
	)
}
