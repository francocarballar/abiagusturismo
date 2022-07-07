import React from 'react'
import styles from './ButtonMercadoPago.module.css'

function ButtonMercadoPago ({ link }) {
  return (
    <a href={link} target='_blank' className={styles.button_mercadoPago}>
      Comprar
    </a>
  )
}

export { ButtonMercadoPago }
