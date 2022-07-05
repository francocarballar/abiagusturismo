import React, { useState, useEffect } from 'react'
import './ExcursionesIndividuales.css'
import { ButtonReservar } from '../ButtonReservar'
import leftArrow from '../../assets/icon/left-arrow.svg'
import rightArrow from '../../assets/icon/right-arrow.svg'

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
  useEffect(function () {
    clearInterval(intervalo)
    intervalo = setInterval(changeImg, 4000)
  })
  const clickRightArrow = () => {
    if (indexImg < props.nroImages) {
      setIndexImg(indexImg + 1)
    } else {
      setIndexImg(0)
    }
    document.slider.src = img[indexImg]
  }
  const clickLeftArrow = () => {
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
  window.addEventListener('scroll', windowScroll)
  return (
    <section className='section__excursiones--individuales'>
      <h2>{props.title}</h2>
      <div>{props.p}</div>
      <div>
        <ul className='ul'>{props.li}</ul>
      </div>
      <ButtonReservar />
      <figure className='figure__container-slider'>
        <img
          src={leftArrow}
          alt='flecha izquierda de color blanca'
          id='left-arrow'
          onClick={clickLeftArrow}
        />
        <img
          src={img[0]}
          name='slider'
          alt='slider con imágenes de las excursiones'
        />
        <img
          src={rightArrow}
          alt='flecha derecha de color blanca'
          id='right-arrow'
          onClick={clickRightArrow}
        />
      </figure>
    </section>
  )
}

export { ExcursionesIndividuales }
