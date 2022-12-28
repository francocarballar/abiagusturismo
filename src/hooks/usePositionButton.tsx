import { useRef, useEffect } from 'react'
import { useEventListener } from 'usehooks-ts'

function usePositionButton (): { button: React.RefObject<HTMLButtonElement> } {
  const button = useRef<HTMLButtonElement>(null)
  const position = () => {
    const altura = window.scrollY
    const width = window.innerWidth
    const height = window.innerHeight

    const setClass = (className: string) => {
      button.current.classList.add(className)
      button.current.classList.remove(
        className === 'static' ? 'fixed' : 'static'
      )
    }

    switch (true) {
      case width >= 1024:
        setClass('static')
        break
      case width < 800:
        switch (true) {
          case height <= 580:
            if (altura > 260) setClass('static')
            else setClass('fixed')
            break
          case height <= 800:
            if (altura > 40) setClass('static')
            else setClass('fixed')
            break
          case height <= 1000:
            if (altura > 0) setClass('static')
            break
          default:
            setClass('fixed')
        }
        break
      default:
        setClass('static')
    }
  }
  useEffect(() => {
    position()
  })
  useEventListener('scroll', position)
  return { button }
}

export { usePositionButton }
