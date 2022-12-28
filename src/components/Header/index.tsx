import React, { useContext, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from './Header.module.css'
import { Context } from '@src/context'
import { NavBar } from '../NavBar'
import { Menu } from '@components/Icons/Menu'
import { CloseMenu } from '@components/Icons/CloseMenu'
import { useOutsideNavbar } from '@src/hooks/useOutsideNavbar'

function Header () {
  const { stateMenu, stateClose, clickAncla, clickMenu, clickClose } =
    useContext(Context)

  const headerRef = useRef<HTMLElement>(null)
  useOutsideNavbar(headerRef, clickAncla)
  return (
    <>
      <header className={styles.header} id='inicio' ref={headerRef}>
        <Link href='/'>
          <a>
            <figure>
              <Image
                src='/media/logotipo/logo-abiagus.png'
                alt='Logotipo de la empresa Abiagus Turismo'
                width={80}
                height={35}
                objectFit='contain'
                className={styles.logo}
              />
            </figure>
          </a>
        </Link>
        {stateMenu && (
          <span className={styles.menu} onClick={clickMenu}>
            <Menu />
          </span>
        )}
        {stateClose && (
          <span className={styles.close} onClick={clickClose}>
            <CloseMenu />
          </span>
        )}
        <NavBar />
      </header>
    </>
  )
}

export { Header }
