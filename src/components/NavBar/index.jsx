import React, { useState, useEffect } from 'react'
import styles from './NavBar.module.css'
import { NavBarLi } from '../NavBar__Li'
import { DarkMode } from '../DarkMode'

function NavBar ({ stateNavBar, setNavBar, setClose, setMenu }) {
  let body
  useEffect(() => {
    body = document.body
  })
  const clickAncla = () => {
    body.style = 'overflow-y: scroll'
    return setNavBar(false) || setClose(false) || setMenu(true)
  }
  const [stateWidth, setWindowWidth] = useState(0)
  const updateDimensions = () => {
    const width = window.innerWidth
    setWindowWidth(width)
    if (width <= 768) {
      setNavBar(false)
    }
    if (width >= 1024) {
      setNavBar(true)
    }
  }
  useEffect(() => {
    const width = window.innerWidth
    if (width >= 1024) {
      setNavBar(true)
    }
    if (width < 1024) {
    }
    console.log(stateWidth)
    window.addEventListener('resize', updateDimensions)
  })
  return (
    <React.Fragment>
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
            <NavBarLi
              text='Excursiones'
              path='/excursiones'
              clickAncla={clickAncla}
            />
            <hr />
            <NavBarLi text='Combos' path='/combos' clickAncla={clickAncla} />
            <hr />
            <NavBarLi
              text='Servicios'
              path='/servicios'
              clickAncla={clickAncla}
            />
            <hr />
            <NavBarLi
              text='Testimonios'
              path='/testimonios'
              clickAncla={clickAncla}
            />
            <hr />
            <NavBarLi
              text='Contacto'
              path='/contacto'
              clickAncla={clickAncla}
            />
          </ul>
        </nav>
      )}
    </React.Fragment>
  )
}

export { NavBar }
