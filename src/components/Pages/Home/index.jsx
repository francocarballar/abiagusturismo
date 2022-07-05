import React from 'react'
import './Home.css'
import { Contacto } from '../../Contacto'
import { NuestraFilosofia } from '../../NuestraFilosofia'

function Home () {
  return (
    <React.Fragment>
      <main>
        <section className='section__main' rel='preload'>
          <h1>ABIAGUS</h1>
          <h2>SERVICIOS TURÍSTICOS</h2>
        </section>
        <NuestraFilosofia />
        <section className='section__phase' rel='preload'>
          <p>"EL VINO ES MAGIA, TRABAJO Y PASIÓN, VENÍ A MENDOZA Y DESCUBRÍ CUÁL ES PARA VOS"</p>
        </section>
        <Contacto />
      </main>
    </React.Fragment>
  )
}

export { Home }
