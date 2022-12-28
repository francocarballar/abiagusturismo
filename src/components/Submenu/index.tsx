import React, { useContext, useRef } from 'react'
import Image from 'next/image'
import { Context } from '@src/context'
import { SubmenuData } from './submenuData'
import { NavBarLi } from '@components/NavBar__Li'
import { useOutsideSubNavbar } from '@src/hooks/useOutsideSubNavbar'
import styles from './Submenu.module.css'

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
  const { excursiones, servicios, paquetes } = SubmenuData()
  const containerRef = useRef<HTMLDivElement>(null)
  const submenuRef = useRef<HTMLUListElement>(null)
  const handleClickOutside = (
    ref: React.RefObject<HTMLElement>,
    containerRef: React.RefObject<HTMLElement>
  ) => {
    useOutsideSubNavbar(ref, containerRef, clickOutside)
  }
  let onClick
  let open
  let array
  if (name === 'Excursiones') {
    onClick = clickAnclaExcursiones
    open = openMenuExcursiones
    array = excursiones
    handleClickOutside(submenuRef, containerRef)
  } else if (name === 'Servicios') {
    onClick = clickAnclaServicios
    open = openMenuServicios
    array = servicios
    handleClickOutside(submenuRef, containerRef)
  } else if (name === 'Paquetes') {
    onClick = clickAnclaPaquetes
    open = openMenuPaquetes
    array = paquetes
    handleClickOutside(submenuRef, containerRef)
  }
  return (
    <div
      className={styles.container__dropdown_menu}
      onClick={onClick}
      ref={containerRef}
    >
      <li className={styles.dropdown_menu}>
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
      </li>
      <Image
        src='/media/icon/left-arrow.svg'
        alt='flecha de color blanca'
        className={open ? styles.up_arrow : styles.down_arrow}
        width={15}
        height={15}
        objectFit='contain'
      />
    </div>
  )
}

export { Submenu }
