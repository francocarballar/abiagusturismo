import React from 'react'
import './TestimoniosPage.css'
import { TitleContainer } from '../../TitleContainer'
import { Clientes } from '../../Clientes'

function TestimoniosPage () {
  return (
    <main className='main__page--testimonios'>
      <TitleContainer title='CLIENTES SASTIFECHOS' />
      <section className='section__testimonios'>
        <Clientes
          nombre='​R. Giraldo'
          testimonio='Esta es tu cita testimonial. Usa este espacio para compartir opiniones sobre tus productos, tus servicios o tu negocio. ¡Haz que los visitantes de tu sitio se entusiasmen por hablar contigo!'
          img={require('../../../assets/personas/persona.jpg')}
        />
        <Clientes
          nombre='​R. Giraldo'
          testimonio='Esta es tu cita testimonial. Usa este espacio para compartir opiniones sobre tus productos, tus servicios o tu negocio. ¡Haz que los visitantes de tu sitio se entusiasmen por hablar contigo!'
          img={require('../../../assets/personas/persona.jpg')}
        />
        <Clientes
          nombre='​R. Giraldo'
          testimonio='Esta es tu cita testimonial. Usa este espacio para compartir opiniones sobre tus productos, tus servicios o tu negocio. ¡Haz que los visitantes de tu sitio se entusiasmen por hablar contigo!'
          img={require('../../../assets/personas/persona.jpg')}
        />
        <Clientes
          nombre='​R. Giraldo'
          testimonio='Esta es tu cita testimonial. Usa este espacio para compartir opiniones sobre tus productos, tus servicios o tu negocio. ¡Haz que los visitantes de tu sitio se entusiasmen por hablar contigo!'
          img={require('../../../assets/personas/persona.jpg')}
        />
        <Clientes
          nombre='​R. Giraldo'
          testimonio='Esta es tu cita testimonial. Usa este espacio para compartir opiniones sobre tus productos, tus servicios o tu negocio. ¡Haz que los visitantes de tu sitio se entusiasmen por hablar contigo!'
          img={require('../../../assets/personas/persona.jpg')}
        />
        <Clientes
          nombre='​R. Giraldo'
          testimonio='Esta es tu cita testimonial. Usa este espacio para compartir opiniones sobre tus productos, tus servicios o tu negocio. ¡Haz que los visitantes de tu sitio se entusiasmen por hablar contigo!'
          img={require('../../../assets/personas/persona.jpg')}
        />
        <Clientes
          nombre='​R. Giraldo'
          testimonio='Esta es tu cita testimonial. Usa este espacio para compartir opiniones sobre tus productos, tus servicios o tu negocio. ¡Haz que los visitantes de tu sitio se entusiasmen por hablar contigo!'
          img={require('../../../assets/personas/persona.jpg')}
        />
        <Clientes
          nombre='​R. Giraldo'
          testimonio='Esta es tu cita testimonial. Usa este espacio para compartir opiniones sobre tus productos, tus servicios o tu negocio. ¡Haz que los visitantes de tu sitio se entusiasmen por hablar contigo!'
          img={require('../../../assets/personas/persona.jpg')}
        />
      </section>
    </main>
  )
}

export { TestimoniosPage }
