import React from 'react'
import './QuienesSomosPage.css'
import { TitleContainer } from '../../TitleContainer'
import elianaMoreno from '../../../assets/personas/eliana-moreno.jpg'

function QuienesSomosPage () {
  return (
    <main>
      <TitleContainer title='¿QUIÉNES SOMOS?' />
      <section className='section__quienes-somos'>
        <p>
          Somos prestadores de servicios turisticos, con una trayectoria de más
          de 30 años.
        </p>
        <p>
          Contamos con la experiencia suficiente y el personal idóneo capacitado
          para ayudar a cumplir sus espectativas de viajes. Deseamos que usted
          alcance su satisfacción a la hora de contratar nuestros servicios, los
          cuales se cumpliran a traves de personal administrativo y de reservas,
          asistentes de viajes, guías locales nacionales y bilingües
          especializados, coordinadores, conductores, servicios de transporte y
          hotelería que hacen a todo un equipo que trabaja para usted. Logrando
          cristalizar sus ilusiones y necesidades a la hora de viajar...
        </p>
        <p>
          Nos dedicamos al turismo local, nacional e internacional, individual y
          grupal. Contrataciones de transporte. Servicios especiales y de
          transporte terrestre a todo el país y paises limitrofes.
        </p>
        <p>Coordinamos eventos educativos y deportivos...</p>
      </section>
      <section className='section__informacion-personal'>
        <div className='informacion-personal--eliana-moreno'>
          <h2>ELIANA MORENO</h2>
          <h3>Founder</h3>
          <h4>BIO</h4>
          <p>Soy Eliana Moreno, Profesional de Turismo.</p>
          <p>
            Hace 30 años que abracé esta profesión que me permite conocer y
            hacer conocer las maravillas de la naturaleza, revivir nuestra
            historia, mostrar lo mágico de una tierra llena de sol, del mejor
            vino, de cultura, de trabajo y esfuerzo, de legado de patria y de
            raíces ancestrales....de un desierto transformado en vergel, regado
            por agua pura de la Cordillera de Los Andes....
          </p>
          <p>
            En mis años de formación profesional participé de gran cantidad de
            congresos, jornadas, eventos y distintas capacitaciones, y logré así
            acceder a trabajar en turismo pasando por un gran abanico de
            oportunidades. Turismo receptivo nacional e internacional, Turismo
            de Aconcagua, Turismo emisivo nacional. Turismo local y todo un
            quehacer desde la administración, promociones, ventas, operaciones,
            reservas, coordinación y guía de turismo.
          </p>
          <p>
            Hoy pienso en todos estos años y el balance es muy positivo, elegí
            ser feliz y hacer feliz en esta actividad que amo, que me llena de
            alegrías y de satisfacciones, que me recuerda la expresión de
            asombro, de admiración, de regocijo, de cada pasajero, cuando
            conocen lo nuestro. Personas que vienen a cumplir un sueño, con
            muchas expectativas y su equipaje cargado de ilusión y anhelos; las
            que en primer momento son clientes o sólo turistas, pero que
            comparten cada experiencia en cada paseo, se transforman así en
            amigos que también aman lo nuestro.
          </p>
          <h4>EDUCACIÓN</h4>
          <p>
            Técnico Superior en Turismo, Escuela Internacional de Turismo,
            Hotelería y Gastronomía de Mendoza, 1998.
          </p>
          <h4>PROFESIONAL DE TURISMO</h4>
          <p>Resolución N°: 53/06</p>
          <a href='https://www.mendoza.gov.ar/turismo/' target='_blank'>
            <p>EMETUR</p>
          </a>
          <h4>ÁREAS DE DESEMPEÑO</h4>
          <p>Turismo receptivo y emisivo.</p>
          <p>Turismo individual y grupal.</p>
          <p>Turismo de servicios privados.</p>
          <p>Turismo enológico.</p>
          <p>Turismo de Aconcagua.</p>
          <p>Turismo corporativo.</p>
          <p>Turismo de congresos.</p>
          <p>Turismo estudiantil y egresados.</p>
          <p>Turismo de adultos mayores.</p>
          <a
            href='https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=elianamoreno628@gmail.com'
            target='_blank'
            data-content='https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=elianamoreno628@gmail.com'
            className='eliana-moreno--button-contactar'
          >
            CONTACTAR
          </a>
        </div>
        <div className='informacion-personal--imagen-eliana-moreno'>
          <figure>
            <img
              src={elianaMoreno}
              alt='Foto en la que aparece Eliana Moreno, con un atuendo elegante y coqueto, sentada en una fuente en una plaza de Mar del Plata'
            />
          </figure>
        </div>
      </section>
    </main>
  )
}

export { QuienesSomosPage }
