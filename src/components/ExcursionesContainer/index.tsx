import React from 'react'
import styles from './ExcursionesContainer.module.css'
import Link from 'next/link'
import { type TypeExcursionesContainer } from '@src/types'
import Image from 'next/image'

function ExcursionesContainer ({
  title,
  description,
  url,
  img,
  alt,
  displayHr
}: TypeExcursionesContainer): JSX.Element {
  const hr = {
    display: displayHr
  }
  return (
    <section className={styles.section__excursiones}>
      <div className={styles.div__container_excursiones}>
        <div>
          <h3>{title}</h3>
          <p>
            {description}
            <Link
              href={url}
              className={styles.link}
              onClick={() => { window.scrollTo(0, 0) }}
            >
              <a> Ver más...</a>
            </Link>
          </p>
        </div>
        <figure>
          <Image src={img} alt={alt} width={483} height={300} />
        </figure>
      </div>
      <hr style={hr} />
    </section>
  )
}

export { ExcursionesContainer }
