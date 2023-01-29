import React from 'react'
import Head from 'next/head'
import styles from '@src/styles/Bodegas.module.css'
import { ExcursionesIndividuales } from '@components/ExcursionesIndividuales'
import { valleDeUco } from '@src/db'

export default function ValleDeUco () {
  return (
    <>
      <Head>
        <title>Valle de Uco | Excursiones | Abiagus Turismo</title>
        <meta
          name='description'
          content='A través de esta excursión recorreremos el oasis centro de
                Mendoza, saliendo de la ciudad capital hacia el departamento de
                Tupungato, atravesando el camino de los cerrillos, zona
                importante de producción petrolera y vitivinícola, en dirección
                al mirador del Cristo Rey, vista panorámica del valle a 1.428
                m.s.n.m. y del valle de las Carreras. Luego nos dirigimos a la
                villa cabecera del lugar, previa parada en sitio regional de
                venta y degustación de frutas secas y productos del sector. Al
                atravesar la ciudad, llegamos al valle de Gualtallary,
                incomparable riqueza vitivinícola reflejada en las bodegas de
                alta gama de Tupungato y Tunuyán, mágico recorrido entre viñedos
                de altura y el marco natural del Cordón del Plata....
                El camino nos lleva al Manzano Histórico, monumento
                Renunciamiento Glorioso, hito en la gesta sanmartiniana, lugar
                donde descansara el Gral. José de San Martín a su regreso de la
                campaña libertadora; reserva natural de gran belleza y alto
                contenido histórico. Regreso a Mendoza por corredor productivo y
                el interior de Tunuyán, conociendo más lugares con gran cantidad
                de hectáreas en producción. Circuito circular cerrado muy
                interesante.'
        />
      </Head>
      <main className={styles.main}>
        <ExcursionesIndividuales
          title='VALLE DE UCO'
          p={
            <React.Fragment>
              <p>
                A través de esta excursión recorreremos el oasis centro de
                Mendoza, saliendo de la ciudad capital hacia el departamento de
                Tupungato, atravesando el camino de los cerrillos, zona
                importante de producción petrolera y vitivinícola, en dirección
                al mirador del Cristo Rey, vista panorámica del valle a 1.428
                m.s.n.m. y del valle de las Carreras. Luego nos dirigimos a la
                villa cabecera del lugar, previa parada en sitio regional de
                venta y degustación de frutas secas y productos del sector. Al
                atravesar la ciudad, llegamos al valle de Gualtallary,
                incomparable riqueza vitivinícola reflejada en las bodegas de
                alta gama de Tupungato y Tunuyán, mágico recorrido entre viñedos
                de altura y el marco natural del Cordón del Plata....
              </p>
              <p>
                El camino nos lleva al Manzano Histórico, monumento
                Renunciamiento Glorioso, hito en la gesta sanmartiniana, lugar
                donde descansara el Gral. José de San Martín a su regreso de la
                campaña libertadora; reserva natural de gran belleza y alto
                contenido histórico. Regreso a Mendoza por corredor productivo y
                el interior de Tunuyán, conociendo más lugares con gran cantidad
                de hectáreas en producción. Circuito circular cerrado muy
                interesante.
              </p>
            </React.Fragment>
          }
          li={
            <React.Fragment>
              <li>Salidas: martes y sábados.</li>
              <li>Hora: 08:00 hs.</li>
              <li>Excursión de día completo, regreso 17:30 hs. aprox..</li>
              <li>Consultar por otros días de salida y horarios.</li>
              <li>
                <p>Precio: $ 5.499 por persona.</p>
              </li>
            </React.Fragment>
          }
          data={valleDeUco}
        />
      </main>
    </>
  )
}
