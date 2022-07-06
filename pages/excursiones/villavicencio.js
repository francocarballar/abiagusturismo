import React from 'react'
import Head from 'next/head'
import styles from '../../styles/Villavicencio.module.css'
import { ExcursionesIndividuales } from '../../src/components/ExcursionesIndividuales'

export default function Villavicencio () {
  const images = []
  images[0] =
    '/media/excursiones/villavicencio/reserva-natural-villavicencio__portada.jpg'
  images[1] =
    '/media/excursiones/villavicencio/reserva-natural-villavicencio-mendoza.jpg'
  images[2] =
    '/media/excursiones/villavicencio/reserva-natural-villavicencio.jpg'
  images[3] =
    '/media/excursiones/villavicencio/reserva-natural-villavicencio__nevada.jpg'
  images[4] = '/media/excursiones/villavicencio/hotel-villavicencio.jpg'
  images[5] =
    '/media/excursiones/villavicencio/hotel-villavicencio__foto-frontal.jpg'
  images[6] = '/media/excursiones/villavicencio/guanaco.jpg'
  images[7] = '/media/excursiones/villavicencio/león-de-montana.jpg'
  images[8] = '/media/excursiones/villavicencio/león-de-montana__rugiendo.jpg'
  images[9] = '/media/excursiones/villavicencio/zorro.jpg'
  images[10] = '/media/excursiones/villavicencio/vegetación-villavicencio.jpg'
  images[11] = '/media/excursiones/villavicencio/cascada-villavicencio.jpg'
  images[12] = '/media/excursiones/villavicencio/arbolismo-villavicencio.jpg'
  images[13] =
    '/media/excursiones/villavicencio/tirolesa-nino-villavicencio.jpg'
  images[14] =
    '/media/excursiones/villavicencio/tirolesa-nino-villavicencio.jpg'
  images[15] = '/media/excursiones/villavicencio/capilla-villavicencio.jpg'
  return (
    <>
      <Head>
        <title>Villavicencio | Excursiones | Abiagus Turismo</title>
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
                "No es sólo agua mineral", es más que eso, es precordillera en
                su máxima expresión y todo lo que ella contiene. Los acuíferos
                del agua mineral, la vida de la montaña a través de millones de
                años, la fauna y flora nativa en una reserva natural de 72.000
                ha. que es patrimonio de todos....y un "hotel único" que fue
                testigo del paso de grandes personalidades de la historia
                política y social argentina. Un sitio arqueológico
                importantísimo y con sólidos conceptos de conservación y
                educación ambiental.
              </p>
              <p>
                De camino a la reserva natural, podremos observar la planta
                embotelladora de la "primer agua mineral del país", transitando
                la noble ruta sanmartiniana....
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
                <li>General Mayor $ 700,00</li>
                <li>General Menor (de 12 a 6 años) $ 500,00</li>
                <li>Residente mendocino $ 500,00</li>
                <li>Reesidente mendocino menor (de12 a 6 años) $ 420,00</li>
                <li>General Jubilado $ 480,00</li>
                <li> Jubilado Mendocino $ 350,00</li>
              </ul>
              <li>
                <p>Precio: $ 2.499 por persona.</p>
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
