export interface Children {
  children: JSX.Element
}

export interface BtnItinerario {
  path: string
}

export interface BtnMP {
  link: string
}

export interface SocialMedia {
  color: object
}

export interface Contact {
  h2Display: string
  sectionBackground: string
  orderContainer: string
  textColor: string
  colorSocialMedia: object
}

export interface Client {
  img: string
  testimonio: string
  nombre: string
}

export interface TypeExcursionesIndividuales {
  images: any[]
  nroImages: number
  title: string
  p: JSX.Element
  li: JSX.Element
  subtitle?: JSX.Element
  secondParagraph?: JSX.Element
  secondLi?: JSX.Element
}

export interface PropsNavBarLi {
  path: string
  text: string
  clickAncla: VoidFunction
}

export interface Submenu {
  text: string
  path: string
  click: () => void
}

export interface formReserva {
  stateReserva: boolean
  setReserva: () => void
}

export interface TypeSlider {
  images: string[]
  nroImages: number
  alt: string
}

export interface TypeExcursionesContainer {
  title: string
  description: string
  url: string
  img: string
  alt: string
  displayHr?: string
}
