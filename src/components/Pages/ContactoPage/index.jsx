import React from 'react'
import './ContactoPage.css'
import { Contacto } from '../../Contacto'
import { TitleContainer } from '../../TitleContainer'
import { MapaContacto } from '../../MapaContacto'

function ContactoPage () {
  return (
    <main>
      <TitleContainer title='CONTACTO' />
      <MapaContacto />
      <Contacto
        h2Display='none'
        sectionBackground='var(--tertiary-color)'
        orderContainer__informacionContacto='2'
        padding = '65px'
      />
    </main>
  )
}

export { ContactoPage }
