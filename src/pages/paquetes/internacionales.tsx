import React from 'react'
import Head from 'next/head'
import styles from '@src/styles/Combos.module.css'
import { TitleContainer } from '@components/TitleContainer'
import { ContainerCombos } from '@components/ContainerCombos'
import { internacionales } from '@src/db'

export default function Internacionales () {
  return (
    <>
      <Head>
        <title>Paquetes internacionales | Abiagus Turismo</title>
        <meta
          name='description'
          content='Promociones imperdibles de excursiones y hoteles en el mundo. Abiagus Turismo tiene las mejores ofertas de viajes'
        />
      </Head>
      <main className={styles.main}>
        <TitleContainer title='PROMOCIONES INTERNACIONALES' />
        <section className={styles.container_combos}>
          <ContainerCombos array={internacionales} />
        </section>
      </main>
    </>
  )
}
