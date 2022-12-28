import { useContext } from 'react'
import { Submenu } from '@src/types'
import { Context } from '@src/context'

export const SubmenuData = () => {
  const { clickAncla } = useContext(Context)
  const excursiones: Submenu[] = [
    { text: 'City Tour', path: '/excursiones/city-tour', click: clickAncla },
    { text: 'Bodegas', path: '/excursiones/bodegas', click: clickAncla },
    {
      text: 'Caminos del vino',
      path: '/excursiones/camino-del-vino',
      click: clickAncla
    },
    {
      text: 'Villavicencio',
      path: '/excursiones/villavicencio',
      click: clickAncla
    },
    { text: 'Cacheuta', path: '/excursiones/cacheuta', click: clickAncla },
    {
      text: 'Alta Montaña',
      path: '/excursiones/alta-montania',
      click: clickAncla
    },
    {
      text: 'Valle de Uco',
      path: '/excursiones/valle-de-uco',
      click: clickAncla
    },
    {
      text: 'Cordón del Plata',
      path: '/excursiones/cordon-del-plata',
      click: clickAncla
    },
    {
      text: 'Cañón del Atuel',
      path: '/excursiones/canion-del-atuel',
      click: clickAncla
    },
    { text: 'Combos', path: '/combos', click: clickAncla }
  ]

  const paquetes: Submenu[] = [
    { text: 'Locales', path: '/paquetes/locales', click: clickAncla },
    { text: 'Nacionales', path: '/paquetes/nacionales', click: clickAncla },
    {
      text: 'Internacionales',
      path: '/paquetes/internacionales',
      click: clickAncla
    }
  ]

  const servicios: Submenu[] = [
    { text: 'Transporte', path: '/servicios/transporte', click: clickAncla },
    { text: 'Hoteles', path: '/servicios/hoteles', click: clickAncla },
    {
      text: 'Restaurantes',
      path: '/servicios/restaurantes',
      click: clickAncla
    }
  ]
  return { excursiones, paquetes, servicios }
}
