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
  let width
  useEffect(() => {
    width = window.innerWidth
    if (width >= 1024) {
      setNavBar(true)
    }
    if (width < 1024) {
    }
    console.log(stateWidth)
    window.addEventListener('resize', updateDimensions)
  })
  const [open, setOpen] = useState(false)
  let arrow = {}
  const [stateArrow, setArrow] = useState(arrow)
  const clickAnclaOpen = () => {
    setOpen(!open)
    arrow = {
      transform: 'rotate(90deg)'
    }
    setArrow(arrow)
  }
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
            <div className={styles.container__dropdown_menu}>
              <li onClick={clickAnclaOpen} className={styles.dropdown_menu}>
                Excursiones
                {open && (
                  <ul>
                    <NavBarLi
                      text='City Tour'
                      path='/excursiones/city-tour'
                      clickAncla={clickAncla}
                    />
                    <NavBarLi
                      text='Bodegas'
                      path='/excursiones/bodegas'
                      clickAncla={clickAncla}
                    />
                    <NavBarLi
                      text='Caminos del vino'
                      path='/excursiones/camino-del-vino'
                      clickAncla={clickAncla}
                    />
                    <NavBarLi
                      text='Villavicencio'
                      path='/excursiones/villavicencio'
                      clickAncla={clickAncla}
                    />
                    <NavBarLi
                      text='Cacheuta'
                      path='/excursiones/cacheuta'
                      clickAncla={clickAncla}
                    />
                    <NavBarLi
                      text='Alta Montaña'
                      path='/excursiones/alta-montania'
                      clickAncla={clickAncla}
                    />
                    <NavBarLi
                      text='Valle de Uco'
                      path='/excursiones/valle-de-uco'
                      clickAncla={clickAncla}
                    />
                    <NavBarLi
                      text='Cordón del Plata'
                      path='/excursiones/cordon-del-plata'
                      clickAncla={clickAncla}
                    />
                    <NavBarLi
                      text='Cañón del Atuel'
                      path='/excursiones/canion-del-atuel'
                      clickAncla={clickAncla}
                    />
                    <NavBarLi
                      text='Combos'
                      path='/combos'
                      clickAncla={clickAncla}
                    />
                  </ul>
                )}
              </li>
              <img
                src='/media/icon/left-arrow.svg'
                alt='flecha izquierda de color blanca'
                id={styles.left_arrow}
                onClick={clickAnclaOpen}
                style={stateArrow}
              />
            </div>
            <hr />
            <NavBarLi
              text='Paquetes'
              path='/paquetes'
              clickAncla={clickAncla}
            />
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
