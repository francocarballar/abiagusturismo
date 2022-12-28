import React from 'react'
import Head from 'next/head'
import styles from '@src/styles/Villavicencio.module.css'
import { ExcursionesIndividuales } from '@components/ExcursionesIndividuales'

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
        <title>Villavicencio | Excursiones en Mendoza | Abiagus Turismo</title>
        <meta
          name='description'
          content='La paz y la naturaleza, la geografía y la historia se conjugan en
              un emblemático lugar de Mendoza.
              "No es sólo agua mineral", es más que eso, es precordillera en su
              máxima expresión y todo lo que ella contiene. Los acuíferos del
              agua mineral, la vida de la montaña a través de millones de años,
              la fauna y flora nativa en una reserva natural de 72.000 ha. que
              es patrimonio de todos....y un "hotel único" que fue testigo del
              paso de grandes personalidades de la historia política y social
              argentina. Un sitio arqueológico importantísimo y con sólidos
              conceptos de conservación y educación ambiental.
              De camino a la reserva natural, podremos observar la planta
              embotelladora de la "primer agua mineral del país", transitando la
              noble ruta sanmartiniana....'
        />
      </Head>
      <main className={styles.main}>
        <ExcursionesIndividuales
          title='VILLAVICENCIO'
          p={
            <React.Fragment>
              <p>
                La paz y la naturaleza, la geografía y la historia se conjugan
                en un emblemático lugar de Mendoza.
              </p>
              <p>
                No es sólo agua mineral, es más que eso, es precordillera en su
                máxima expresión y todo lo que ella contiene. Los acuíferos del
                agua mineral, la vida de la montaña a través de millones de
                años, la fauna y flora nativa en una reserva natural de 72.000
                ha. que es patrimonio de todos....y un hotel único que fue
                testigo del paso de grandes personalidades de la historia
                política y social argentina. Un sitio arqueológico
                importantísimo y con sólidos conceptos de conservación y
                educación ambiental.
              </p>
              <p>
                De camino a la reserva natural, podremos observar la planta
                embotelladora de la primer agua mineral del país, transitando la
                noble ruta sanmartiniana....
              </p>
            </React.Fragment>
          }
          li={
            <React.Fragment>
              <li>Salidas: miércoles y sábados.</li>
              <li>Hora: a partir de las 08:00 hs.</li>
              <li>Excursión de medio día.</li>
              <li>Consultar por otros días de salida.</li>
              <li>Importante: no incluye entrada a la reserva.</li>
              <ul id={styles.ul__entradas}>
                Entradas:
                <li>General Mayor $ 1180,00</li>
                <li>General Menor (de 12 a 6 años) $ 650,00</li>
                <li>Residente mendocino $ 800,00</li>
                <li>Reesidente mendocino menor (de 12 a 6 años) $ 600,00</li>
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
