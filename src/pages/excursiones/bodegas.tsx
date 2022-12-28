import React from 'react'
import Head from 'next/head'
import styles from '@src/styles/Bodegas.module.css'
import { ExcursionesIndividuales } from '@components/ExcursionesIndividuales'

export default function Bodegas () {
  const images = []
  images[0] =
    'https://res.cloudinary.com/abiagus-turismo/image/upload/v1657400616/excursiones/bodegas/vinedos-al-atardecer_g7llx2.jpg'
  images[1] =
    'https://res.cloudinary.com/abiagus-turismo/image/upload/v1657400615/excursiones/bodegas/vinedos-de-d%C3%ADa_ky2voi.jpg'
  images[2] =
    'https://res.cloudinary.com/abiagus-turismo/image/upload/v1657400615/excursiones/bodegas/vino-y-vinedos_barslj.jpg'
  images[3] =
    'https://res.cloudinary.com/abiagus-turismo/image/upload/v1657400612/excursiones/bodegas/barricas-de-vino-en-el-interior-de-la-bodega_ihmvir.jpg'
  images[4] =
    'https://res.cloudinary.com/abiagus-turismo/image/upload/v1657400612/excursiones/bodegas/barricas-de-vino_hdhq2b.jpg'
  images[5] =
    'https://res.cloudinary.com/abiagus-turismo/image/upload/v1657400612/excursiones/bodegas/bodega-baudron__barricas_bvrqyr.jpg'
  images[6] =
    'https://res.cloudinary.com/abiagus-turismo/image/upload/v1657400613/excursiones/bodegas/bodega-elcerno_rlverh.jpg'
  images[7] =
    'https://res.cloudinary.com/abiagus-turismo/image/upload/v1657400612/excursiones/bodegas/bodega-cecchin_dba6dw.jpg'
  images[8] =
    'https://res.cloudinary.com/abiagus-turismo/image/upload/v1657400613/excursiones/bodegas/bodega-florio_ib1xhj.jpg'
  images[9] =
    'https://res.cloudinary.com/abiagus-turismo/image/upload/v1657400612/excursiones/bodegas/barricas-de-vino-al-exterior_ajvqqu.jpg'
  images[10] =
    'https://res.cloudinary.com/abiagus-turismo/image/upload/v1657400613/excursiones/bodegas/bodega-vistandes_mwooyi.jpg'
  images[11] =
    'https://res.cloudinary.com/abiagus-turismo/image/upload/v1657400613/excursiones/bodegas/bodega-domiciano_scriwf.jpg'
  images[12] =
    'https://res.cloudinary.com/abiagus-turismo/image/upload/v1657400614/excursiones/bodegas/foto-arit%C3%ADstica-del-vino_mkdimg.jpg'
  images[13] =
    'https://res.cloudinary.com/abiagus-turismo/image/upload/v1657400614/excursiones/bodegas/uvas-copas-de-vino-y-botellas-de-vino_wi8c1t.jpg'
  images[14] =
    'https://res.cloudinary.com/abiagus-turismo/image/upload/v1657400614/excursiones/bodegas/brindis_jwxwbz.jpg'
  images[15] =
    'https://res.cloudinary.com/abiagus-turismo/image/upload/v1657400614/excursiones/bodegas/gente-brindando_zyne3m.jpg'
  return (
    <>
      <Head>
        <title>Bodegas | Excursiones | Abiagus Turismo</title>
        <meta
          name='description'
          content='En esta excursión visitaremos dos bodegas de distintas
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
                En esta excursión visitaremos dos bodegas de distintas
                características, en el departamento de Maipú, Cuna del Vino, que
                forma parte de la primera zona vitivinícola argentina, y de los
                tantos caminos del vino que tiene nuestra provincia. El
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
                riquezas de la provincia, EL VINO
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
                Nota: consulte en su compañía aérea la cantidad permitida de
                vinos que se puede transportar.
              </li>
              <li>
                <p>Precio: $ 2.999 por persona.</p>
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
