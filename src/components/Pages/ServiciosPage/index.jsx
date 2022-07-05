import React from 'react'
import './ServiciosPage.css'
import { TitleContainer } from '../../TitleContainer'
import { ExcursionesContainer } from '../../ExcursionesContainer'

function ServiciosPage () {
  return (
    <main>
      <TitleContainer title='SERVICIOS' />
      <ExcursionesContainer
        title='TRASLADOS'
        description='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt commodi repellat dolores perferendis corrupti illo eum praesentium ducimus eos dolorem sit, repudiandae vel, suscipit cupiditate harum? Neque placeat possimus ex?'
        url='traslados'
        img={require('../../../assets/servicios/camioneta-turismo.png')}
        alt='Camioneta de turismo'
      />
      <ExcursionesContainer
        title='HOTELES'
        description='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt commodi repellat dolores perferendis corrupti illo eum praesentium ducimus eos dolorem sit, repudiandae vel, suscipit cupiditate harum? Neque placeat possimus ex?'
        url='hoteles'
        img={require('../../../assets/servicios/hotel-habitacion.jpg')}
        alt='Portones del Parque San Martín'
      />
      <ExcursionesContainer
        title='RESTAURANTES'
        description='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt commodi repellat dolores perferendis corrupti illo eum praesentium ducimus eos dolorem sit, repudiandae vel, suscipit cupiditate harum? Neque placeat possimus ex?'
        url='retaurantes'
        img={require('../../../assets/servicios/viaja-mendoza.png')}
        alt='Portones del Parque San Martín'
      />
    </main>
  )
}

export { ServiciosPage }
