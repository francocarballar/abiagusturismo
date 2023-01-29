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
        <link
          rel='preconnect'
          href='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3350.024576148925!2d-68.80095738508436!3d-32.89751847673239!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x967e0f0389e5c117%3A0x2ef63d89517c77f!2sAbiagus%20Turismo!5e0!3m2!1ses-419!2sar!4v1641932328986!5m2!1ses-419!2sar'
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
