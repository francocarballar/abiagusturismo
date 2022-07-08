import React from 'react'
import Head from 'next/head'
import styles from '../../styles/Combos.module.css'
import { TitleContainer } from '../../src/components/TitleContainer'
import { ButtonItinerario } from '../../src/components/ButtonItinerario'
import { ButtonMercadoPago } from '../../src/components/ButtonMercadoPago'

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
              <ButtonItinerario
                content={
                  <>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting,
                      remaining essentially unchanged. It was popularised in the
                      1960s with the release of Letraset sheets containing Lorem
                      Ipsum passages, and more recently with desktop publishing
                      software like Aldus PageMaker including versions of Lorem
                      Ipsum.
                    </p>
                  </>
                }
              />
            </div>
          </figure>
        </section>
      </main>
    </>
  )
}
