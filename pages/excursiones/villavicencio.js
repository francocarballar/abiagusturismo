import React from 'react'
import Head from 'next/head'
import styles from '../../styles/Villavicencio.module.css'
import { ExcursionesIndividuales } from '../../src/components/ExcursionesIndividuales'

export default function Villavicencio () {
  const images = []
  images[0] =
    'https://res.cloudinary.com/abiagus-turismo/image/upload/v1657400690/excursiones/villavicencio/reserva-natural-villavicencio__portada_ukqvx5.jpg'
  images[1] =
    'https://res.cloudinary.com/abiagus-turismo/image/upload/v1657400689/excursiones/villavicencio/reserva-natural-villavicencio-mendoza_fir4lj.jpg'
  images[2] =
    'https://res.cloudinary.com/abiagus-turismo/image/upload/v1657400689/excursiones/villavicencio/reserva-natural-villavicencio_rodige.jpg'
  images[3] =
    'https://res.cloudinary.com/abiagus-turismo/image/upload/v1657400690/excursiones/villavicencio/reserva-natural-villavicencio__nevada_gfdjpx.jpg'
  images[4] =
    'https://res.cloudinary.com/abiagus-turismo/image/upload/v1657400687/excursiones/villavicencio/hotel-villavicencio_bb9epi.jpg'
  images[5] =
    'https://res.cloudinary.com/abiagus-turismo/image/upload/v1657400688/excursiones/villavicencio/hotel-villavicencio__foto-frontal_kck85o.jpg'
  images[6] =
    'https://res.cloudinary.com/abiagus-turismo/image/upload/v1657400687/excursiones/villavicencio/guanaco_qlwx2h.jpg'
  images[7] =
    'https://res.cloudinary.com/abiagus-turismo/image/upload/v1657400688/excursiones/villavicencio/le%C3%B3n-de-montana_jvxir3.jpg'
  images[8] =
    'https://res.cloudinary.com/abiagus-turismo/image/upload/v1657400689/excursiones/villavicencio/le%C3%B3n-de-montana__rugiendo_ntvfmc.jpg'
  images[9] =
    'https://res.cloudinary.com/abiagus-turismo/image/upload/v1657400690/excursiones/villavicencio/zorro_dttmo6.jpg'
  images[10] =
    'https://res.cloudinary.com/abiagus-turismo/image/upload/v1657400690/excursiones/villavicencio/vegetaci%C3%B3n-villavicencio_uvixqo.jpg'
  images[11] =
    'https://res.cloudinary.com/abiagus-turismo/image/upload/v1657400687/excursiones/villavicencio/cascada-villavicencio_syucal.png'
  images[12] =
    'https://res.cloudinary.com/abiagus-turismo/image/upload/v1657400687/excursiones/villavicencio/arbolismo-villavicencio_p5ge4q.jpg'
  images[13] =
    'https://res.cloudinary.com/abiagus-turismo/image/upload/v1657400690/excursiones/villavicencio/tirolesa-villavicencio_mqj4hf.jpg'
  images[14] =
    'https://res.cloudinary.com/abiagus-turismo/image/upload/v1657400690/excursiones/villavicencio/tirolesa-nino-villavicencio_x0d312.jpg'
  images[15] =
    'https://res.cloudinary.com/abiagus-turismo/image/upload/v1657400687/excursiones/villavicencio/capilla-villavicencio_rbe7ts.jpg'
  return (
    <>
      <Head>
        <title>Villavicencio | Excursiones | Abiagus Turismo</title>
        <meta
          name='description'
          content='La paz y la naturaleza, la geograf??a y la historia se conjugan en
              un emblem??tico lugar de Mendoza.
              "No es s??lo agua mineral", es m??s que eso, es precordillera en su
              m??xima expresi??n y todo lo que ella contiene. Los acu??feros del
              agua mineral, la vida de la monta??a a trav??s de millones de a??os,
              la fauna y flora nativa en una reserva natural de 72.000 ha. que
              es patrimonio de todos....y un "hotel ??nico" que fue testigo del
              paso de grandes personalidades de la historia pol??tica y social
              argentina. Un sitio arqueol??gico important??simo y con s??lidos
              conceptos de conservaci??n y educaci??n ambiental.
              De camino a la reserva natural, podremos observar la planta
              embotelladora de la "primer agua mineral del pa??s", transitando la
              noble ruta sanmartiniana....'
        />
      </Head>
      <main className={styles.main}>
        <ExcursionesIndividuales
          title='VILLAVICENCIO'
          p={
            <React.Fragment>
              <p>
                La paz y la naturaleza, la geograf??a y la historia se conjugan
                en un emblem??tico lugar de Mendoza.
              </p>
              <p>
                "No es s??lo agua mineral", es m??s que eso, es precordillera en
                su m??xima expresi??n y todo lo que ella contiene. Los acu??feros
                del agua mineral, la vida de la monta??a a trav??s de millones de
                a??os, la fauna y flora nativa en una reserva natural de 72.000
                ha. que es patrimonio de todos....y un "hotel ??nico" que fue
                testigo del paso de grandes personalidades de la historia
                pol??tica y social argentina. Un sitio arqueol??gico
                important??simo y con s??lidos conceptos de conservaci??n y
                educaci??n ambiental.
              </p>
              <p>
                De camino a la reserva natural, podremos observar la planta
                embotelladora de la "primer agua mineral del pa??s", transitando
                la noble ruta sanmartiniana....
              </p>
            </React.Fragment>
          }
          li={
            <React.Fragment>
              <li>Salidas: mi??rcoles y s??bados.</li>
              <li>Hora: a partir de las 08:00 hs.</li>
              <li>Excursi??n de medio d??a.</li>
              <li>Consultar por otros d??as de salida.</li>
              <li>Importante: no incluye entrada a la reserva.</li>
              <ul id={styles.ul__entradas}>
                Entradas:
                <li>General Mayor $ 1180,00</li>
                <li>General Menor (de 12 a 6 a??os) $ 650,00</li>
                <li>Residente mendocino $ 800,00</li>
                <li>Reesidente mendocino menor (de 12 a 6 a??os) $ 600,00</li>
                <li>General Jubilado $ 800,00</li>
                <li> Jubilado Mendocino $ 650,00</li>
              </ul>
              <li>
                <p>Precio: $ 3.299 por persona.</p>
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
