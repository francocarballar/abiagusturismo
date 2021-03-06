import React from 'react'
import Head from 'next/head'
import styles from '../../styles/Bodegas.module.css'
import { ExcursionesIndividuales } from '../../src/components/ExcursionesIndividuales'

export default function CordonDelPlata () {
  const images = []
  images[0] =
    'https://res.cloudinary.com/abiagus-turismo/image/upload/v1657400752/excursiones/cordon-del-plata/1Cord%C3%B3n-del-Plata__tunel-potrerillos_v9nj6t.webp'
  images[1] =
    'https://res.cloudinary.com/abiagus-turismo/image/upload/v1657400752/excursiones/cordon-del-plata/2Cord%C3%B3n-del-Plata__ruta-del-perilago_imup6t.jpg'
  images[2] =
    'https://res.cloudinary.com/abiagus-turismo/image/upload/v1657400752/excursiones/cordon-del-plata/3Cord%C3%B3n-del-Plata__hotel-potrerillos_iqpmrw.jpg'
  images[3] =
    'https://res.cloudinary.com/abiagus-turismo/image/upload/v1657400752/excursiones/cordon-del-plata/4Cord%C3%B3n-del-Plata__camino-de-las-carreras_eyhjc7.jpg'
  images[4] =
    'https://res.cloudinary.com/abiagus-turismo/image/upload/v1657400752/excursiones/cordon-del-plata/5Cord%C3%B3n-del-Plata__casita_ibmveb.jpg'
  images[5] =
    'https://res.cloudinary.com/abiagus-turismo/image/upload/v1657400752/excursiones/cordon-del-plata/6Cord%C3%B3n-del-Plata__Cristo-Rey_Tupungato_kzqy5z.jpg'
  images[6] =
    'https://res.cloudinary.com/abiagus-turismo/image/upload/v1657400753/excursiones/cordon-del-plata/7Cord%C3%B3n-del-Plata__Cerro-Tupungato_of5chu.jpg'
  images[7] =
    'https://res.cloudinary.com/abiagus-turismo/image/upload/v1657400754/excursiones/cordon-del-plata/8Cord%C3%B3n-del-Plata__Bodega-Salentein_ssujyu.jpg'
  images[8] =
    'https://res.cloudinary.com/abiagus-turismo/image/upload/v1657400753/excursiones/cordon-del-plata/9Cord%C3%B3n-del-Plata__Bodega-Rutini_kbmyoi.jpg'
  images[9] =
    'https://res.cloudinary.com/abiagus-turismo/image/upload/v1657400753/excursiones/cordon-del-plata/10Cord%C3%B3n-del-Plata__Manzano-HIst%C3%B3rico_Cristo_uyzh0y.jpg'
  images[10] =
    'https://res.cloudinary.com/abiagus-turismo/image/upload/v1657400754/excursiones/cordon-del-plata/11Cord%C3%B3n-del-Plata__Manzano-HIst%C3%B3rico_i6txlg.jpg'
  return (
    <>
      <Head>
        <title>Cord??n del Plata | Excursiones | Abiagus Turismo</title>
        <meta
          name='description'
          content='En este tour visitaremos los lugares m??s destacados del Valle de
                Uco, saldremos de la ciudad de Mendoza hacia Potrerillos, vista
                panor??mica del dique hom??nimo, luego de pasar por la villa
                cabecera ascendemos hacia los valles intermontanos, alcanzando
                el camino de caracoles del Salto, que nos llevar?? directo al
                coraz??n de Tupungato, pasando por valle de la Carrera y mirador
                del Cristo Rey, disfrutaremos de una imagen del Cristo de 28 m
                de altura con los brazos abiertos mirando hacia el Valle y una
                vista incre??ble del imponente Cord??n del Plata. Luego hacia el
                valle de Gualtallary, encontraremos las plantaciones de frutales
                y vi??edos que dan origen a los famosos vinos de altura y a la
                gran producci??n de la zona, observando al pasar las bodegas de
                alta gama.
                
                Realizamos una breve parada en un secadero de Jam??n crudo para
                conocer un poco sobre su elaboraci??n y realizar una rica
                degustaci??n.
                
                En su paso transitaremos por el arroyo de los puntanos y el
                Cristo de la hermandad, hasta llegar finalmente al ???Manzano
                Hist??rico???, que recuerda el paso del General San Mart??n por esta
                tierra en 1823, con su gran monumento Renunciamiento Glorioso.
                En la reserva natural se encuentra tambi??n una importante
                estaci??n pisc??cola de trucha arco iris y salmonada, que son
                luego sembrados en los r??os de Mendoza. Tambi??n se pueden
                observar especies flora y fauna de la regi??n. Para finalizar,
                almorzamos en un parador t??pico de la zona y luego regresaremos
                a la ciudad.'
        />
      </Head>
      <main className={styles.main}>
        <ExcursionesIndividuales
          title='CORD??N DEL PLATA'
          p={
            <React.Fragment>
              <p>
                En este tour visitaremos los lugares m??s destacados del Valle de
                Uco, saldremos de la ciudad de Mendoza hacia Potrerillos, vista
                panor??mica del dique hom??nimo, luego de pasar por la villa
                cabecera ascendemos hacia los valles intermontanos, alcanzando
                el camino de caracoles del Salto, que nos llevar?? directo al
                coraz??n de Tupungato, pasando por valle de la Carrera y mirador
                del Cristo Rey, disfrutaremos de una imagen del Cristo de 28 m
                de altura con los brazos abiertos mirando hacia el Valle y una
                vista incre??ble del imponente Cord??n del Plata. Luego hacia el
                valle de Gualtallary, encontraremos las plantaciones de frutales
                y vi??edos que dan origen a los famosos vinos de altura y a la
                gran producci??n de la zona, observando al pasar las bodegas de
                alta gama.
              </p>
              <p>
                Realizamos una breve parada en un secadero de Jam??n crudo para
                conocer un poco sobre su elaboraci??n y realizar una rica
                degustaci??n.
              </p>
              <p>
                En su paso transitaremos por el arroyo de los puntanos y el
                Cristo de la hermandad, hasta llegar finalmente al ???Manzano
                Hist??rico???, que recuerda el paso del General San Mart??n por esta
                tierra en 1823, con su gran monumento Renunciamiento Glorioso.
                En la reserva natural se encuentra tambi??n una importante
                estaci??n pisc??cola de trucha arco iris y salmonada, que son
                luego sembrados en los r??os de Mendoza. Tambi??n se pueden
                observar especies flora y fauna de la regi??n. Para finalizar,
                almorzamos en un parador t??pico de la zona y luego regresaremos
                a la ciudad.
              </p>
            </React.Fragment>
          }
          li={
            <React.Fragment>
              <li>Salidas: martes y s??bados.</li>
              <li>Hora: 07:30 hs.</li>
              <li>Excursi??n de d??a completo, regresa 17:30 hs. aprox.</li>
              <li>Consultar por otros d??as de salida y horarios.</li>
              <li>
                <p>Precio: $ 6.499 por persona.</p>
              </li>
            </React.Fragment>
          }
          images={images}
          nroImages={10}
        />
      </main>
    </>
  )
}
