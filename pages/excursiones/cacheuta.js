import React from 'react'
import Head from 'next/head'
import styles from '../../styles/Cacheuta.module.css'
import { ExcursionesIndividuales } from '/src/components/ExcursionesIndividuales'

export default function Cacheuta () {
  const images = []
  images[0] = '/media/excursiones/bodegas/vinedos-al-atardecer.jpg'
  images[1] = '/media/excursiones/bodegas/vinedos-de-día.jpg'
  images[2] = '/media/excursiones/bodegas/vino-y-vinedos.jpg'
  images[3] =
    '/media/excursiones/bodegas/barricas-de-vino-en-el-interior-de-la-bodega.jpg'
  images[4] = '/media/excursiones/bodegas/barricas-de-vino.jpg'
  images[5] = '/media/excursiones/bodegas/bodega-baudron__barricas.jpg'
  images[6] = '/media/excursiones/bodegas/bodega-elcerno.jpg'
  images[7] = '/media/excursiones/bodegas/bodega-cecchin.jpg'
  images[8] = '/media/excursiones/bodegas/bodega-florio.jpeg'
  images[9] = '/media/excursiones/bodegas/barricas-de-vino-al-exterior.jpg'
  images[10] = '/media/excursiones/bodegas/bodega-vistandes.jpeg'
  images[11] = '/media/excursiones/bodegas/bodega-domiciano.jpg'
  images[12] = '/media/excursiones/bodegas/foto-aritística-del-vino.jpg'
  images[13] =
    '/media/excursiones/bodegas/uvas-copas-de-vino-y-botellas-de-vino.jpg'
  images[14] = '/media/excursiones/bodegas/brindis.jpg'
  images[15] = '/media/excursiones/bodegas/gente-brindando.jpg'
  return (
    <>
      <Head>
        <title>Cacheuta | Excursiones | Abiagus Turismo</title>
        <meta
          name='description'
          content='En Cacheuta podrás disfrutar de un parque acuático, de piletas de diferente temperatura, ubicadas en distintos niveles y rodeadas por pura precordillera, sol y el relax del agua termal.'
        />
      </Head>
      <main className={styles.main}>
        <ExcursionesIndividuales
          title='CACHEUTA'
          p={
            <React.Fragment>
              <p>
                En Cacheuta podrás disfrutar de un parque acuático, de piletas
                de diferente temperatura, ubicadas en distintos niveles y
                rodeadas por pura precordillera, sol y el relax del agua termal.
                Con los siguientes servicios:
              </p>
              <ul className={styles.ul}>
                <p>Nivel superior:</p>
                <li>
                  Piscinas cubiertas y descubiertas, cama de burbujas, jacuzzi,
                  duchas y cascadas.
                </li>
                <li>Piscina exclusiva para adultos.</li>
                <li>Juego interactivo para niños.</li>
                <li>Tobogán corto.</li>
              </ul>
              <ul className={styles.ul}>
                <p>Nivel superior:</p>
                <li>
                  Piscinas cubiertas y descubiertas, cama de burbujas, jacuzzi,
                  duchas y cascadas.
                </li>
                <li>Piscina exclusiva para adultos.</li>
                <li>Juego interactivo para niños.</li>
                <li>Tobogán corto.</li>
              </ul>
              <ul className={styles.ul}>
                <p>Instalaciones:</p>
                <li>Quinchos cerrados y abiertos, con mesas y bancos.</li>
                <li>Churrasqueras.</li>
                <li>Buffet / restaurante / proveeduría.</li>
                <li>Baños y vestuarios.</li>
              </ul>
              <ul className={styles.ul}>
                <p>Servicios adicionales:</p>
                <li>
                  Turismo aventura: tirolesa de 180 m., palestra, treking,
                  rappel, cabalgatas y rafting.
                </li>
              </ul>
            </React.Fragment>
          }
          li={
            <React.Fragment>
              <li>Salidas: todos los días.</li>
              <li>Hora: 09:00 hs.</li>
              <li>Actividad de día completo..</li>
              <li>
                <p>
                  Precio: $ 2.200 de lunes a viernes, $ 2.499 sábado, domingos y
                  feriados.
                </p>
              </li>
              <li>
                <p>Consultar por Día de Spa con translado $ 9.499.</p>
              </li>
            </React.Fragment>
          }
          images={images}
          nroImages={15}
        />
      </main>
    </>
  )
}
