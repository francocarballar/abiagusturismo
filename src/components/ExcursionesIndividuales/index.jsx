import React, { useState, useEffect } from 'react'
import styles from './ExcursionesIndividuales.module.css'
import { useEventListener } from 'usehooks-ts'
import { ButtonReservar } from '../ButtonReservar'

function ExcursionesIndividuales (props) {
  const [indexImg, setIndexImg] = useState(0)
  const img = props.images
  function changeImg () {
    clearInterval(intervalo)
    if (indexImg < props.nroImages) {
      setIndexImg(indexImg + 1)
    } else {
      setIndexImg(0)
    }
    document.slider.src = img[indexImg]
  }
  let intervalo
  useEffect(() => {
    clearInterval(intervalo)
    intervalo = setInterval(changeImg, 3000)
  })
  const clickRightArrow = () => {
    clearInterval(intervalo)
    if (indexImg < props.nroImages) {
      setIndexImg(indexImg + 1)
    } else {
      setIndexImg(0)
    }
    document.slider.src = img[indexImg]
  }
  const clickLeftArrow = () => {
    clearInterval(intervalo)
    if (indexImg <= props.nroImages && indexImg !== 0) {
      setIndexImg(indexImg - 1)
    } else if (indexImg === 0) {
      setIndexImg(props.nroImages)
    }
    document.slider.src = img[indexImg]
  }
  const [stateScroll, setScroll] = useState(0)
  const windowScroll = () => {
    const scroll = window.scrollY
    setScroll(scroll)
    if (scroll < 265) {
      clearInterval(intervalo)
    }
  }
  useEventListener('scroll', windowScroll)
  return (
    <section className={styles.section__excursiones__individuales}>
      <h2>{props.title}</h2>
      <div>{props.p}</div>
      <div>
        <ul className={styles.ul}>{props.li}</ul>
      </div>
      <div>
        {props.subtitle}
        {props.secondParagraph}
        <ul className={styles.ul}>{props.secondLi}</ul>
      </div>
      <ButtonReservar />
      <figure className={styles.figure__container_slider}>
        <img
          src='/media/icon/left-arrow.svg'
          alt='flecha izquierda de color blanca'
          id={styles.left_arrow}
          onClick={clickLeftArrow}
        />
        <img
          src={img[0]}
          name='slider'
          alt='slider con imágenes de las excursiones'
        />
        <img
          src='/media/icon/right-arrow.svg'
          alt='flecha derecha de color blanca'
          id={styles.right_arrow}
          onClick={clickRightArrow}
        />
      </figure>
    </section>
  )
}

export { ExcursionesIndividuales }
