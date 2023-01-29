import React from 'react'
import Head from 'next/head'
import styles from '@src/styles/Combos.module.css'
import { TitleContainer } from '@components/TitleContainer'
import { ContainerPackages } from '@components/ContainerPackages'
import { nacionales } from '@src/db'

export default function Nacionales () {
  return (
    <>
      <Head>
        <title>Paquetes nacionales | Abiagus Turismo</title>
        <meta
          name='description'
          content='Promociones imperdibles de excursiones y hoteles en Argentina. Abiagus Turismo tiene las mejores ofertas de viajes'
        />
      </Head>
      <main className={styles.main}>
        <TitleContainer title='PROMOCIONES NACIONALES' />
        <section className={styles.container_combos}>
          <ContainerPackages array={nacionales} />
        </section>
      </main>
    </>
  )
}
