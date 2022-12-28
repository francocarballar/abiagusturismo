import React from 'react'
import Head from 'next/head'
import styles from '@src/styles/Testimonios.module.css'
import { TitleContainer } from '@components/TitleContainer'
import { Clientes } from '@components/Clientes'

export default function Servicios () {
  return (
    <>
      <Head>
        <title>Testimonios de clientes sastifechos | Abiagus Turismo</title>
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
      <main className={styles.main__page__testimonios}>
        <TitleContainer title='CLIENTES SASTIFECHOS' />
        <section className={styles.section__testimonios}>
          <Clientes
            nombre='​R. Giraldo'
            testimonio='Esta es tu cita testimonial. Usa este espacio para compartir opiniones sobre tus productos, tus servicios o tu negocio. ¡Haz que los visitantes de tu sitio se entusiasmen por hablar contigo!'
            img='media/personas/persona.jpg'
          />
          <Clientes
            nombre='​R. Giraldo'
            testimonio='Esta es tu cita testimonial. Usa este espacio para compartir opiniones sobre tus productos, tus servicios o tu negocio. ¡Haz que los visitantes de tu sitio se entusiasmen por hablar contigo!'
            img='media/personas/persona.jpg'
          />
          <Clientes
            nombre='​R. Giraldo'
            testimonio='Esta es tu cita testimonial. Usa este espacio para compartir opiniones sobre tus productos, tus servicios o tu negocio. ¡Haz que los visitantes de tu sitio se entusiasmen por hablar contigo!'
            img='media/personas/persona.jpg'
          />
          <Clientes
            nombre='​R. Giraldo'
            testimonio='Esta es tu cita testimonial. Usa este espacio para compartir opiniones sobre tus productos, tus servicios o tu negocio. ¡Haz que los visitantes de tu sitio se entusiasmen por hablar contigo!'
            img='media/personas/persona.jpg'
          />
          <Clientes
            nombre='​R. Giraldo'
            testimonio='Esta es tu cita testimonial. Usa este espacio para compartir opiniones sobre tus productos, tus servicios o tu negocio. ¡Haz que los visitantes de tu sitio se entusiasmen por hablar contigo!'
            img='media/personas/persona.jpg'
          />
          <Clientes
            nombre='​R. Giraldo'
            testimonio='Esta es tu cita testimonial. Usa este espacio para compartir opiniones sobre tus productos, tus servicios o tu negocio. ¡Haz que los visitantes de tu sitio se entusiasmen por hablar contigo!'
            img='media/personas/persona.jpg'
          />
          <Clientes
            nombre='​R. Giraldo'
            testimonio='Esta es tu cita testimonial. Usa este espacio para compartir opiniones sobre tus productos, tus servicios o tu negocio. ¡Haz que los visitantes de tu sitio se entusiasmen por hablar contigo!'
            img='media/personas/persona.jpg'
          />
          <Clientes
            nombre='​R. Giraldo'
            testimonio='Esta es tu cita testimonial. Usa este espacio para compartir opiniones sobre tus productos, tus servicios o tu negocio. ¡Haz que los visitantes de tu sitio se entusiasmen por hablar contigo!'
            img='media/personas/persona.jpg'
          />
        </section>
      </main>
    </>
  )
}
