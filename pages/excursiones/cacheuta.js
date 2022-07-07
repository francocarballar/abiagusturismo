import React from 'react'
import Head from 'next/head'
import styles from '../../styles/Cacheuta.module.css'
import { ExcursionesIndividuales } from '../../src/components/ExcursionesIndividuales'

export default function Cacheuta () {
  const images = []
  images[0] = '/media/excursiones/cacheuta/1Cacheuta__Parque-termal.jpg'
  images[1] = '/media/excursiones/cacheuta/2Cacheuta__Parque-termal.jpg'
  images[2] = '/media/excursiones/cacheuta/3Cacheuta__Parque-termal.jpg'
  images[3] = '/media/excursiones/cacheuta/4Cacheuta__Parque-termal.jpg'
  images[4] = '/media/excursiones/cacheuta/5Cacheuta__Parque-termal.jpg'
  images[5] = '/media/excursiones/cacheuta/6Cacheuta__Parque-termal.jpg'
  images[6] = '/media/excursiones/cacheuta/7Cacheuta__Parque-termal.jpg'
  images[7] = '/media/excursiones/cacheuta/8Cacheuta__Parque-termal.jpg'
  images[8] = '/media/excursiones/cacheuta/9Cacheuta__Parque-termal.jpg'
  images[9] = '/media/excursiones/cacheuta/10Cacheuta__Parque-termal.jpg'
  images[10] = '/media/excursiones/cacheuta/11Cacheuta__Parque-termal.jpg'
  images[11] = '/media/excursiones/cacheuta/12Cacheuta__Parque-termal.jpeg'
  images[12] = '/media/excursiones/cacheuta/13Cacheuta__Parque-termal.jpg'
  images[13] = '/media/excursiones/cacheuta/14Cacheuta__Parque-termal.jpg'
  images[14] = '/media/excursiones/cacheuta/15Cacheuta__Parque-termal.jpg'
  return (
    <>
      <Head>
        <title>Cacheuta | Excursiones | Abiagus Turismo</title>
        <meta
          name='description'
          content='En Cacheuta podrás disfrutar de un parque acuático, de piletas de diferente temperatura, ubicadas en distintos niveles y rodeadas por pura precordillera, sol y el relax del agua termal.'
        />
      </Head>
      <main className={styles.main}>
        <ExcursionesIndividuales
          title='CACHEUTA'
          p={
            <React.Fragment>
              <h3>Parque de agua termal</h3>
              <p>
                En Cacheuta podrás disfrutar de un parque acuático, de piletas
                de diferente temperatura, ubicadas en distintos niveles y
                rodeadas de pura precordillera, sol y el relax del agua termal.
                Con los siguientes servicios:
              </p>
              <ul className={styles.ul}>
                <p>Características:</p>
                <li>Abierto todo el año de 10 a las 18hs</li>
                <li>PA 39km de la Ciudad de Mendoza</li>
                <li>Opción con traslado desde la Ciudad.</li>
                <li>
                  En medio de la pre Cordillera de Los Andes, junto al Río
                  Mendoza.
                </li>
                <li>Agua 100% termal</li>
                <li>
                  Más de 10 piscinas, burbujas termales + interactivo de niños +
                  tobogán corto.
                </li>
                <li>
                  Piletones de piedra con agua termal + Río Lento de 270 metros
                  + Piscina de Olas con chorro de 10 metros de altura + 3
                  Toboganes.
                </li>
                <li>
                  Quinchos y Parrillas, traé lo que quiera para tu Pic-Nic.
                </li>
                <li>
                  Restaurante, Fábrica de Cerveza Artesanal, Supermercado.
                </li>
              </ul>
              <ul className={styles.ul}>
                <p>Instalaciones:</p>
                <li>Quinchos cerrados y abiertos, con mesas y bancos.</li>
                <li>Churrasqueras.</li>
                <li>Buffet / restaurante / proveeduría.</li>
                <li>Baños y vestuarios.</li>
              </ul>
              <ul className={styles.ul}>
                <p>Servicios adicionales:</p>
                <li>
                  Turismo aventura: tirolesa de 180 m., palestra, treking,
                  rappel, cabalgatas y rafting.
                </li>
              </ul>
            </React.Fragment>
          }
          li={
            <React.Fragment>
              <li>Salidas: todos los días.</li>
              <li>Hora: 09:00 hs.</li>
              <li>Actividad de día completo.</li>
              <li>
                <p>
                  Precio: $ 2.999 de lunes a viernes, $ 3.299 sábado, domingos y
                  feriados.
                </p>
              </li>
            </React.Fragment>
          }
          images={images}
          nroImages={14}
          subtitle={<h3>Termas Spa</h3>}
          secondParagraph={
            <p>
              Su ubicación privilegiada y su exclusivo Spa Termal constituyen su
              principal atractivo. Son más de 10 piletones de piedra junto río
              con diferentes temperaturas e hidroterapias los que invitan a
              disrutar en contacto con la naturaleza. La Fango Terapia y la
              Gruta complementan y hacen de su Spa Termal un lugar único.
            </p>
          }
          secondLi={
            <React.Fragment>
              <li>Abierto todos los días del Año.</li>
              <li>A sólo 38km de la Ciudad de Mendoza.</li>
              <li>
                Piletones de piedra con agua termal a diferentes temperaturas y
                con distintas hidroterapias.
              </li>
              <li>Para mayores de 14 años.</li>
              <li>
                Fango Terapia, Rincón de Duchas, Gruta Termal, Sauna Seco,
                Pediluvio, Cacheutina y piscina de natación termal.
              </li>
              <li>
                TermaSpa Full Day : 10 a las 18hs. Incluye Almuerzo Buffet
                Criollo (sin bebidas) .
              </li>
              <li>Tarde de Terma Spa: de 15 a 18hs</li>
              <li>
                <p>Consultar por Día de Spa con translado $ 11.499.</p>
              </li>
            </React.Fragment>
          }
        />
      </main>
    </>
  )
}
