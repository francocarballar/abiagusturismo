import React from 'react'
import Head from 'next/head'
import styles from '../../styles/Combos.module.css'
import { TitleContainer } from '../../src/components/TitleContainer'
import { ButtonMercadoPago } from '../../src/components/ButtonMercadoPago'

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
          <figure className={styles.figure}>
            <img
              src='/media/paquetes/locales/PROMO-1.png'
              alt='Promoción número uno de las excursiones y hoteles en Mendoza'
            />
            <ButtonMercadoPago link='https://mpago.la/2HDQYiv' />
          </figure>
          <figure className={styles.figure}>
            <img
              src='/media/paquetes/locales/PROMO-2.png'
              alt='Promoción número dos de las excursiones y hoteles en Mendoza'
            />
            <ButtonMercadoPago link='https://mpago.la/2uo7k89' />
          </figure>
          <figure className={styles.figure}>
            <img
              src='/media/paquetes/locales/PROMO-3.png'
              alt='Promoción número tres de las excursiones y hoteles en Mendoza'
            />
            <ButtonMercadoPago link='https://mpago.la/27xJHfH' />
          </figure>
          <figure className={styles.figure}>
            <img
              src='/media/paquetes/locales/PROMO-4.png'
              alt='Promoción número cuatro de las excursiones y hoteles en Mendoza'
            />
            <ButtonMercadoPago link='https://mpago.la/1NH8B8v' />
          </figure>
          <figure className={styles.figure}>
            <img
              src='/media/paquetes/locales/PROMO-5.png'
              alt='Promoción número cinco de las excursiones y hoteles en Mendoza'
            />
            <ButtonMercadoPago link='https://mpago.la/1HddkM' />
          </figure>
          <figure className={styles.figure}>
            <img
              src='/media/paquetes/locales/PROMO-6.png'
              alt='Promoción número seis de las excursiones y hoteles en Mendoza'
            />
            <ButtonMercadoPago link='https://mpago.la/1XgqLwT' />
          </figure>
        </section>
      </main>
    </>
  )
}
