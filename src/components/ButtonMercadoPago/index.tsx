import React from 'react'
import styles from './ButtonMercadoPago.module.css'
import { type BtnMP } from '@src/types'

function ButtonMercadoPago ({ link }: BtnMP) {
  return (
    <a
      href={link}
      target='_blank'
      rel='noreferrer'
      className={styles.button_mercadoPago}
    >
      Comprar
    </a>
  )
}

export { ButtonMercadoPago }
