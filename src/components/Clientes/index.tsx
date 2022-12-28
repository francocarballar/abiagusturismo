import { Client } from '@src/types'
import React from 'react'
import styles from './Clientes.module.css'

function Clientes ({ img, testimonio, nombre }: Client) {
  return (
    <div className={styles.div__customer}>
      <img src={img} alt='Es una foto de perfil de una persona' />
      <p>{testimonio}</p>
      <h3>{nombre}</h3>
    </div>
  )
}

export { Clientes }
