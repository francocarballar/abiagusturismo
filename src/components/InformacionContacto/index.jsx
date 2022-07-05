import React from 'react'
import styles from './InformacionContacto.module.css'

function InformacionContacto () {
  return (
    <React.Fragment>
      <div className={styles.container__informacion_contacto}>
        <h3>Dirección</h3>
        <p>Av. Bandera de los Andes 3114, Mendoza, Argentina.</p>
        <h3>Email</h3>
        <p>abiagusturismo@gmail.com</p>
        <h3>Teléfono</h3>
        <p>+542614725286</p>
      </div>
    </React.Fragment>
  )
}

export { InformacionContacto }
