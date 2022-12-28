import React from 'react'
import Head from 'next/head'
import styles from '@src/styles/Combos.module.css'
import { TitleContainer } from '@components/TitleContainer'
import { ButtonMercadoPago } from '@components/ButtonMercadoPago'

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
          <figure className={styles.figure}>
            <img
              src='/media/paquetes/internacionales/Camboriu.png'
              alt='Promoción del viaje a Camboriu'
            />
            <div className={styles.container_buttons}>
              <ButtonMercadoPago link='https://mpago.la/1uyRQ51' />
            </div>
          </figure>
        </section>
      </main>
    </>
  )
}
