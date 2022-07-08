import React from 'react'
import Head from 'next/head'
import styles from '../../styles/Combos.module.css'
import { TitleContainer } from '../../src/components/TitleContainer'
import { NacionalesContainer } from '../../src/components/NacionalesContainer'
import { ButtonMercadoPago } from '../../src/components/ButtonMercadoPago'

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
          <figure className={styles.figure}>
            <img
              src='/media/paquetes/nacionales/Carlos-Paz.png'
              alt='Promoción del viaje a Carlos Paz'
            />
            <ButtonMercadoPago link='https://mpago.la/1FpsLC1' />
          </figure>
        </section>
      </main>
    </>
  )
}
