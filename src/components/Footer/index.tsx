import Image from 'next/image'
import React from 'react'
import styles from './Footer.module.css'

function Footer () {
  return (
    <React.Fragment>
      <footer className={styles.footer}>
        <a href='#inicio'>
          <figure>
            <Image
              src='/media/icon/arrow.png'
              alt='Esto en una flecha que al hacer clic te lleva al inicio de la página'
              width={25}
              height={25}
            />
          </figure>
        </a>
        <p>VOLVER ARRIBA</p>
        <p>
          <a
            target='_blank'
            rel='noreferrer'
            href='https://www.linkedin.com/in/francocarballar'
          >
            ©2023 creado por Franco Carballar.
          </a>
        </p>
      </footer>
    </React.Fragment>
  )
}

export { Footer }
