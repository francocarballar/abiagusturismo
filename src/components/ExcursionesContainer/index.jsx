import React from 'react'
import './ExcursionesContainer.css'
import { Link } from 'react-router-dom'

function ExcursionesContainer (props) {
  const hr = {
    display: props.displayHr
  }
  return (
    <section className='section__excursiones'>
      <div className='div__container-excursiones'>
        <div>
          <h3>{props.title}</h3>
          <p>
            {props.description}
            <Link to={props.url} className='link' onClick={() => window.scrollTo(0, 0)}>
              {' '}
              Ver más...
            </Link>
          </p>
        </div>
        <figure>
          <img src={props.img} alt={props.alt} />
        </figure>
      </div>
      <hr style={hr}></hr>
    </section>
  )
}

export { ExcursionesContainer }
