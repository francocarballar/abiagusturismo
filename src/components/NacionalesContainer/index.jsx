import React from 'react'
import styles from './NacionalesContainer.module.css'
import { ButtonMercadoPago } from '../ButtonMercadoPago'

function NacionalesContainer (props) {
  return (
    <section className={styles.section__excursiones}>
      <div className={styles.div__container_excursiones}>
        <div>
          <h3>{props.title}</h3>
          <p>{props.description}</p>
        </div>
        <figure>
          <img src={props.img} alt={props.alt} />
          <ButtonMercadoPago link={props.linkPago} />
        </figure>
      </div>
    </section>
  )
}

export { NacionalesContainer }
