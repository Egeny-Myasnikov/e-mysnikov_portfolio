'use client'
import Image from 'next/image'
import s from './style.module.css'
import { useState } from 'react'


export const MySlider = ({ images }) => {

    const [position, setPosition] = useState(0);
    const [count, setCount] = useState(1);

    const moveRight = () => {
        if (position !== (images.length - 1) * -100) {
            setPosition(position - 100)
            setCount(count + 1)
            return
        }
        setPosition(0)
        setCount(1)

    }
    const moveLeft = () => {
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

            <div style={{ transform: `translateX(${position}%)` }} className={s.sliderContainer}>
                {images.map((img, idx) => (
                    <Image
                        alt={idx}
                        className={s.img}
                        src={img}
                        width={'100%'}
                        key={idx}
                    />
                ))}
            </div>
            <span className={s.count}>{count} / {images.length}</span>
            <button onClick={moveLeft} className={`${s.btn} ${s.btnControll} ${s.btnControllLeft}`}>&#10094;</button>
            <button onClick={moveRight} className={`${s.btn} ${s.btnControll} ${s.btnControllRight}`}>&#10095;</button>
        </div>
    )
}
