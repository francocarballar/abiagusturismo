/* eslint-disable @next/next/no-img-element */
import { type TypeSlider } from '@src/types'
import React, { useState, useEffect, useRef } from 'react'
import styles from './Slider.module.css'

function Slider ({ images, nroImages, alt }: TypeSlider) {
  const slider = useRef<HTMLImageElement>(null)
  const [indexImg, setIndexImg] = useState<number>(0)
  const img = images
  let intervalo
  function changeImg () {
    if (indexImg < nroImages) {
      setIndexImg(indexImg + 1)
    } else {
      setIndexImg(0)
    }
    slider.current.src = img[indexImg]
  }
  useEffect(() => {
    intervalo = setInterval(changeImg, 3000)
    return function returnIntervalo () {
      clearInterval(intervalo)
    }
  }, [indexImg])
  const clickRightArrow = () => {
    if (indexImg < nroImages) {
      setIndexImg(indexImg + 1)
      const i = indexImg + 1
      slider.current.src = img[i]
    } else {
      setIndexImg(0)
      slider.current.src = img[0]
    }
  }
  const clickLeftArrow = () => {
    if (indexImg <= nroImages && indexImg !== 0) {
      setIndexImg(indexImg - 1)
      const i = indexImg - 1
      slider.current.src = img[i]
    } else if (indexImg === 0) {
      setIndexImg(nroImages)
      slider.current.src = img[nroImages]
    }
  }

  return (
    <figure className={styles.figure__container_slider}>
      <img
        src='/media/icon/left-arrow.svg'
        alt='flecha izquierda de color blanca'
        id={styles.left_arrow}
        onClick={clickLeftArrow}
      />
      <img loading='lazy' src={img[0]} ref={slider} alt={alt} />
      <img
        src='/media/icon/right-arrow.svg'
        alt='flecha derecha de color blanca'
        id={styles.right_arrow}
        onClick={clickRightArrow}
      />
    </figure>
  )
}

export { Slider }
