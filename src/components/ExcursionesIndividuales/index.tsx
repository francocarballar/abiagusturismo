import React from 'react'
import styles from './ExcursionesIndividuales.module.css'
import { ButtonReservar } from '@components/ButtonReservar'
import { ComponentCarousel } from '@components/ComponentCarousel'
import { TypeExcursionesIndividuales } from '@src/types'

function ExcursionesIndividuales ({
  data,
  title,
  p,
  li,
  subtitle,
  secondParagraph,
  secondLi
}: TypeExcursionesIndividuales) {
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
      <br />
      <br />
      <ComponentCarousel data={data} />
    </section>
  )
}

export { ExcursionesIndividuales }
