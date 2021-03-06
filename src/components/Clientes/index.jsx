import React from 'react'
import styles from './Clientes.module.css'

function Clientes (props) {
  return (
    <div className={styles.div__customer}>
      <img src={props.img} alt='Es una foto de perfil de una persona' />
      <p>{props.testimonio}</p>
      <h3>{props.nombre}</h3>
    </div>
  )
}

export { Clientes }
