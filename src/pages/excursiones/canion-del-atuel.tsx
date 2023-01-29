import React from 'react'
import Head from 'next/head'
import styles from '@src/styles/Bodegas.module.css'
import { ExcursionesIndividuales } from '@components/ExcursionesIndividuales'
import { canionDelAtuel } from '@src/db'

export default function CanonDelAtuel () {
  return (
    <>
      <Head>
        <title>Cañón del Atuel | Excursiones | Abiagus Turismo</title>
        <meta
          name='description'
          content='Este paseo nos remonta a los orígenes del mundo donde el viento
                y el agua labraron en la roca esculturas naturales, los
                caprichos de la naturaleza. Este extenso accidente geográfico
                es más antiguo que la Cordillera de Los Andes. El circuito
                comienza transitando la cuesta de los terneros, con un marco
                geográfico que nos introducen en el paisaje de a poco...hasta
                llegar a la villa de El Nihuil, el mar mendocino" nos espera.
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
                y el agua labraron en la roca esculturas naturales, los
                caprichos de la naturaleza. Este extenso accidente geográfico es
                más antiguo que la Cordillera de Los Andes. El circuito comienza
                transitando la cuesta de los terneros, con un marco geográfico
                que nos introducen en el paisaje de a poco...hasta llegar a la
                villa de El Nihuil, el mar mendocino nos espera. De alli nos
                introducimos en 45 Km. de camino consolidado que acompañan el
                incansable descenso de las aguas del río Atuel, por un cañadón
                realmente único. Figuras caprichosas como El Museo de Cera, Los
                Jardines Colgantes, Los Monjes, El Búho y otras tantas que
                invitan a detenerse, a vivir el paisaje y a jugar con la
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
                <p>Precio: $ 6.999 por persona.</p>
              </li>
            </React.Fragment>
          }
          data={canionDelAtuel}
        />
      </main>
    </>
  )
}
