import React from 'react'
import './CordonDelPlataPage.css'
import { ExcursionesIndividuales } from '../../ExcursionesIndividuales'

function CordonDelPlataPage () {
  const images = []
  images[0] = require('../../../assets/excursiones/city-tour/Cartel-Medoza--día_Plaza-Independencia.jpg')
  images[1] = require('../../../assets/excursiones/city-tour/Aguas-Danzantes_Plaza-Independencia.jpg')
  images[2] = require('../../../assets/excursiones/city-tour/Cartel-Medoza--noche_Plaza-Independencia.jpg')
  images[3] = require('../../../assets/excursiones/city-tour/Escudo-Mendoza_Plaza-Independencia.jpg')
  images[4] = require('../../../assets/excursiones/city-tour/Plaza-Espana_Mendoza.jpg')
  images[5] = require('../../../assets/excursiones/city-tour/Plaza-San-Martín_Mendoza.jpg')
  images[6] = require('../../../assets/excursiones/city-tour/edificio-cultura.jpg')
  images[7] = require('../../../assets/excursiones/city-tour/Portones_Parque-San-Martín.jpg')
  images[8] = require('../../../assets/excursiones/city-tour/Fuente-de-los-Continentes_Parque-San-Martín.jpg')
  images[9] = require('../../../assets/excursiones/city-tour/Fuente-de-los-Continentes--gente_Parque-San-Martín.jpg')
  images[10] = require('../../../assets/excursiones/city-tour/Fuente-de-los-Continentes--otono_Parque-San-Martín.jpg')
  images[11] = require('../../../assets/excursiones/city-tour/Árboles--otono_Parque-San-Martín.jpg')
  images[12] = require('../../../assets/excursiones/city-tour/Árboles_Parque-San-Martín.jpg')
  images[13] = require('../../../assets/excursiones/city-tour/Rosedal_Parque-San-Martín.jpg')
  images[14] = require('../../../assets/excursiones/city-tour/Lago_Parque-San-Martín.jpg')
  images[15] = require('../../../assets/excursiones/city-tour/Lago--regatas_Parque-San-Martín.jpg')
  images[16] = require('../../../assets/excursiones/city-tour/Lago--montanas_Parque-San-Martín.jpg')
  images[17] = require('../../../assets/excursiones/city-tour/Cerro-de-la-Gloria_Parque-San-Martín.jpg')
  images[18] = require('../../../assets/excursiones/city-tour/Cerro-de-la-Gloria--monumento_Parque-San-Martín.jpg')
  return (
    <main className='main'>
      <ExcursionesIndividuales
        title='CORDÓN DEL PLATA'
        p={
          <React.Fragment>
            <p>
              En este tour visitaremos los lugares más destacados del Valle de
              Uco, saldremos de la ciudad de Mendoza hacia Potrerillos, vista
              panorámica del dique homónimo, luego de pasar por la villa
              cabecera ascendemos hacia los valles intermontanos, alcanzando el
              camino de caracoles del Salto, que nos llevará directo al corazón
              de Tupungato, pasando por valle de la Carrera y mirador del Cristo
              Rey, disfrutaremos de una imagen del Cristo de 28 m de altura con
              los brazos abiertos mirando hacia el Valle y una vista increíble
              del imponente Cordón del Plata. Luego hacia el valle de
              Gualtallary, encontraremos las plantaciones de frutales y viñedos
              que dan origen a los famosos vinos de altura y a la gran
              producción de la zona, observando al pasar las bodegas de alta
              gama.
            </p>
            <p>
              Realizamos una breve parada en un secadero de Jamón crudo para
              conocer un poco sobre su elaboración y realizar una rica
              degustación.
            </p>
            <p>
              En su paso transitaremos por el arroyo de los puntanos y el Cristo
              de la hermandad, hasta llegar finalmente al “Manzano Histórico”,
              que recuerda el paso del General San Martín por esta tierra en
              1823, con su gran monumento Renunciamiento Glorioso. En la reserva
              natural se encuentra también una importante estación piscícola de
              trucha arco iris y salmonada, que son luego sembrados en los ríos
              de Mendoza. También se pueden observar especies flora y fauna de
              la región. Para finalizar, almorzamos en un parador típico de la
              zona y luego regresaremos a la ciudad.
            </p>
          </React.Fragment>
        }
        li={
          <React.Fragment>
            <li>Salidas: martes y sábados.</li>
            <li>Hora: 07:30 hs.</li>
            <li>Excursión de día completo, regresa 17:30 hs. aprox.</li>
            <li>Consultar por otros días de salida y horarios.</li>
            <li>Importante: llevar agua y tapabocas.</li>
            <li>
              <p>Precio: $ 4.999 por persona.</p>
            </li>
          </React.Fragment>
        }
        images={images}
        nroImages={18}
      />
    </main>
  )
}

export { CordonDelPlataPage }
