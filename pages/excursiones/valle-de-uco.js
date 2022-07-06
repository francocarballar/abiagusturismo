import React from 'react'
import Head from 'next/head'
import styles from '../../styles/Bodegas.module.css'
import { ExcursionesIndividuales } from '../../src/components/ExcursionesIndividuales'

export default function ValleDeUco () {
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
        <title>Valle de Uco | Excursiones | Abiagus Turismo</title>
        <meta
          name='description'
          content='A través de esta excursión recorreremos el oasis centro de
                Mendoza, saliendo de la ciudad capital hacia el departamento de
                Tupungato, atravesando el camino de los cerrillos, zona
                importante de producción petrolera y vitivinícola, en dirección
                al mirador del "Cristo Rey", vista panorámica del valle a 1.428
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
                al mirador del "Cristo Rey", vista panorámica del valle a 1.428
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
              <li>Excursión de medio día, regreso 13:30 hs. aprox..</li>
              <li>Consultar por otros días de salida y horarios.</li>
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
