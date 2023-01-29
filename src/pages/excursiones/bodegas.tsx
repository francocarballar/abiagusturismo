import React from 'react'
import Head from 'next/head'
import styles from '@src/styles/Bodegas.module.css'
import { ExcursionesIndividuales } from '@components/ExcursionesIndividuales'
import { bodegas } from '@src/db'

export default function Bodegas () {
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
          data={bodegas}
        />
      </main>
    </>
  )
}
