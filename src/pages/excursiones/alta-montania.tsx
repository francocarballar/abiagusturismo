import React from 'react'
import Head from 'next/head'
import styles from '@src/styles/Bodegas.module.css'
import { ExcursionesIndividuales } from '@components/ExcursionesIndividuales'

export default function AltaMontania () {
  const images = []
  images[0] =
    'https://res.cloudinary.com/abiagus-turismo/image/upload/v1657400648/excursiones/alta-monta%C3%B1a/1Alta-Monta%C3%B1a__Tunel-potrerillos_tfy5dt.jpg'
  images[1] =
    'https://res.cloudinary.com/abiagus-turismo/image/upload/v1657400648/excursiones/alta-monta%C3%B1a/2Alta-Monta%C3%B1a__Lago-potrerillos_agjdgj.jpg'
  images[2] =
    'https://res.cloudinary.com/abiagus-turismo/image/upload/v1657400649/excursiones/alta-monta%C3%B1a/3Alta-Monta%C3%B1a__Lago-potrerillos_nfdfng.jpg'
  images[3] =
    'https://res.cloudinary.com/abiagus-turismo/image/upload/v1657400649/excursiones/alta-monta%C3%B1a/4Alta-Monta%C3%B1a__Tunel-uspallata_t77ww1.jpg'
  images[4] =
    'https://res.cloudinary.com/abiagus-turismo/image/upload/v1657400648/excursiones/alta-monta%C3%B1a/5Alta-Monta%C3%B1a__Pueblo-uspallata_istyqi.jpg'
  images[5] =
    'https://res.cloudinary.com/abiagus-turismo/image/upload/v1657400648/excursiones/alta-monta%C3%B1a/6Alta-Monta%C3%B1a__Cerro-Montura-uspallata_lawn7i.jpg'
  images[6] =
    'https://res.cloudinary.com/abiagus-turismo/image/upload/v1657400650/excursiones/alta-monta%C3%B1a/7Alta-Monta%C3%B1a__Cerro-Los-Penitentes_ryfftv.jpg'
  images[7] =
    'https://res.cloudinary.com/abiagus-turismo/image/upload/v1657400650/excursiones/alta-monta%C3%B1a/8Alta-Monta%C3%B1a__Centro-de-ski-Los-Penitentes_crgl6h.jpg'
  images[8] =
    'https://res.cloudinary.com/abiagus-turismo/image/upload/v1657400650/excursiones/alta-monta%C3%B1a/9Alta-Monta%C3%B1a__Puente-del-Inca_ndk5rq.jpg'
  images[9] =
    'https://res.cloudinary.com/abiagus-turismo/image/upload/v1657400650/excursiones/alta-monta%C3%B1a/10Alta-Monta%C3%B1a__Puente-del-Inca-nevado_x7btoj.jpg'
  images[10] =
    'https://res.cloudinary.com/abiagus-turismo/image/upload/v1657400650/excursiones/alta-monta%C3%B1a/11Alta-Monta%C3%B1a__cara-sur-cerro-aconcagua_dcqqle.jpg'
  images[11] =
    'https://res.cloudinary.com/abiagus-turismo/image/upload/v1657400650/excursiones/alta-monta%C3%B1a/12Alta-Monta%C3%B1a__andinistas-Cerro-Aconcagua_mmwzwu.jpg'
  images[12] =
    'https://res.cloudinary.com/abiagus-turismo/image/upload/v1657400651/excursiones/alta-monta%C3%B1a/13Alta-Monta%C3%B1a__arco-de-las-cuevas_zvlhtd.jpg'
  images[13] =
    'https://res.cloudinary.com/abiagus-turismo/image/upload/v1657400651/excursiones/alta-monta%C3%B1a/14Alta-Monta%C3%B1a__Camino-al-Cristo-Redentor_eyidks.jpg'
  images[14] =
    'https://res.cloudinary.com/abiagus-turismo/image/upload/v1657400651/excursiones/alta-monta%C3%B1a/15Alta-Monta%C3%B1a__cristo-redentor_earau2.jpg'
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
          images={images}
          nroImages={14}
        />
      </main>
    </>
  )
}
