import { type Client } from '@src/types'
import Image from 'next/image'
import React from 'react'
import styles from './Clientes.module.css'

function Clientes ({ img, testimonio, nombre }: Client) {
  return (
    <div className={styles.div__customer}>
      <Image
        src={img}
        alt='Es una foto de perfil de una persona'
        width={340}
        height={340}
      />
      <p>{testimonio}</p>
      <h3>{nombre}</h3>
    </div>
  )
}

export { Clientes }
