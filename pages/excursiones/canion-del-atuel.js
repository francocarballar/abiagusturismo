import React from 'react'
import Head from 'next/head'
import styles from '../../styles/Bodegas.module.css'
import { ExcursionesIndividuales } from '/src/components/ExcursionesIndividuales'

export default function CanonDelAtuel () {
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
        <title>Cañón del Atuel | Excursiones | Abiagus Turismo</title>
        <meta
          name='description'
          content='Este paseo nos remonta a los orígenes del mundo donde el viento
                y el agua labraron en la roca esculturas naturales, "los
                caprichos de la naturaleza". Este extenso accidente geográfico
                es más antiguo que la Cordillera de Los Andes. El circuito
                comienza transitando la cuesta de los terneros, con un marco
                geográfico que nos introducen en el paisaje de a poco...hasta
                llegar a la villa de El Nihuil, "el mar mendocino" nos espera.
                De alli nos introducimos en 45 Km. de camino consolidado que
                acompañan el incansable descenso de las aguas del río Atuel, por
                un cañadón realmente único. Figuras caprichosas como El Museo de
                Cera, Los Jardines Colgantes, Los Monjes, El Búho y otras tantas
                que invitan a detenerse, a vivir el paisaje y a jugar con la
                imaginación en todo momento.
                
                Luego de una sinuosa cuesta, y de atravesar el complejo
                hidroeléctrico de Los Nihuiles, con sus diques intermedios,
                descubrimos la inmensidad del Embalse Valle Grande, ingresando
                así al paraje ideal para la práctica de actividades de aventura
                y deportes náuticos, en un lugar que te invita a quedarte!.
                Regreso a Mendoza en horas de la tarde/noche.'
        />
      </Head>
      <main className={styles.main}>
        <ExcursionesIndividuales
          title='CAÑÓN DEL ATUEL'
          p={
            <React.Fragment>
              <p>
                Este paseo nos remonta a los orígenes del mundo donde el viento
                y el agua labraron en la roca esculturas naturales, "los
                caprichos de la naturaleza". Este extenso accidente geográfico
                es más antiguo que la Cordillera de Los Andes. El circuito
                comienza transitando la cuesta de los terneros, con un marco
                geográfico que nos introducen en el paisaje de a poco...hasta
                llegar a la villa de El Nihuil, "el mar mendocino" nos espera.
                De alli nos introducimos en 45 Km. de camino consolidado que
                acompañan el incansable descenso de las aguas del río Atuel, por
                un cañadón realmente único. Figuras caprichosas como El Museo de
                Cera, Los Jardines Colgantes, Los Monjes, El Búho y otras tantas
                que invitan a detenerse, a vivir el paisaje y a jugar con la
                imaginación en todo momento.
              </p>
              <p>
                Luego de una sinuosa cuesta, y de atravesar el complejo
                hidroeléctrico de Los Nihuiles, con sus diques intermedios,
                descubrimos la inmensidad del Embalse Valle Grande, ingresando
                así al paraje ideal para la práctica de actividades de aventura
                y deportes náuticos, en un lugar que te invita a quedarte!.
                Regreso a Mendoza en horas de la tarde/noche.
              </p>
            </React.Fragment>
          }
          li={
            <React.Fragment>
              <li>Salidas: martes, jueves y domingos.</li>
              <li>Hora: 07:00 hs.</li>
              <li>Excursión de día completo.</li>
              <li>Consultar por otros días de salida.</li>
              <li>
                Importante: llevar agua, protección solar, ropa cómoda y otra
                muda para cambiar en caso de realizar actividades de aventura.
                Dinero en efectivo, no es posible usar tarjetas de crédito o
                débito.
              </li>
              <li>
                <p>Precio: $ 4.199 por persona.</p>
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
