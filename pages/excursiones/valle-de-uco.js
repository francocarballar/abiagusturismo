import React from 'react'
import Head from 'next/head'
import styles from '../../styles/Bodegas.module.css'
import { ExcursionesIndividuales } from '../../src/components/ExcursionesIndividuales'

export default function ValleDeUco () {
  const images = []
  images[0] =
    'https://res.cloudinary.com/abiagus-turismo/image/upload/v1657400825/excursiones/valle-de-uco/1Valle-de-Uco_e3h38p.jpg'
  images[1] =
    'https://res.cloudinary.com/abiagus-turismo/image/upload/v1657400826/excursiones/valle-de-uco/2Valle-de-Uco_b4y9pj.jpg'
  images[2] =
    'https://res.cloudinary.com/abiagus-turismo/image/upload/v1657400827/excursiones/valle-de-uco/3Valle-de-Uco__Cristo-Rey_b825ib.webp'
  images[3] =
    'https://res.cloudinary.com/abiagus-turismo/image/upload/v1657400825/excursiones/valle-de-uco/4Valle-de-Uco__Cristo-Rey_Tupungato_hzjnh0.jpg'
  images[4] =
    'https://res.cloudinary.com/abiagus-turismo/image/upload/v1657400825/excursiones/valle-de-uco/5Valle-de-Uco__Entrada-Tupungato_n738zi.jpg'
  images[5] =
    'https://res.cloudinary.com/abiagus-turismo/image/upload/v1657400826/excursiones/valle-de-uco/6Valle-de-Uco__Vi%C3%B1edos-y-monta%C3%B1a_Tupungato_hkffa4.jpg'
  images[6] =
    'https://res.cloudinary.com/abiagus-turismo/image/upload/v1657400827/excursiones/valle-de-uco/7Valle-de-Uco__Volc%C3%A1n-Tupungato_laqi1j.jpg'
  images[7] =
    'https://res.cloudinary.com/abiagus-turismo/image/upload/v1657400825/excursiones/valle-de-uco/8Valle-de-Uco__Vi%C3%B1edos_abvzba.jpg'
  images[8] =
    'https://res.cloudinary.com/abiagus-turismo/image/upload/v1657400828/excursiones/valle-de-uco/9Valle-de-Uco__oto%C3%B1o_folce1.png'
  images[9] =
    'https://res.cloudinary.com/abiagus-turismo/image/upload/v1657400827/excursiones/valle-de-uco/10Valle-de-Uco__Manzano-hist%C3%B3rico_cristo-de-la-hermandad_kwkotk.jpg'
  images[10] =
    'https://res.cloudinary.com/abiagus-turismo/image/upload/v1657400826/excursiones/valle-de-uco/11Valle-de-Uco__Manzano-hist%C3%B3rico_avenida-de-las-am%C3%A9ricas_iytufk.jpg'
  images[11] =
    'https://res.cloudinary.com/abiagus-turismo/image/upload/v1657400828/excursiones/valle-de-uco/12Valle-de-Uco__Manzano-hist%C3%B3rico_nbbmbv.jpg'
  images[12] =
    'https://res.cloudinary.com/abiagus-turismo/image/upload/v1657400827/excursiones/valle-de-uco/13Valle-de-Uco__Manzano-hist%C3%B3rico_arroyo_m80mea.jpg'
  images[13] =
    'https://res.cloudinary.com/abiagus-turismo/image/upload/v1657400827/excursiones/valle-de-uco/14Valle-de-Uco__Manzano-hist%C3%B3rico_%C3%A1rbol_jqoir9.jpg'
  images[14] =
    'https://res.cloudinary.com/abiagus-turismo/image/upload/v1657400828/excursiones/valle-de-uco/15Valle-de-Uco__Manzano-hist%C3%B3rico_plaza-de-artesanos_laqa47.jpg'
  return (
    <>
      <Head>
        <title>Valle de Uco | Excursiones | Abiagus Turismo</title>
        <meta
          name='description'
          content='A trav??s de esta excursi??n recorreremos el oasis centro de
                Mendoza, saliendo de la ciudad capital hacia el departamento de
                Tupungato, atravesando el camino de los cerrillos, zona
                importante de producci??n petrolera y vitivin??cola, en direcci??n
                al mirador del "Cristo Rey", vista panor??mica del valle a 1.428
                m.s.n.m. y del valle de las Carreras. Luego nos dirigimos a la
                villa cabecera del lugar, previa parada en sitio regional de
                venta y degustaci??n de frutas secas y productos del sector. Al
                atravesar la ciudad, llegamos al valle de Gualtallary,
                incomparable riqueza vitivin??cola reflejada en las bodegas de
                alta gama de Tupungato y Tunuy??n, m??gico recorrido entre vi??edos
                de altura y el marco natural del Cord??n del Plata....
                El camino nos lleva al Manzano Hist??rico, monumento
                Renunciamiento Glorioso, hito en la gesta sanmartiniana, lugar
                donde descansara el Gral. Jos?? de San Mart??n a su regreso de la
                campa??a libertadora; reserva natural de gran belleza y alto
                contenido hist??rico. Regreso a Mendoza por corredor productivo y
                el interior de Tunuy??n, conociendo m??s lugares con gran cantidad
                de hect??reas en producci??n. Circuito circular cerrado muy
                interesante.'
        />
      </Head>
      <main className={styles.main}>
        <ExcursionesIndividuales
          title='VALLE DE UCO'
          p={
            <React.Fragment>
              <p>
                A trav??s de esta excursi??n recorreremos el oasis centro de
                Mendoza, saliendo de la ciudad capital hacia el departamento de
                Tupungato, atravesando el camino de los cerrillos, zona
                importante de producci??n petrolera y vitivin??cola, en direcci??n
                al mirador del "Cristo Rey", vista panor??mica del valle a 1.428
                m.s.n.m. y del valle de las Carreras. Luego nos dirigimos a la
                villa cabecera del lugar, previa parada en sitio regional de
                venta y degustaci??n de frutas secas y productos del sector. Al
                atravesar la ciudad, llegamos al valle de Gualtallary,
                incomparable riqueza vitivin??cola reflejada en las bodegas de
                alta gama de Tupungato y Tunuy??n, m??gico recorrido entre vi??edos
                de altura y el marco natural del Cord??n del Plata....
              </p>
              <p>
                El camino nos lleva al Manzano Hist??rico, monumento
                Renunciamiento Glorioso, hito en la gesta sanmartiniana, lugar
                donde descansara el Gral. Jos?? de San Mart??n a su regreso de la
                campa??a libertadora; reserva natural de gran belleza y alto
                contenido hist??rico. Regreso a Mendoza por corredor productivo y
                el interior de Tunuy??n, conociendo m??s lugares con gran cantidad
                de hect??reas en producci??n. Circuito circular cerrado muy
                interesante.
              </p>
            </React.Fragment>
          }
          li={
            <React.Fragment>
              <li>Salidas: martes y s??bados.</li>
              <li>Hora: 08:00 hs.</li>
              <li>Excursi??n de d??a completo, regreso 17:30 hs. aprox..</li>
              <li>Consultar por otros d??as de salida y horarios.</li>
              <li>
                <p>Precio: $ 5.499 por persona.</p>
              </li>
            </React.Fragment>
          }
          images={images}
          nroImages={14}
        />
      </main>
    </>
  )
}
