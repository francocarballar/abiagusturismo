import { useEffect } from 'react'
import { useWindowSize } from 'usehooks-ts'

const useOutsideNavbar = (ref, fun) => {
  const { width } = useWindowSize()
  useEffect(() => {
    function handleClickOutside (e) {
      if (
        ref.current &&
        !ref.current.contains(e.target) &&
        width < 1024 &&
        width !== 0
      ) {
        fun()
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [ref, width])
}

export { useOutsideNavbar }
