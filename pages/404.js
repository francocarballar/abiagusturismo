import React from 'react'
import styles from '../styles/404.module.css'
import Link from 'next/link'

export default function PageNotFound () {
  return (
    <main className={styles.main}>
      {/*dust particel*/}
      <div>
        <div className={styles.starsec} />
        <div className={styles.starthird} />
        <div className={styles.starfourth} />
        <div className={styles.starfifth} />
      </div>
      {/*Dust particle end-*/}
      <div className={styles.lamp__wrap}>
        <div className={styles.lamp}>
          <div className={styles.cable} />
          <div className={styles.cover} />
          <div className={styles.in_cover}>
            <div className={styles.bulb} />
          </div>
          <div className={styles.light} />
        </div>
      </div>
      {/* END Lamp */}
      <section className={styles.error}>
        {/* Content */}
        <div className={styles.error__content}>
          <div className={styles.error__message.message}>
            <h1 className={styles.message__title}>Page Not Found</h1>
            <p className={styles.message__text}>
              Lo sentimos, la página que buscaba no se encuentra aquí. El enlace
              que siguió puede estar roto o ya no existe. Por favor inténtelo de
              nuevo, o eche un vistazo a nuestra página de inicio.
            </p>
          </div>
          <div className={styles.error__nav.e_nav}>
            <Link href='/'>
              <a className={styles.e_nav__link}></a>
            </Link>
          </div>
        </div>
        {/* END Content */}
      </section>
    </main>
  )
}
