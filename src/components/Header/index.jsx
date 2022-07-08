import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import styles from './Header.module.css'
import { NavBar } from '../NavBar'
import { DarkMode } from '../DarkMode'

function Header () {
  const [stateNavBar, setNavBar] = useState(false)
  const [stateMenu, setMenu] = useState(true)
  const [stateClose, setClose] = useState(false)
  let body
  useEffect(() => {
    body = document.body
  })
  const clickMenu = () => {
    body.style = 'overflow-y: hidden'
    return setNavBar(true) || setMenu(false) || setClose(true)
  }
  const clickClose = () => {
    body.style.overflow = 'scroll'
    return setNavBar(false) || setClose(false) || setMenu(true)
  }
  const label = {
    zIndex: -100
  }
  function useOutsideAlerter (ref) {
    useEffect(() => {
      function handleClickOutside (event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setNavBar(false)
          setClose(false)
          setMenu(true)
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
      <DarkMode styles={label} />
      <header className={styles.header} id='inicio'>
        <Link href='/'>
          <a>
            <figure>
              <img
                src='/media/logotipo/logo-abiagus.png'
                rel='preload'
                alt='Logotipo de la empresa Abiagus Turismo'
                width='8.42rem'
                height='3.5rem'
                className={styles.logo}
              />
            </figure>
          </a>
        </Link>
        {stateMenu && (
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            className={styles.menu}
            onClick={clickMenu}
          >
            <path
              d='M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z'
              className={styles.menu__path}
            />
          </svg>
        )}
        {stateClose && (
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            className={styles.close}
            onClick={clickClose}
          >
            <path
              d='M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z'
              className={styles.close__path}
            />
          </svg>
        )}
        <NavBar
          refNavBar={wrapperRef}
          stateNavBar={stateNavBar}
          setNavBar={setNavBar}
          setMenu={setMenu}
          setClose={setClose}
        />
      </header>
    </React.Fragment>
  )
}

export { Header }
