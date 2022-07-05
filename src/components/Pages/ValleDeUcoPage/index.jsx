import React from 'react'
import './ValleDeUcoPage.css'
import { ExcursionesIndividuales } from '../../ExcursionesIndividuales'

function ValleDeUcoPage () {
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
        title='VALLE DE UCO'
        p={
          <React.Fragment>
            <p>
              A través de esta excursión recorreremos el oasis centro de
              Mendoza, saliendo de la ciudad capital hacia el departamento de
              Tupungato, atravesando el camino de los cerrillos, zona importante
              de producción petrolera y vitivinícola, en dirección al mirador
              del "Cristo Rey", vista panorámica del valle a 1.428 m.s.n.m. y
              del valle de las Carreras. Luego nos dirigimos a la villa cabecera
              del lugar, previa parada en sitio regional de venta y degustación
              de frutas secas y productos del sector. Al atravesar la ciudad,
              llegamos al valle de Gualtallary, incomparable riqueza
              vitivinícola reflejada en las bodegas de alta gama de Tupungato y
              Tunuyán, mágico recorrido entre viñedos de altura y el marco
              natural del Cordón del Plata....
            </p>
            <p>
              El camino nos lleva al Manzano Histórico, monumento Renunciamiento
              Glorioso, hito en la gesta sanmartiniana, lugar donde descansara
              el Gral. José de San Martín a su regreso de la campaña
              libertadora; reserva natural de gran belleza y alto contenido
              histórico. Regreso a Mendoza por corredor productivo y el interior
              de Tunuyán, conociendo más lugares con gran cantidad de hectáreas
              en producción. Circuito circular cerrado muy interesante.
            </p>
          </React.Fragment>
        }
        li={
          <React.Fragment>
            <li>Salidas: martes y sábados.</li>
            <li>Hora: 08:00 hs.</li>
            <li>Excursión de medio día, regreso 13:30 hs. aprox..</li>
            <li>Consultar por otros días de salida y horarios.</li>
            <li>Importante: llevar agua y tapabocas.</li>
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

export { ValleDeUcoPage }
