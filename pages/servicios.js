import React from 'react'
import Head from 'next/head'
import styles from '../styles/Servicios.module.css'
import { TitleContainer } from '/src/components/TitleContainer'
import { ExcursionesContainer } from '/src/components/ExcursionesContainer'

export default function Servicios () {
  return (
    <>
      <Head>
        <title>Servicios | Abiagus Turismo</title>
        <meta
          name='description'
          content='En Abiagus Turismo contamos con la experiencia suficiente y el personal idóneo
            capacitado para ayudar a cumplir sus espectativas de viajes.
            Deseamos que usted alcance su satisfacción a la hora de contratar
            nuestros servicios, los cuales se cumpliran a traves de personal
            administrativo y de reservas, asistentes de viajes, guías locales
            nacionales y bilingües especializados, coordinadores, conductores,
            servicios de transporte y hotelería que hacen a todo un equipo que
            trabaja para usted. Logrando cristalizar sus ilusiones y necesidades
            a la hora de viajar...'
        />
      </Head>
      <main className={styles.main}>
        <TitleContainer title='SERVICIOS' />
        <ExcursionesContainer
          title='TRASLADOS'
          description='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt commodi repellat dolores perferendis corrupti illo eum praesentium ducimus eos dolorem sit, repudiandae vel, suscipit cupiditate harum? Neque placeat possimus ex?'
          url='traslados'
          img='/media/servicios/camioneta-turismo.png'
          alt='Camioneta de turismo'
        />
        <ExcursionesContainer
          title='HOTELES'
          description='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt commodi repellat dolores perferendis corrupti illo eum praesentium ducimus eos dolorem sit, repudiandae vel, suscipit cupiditate harum? Neque placeat possimus ex?'
          url='hoteles'
          img='/media/servicios/hotel-habitacion.jpg'
          alt='Portones del Parque San Martín'
        />
        <ExcursionesContainer
          title='RESTAURANTES'
          description='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt commodi repellat dolores perferendis corrupti illo eum praesentium ducimus eos dolorem sit, repudiandae vel, suscipit cupiditate harum? Neque placeat possimus ex?'
          url='retaurantes'
          img='/media/servicios/viaja-mendoza.png'
          alt='Portones del Parque San Martín'
        />
      </main>
    </>
  )
}
