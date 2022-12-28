import React from 'react'
import Head from 'next/head'
import styles from '@components/ExcursionesIndividuales/ExcursionesIndividuales.module.css'
import { ButtonCotizarServicios } from '@components/ButtonCotizarServicios'

export default function Transporte () {
  return (
    <>
      <Head>
        <title>Transporte | Servicios | Abiagus Turismo</title>
        <meta
          name='description'
          content='Contamos con servicios de transporte para pasajeros individuales y
            grupos, en vehículos con capacidad para 15, 18, 24, 30, 40, y hasta
            60 pasajeros.'
        />
      </Head>
      <main className={styles.main}>
        <section className={styles.section__excursiones__individuales}>
          <h2>Transporte</h2>
          <p>
            Contamos con servicios de transporte para pasajeros individuales y
            grupos, en vehículos con capacidad para 15, 18, 24, 30, 40, y hasta
            60 pasajeros.
          </p>
          <div>
            <ul className={styles.ul}>
              <li>Traslados en excursiones locales y paseos en Mendoza.</li>
              <li>
                Traslado para fiestas, eventos, congresos, etc. Actividades
                diurnas y nocturnas.
              </li>
              <li>Traslados a eventos deportivos, educativos y religiosos.</li>
              <li>
                Contratación de transporte desde Mendoza a distintas provincias
                argentinas.
              </li>
              <li>
                Reserva y venta de pasajes Andesmar (nacional e internacional).
              </li>
            </ul>
          </div>
          <ButtonCotizarServicios />
        </section>
      </main>
    </>
  )
}
