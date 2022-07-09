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
              loading='lazy'
              src='https://res.cloudinary.com/abiagus-turismo/image/upload/v1657404263/combos/Combo-1_pprl5s.png'
              alt='Combo número uno de las excursiones en Mendoza'
            />
            <ButtonMercadoPago link='https://mpago.la/2iMFah3' />
          </figure>
          <figure className={styles.figure}>
            <img
              loading='lazy'
              src='https://res.cloudinary.com/abiagus-turismo/image/upload/v1657404263/combos/Combo-2_qakfcb.png'
              alt='Combo número dos de las excursiones en Mendoza'
            />
            <ButtonMercadoPago link='https://mpago.la/1erdiEE' />
          </figure>
          <figure className={styles.figure}>
            <img
              loading='lazy'
              src='https://res.cloudinary.com/abiagus-turismo/image/upload/v1657404264/combos/Combo-3_ljrowe.png'
              alt='Combo número tres de las excursiones en Mendoza'
            />
            <ButtonMercadoPago link='https://mpago.la/1pykU3q' />
          </figure>
          <figure className={styles.figure}>
            <img
              loading='lazy'
              src='https://res.cloudinary.com/abiagus-turismo/image/upload/v1657404264/combos/Combo-4_ht5rdq.png'
              alt='Combo número cuatro de las excursiones en Mendoza'
            />
            <ButtonMercadoPago link='https://mpago.la/2pD8xNW' />
          </figure>
          <figure className={styles.figure}>
            <img
              loading='lazy'
              src='https://res.cloudinary.com/abiagus-turismo/image/upload/v1657404264/combos/Combo-5_djdtwm.png'
              alt='Combo número cinco de las excursiones en Mendoza'
            />
            <ButtonMercadoPago link='https://mpago.la/23pkacu' />
          </figure>
          <figure className={styles.figure}>
            <img
              loading='lazy'
              src='https://res.cloudinary.com/abiagus-turismo/image/upload/v1657404264/combos/Combo-6_lgo4lb.png'
              alt='Combo número seis de las excursiones en Mendoza'
            />
            <ButtonMercadoPago link='https://mpago.la/1GxFDbJ' />
          </figure>
        </section>
      </main>
    </>
  )
}
