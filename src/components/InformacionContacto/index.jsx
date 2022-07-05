import React from 'react'
import './InformacionContacto.css'

function InformacionContacto () {
  return (
    <React.Fragment>
      <div className='container__informacion-contacto'>
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
