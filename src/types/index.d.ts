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

export interface ImageMobile {
  '320px'?: string
  '375px'?: string
  '425px'?: string
  '505px'?: string
}
export interface ImageTablet {
  '600px'?: string
  '768px'?: string
  '800px'?: string
  '1024px'?: string
}
export interface ImageDesktop {
  '1366px'?: string
  '1440px'?: string
}

export interface Responsive {
  mobile?: { img: ImageMobile }
  tablet?: { img: ImageTablet }
  desktop?: { img: ImageDesktop }
}

export interface Items {
  id: number
  responsive: Responsive[]
  alt: string
}

export interface Combos {
  id: number
  responsive: Responsive[]
  alt: string
  'payment-link': string
}
export interface Packages {
  id: number
  responsive: Responsive[]
  alt: string
  'payment-link': string
  itinerary: string
}

export interface DataCarousel {
  data: Items[]
}

export interface TypeExcursionesIndividuales {
  data: Items[]
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

export interface IconArrowType {
  src: string
  alt: string
  size: number
}
