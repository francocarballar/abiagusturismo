import React from 'react'
import Head from 'next/head'
import styles from '@src/styles/Bodegas.module.css'
import { ExcursionesIndividuales } from '@components/ExcursionesIndividuales'
import { cordonDelPlata } from '@src/db'

export default function CordonDelPlata () {
  return (
    <>
      <Head>
        <title>Cordón del Plata | Excursiones | Abiagus Turismo</title>
        <meta
          name='description'
          content='En este tour visitaremos los lugares más destacados del Valle de
                Uco, saldremos de la ciudad de Mendoza hacia Potrerillos, vista
                panorámica del dique homónimo, luego de pasar por la villa
                cabecera ascendemos hacia los valles intermontanos, alcanzando
                el camino de caracoles del Salto, que nos llevará directo al
                corazón de Tupungato, pasando por valle de la Carrera y mirador
                del Cristo Rey, disfrutaremos de una imagen del Cristo de 28 m
                de altura con los brazos abiertos mirando hacia el Valle y una
                vista increíble del imponente Cordón del Plata. Luego hacia el
                valle de Gualtallary, encontraremos las plantaciones de frutales
                y viñedos que dan origen a los famosos vinos de altura y a la
                gran producción de la zona, observando al pasar las bodegas de
                alta gama.
                Realizamos una breve parada en un secadero de Jamón crudo para
                conocer un poco sobre su elaboración y realizar una rica
                degustación.
                En su paso transitaremos por el arroyo de los puntanos y el
                Cristo de la hermandad, hasta llegar finalmente al “Manzano
                Histórico”, que recuerda el paso del General San Martín por esta
                tierra en 1823, con su gran monumento Renunciamiento Glorioso.
                En la reserva natural se encuentra también una importante
                estación piscícola de trucha arco iris y salmonada, que son
                luego sembrados en los ríos de Mendoza. También se pueden
                observar especies flora y fauna de la región. Para finalizar,
                almorzamos en un parador típico de la zona y luego regresaremos
                a la ciudad.'
        />
      </Head>
      <main className={styles.main}>
        <ExcursionesIndividuales
          title='CORDÓN DEL PLATA'
          p={
            <React.Fragment>
              <p>
                En este tour visitaremos los lugares más destacados del Valle de
                Uco, saldremos de la ciudad de Mendoza hacia Potrerillos, vista
                panorámica del dique homónimo, luego de pasar por la villa
                cabecera ascendemos hacia los valles intermontanos, alcanzando
                el camino de caracoles del Salto, que nos llevará directo al
                corazón de Tupungato, pasando por valle de la Carrera y mirador
                del Cristo Rey, disfrutaremos de una imagen del Cristo de 28 m
                de altura con los brazos abiertos mirando hacia el Valle y una
                vista increíble del imponente Cordón del Plata. Luego hacia el
                valle de Gualtallary, encontraremos las plantaciones de frutales
                y viñedos que dan origen a los famosos vinos de altura y a la
                gran producción de la zona, observando al pasar las bodegas de
                alta gama.
              </p>
              <p>
                Realizamos una breve parada en un secadero de Jamón crudo para
                conocer un poco sobre su elaboración y realizar una rica
                degustación.
              </p>
              <p>
                En su paso transitaremos por el arroyo de los puntanos y el
                Cristo de la hermandad, hasta llegar finalmente al “Manzano
                Histórico”, que recuerda el paso del General San Martín por esta
                tierra en 1823, con su gran monumento Renunciamiento Glorioso.
                En la reserva natural se encuentra también una importante
                estación piscícola de trucha arco iris y salmonada, que son
                luego sembrados en los ríos de Mendoza. También se pueden
                observar especies flora y fauna de la región. Para finalizar,
                almorzamos en un parador típico de la zona y luego regresaremos
                a la ciudad.
              </p>
            </React.Fragment>
          }
          li={
            <React.Fragment>
              <li>Salidas: martes y sábados.</li>
              <li>Hora: 07:30 hs.</li>
              <li>Excursión de día completo, regresa 17:30 hs. aprox.</li>
              <li>Consultar por otros días de salida y horarios.</li>
              <li>
                <p>Precio: $ 6.499 por persona.</p>
              </li>
            </React.Fragment>
          }
          data={cordonDelPlata}
        />
      </main>
    </>
  )
}
