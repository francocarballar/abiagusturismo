import React from 'react'
import './BodegasPage.css'
import { ExcursionesIndividuales } from '../../ExcursionesIndividuales'

function BodegasPage () {
  const images = []
  images[0] = require('../../../assets/excursiones/bodegas/vinedos-al-atardecer.jpg')
  images[1] = require('../../../assets/excursiones/bodegas/vinedos-de-día.jpg')
  images[2] = require('../../../assets/excursiones/bodegas/vino-y-vinedos.jpg')
  images[3] = require('../../../assets/excursiones/bodegas/barricas-de-vino-en-el-interior-de-la-bodega.jpg')
  images[4] = require('../../../assets/excursiones/bodegas/barricas-de-vino.jpg')
  images[5] = require('../../../assets/excursiones/bodegas/bodega-baudron__barricas.jpg')
  images[6] = require('../../../assets/excursiones/bodegas/bodega-elcerno.jpg')
  images[7] = require('../../../assets/excursiones/bodegas/bodega-cecchin.jpg')
  images[8] = require('../../../assets/excursiones/bodegas/bodega-florio.jpeg')
  images[9] = require('../../../assets/excursiones/bodegas/barricas-de-vino-al-exterior.jpg')
  images[10] = require('../../../assets/excursiones/bodegas/bodega-vistandes.jpeg')
  images[11] = require('../../../assets/excursiones/bodegas/bodega-domiciano.jpg')
  images[12] = require('../../../assets/excursiones/bodegas/foto-aritística-del-vino.jpg')
  images[13] = require('../../../assets/excursiones/bodegas/uvas-copas-de-vino-y-botellas-de-vino.jpg')
  images[14] = require('../../../assets/excursiones/bodegas/brindis.jpg')
  images[15] = require('../../../assets/excursiones/bodegas/gente-brindando.jpg')
  return (
    <main className='main'>
      <ExcursionesIndividuales
        title='BODEGAS'
        p={
          <React.Fragment>
            <p>
              En esta excursión visitaremos "dos bodegas" de distintas
              características, en el departamento de Maipú, "Cuna del Vino", que
              forma parte de la primera zona vitivinícola argentina, y de los
              tantos caminos del vino que tiene nuestra provincia. El recorrido
              por las bodegas nos mostrará el proceso de elaboración del vino y
              finalizará con la tan preciada degustación.
            </p>
            <p>
              Además sumamos al circuito productivo, la visita a una fábrica de
              aceite de oliva, donde conoceremos los métodos de extracción del
              aceite y todos los productos derivados de la aceituna, con una
              exquisita degustación de aceites tradicionales y saborizados,
              aceitunas, tomates secos y diferentes pastas: de aceitunas, humus,
              garbanzos, zanahoria, remolacha, etc. Este paseo está enmarcado
              por viñedos y las áreas rurales del oasis norte de Mendoza,
              dejando ver así una de las principales riquezas de la provincia,
              "EL VINO"
            </p>
          </React.Fragment>
        }
        li={
          <React.Fragment>
            <li>Salidas: todos los días, excepto domingos.</li>
            <li>Hora: a partir de 14:00 hs.</li>
            <li>Excursión de medio día.</li>
            <li>Consultar por circuito especial día domingo.</li>
            <li>Importante: consultar cantidad  de vinos permitida que puede transportar en las distintas compañías aéreas.</li>
            <li>
              <p>Precio: $ 2.299 por persona.</p>
            </li>
          </React.Fragment>
        }
        images={images}
        nroImages={15}
      />
    </main>
  )
}

export { BodegasPage }
