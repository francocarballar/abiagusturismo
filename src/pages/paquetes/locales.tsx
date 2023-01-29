import React from 'react'
import Head from 'next/head'
import styles from '@src/styles/Combos.module.css'
import { TitleContainer } from '@components/TitleContainer'
import { ContainerCombos } from '@components/ContainerCombos'
import { locales } from '@src/db'

export default function Locales () {
  return (
    <>
      <Head>
        <title>Paquetes locales en Mendoza | Abiagus Turismo</title>
        <meta
          name='description'
          content='Promociones imperdibles de excursiones y hoteles en Mendoza. Abiagus Turismo tiene las mejores ofertas de viajes'
        />
      </Head>
      <main className={styles.main}>
        <TitleContainer title='PROMOCIONES EN MENDOZA' />
        <section className={styles.container_combos}>
          <ContainerCombos array={locales} />
        </section>
      </main>
    </>
  )
}
