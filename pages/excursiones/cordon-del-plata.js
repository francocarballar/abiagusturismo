import React from 'react'
import Head from 'next/head'
import styles from '../../styles/Bodegas.module.css'
import { ExcursionesIndividuales } from '../../src/components/ExcursionesIndividuales'

export default function CordonDelPlata () {
  const images = []
  images[0] =
    '/media/excursiones/cordon-del-plata/1Cordón-del-Plata__tunel-potrerillos.webp'
  images[1] =
    '/media/excursiones/cordon-del-plata/2Cordón-del-Plata__ruta-del-perilago.jpg'
  images[2] =
    '/media/excursiones/cordon-del-plata/3Cordón-del-Plata__hotel-potrerillos.jpg'
  images[3] =
    '/media/excursiones/cordon-del-plata/4Cordón-del-Plata__camino-de-las-carreras.jpg'
  images[4] =
    '/media/excursiones/cordon-del-plata/5Cordón-del-Plata__casita.jpg'
  images[5] =
    '/media/excursiones/cordon-del-plata/6Cordón-del-Plata__Cristo-Rey_Tupungato.jpg'
  images[6] =
    '/media/excursiones/cordon-del-plata/7Cordón-del-Plata__Cerro-Tupungato.jpg'
  images[7] =
    '/media/excursiones/cordon-del-plata/8Cordón-del-Plata__Bodega-Salentein.jpg'
  images[8] =
    '/media/excursiones/cordon-del-plata/9Cordón-del-Plata__Bodega-Rutini.jpg'
  images[9] =
    '/media/excursiones/cordon-del-plata/10Cordón-del-Plata__Manzano-HIstórico_Cristo.jpg'
  images[10] =
    '/media/excursiones/cordon-del-plata/11Cordón-del-Plata__Manzano-HIstórico.jpg'
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
          images={images}
          nroImages={10}
        />
      </main>
    </>
  )
}
