import React from 'react'
import Head from 'next/head'
import styles from '../styles/Excursiones.module.css'
import { TitleContainer } from '../src/components/TitleContainer'
import { ExcursionesContainer } from '../src/components/ExcursionesContainer'

export default function Excursiones () {
  return (
    <>
      <Head>
        <title>Excursiones | Abiagus Turismo</title>
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
        <TitleContainer title='EXCURSIONES' />
        <ExcursionesContainer
          title='CITY TOUR'
          description='Recorre los lugares más destacados de la ciudad, Área fundacional, principales plazas, área del microcentro, Barrio Cívico, Parque General San Martín con Cerro de la Gloria, gran monumento representativo de la gesta sanmartiniana. Visita además Santuario de la Virgen de Lourdes en el Challao.'
          url='excursiones/city-tour'
          img='/media/excursiones/city-tour/Portones_Parque-San-Martín.jpg'
          alt='Portones del Parque San Martín'
        />
        <ExcursionesContainer
          title='BODEGAS'
          description='Visita dos bodegas, en la primera zona vitivinícola de Mendoza, una bodega boutique y una industrializada con degustación de vinos, establecimiento olivícola con degustación. Por último visitamos la Iglesia de la Virgen de la Carrodilla, donde se encuentra la patrona de los viñedos'
          url='excursiones/bodegas'
          img='/media/excursiones/bodegas/vinedos-al-atardecer.jpg'
          alt='Portones del Parque San Martín'
        />
        <ExcursionesContainer
          title='VILLAVICENCIO'
          description='Paraje precordillerano donde visitaremos el antiguo Hotel de Villavicencio, sus jardines, capilla y alrededores. Un circuito donde conoceremos las bondades del agua mineral y termal, la historia y geografía de la reserva natural y viejo camino de caracoles hasta zona de los miradores.'
          url='excursiones/villavicencio'
          img='/media/excursiones/villavicencio/reserva-natural-villavicencio-mendoza.jpg'
          alt='Hotel de villavicencio'
        />
        <ExcursionesContainer
          title='VALLE DE UCO'
          description='Por camino de los cerrillos llegamos a Tupungato, mirador del Cristo Rey, luego de atravesar la ciudad, nos dirigimos al valle de Gualtayarí , vista de  bodegas de alta gama. Continuamos hasta el Manzano Histórico en Tunuyán, Monumento Renunciamiento Glorioso y regreso por corredor productivo'
          url='excursiones/valle-de-uco'
          img='/media/excursiones/valle-de-uco.jpg'
          alt='Valle de uco'
        />
        <ExcursionesContainer
          title='CORDÓN DEL PLATA'
          description='Circuito que bordea el imponente cordón montañoso, valle de Potrerillos y dique homónimo, ascenso por camino de caracoles desde el valle de Las Vegas, el Salto hasta Las Carreras con vista panorámica del Cerro Vallecitos. Llegando al Valle de Uco,  al departamento de Tupungato, transitamos por el corredor productivo, hasta arribar al departamento de Tunuyán, contemplamos en el Manzano Histórico el monumento Renunciamiento  Glorioso ligado a la gesta sanmartiniana.'
          url='excursiones/cordon-del-plata'
          img='/media/excursiones/cordon-del-plata/5Cordón-del-Plata__casita.jpg'
          alt='Fotografía del cordón del plata'
        />
        <ExcursionesContainer
          title='ALTA MONTAÑA'
          description='Circuito cordillerano, pasando por Cacheuta, Potrerillos y su dique homónimo, valle de Uspallata, centro de ski Los Penitentes, Puente del Inca, maravilla de la naturaleza, mirador del Cerro Aconcagua, villa fronteriza de Las Cuevas y ascenso al Cristo Redentor (sólo en verano).'
          url='excursiones/alta-montania'
          img='/media/excursiones/cristo-redentor.jpg'
          alt='Fotografía del cristo redentor en alta montaña'
        />
        <ExcursionesContainer
          title='CAÑÓN DEL ATUEL'
          description='Circuito que se dirige al sur de la provincia, ingresando al departamento de San Rafael, donde realizamos una visita a la ciudad, luego transitamos hacia el Cañón del Atuel, dando paso al río Atuel y el Complejo Hidroeléctrico de los Nihuiles, dique embalse Valle Grande, diques Aisol y Tierras Blancas y el gran dique Nihuil, regresamos por cuesta de los terneros hacia San Rafael y posterior tránsito a Mendoza.'
          url='excursiones/canion-del-atuel'
          img='/media/excursiones/canon-del-atuel.jpg'
          alt='Fotografía del cañón del atuel'
        />
        <ExcursionesContainer
          title='CACHEUTA'
          description='En el corazón de la precordillera, relax y naturaleza en un Parque Termal con piletas de diferente temperatura, juegos para niños, turismo aventura y los beneficios del agua termal en un lugar único e inolvidable.'
          url='excursiones/cacheuta'
          img='/media/excursiones/cacheuta/2Cacheuta__Parque-termal.jpg'
          alt='Fotografía de las termas de cacheuta'
          displayHr='none'
        />
      </main>
    </>
  )
}
