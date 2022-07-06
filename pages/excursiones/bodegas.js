import React from 'react'
import Head from 'next/head'
import styles from '../../styles/Bodegas.module.css'
import { ExcursionesIndividuales } from '../src/components/ExcursionesIndividuales'

export default function Bodegas () {
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
        <title>Bodegas | Excursiones | Abiagus Turismo</title>
        <meta
          name='description'
          content='En esta excursión visitaremos "dos bodegas" de distintas
                características, en el departamento de Maipú, "Cuna del Vino",
                que forma parte de la primera zona vitivinícola argentina, y de
                los tantos caminos del vino que tiene nuestra provincia. El
                recorrido por las bodegas nos mostrará el proceso de elaboración
                del vino y finalizará con la tan preciada degustación.
                Además sumamos al circuito productivo, la visita a una fábrica
                de aceite de oliva, donde conoceremos los métodos de extracción
                del aceite y todos los productos derivados de la aceituna, con
                una exquisita degustación de aceites tradicionales y
                saborizados, aceitunas, tomates secos y diferentes pastas: de
                aceitunas, humus, garbanzos, zanahoria, remolacha, etc. Este
                paseo está enmarcado por viñedos y las áreas rurales del oasis
                norte de Mendoza, dejando ver así una de las principales
                riquezas de la provincia, "EL VINO"'
        />
      </Head>
      <main className={styles.main}>
        <ExcursionesIndividuales
          title='BODEGAS'
          p={
            <React.Fragment>
              <p>
                En esta excursión visitaremos "dos bodegas" de distintas
                características, en el departamento de Maipú, "Cuna del Vino",
                que forma parte de la primera zona vitivinícola argentina, y de
                los tantos caminos del vino que tiene nuestra provincia. El
                recorrido por las bodegas nos mostrará el proceso de elaboración
                del vino y finalizará con la tan preciada degustación.
              </p>
              <p>
                Además sumamos al circuito productivo, la visita a una fábrica
                de aceite de oliva, donde conoceremos los métodos de extracción
                del aceite y todos los productos derivados de la aceituna, con
                una exquisita degustación de aceites tradicionales y
                saborizados, aceitunas, tomates secos y diferentes pastas: de
                aceitunas, humus, garbanzos, zanahoria, remolacha, etc. Este
                paseo está enmarcado por viñedos y las áreas rurales del oasis
                norte de Mendoza, dejando ver así una de las principales
                riquezas de la provincia, "EL VINO"
              </p>
            </React.Fragment>
          }
          li={
            <React.Fragment>
              <li>Salidas: todos los días, excepto domingos.</li>
              <li>Hora: a partir de 14:00 hs.</li>
              <li>Excursión de medio día.</li>
              <li>Consultar por circuito especial día domingo.</li>
              <li>
                Importante: consultar cantidad de vinos permitida que puede
                transportar en las distintas compañías aéreas.
              </li>
              <li>
                <p>Precio: $ 2.299 por persona.</p>
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
