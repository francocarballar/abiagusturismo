import React from 'react'
import Head from 'next/head'
import { TitleContainer } from '@components/TitleContainer'
import { Contacto } from '@components/Contacto'
import { MapaContacto } from '@components/MapaContacto'

export default function Servicios () {
  const color = 'var(--contact-text-color)'
  const colorSocialMedia = {
    color
  }
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
          orderContainer='2'
          textColor={color}
          colorSocialMedia={colorSocialMedia}
        />
      </main>
    </>
  )
}
