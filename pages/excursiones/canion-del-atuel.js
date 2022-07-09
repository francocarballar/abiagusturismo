import React from 'react'
import Head from 'next/head'
import styles from '../../styles/Bodegas.module.css'
import { ExcursionesIndividuales } from '../../src/components/ExcursionesIndividuales'

export default function CanonDelAtuel () {
  const images = []
  images[0] =
    'https://res.cloudinary.com/abiagus-turismo/image/upload/v1657400788/excursiones/canion-del-atuel/1Ca%C3%B1%C3%B3n-del-Atuel_rcyfcy.webp'
  images[1] =
    'https://res.cloudinary.com/abiagus-turismo/image/upload/v1657400787/excursiones/canion-del-atuel/2Ca%C3%B1%C3%B3n-del-Atuel_dg1fyc.jpg'
  images[2] =
    'https://res.cloudinary.com/abiagus-turismo/image/upload/v1657400787/excursiones/canion-del-atuel/3Ca%C3%B1%C3%B3n-del-Atuel_kx7y8a.jpg'
  images[3] =
    'https://res.cloudinary.com/abiagus-turismo/image/upload/v1657400787/excursiones/canion-del-atuel/4Ca%C3%B1%C3%B3n-del-Atuel_bcozpc.jpg'
  images[4] =
    'https://res.cloudinary.com/abiagus-turismo/image/upload/v1657400787/excursiones/canion-del-atuel/5Ca%C3%B1%C3%B3n-del-Atuel__Rafting_zjenpy.jpg'
  images[5] =
    'https://res.cloudinary.com/abiagus-turismo/image/upload/v1657400787/excursiones/canion-del-atuel/6Ca%C3%B1%C3%B3n-del-Atuel__Rafting-y-diversion_cigfmg.jpg'
  images[6] =
    'https://res.cloudinary.com/abiagus-turismo/image/upload/v1657400788/excursiones/canion-del-atuel/7Ca%C3%B1%C3%B3n-del-Atuel_lfmg92.jpg'
  images[7] =
    'https://res.cloudinary.com/abiagus-turismo/image/upload/v1657400788/excursiones/canion-del-atuel/8Ca%C3%B1%C3%B3n-del-Atuel__catamar%C3%A1n_fm2apq.jpg'
  images[8] =
    'https://res.cloudinary.com/abiagus-turismo/image/upload/v1657400788/excursiones/canion-del-atuel/8Ca%C3%B1%C3%B3n-del-Atuel__culriver_lbfkv4.jpg'
  images[9] =
    'https://res.cloudinary.com/abiagus-turismo/image/upload/v1657400788/excursiones/canion-del-atuel/9Ca%C3%B1%C3%B3n-del-Atuel_ec0yze.jpg'
  images[10] =
    'https://res.cloudinary.com/abiagus-turismo/image/upload/v1657400789/excursiones/canion-del-atuel/10Ca%C3%B1%C3%B3n-del-Atuel__los-elefantes_blukjf.jpg'
  images[11] =
    'https://res.cloudinary.com/abiagus-turismo/image/upload/v1657400789/excursiones/canion-del-atuel/11Ca%C3%B1%C3%B3n-del-Atuel_is6ssv.jpg'
  images[12] =
    'https://res.cloudinary.com/abiagus-turismo/image/upload/v1657400789/excursiones/canion-del-atuel/12Ca%C3%B1%C3%B3n-del-Atuel__embalse-El-Nihuil_ww2st6.jpg'
  images[13] =
    'https://res.cloudinary.com/abiagus-turismo/image/upload/v1657400789/excursiones/canion-del-atuel/13Ca%C3%B1%C3%B3n-del-Atuel__El-Nihuil_central-2_bcf5bb.jpg'
  images[14] =
    'https://res.cloudinary.com/abiagus-turismo/image/upload/v1657400789/excursiones/canion-del-atuel/14Ca%C3%B1%C3%B3n-del-Atuel__embalse-El-Nihuil_nzdlxg.jpg'
  images[15] =
    'https://res.cloudinary.com/abiagus-turismo/image/upload/v1657400790/excursiones/canion-del-atuel/15Ca%C3%B1%C3%B3n-del-Atuel__dique-Aisol_izsgsz.webp'
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
                <p>Precio: $ 6.999 por persona.</p>
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
