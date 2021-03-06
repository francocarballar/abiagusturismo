import React from 'react'
import Head from 'next/head'
import styles from '../../styles/Bodegas.module.css'
import { ExcursionesIndividuales } from '../../src/components/ExcursionesIndividuales'

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
        <title>Alta Monta??a | Excursiones | Abiagus Turismo</title>
        <meta
          name='description'
          content='Esta excursi??n es "imperdible", ??cono de Mendoza, lo m??s alto y lo m??s lindo de la Cordillera de los Andes, con sus valles intermontanos tan distintivos como su gente y su geograf??a ??nica, acompa??a de una historia significativa, como sus mitos y leyendas.... Cada paraje nos ofrece algo caracter??stico: la precordillera desde Cacheuta, hacia el valle de Potrerillos, con un sinfin de posibilidades de turismo aventura y alojamientos de monta??a. Transitamos luego hacia Uspallata, "un valle de pel??cula", tierra de huarpes y de gesta sanmartiniana...
          El camino nos conduce hasta Puente del Inca, "patrimonio de la humanidad", incomparable en su naturaleza y color, "camino donde los incas dejaron sus huellas". A cada paso nos encontraremos con historias y an??cdotas propias de las monta??as mendocinas que son un verdadero regocijo para la vista y todos los sentidos.
          El viaje avanza hasta Las Cuevas, ??ltima poblaci??n lim??trofe con Chile, y desde all?? ascendemos por un camino de cornisas para arribar al Cristo Redentor, "El Se??or de los Andes" que nos espera a casi 4.000 m.s.n.m. Una experiencia m??gica que invita siempre a volver a la monta??a!. Regresamos en horas de la tarde a la ciudad de Mendoza.'
        />
      </Head>
      <main className={styles.main}>
        <ExcursionesIndividuales
          title='ALTA MONTA??A'
          p={
            <React.Fragment>
              <p>
                Esta excursi??n es "imperdible", ??cono de Mendoza, lo m??s alto y
                lo m??s lindo de la Cordillera de los Andes, con sus valles
                intermontanos tan distintivos como su gente y su geograf??a
                ??nica, acompa??a de una historia significativa, como sus mitos y
                leyendas.... Cada paraje nos ofrece algo caracter??stico: la
                precordillera desde Cacheuta, hacia el valle de Potrerillos, con
                un sinfin de posibilidades de turismo aventura y alojamientos de
                monta??a. Transitamos luego hacia Uspallata, "un valle de
                pel??cula", tierra de huarpes y de gesta sanmartiniana...
              </p>
              <p>
                El camino nos conduce hasta Puente del Inca, "patrimonio de la
                humanidad", incomparable en su naturaleza y color, "camino donde
                los incas dejaron sus huellas". A cada paso nos encontraremos
                con historias y an??cdotas propias de las monta??as mendocinas que
                son un verdadero regocijo para la vista y todos los sentidos.
              </p>
              <p>
                El viaje avanza hasta Las Cuevas, ??ltima poblaci??n lim??trofe con
                Chile, y desde all?? ascendemos por un camino de cornisas para
                arribar al Cristo Redentor, "El Se??or de los Andes" que nos
                espera a casi 4.000 m.s.n.m. Una experiencia m??gica que invita
                siempre a volver a la monta??a!. Regresamos en horas de la tarde
                a la ciudad de Mendoza.
              </p>
            </React.Fragment>
          }
          li={
            <React.Fragment>
              <li>Salidas: todos los d??as</li>
              <li>Horario: 07:30 hs.</li>
              <li>Excursi??n de d??a completo. Regresa a las 19:00 hs. aprox.</li>
              <li>Consultar por circuito especial d??a domingo.</li>
              <li>
                Importante: Lleve tapabocas, ropa c??moda y abrigo, agua mineral,
                dulces, efectivo para compras (no se reciben tarjetas de
                cr??dito). Las personas con problemas card??acos consultar a su
                m??dico, la altura media est?? entre los 3000-4200 metros sobre el
                nivel del mar, seg??n la temporada. Adecuado para familias,
                ni??os, personas mayores. No requiere actividad f??sica.
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
