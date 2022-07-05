import React from 'react'
import Head from 'next/head'
import { Contacto } from '/src/components/Contacto/index.jsx'
import { NuestraFilosofia } from '/src/components/NuestraFilosofia/index.jsx'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Abiagus Turismo | Excursiones en Mendoza</title>
        <meta name="description" content="Abiagus Turismo es una agencia de viajes que ofrece turismo local, nacional e internacional. Contratación de hoteles, transporte y excursiones en Mendoza, Argentia tales como: Alta Montaña, Bodegas, City Tour, Cacheuta, Valle de Uco, Villavicencio, Cañón del Atuel, y en San Rafael, Las Leñas y Los Reyunos" />
      </Head>
      <main>
        <section className={styles.section__main} rel='preload'>
          <h1>ABIAGUS</h1>
          <h2>SERVICIOS TURÍSTICOS</h2>
        </section>
        <NuestraFilosofia />
        <section className={styles.section__phase} rel='preload'>
          <p>"EL VINO ES MAGIA, TRABAJO Y PASIÓN, VENÍ A MENDOZA Y DESCUBRÍ CUÁL ES PARA VOS"</p>
        </section>
        <Contacto />
      </main>
    </>
  )
}