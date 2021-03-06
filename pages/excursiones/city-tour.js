import React from 'react'
import Head from 'next/head'
import styles from '../../styles/CityTour.module.css'
import { ExcursionesIndividuales } from '../../src/components/ExcursionesIndividuales'

export default function CityTour () {
  const images = []
  images[0] =
    'https://res.cloudinary.com/abiagus-turismo/image/upload/v1657399764/excursiones/city-tour/Cartel-Medoza--d%C3%ADa_Plaza-Independencia_vpcnzc.jpg'
  images[1] =
    'https://res.cloudinary.com/abiagus-turismo/image/upload/v1657399762/excursiones/city-tour/Aguas-Danzantes_Plaza-Independencia_jo5ijs.jpg'
  images[2] =
    'https://res.cloudinary.com/abiagus-turismo/image/upload/v1657399761/excursiones/city-tour/Cartel-Medoza--noche_Plaza-Independencia_xlyrfh.jpg'
  images[3] =
    'https://res.cloudinary.com/abiagus-turismo/image/upload/v1657399763/excursiones/city-tour/Escudo-Mendoza_Plaza-Independencia_tepp5s.jpg'
  images[4] =
    'https://res.cloudinary.com/abiagus-turismo/image/upload/v1657399764/excursiones/city-tour/Plaza-Espana_Mendoza_uyimjj.jpg'
  images[5] =
    'https://res.cloudinary.com/abiagus-turismo/image/upload/v1657399766/excursiones/city-tour/Plaza-San-Marti%CC%81n_Mendoza_qegdo1.jpg'
  images[6] =
    'https://res.cloudinary.com/abiagus-turismo/image/upload/v1657399764/excursiones/city-tour/edificio-cultura_qdzgcy.jpg'
  images[7] =
    'https://res.cloudinary.com/abiagus-turismo/image/upload/v1657399765/excursiones/city-tour/Portones_Parque-San-Mart%C3%ADn_pdfvkm.jpg'
  images[8] =
    'https://res.cloudinary.com/abiagus-turismo/image/upload/v1657399763/excursiones/city-tour/Fuente-de-los-Continentes_Parque-San-Mart%C3%ADn_anpndx.jpg'
  images[9] =
    'https://res.cloudinary.com/abiagus-turismo/image/upload/v1657399763/excursiones/city-tour/Fuente-de-los-Continentes--gente_Parque-San-Mart%C3%ADn_asb4v6.jpg'
  images[10] =
    'https://res.cloudinary.com/abiagus-turismo/image/upload/v1657399764/excursiones/city-tour/Fuente-de-los-Continentes--otono_Parque-San-Mart%C3%ADn_zel1x0.jpg'
  images[11] =
    'https://res.cloudinary.com/abiagus-turismo/image/upload/v1657399762/excursiones/city-tour/%C3%81rboles--otono_Parque-San-Mart%C3%ADn_tsdwz5.jpg'
  images[12] =
    'https://res.cloudinary.com/abiagus-turismo/image/upload/v1657399762/excursiones/city-tour/%C3%81rboles_Parque-San-Mart%C3%ADn_khb7gz.jpg'
  images[13] =
    'https://res.cloudinary.com/abiagus-turismo/image/upload/v1657399765/excursiones/city-tour/Rosedal_Parque-San-Mart%C3%ADn_t04pjv.jpg'
  images[14] =
    'https://res.cloudinary.com/abiagus-turismo/image/upload/v1657399764/excursiones/city-tour/Lago_Parque-San-Mart%C3%ADn_jf9ywh.jpg'
  images[15] =
    'https://res.cloudinary.com/abiagus-turismo/image/upload/v1657399764/excursiones/city-tour/Lago--regatas_Parque-San-Mart%C3%ADn_fmdwvs.jpg'
  images[16] =
    'https://res.cloudinary.com/abiagus-turismo/image/upload/v1657399764/excursiones/city-tour/Lago--montanas_Parque-San-Mart%C3%ADn_vrot1h.jpg'
  images[17] =
    'https://res.cloudinary.com/abiagus-turismo/image/upload/v1657399762/excursiones/city-tour/Cerro-de-la-Gloria_Parque-San-Mart%C3%ADn_sungap.jpg'
  images[18] =
    'https://res.cloudinary.com/abiagus-turismo/image/upload/v1657399762/excursiones/city-tour/Cerro-de-la-Gloria--monumento_Parque-San-Mart%C3%ADn_mpzias.jpg'
  return (
    <>
      <Head>
        <title>City Tour | Excursiones | Abiagus Turismo</title>
        <meta
          name='description'
          content='En la Ciudad de Mendoza, Usted podr?? realizar un paseo entre
                ??rboles y acequias, que de tiempos lejanos marcan la identidad
                de la "ciudad bosque". Visitando hermosas plazas, entre ellas la
                del ??rea Fundacional, donde conocer?? la historia de esta tierra
                de huarpes. Se deleitar?? en un recorrido at??pico conociendo los
                distintos sectores de la ciudad, ver?? as?? el Barrio C??vico,
                donde se encuentra el Memorial de La Bandera del Ej??rcito de Los
                Andes, orgullo y reliquia de los mendocinos.
                Adentr??ndose en el Parque General San Mart??n a trav??s de sus
                emblem??ticos Portones, podr?? transitar por el gran pulm??n verde
                de este oasis, con un dise??o paisaj??stico ??nico, conociendo as??
                el Lago, Fuente de los Continentes, Cerro de la Gloria, que
                resume "la gran gesta sanmartiniana". Finalmente visitaremos el
                Santuario de Lourdes en El Challao, puesta en valor de una
                Iglesia distinta erigida por voluntad del pueblo de Mendoza. Por
                ??ltimo, visitamos f??brica de chocolates, con degustaci??n.'
        />
      </Head>
      <main className={styles.main}>
        <ExcursionesIndividuales
          title='CITY TOUR'
          p={
            <React.Fragment>
              <p>
                En la Ciudad de Mendoza, Usted podr?? realizar un paseo entre
                ??rboles y acequias, que de tiempos lejanos marcan la identidad
                de la "ciudad bosque". Visitando hermosas plazas, entre ellas la
                del ??rea Fundacional, donde conocer?? la historia de esta tierra
                de huarpes. Se deleitar?? en un recorrido at??pico conociendo los
                distintos sectores de la ciudad, ver?? as?? el Barrio C??vico,
                donde se encuentra el Memorial de La Bandera del Ej??rcito de Los
                Andes, orgullo y reliquia de los mendocinos.
              </p>
              <p>
                Adentr??ndose en el Parque General San Mart??n a trav??s de sus
                emblem??ticos Portones, podr?? transitar por el gran pulm??n verde
                de este oasis, con un dise??o paisaj??stico ??nico, conociendo as??
                el Lago, Fuente de los Continentes, Cerro de la Gloria, que
                resume "la gran gesta sanmartiniana". Finalmente visitaremos el
                Santuario de Lourdes en El Challao, puesta en valor de una
                Iglesia distinta erigida por voluntad del pueblo de Mendoza. Por
                ??ltimo, visitamos f??brica de chocolates, con degustaci??n.
              </p>
            </React.Fragment>
          }
          li={
            <React.Fragment>
              <li>Salidas: martes, jueves y s??bados.</li>
              <li>Hora: 09:00 hs. y 15:00 hs.</li>
              <li>Excursi??n de medio d??a.</li>
              <li>Consultar por otros d??as de salida.</li>
              <li>
                <p>Precio: $ 2.199 por persona.</p>
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
