import React, { useState, createContext, useEffect } from 'react'
import { Children } from '@src/types'
import { useWindowSize } from 'usehooks-ts'

const Context = createContext<any>({})

const Provider = ({ children }: Children) => {
  const [win, setWin] = useState<object | undefined>(undefined)
  const [stateNavBar, setNavBar] = useState<boolean>(false)
  const [stateMenu, setMenu] = useState<boolean>(true)
  const [stateClose, setClose] = useState<boolean>(false)
  const [openMenuExcursiones, setOpenMenuExcursiones] = useState<boolean>(false)
  const [openMenuPaquetes, setOpenMenuPaquetes] = useState<boolean>(false)
  const [openMenuServicios, setOpenMenuServicios] = useState<boolean>(false)
  const { width } = useWindowSize()
  useEffect(() => {
    const body = document.body
    width < 1024 && stateNavBar
      ? body.classList.add('hidden')
      : body.classList.remove('hidden')
  })
  const clickAncla = (): void => {
    if (width < 1024) {
      setNavBar(false)
      setClose(false)
      setMenu(true)
    }
  }
  const clickMenu = () => {
    setNavBar(true)
    setMenu(false)
    setClose(true)
  }
  const clickClose = () => {
    setNavBar(false)
    setClose(false)
    setMenu(true)
  }
  const clickOutside = (): void => {
    setOpenMenuExcursiones(false)
    setOpenMenuPaquetes(false)
    setOpenMenuServicios(false)
  }
  const clickAnclaExcursiones = (): void => {
    setOpenMenuExcursiones(!openMenuExcursiones)
    setOpenMenuPaquetes(false)
    setOpenMenuServicios(false)
  }
  const clickAnclaPaquetes = () => {
    setOpenMenuPaquetes(!openMenuPaquetes)
    setOpenMenuExcursiones(false)
    setOpenMenuServicios(false)
  }
  const clickAnclaServicios = (): void => {
    setOpenMenuServicios(!openMenuServicios)
    setOpenMenuPaquetes(false)
    setOpenMenuExcursiones(false)
  }
  return (
    <Context.Provider
      value={{
        win,
        setWin,
        stateNavBar,
        setNavBar,
        stateMenu,
        setMenu,
        stateClose,
        setClose,
        openMenuExcursiones,
        setOpenMenuExcursiones,
        openMenuPaquetes,
        setOpenMenuPaquetes,
        openMenuServicios,
        setOpenMenuServicios,
        clickOutside,
        clickAncla,
        clickMenu,
        clickClose,
        clickAnclaExcursiones,
        clickAnclaPaquetes,
        clickAnclaServicios
      }}
    >
      {children}
    </Context.Provider>
  )
}

export { Context, Provider }
