import React from 'react'
import Head from 'next/head'
import styles from '@src/styles/CityTour.module.css'
import { ExcursionesIndividuales } from '@components/ExcursionesIndividuales'
import { cityTour } from '@src/db'

export default function CityTour () {
  return (
    <>
      <Head>
        <title>City Tour | Excursiones en Mendoza | Abiagus Turismo</title>
        <meta
          name='description'
          content='En la Ciudad de Mendoza, Usted podrá realizar un paseo entre
                árboles y acequias, que de tiempos lejanos marcan la identidad
                de la ciudad bosque. Visitando hermosas plazas, entre ellas la
                del Área Fundacional, donde conocerá la historia de esta tierra
                de huarpes. Se deleitará en un recorrido atípico conociendo los
                distintos sectores de la ciudad, verá así el Barrio Cívico,
                donde se encuentra el Memorial de La Bandera del Ejército de Los
                Andes, orgullo y reliquia de los mendocinos.
                Adentrándose en el Parque General San Martín a través de sus
                emblemáticos Portones, podrá transitar por el gran pulmón verde
                de este oasis, con un diseño paisajístico único, conociendo así
                el Lago, Fuente de los Continentes, Cerro de la Gloria, que
                resume "la gran gesta sanmartiniana". Finalmente visitaremos el
                Santuario de Lourdes en El Challao, puesta en valor de una
                Iglesia distinta erigida por voluntad del pueblo de Mendoza. Por
                último, visitamos fábrica de chocolates, con degustación.'
        />
      </Head>
      <main className={styles.main}>
        <ExcursionesIndividuales
          title='CITY TOUR'
          p={
            <React.Fragment>
              <p>
                En la Ciudad de Mendoza, Usted podrá realizar un paseo entre
                árboles y acequias, que de tiempos lejanos marcan la identidad
                de la ciudad bosque. Visitando hermosas plazas, entre ellas la
                del Área Fundacional, donde conocerá la historia de esta tierra
                de huarpes. Se deleitará en un recorrido atípico conociendo los
                distintos sectores de la ciudad, verá así el Barrio Cívico,
                donde se encuentra el Memorial de La Bandera del Ejército de Los
                Andes, orgullo y reliquia de los mendocinos.
              </p>
              <p>
                Adentrándose en el Parque General San Martín a través de sus
                emblemáticos Portones, podrá transitar por el gran pulmón verde
                de este oasis, con un diseño paisajístico único, conociendo así
                el Lago, Fuente de los Continentes, Cerro de la Gloria, que
                resume la gran gesta sanmartiniana. Finalmente visitaremos el
                Santuario de Lourdes en El Challao, puesta en valor de una
                Iglesia distinta erigida por voluntad del pueblo de Mendoza. Por
                último, visitamos fábrica de chocolates, con degustación.
              </p>
            </React.Fragment>
          }
          li={
            <React.Fragment>
              <li>Salidas: martes, jueves y sábados.</li>
              <li>Hora: 09:00 hs. y 15:00 hs.</li>
              <li>Excursión de medio día.</li>
              <li>Consultar por otros días de salida.</li>
              <li>
                <p>Precio: $ 2.199 por persona.</p>
              </li>
            </React.Fragment>
          }
          data={cityTour}
        />
      </main>
    </>
  )
}
