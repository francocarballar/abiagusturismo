import React from 'react'
import styles from './ExcursionesIndividuales.module.css'
import { ButtonReservar } from '@components/ButtonReservar'
import { Slider } from '@components/Slider'
import { TypeExcursionesIndividuales } from '@src/types'

function ExcursionesIndividuales ({
  images,
  nroImages,
  title,
  p,
  li,
  subtitle,
  secondParagraph,
  secondLi
}: TypeExcursionesIndividuales) {
  const alt = `slider con imágenes de las excursiones de ${title}`
  return (
    <section className={styles.section__excursiones__individuales}>
      <h2>{title}</h2>
      <div>{p}</div>
      <div>
        <ul className={styles.ul}>{li}</ul>
      </div>
      <div>
        {subtitle}
        {secondParagraph}
        <ul className={styles.ul}>{secondLi}</ul>
      </div>
      <ButtonReservar />
      <Slider images={images} nroImages={nroImages} alt={alt} />
    </section>
  )
}

export { ExcursionesIndividuales }
