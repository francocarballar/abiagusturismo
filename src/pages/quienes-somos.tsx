import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '@src/styles/QuienesSomos.module.css'
import { TitleContainer } from '@components/TitleContainer'

export default function QuinesSomos () {
  return (
    <>
      <Head>
        <title>¿Quiénes somos? | Abiagus Turismo</title>
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
      <main>
        <TitleContainer title='¿QUIÉNES SOMOS?' />
        <section className={styles.section__quienes_somos}>
          <div className={styles.container}>
            <p>
              Somos prestadores de servicios turísticos, con una trayectoria de
              más de 30 años.
            </p>
            <p>
              Contamos con la experiencia suficiente y el personal idóneo
              capacitado para ayudar a cumplir sus expectativas de viaje. Usted
              tendrá a disposición personal administrativo y de reservas,
              asistentes de viajes, guías locales nacionales y bilingües
              especializados, coordinadores, servicios de transporte y
              hotelería.
            </p>
            <p>
              Nos dedicamos al turismo local, nacional e internacional,
              individual y grupal. Contrataciones de transporte. Servicios
              especiales y de transporte terrestre a todo el país y paises
              limítrofes.
            </p>
            <p>Además coordinamos eventos educativos y deportivos.</p>
          </div>
        </section>
        <section className={styles.section__informacion_personal}>
          <div className={styles.container}>
            <div className={styles.informacion_personal__eliana_moreno}>
              <h2>ELIANA MORENO</h2>
              <h3>Founder</h3>
              <h4>BIO</h4>
              <p>Soy Eliana Moreno, Profesional de Turismo.</p>
              <p>
                Hace 30 años que abracé esta profesión que me permite conocer y
                hacer conocer las maravillas de la naturaleza, revivir nuestra
                historia, mostrar lo mágico de una tierra llena de sol, del
                mejor vino, de cultura, de trabajo y esfuerzo, de legado de
                patria y de raíces ancestrales....de un desierto transformado en
                vergel, regado por agua pura de la Cordillera de Los Andes....
              </p>
              <p>
                En mis años de formación profesional participé de gran cantidad
                de congresos, jornadas, eventos y distintas capacitaciones, y
                logré así acceder a trabajar en turismo pasando por un gran
                abanico de oportunidades. Turismo receptivo nacional e
                internacional, Turismo de Aconcagua, Turismo emisivo nacional.
                Turismo local y todo un quehacer desde la administración,
                promociones, ventas, operaciones, reservas, coordinación y guía
                de turismo.
              </p>
              <p>
                Hoy pienso en todos estos años y el balance es muy positivo.
                Elegí ser feliz y hacer feliz en esta actividad que amo.
                Atesorar la expresión de asombro, de admiración, de regocijo de
                cada pasajero, cuando conocen lo nuestro, engrandecen mi alma.
                Personas que vienen a cumplir un sueño, con muchas expectativas
                y su equipaje cargado de ilusión y anhelos; las que en primer
                momento son clientes o sólo turistas, pero que comparten cada
                experiencia en cada paseo, se transforman así en amigos que
                también aman lo nuestro.
              </p>
              <h4>EDUCACIÓN</h4>
              <p>
                Técnico Superior en Turismo, Escuela Internacional de Turismo,
                Hotelería y Gastronomía de Mendoza, 1998.
              </p>
              <h4>PROFESIONAL DE TURISMO</h4>
              <p>Resolución N°: 53/06</p>
              <a
                href='https://www.mendoza.gov.ar/turismo/'
                rel='noreferrer'
                target='_blank'
              >
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
                rel='noreferrer'
                target='_blank'
                data-content='https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=elianamoreno628@gmail.com'
                className={styles.eliana_moreno__button_contactar}
              >
                CONTACTAR
              </a>
            </div>
            <div className={styles.informacion_personal__imagen_eliana_moreno}>
              <figure>
                <Image
                  src='/media/personas/eliana-moreno.jpg'
                  alt='Foto en la que aparece Eliana Moreno, con un atuendo elegante y coqueto, sentada en una fuente en una plaza de Mar del Plata'
                  width={350}
                  height={350}
                />
              </figure>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
