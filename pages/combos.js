import React from 'react'
import Head from 'next/head'
import styles from '../styles/Combos.module.css'
import { TitleContainer } from '../src/components/TitleContainer'
import { ButtonMercadoPago } from '../src/components/ButtonMercadoPago'

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
          <figure className={styles.figure}>
            <img
              src='/media/combos/Combo-1.png'
              alt='Combo número uno de las excursiones en Mendoza'
            />
            <ButtonMercadoPago link='https://mpago.la/2iMFah3' />
          </figure>
          <figure className={styles.figure}>
            <img
              src='/media/combos/Combo-2.png'
              alt='Combo número dos de las excursiones en Mendoza'
            />
            <ButtonMercadoPago link='https://mpago.la/1erdiEE' />
          </figure>
          <figure className={styles.figure}>
            <img
              src='/media/combos/Combo-3.png'
              alt='Combo número tres de las excursiones en Mendoza'
            />
            <ButtonMercadoPago link='https://mpago.la/1pykU3q' />
          </figure>
          <figure className={styles.figure}>
            <img
              src='/media/combos/Combo-4.png'
              alt='Combo número cuatro de las excursiones en Mendoza'
            />
            <ButtonMercadoPago link='https://mpago.la/2pD8xNW' />
          </figure>
          <figure className={styles.figure}>
            <img
              src='/media/combos/Combo-5.png'
              alt='Combo número cinco de las excursiones en Mendoza'
            />
            <ButtonMercadoPago link='https://mpago.la/23pkacu' />
          </figure>
          <figure className={styles.figure}>
            <img
              src='/media/combos/Combo-6.png'
              alt='Combo número seis de las excursiones en Mendoza'
            />
            <ButtonMercadoPago link='https://mpago.la/1GxFDbJ' />
          </figure>
        </section>
      </main>
    </>
  )
}
