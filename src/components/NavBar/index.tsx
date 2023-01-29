import React, { useContext, useEffect } from 'react'
import styles from './NavBar.module.css'
import { NavBarLi } from '../NavBar__Li'
import { Context } from '@src/context'
import { DarkMode } from '@components/DarkMode'
import { useWindowSize } from 'usehooks-ts'
import { Submenu } from '@components/Submenu'

function NavBar () {
  const { stateNavBar, setNavBar, clickAncla } = useContext(Context)
  const { width } = useWindowSize()
  useEffect(() => {
    width >= 1024 ? setNavBar(true) : setNavBar(false)
  }, [width])
  return (
    <>
      {stateNavBar && (
        <nav className={styles.nav}>
          <DarkMode />
          <ul className={styles.nav__ul}>
            <NavBarLi text='Inicio' path='/' clickAncla={clickAncla} />
            <hr />
            <NavBarLi
              text='¿Quiénes somos?'
              path='/quienes-somos'
              clickAncla={clickAncla}
            />
            <hr />
            <Submenu name='Excursiones' />
            <hr />
            <Submenu name='Paquetes' />
            <hr />
            <Submenu name='Servicios' />
            <hr />
            {/* <NavBarLi
              text='Testimonios'
              path='/testimonios'
              clickAncla={clickAncla}
            />
            <hr /> */}
            <NavBarLi
              text='Contacto'
              path='/contacto'
              clickAncla={clickAncla}
            />
          </ul>
        </nav>
      )}
    </>
  )
}

export { NavBar }
