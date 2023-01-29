import React from 'react'
import Head from 'next/head'
import styles from '@src/styles/Bodegas.module.css'
import { ExcursionesIndividuales } from '@components/ExcursionesIndividuales'
import { altaMontania } from '@src/db'
// import { useImage } from '@src/hooks/useImage'

export default function AltaMontania () {
  // const { mobile, tablet, desktop } = useImage(excursiones)
  // console.log('Mi array de imágenes: ', mobile)
  return (
    <>
      <Head>
        <title>Alta Montaña | Excursiones | Abiagus Turismo</title>
        <meta
          name='description'
          content='Esta excursión es imperdible, ícono de Mendoza, lo más alto y lo más lindo de la Cordillera de los Andes, con sus valles intermontanos tan distintivos como su gente y su geografía única, acompaña de una historia significativa, como sus mitos y leyendas.... Cada paraje nos ofrece algo característico: la precordillera desde Cacheuta, hacia el valle de Potrerillos, con un sinfin de posibilidades de turismo aventura y alojamientos de montaña. Transitamos luego hacia Uspallata, "un valle de película", tierra de huarpes y de gesta sanmartiniana...
          El camino nos conduce hasta Puente del Inca, "patrimonio de la humanidad", incomparable en su naturaleza y color, "camino donde los incas dejaron sus huellas". A cada paso nos encontraremos con historias y anécdotas propias de las montañas mendocinas que son un verdadero regocijo para la vista y todos los sentidos.
          El viaje avanza hasta Las Cuevas, última población limítrofe con Chile, y desde allí ascendemos por un camino de cornisas para arribar al Cristo Redentor, "El Señor de los Andes" que nos espera a casi 4.000 m.s.n.m. Una experiencia mágica que invita siempre a volver a la montaña!. Regresamos en horas de la tarde a la ciudad de Mendoza.'
        />
      </Head>
      <main className={styles.main}>
        <ExcursionesIndividuales
          title='ALTA MONTAÑA'
          p={
            <React.Fragment>
              <p>
                Esta excursión es imperdible, ícono de Mendoza, lo más alto y lo
                más lindo de la Cordillera de los Andes, con sus valles
                intermontanos tan distintivos como su gente y su geografía
                única, acompaña de una historia significativa, como sus mitos y
                leyendas.... Cada paraje nos ofrece algo característico: la
                precordillera desde Cacheuta, hacia el valle de Potrerillos, con
                un sinfin de posibilidades de turismo aventura y alojamientos de
                montaña. Transitamos luego hacia Uspallata, un valle de
                película, tierra de huarpes y de gesta sanmartiniana...
              </p>
              <p>
                El camino nos conduce hasta Puente del Inca, patrimonio de la
                humanidad, incomparable en su naturaleza y color, camino donde
                los incas dejaron sus huellas. A cada paso nos encontraremos con
                historias y anécdotas propias de las montañas mendocinas que son
                un verdadero regocijo para la vista y todos los sentidos.
              </p>
              <p>
                El viaje avanza hasta Las Cuevas, última población limítrofe con
                Chile, y desde allí ascendemos por un camino de cornisas para
                arribar al Cristo Redentor, El Señor de los Andes que nos espera
                a casi 4.000 m.s.n.m. Una experiencia mágica que invita siempre
                a volver a la montaña!. Regresamos en horas de la tarde a la
                ciudad de Mendoza.
              </p>
            </React.Fragment>
          }
          li={
            <React.Fragment>
              <li>Salidas: todos los días</li>
              <li>Horario: 07:30 hs.</li>
              <li>Excursión de día completo. Regresa a las 19:00 hs. aprox.</li>
              <li>Consultar por circuito especial día domingo.</li>
              <li>
                Importante: Lleve tapabocas, ropa cómoda y abrigo, agua mineral,
                dulces, efectivo para compras (no se reciben tarjetas de
                crédito). Las personas con problemas cardíacos consultar a su
                médico, la altura media está entre los 3000-4200 metros sobre el
                nivel del mar, según la temporada. Adecuado para familias,
                niños, personas mayores. No requiere actividad física.
              </li>
              <li>
                <p>Precio: $ 5.499 por persona.</p>
              </li>
            </React.Fragment>
          }
          data={altaMontania}
        />
      </main>
    </>
  )
}
