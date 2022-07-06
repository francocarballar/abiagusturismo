import React from 'react'
import styles from './ExcursionesContainer.module.css'
import Link from 'next/link'

function ExcursionesContainer (props) {
  const hr = {
    display: props.displayHr
  }
  return (
    <section className={styles.section__excursiones}>
      <div className={styles.div__container_excursiones}>
        <div>
          <h3>{props.title}</h3>
          <p>
            {props.description}
            <Link
              href={props.url}
              className={styles.link}
              onClick={() => window.scrollTo(0, 0)}
            >
              <a> Ver más...</a>
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
