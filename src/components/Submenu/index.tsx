import React, { useContext, useRef } from 'react'
import Image from 'next/image'
import { Context } from '@src/context'
import { SubmenuData } from './submenuData'
import { NavBarLi } from '@components/NavBar__Li'
import { useOutsideSubNavbar } from '@src/hooks/useOutsideSubNavbar'
import styles from './Submenu.module.css'
import { useWindowSize } from 'usehooks-ts'

function Submenu ({ name }: { name: string }) {
  const {
    clickOutside,
    openMenuExcursiones,
    openMenuServicios,
    openMenuPaquetes,
    clickAnclaExcursiones,
    clickAnclaPaquetes,
    clickAnclaServicios
  } = useContext(Context)
  const { width } = useWindowSize()
  const { excursiones, servicios, paquetes } = SubmenuData()
  const containerRef = useRef<HTMLLIElement>(null)
  const submenuRef = useRef<HTMLUListElement>(null)
  useOutsideSubNavbar(submenuRef, containerRef, clickOutside)
  let onClick
  let open
  let array
  if (name === 'Excursiones') {
    onClick = clickAnclaExcursiones
    open = openMenuExcursiones
    array = excursiones
  } else if (name === 'Servicios') {
    onClick = clickAnclaServicios
    open = openMenuServicios
    array = servicios
  } else if (name === 'Paquetes') {
    onClick = clickAnclaPaquetes
    open = openMenuPaquetes
    array = paquetes
  }
  return (
    <>
      {width < 1024 ? (
        <>
          <li
            className={styles.dropdown_menu}
            onClick={onClick}
            ref={containerRef}
          >
            {name}
            <Image
              src='/media/icon/left-arrow.svg'
              alt='flecha de color blanca'
              className={open ? styles.up_arrow : styles.down_arrow}
              width={15}
              height={15}
            />
          </li>
          {open && (
            <ul ref={submenuRef}>
              {array.map(excursion => (
                <NavBarLi
                  key={excursion.text}
                  text={excursion.text}
                  path={excursion.path}
                  clickAncla={excursion.click}
                />
              ))}
            </ul>
          )}
        </>
      ) : (
        <li
          className={styles.container__dropdown_menu}
          onClick={onClick}
          ref={containerRef}
        >
          <nav className={styles.dropdown_menu}>
            {name}
            {open && (
              <ul ref={submenuRef}>
                {array.map(excursion => (
                  <NavBarLi
                    key={excursion.text}
                    text={excursion.text}
                    path={excursion.path}
                    clickAncla={excursion.click}
                  />
                ))}
              </ul>
            )}
          </nav>
          <Image
            src='/media/icon/left-arrow.svg'
            alt='flecha de color blanca'
            className={open ? styles.up_arrow : styles.down_arrow}
            width={15}
            height={15}
          />
        </li>
      )}
    </>
  )
}

export { Submenu }
