import React from 'react'
import Head from 'next/head'
import styles from '@src/styles/Combos.module.css'
import { TitleContainer } from '@components/TitleContainer'
import { ContainerCombos } from '@components/ContainerCombos'
import { combos } from '@src/db'

export default function Combos () {
  return (
    <>
      <Head>
        <title>Combos | Abiagus Turismo</title>
        <meta
          name='description'
          content='Combos imperdibles de excursiones en Mendoza. Abiagus Turismo tiene las mejores ofertas de viajes'
        />
      </Head>
      <main className={styles.main}>
        <TitleContainer title='COMBOS' />
        <section className={styles.container_combos}>
          <ContainerCombos array={combos} />
        </section>
      </main>
    </>
  )
}
