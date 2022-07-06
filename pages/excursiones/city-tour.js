import React from 'react'
import Head from 'next/head'
import { ExcursionesIndividuales } from '/src/components/ExcursionesIndividuales'

export default function CityTour () {
  const images = []
  images[0] =
    '/media/excursiones/city-tour/Cartel-Medoza--día_Plaza-Independencia.jpg'
  images[1] =
    '/media/excursiones/city-tour/Aguas-Danzantes_Plaza-Independencia.jpg'
  images[2] =
    '/media/excursiones/city-tour/Cartel-Medoza--noche_Plaza-Independencia.jpg'
  images[3] =
    '/media/excursiones/city-tour/Escudo-Mendoza_Plaza-Independencia.jpg'
  images[4] = '/media/excursiones/city-tour/Plaza-Espana_Mendoza.jpg'
  images[5] = '/media/excursiones/city-tour/Plaza-San-Martín_Mendoza.jpg'
  images[6] = '/media/excursiones/city-tour/edificio-cultura.jpg'
  images[7] = '/media/excursiones/city-tour/Portones_Parque-San-Martín.jpg'
  images[8] =
    '/media/excursiones/city-tour/Fuente-de-los-Continentes_Parque-San-Martín.jpg'
  images[9] =
    '/media/excursiones/city-tour/Fuente-de-los-Continentes--gente_Parque-San-Martín.jpg'
  images[10] =
    '/media/excursiones/city-tour/Fuente-de-los-Continentes--otono_Parque-San-Martín.jpg'
  images[11] =
    '/media/excursiones/city-tour/Árboles--otono_Parque-San-Martín.jpg'
  images[12] = '/media/excursiones/city-tour/Árboles_Parque-San-Martín.jpg'
  images[13] = '/media/excursiones/city-tour/Rosedal_Parque-San-Martín.jpg'
  images[14] = '/media/excursiones/city-tour/Lago_Parque-San-Martín.jpg'
  images[15] =
    '/media/excursiones/city-tour/Lago--regatas_Parque-San-Martín.jpg'
  images[16] =
    '/media/excursiones/city-tour/Lago--montanas_Parque-San-Martín.jpg'
  images[17] =
    '/media/excursiones/city-tour/Cerro-de-la-Gloria_Parque-San-Martín.jpg'
  images[18] =
    '/media/excursiones/city-tour/Cerro-de-la-Gloria--monumento_Parque-San-Martín.jpg'
  return (
    <>
      <Head>
        <title>City Tour | Excursiones | Abiagus Turismo</title>
        <meta
          name='description'
          content='En la Ciudad de Mendoza, Usted podrá realizar un paseo entre
                árboles y acequias, que de tiempos lejanos marcan la identidad
                de la "ciudad bosque". Visitando hermosas plazas, entre ellas la
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
      <main className='main'>
        <ExcursionesIndividuales
          title='CITY TOUR'
          p={
            <React.Fragment>
              <p>
                En la Ciudad de Mendoza, Usted podrá realizar un paseo entre
                árboles y acequias, que de tiempos lejanos marcan la identidad
                de la "ciudad bosque". Visitando hermosas plazas, entre ellas la
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
                resume "la gran gesta sanmartiniana". Finalmente visitaremos el
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
                <p>Precio: $ 1.599 por persona.</p>
              </li>
            </React.Fragment>
          }
          images={images}
          nroImages={18}
        />
      </main>
    </>
  )
}
