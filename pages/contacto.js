import React from 'react'
import Head from 'next/head'
import { TitleContainer } from '/src/components/TitleContainer'
import { Contacto } from '/src/components/Contacto/index.jsx'
import { MapaContacto } from '/src/components/MapaContacto'

export default function Servicios () {
  return (
    <>
      <Head>
        <title>Contacto | Abiagus Turismo</title>
        <meta
          name='description'
          content='El whatsapp de Abiagus Turismo es +542614725286 y el correo electrónico es abiagusturismo@gmail.com. Puedes encontrarnos en facebook, instagram, twitter y tiktok como @abiagusturismo'
        />
      </Head>
      <main>
        <TitleContainer title='CONTACTO' />
        <MapaContacto />
        <Contacto
          h2Display='none'
          sectionBackground='var(--tertiary-color)'
          orderContainer__informacionContacto='2'
        />
      </main>
    </>
  )
}
