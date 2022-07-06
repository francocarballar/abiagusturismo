import React from 'react'
import './AltaMontaniaPage.css'
import { ExcursionesIndividuales } from '../../ExcursionesIndividuales'

function AltaMontaniaPage () {
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
        title='ALTA MONTAÑA'
        p={
          <React.Fragment>
            <p>
              Este paseo nos remonta a los orígenes del mundo donde el viento y
              el agua labraron en la roca esculturas naturales, "los caprichos
              de la naturaleza". Este extenso accidente geográfico es más
              antiguo que la Cordillera de Los Andes. El circuito comienza
              transitando la cuesta de los terneros, con un marco geográfico que
              nos introducen en el paisaje de a poco...hasta llegar a la villa
              de El Nihuil, "el mar mendocino" nos espera. De alli nos
              introducimos en 45 Km. de camino consolidado que acompañan el
              incansable descenso de las aguas del río Atuel, por un cañadón
              realmente único. Figuras caprichosas como El Museo de Cera, Los
              Jardines Colgantes, Los Monjes, El Búho y otras tantas que invitan
              a detenerse, a vivir el paisaje y a jugar con la imaginación en
              todo momento.
            </p>
            <p>
              Luego de una sinuosa cuesta, y de atravesar el complejo
              hidroeléctrico de Los Nihuiles, con sus diques intermedios,
              descubrimos la inmensidad del Embalse Valle Grande, ingresando así
              al paraje ideal para la práctica de actividades de aventura y
              deportes náuticos, en un lugar que te invita a quedarte!. Regreso
              a Mendoza en horas de la tarde/noche.
            </p>
          </React.Fragment>
        }
        li={
          <React.Fragment>
            <li>Salidas: martes, jueves y domingos.</li>
            <li>Hora: 07:00 hs.</li>
            <li>Excursión de día completo.</li>
            <li>Consultar por otros días de salida.</li>
            <li>
              Importante: llevar tapaboca, agua, protección solar, ropa cómoda y
              otra muda para cambiar en caso de realizar actividades de
              aventura. Dinero en efectivo, no es posible usar tarjetas de
              crédito o débito.
            </li>
            <li>
              <p>Precio: $ 4.199 por persona.</p>
            </li>
          </React.Fragment>
        }
        images={images}
        nroImages={18}
      />
    </main>
  )
}

export { AltaMontaniaPage }
