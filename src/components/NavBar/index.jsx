import React, { useState, useEffect, useRef } from 'react'
import styles from './NavBar.module.css'
import { NavBarLi } from '../NavBar__Li'
import { DarkMode } from '../DarkMode'

function NavBar ({ stateNavBar, setNavBar, setClose, setMenu, refNavBar }) {
  let body
  useEffect(() => {
    body = document.body
  })
  const clickAncla = () => {
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
    window.addEventListener('resize', updateDimensions)
  })
  const [openMenuExcursiones, setOpenMenuExcursiones] = useState(false)
  const [openMenuPaquetes, setOpenMenuPaquetes] = useState(false)
  const [openMenuServicios, setOpenMenuServicios] = useState(false)
  let arrow = {}
  const [stateArrow, setArrow] = useState(arrow)
  const clickAnclaExcursiones = () => {
    setOpenMenuExcursiones(!openMenuExcursiones)
    arrow = {
      opacity: '0'
    }
    setArrow(arrow)
    setOpenMenuPaquetes(false)
    setOpenMenuServicios(false)
  }
  const clickAnclaPaquetes = () => {
    setOpenMenuPaquetes(!openMenuPaquetes)
    arrow = {
      opacity: '0'
    }
    setArrow(arrow)
    setOpenMenuExcursiones(false)
    setOpenMenuServicios(false)
  }
  const clickAnclaServicios = () => {
    setOpenMenuServicios(!openMenuServicios)
    arrow = {
      opacity: '0'
    }
    setArrow(arrow)
    setOpenMenuPaquetes(false)
    setOpenMenuExcursiones(false)
  }
  function useOutsideAlerter (ref) {
    useEffect(() => {
      function handleClickOutside (event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setOpenMenuPaquetes(false)
          setOpenMenuServicios(false)
          setOpenMenuExcursiones(false)
        }
      }
      document.addEventListener('mousedown', handleClickOutside)
      return () => {
        document.removeEventListener('mousedown', handleClickOutside)
      }
    }, [ref])
  }
  const wrapperRef = useRef(null)
  useOutsideAlerter(wrapperRef)
  return (
    <React.Fragment>
      {stateNavBar && (
        <nav className={styles.nav} ref={refNavBar}>
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
              <li
                onClick={clickAnclaExcursiones}
                className={styles.dropdown_menu}
              >
                Excursiones
                {openMenuExcursiones && (
                  <ul ref={wrapperRef}>
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
              {!openMenuExcursiones && (
                <img
                  src='/media/icon/left-arrow.svg'
                  alt='flecha izquierda de color blanca'
                  className={styles.left_arrow}
                  onClick={clickAnclaExcursiones}
                />
              )}
              {openMenuExcursiones && (
                <img
                  src='/media/icon/left-arrow.svg'
                  alt='flecha izquierda de color blanca'
                  className={styles.left_arrow__two}
                  onClick={clickAnclaExcursiones}
                />
              )}
            </div>
            <hr />
            <div className={styles.container__dropdown_menu}>
              <li onClick={clickAnclaPaquetes} className={styles.dropdown_menu}>
                Paquetes
                {openMenuPaquetes && (
                  <ul ref={wrapperRef}>
                    <NavBarLi
                      text='Locales'
                      path='/paquetes/locales'
                      clickAncla={clickAncla}
                    />
                    <NavBarLi
                      text='Nacionales'
                      path='/paquetes/nacionales'
                      clickAncla={clickAncla}
                    />
                    <NavBarLi
                      text='Internacionales'
                      path='/paquetes/internacionales'
                      clickAncla={clickAncla}
                    />
                  </ul>
                )}
              </li>
              {!openMenuPaquetes && (
                <img
                  src='/media/icon/left-arrow.svg'
                  alt='flecha izquierda de color blanca'
                  className={styles.left_arrow}
                  onClick={clickAnclaPaquetes}
                />
              )}
              {openMenuPaquetes && (
                <img
                  src='/media/icon/left-arrow.svg'
                  alt='flecha izquierda de color blanca'
                  className={styles.left_arrow__two}
                  onClick={clickAnclaPaquetes}
                />
              )}
            </div>
            <hr />
            <div className={styles.container__dropdown_menu}>
              <li
                onClick={clickAnclaServicios}
                className={styles.dropdown_menu}
              >
                Servicios
                {openMenuServicios && (
                  <ul ref={wrapperRef}>
                    <NavBarLi
                      text='Transporte'
                      path='/servicios/transporte'
                      clickAncla={clickAncla}
                    />
                    <NavBarLi
                      text='Hoteles'
                      path='/servicios/hoteles'
                      clickAncla={clickAncla}
                    />
                    <NavBarLi
                      text='Restaurantes'
                      path='/servicios/restaurantes'
                      clickAncla={clickAncla}
                    />
                  </ul>
                )}
              </li>
              {!openMenuServicios && (
                <img
                  src='/media/icon/left-arrow.svg'
                  alt='flecha izquierda de color blanca'
                  className={styles.left_arrow}
                  onClick={clickAnclaServicios}
                />
              )}
              {openMenuServicios && (
                <img
                  src='/media/icon/left-arrow.svg'
                  alt='flecha izquierda de color blanca'
                  className={styles.left_arrow__two}
                  onClick={clickAnclaServicios}
                />
              )}
            </div>
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
