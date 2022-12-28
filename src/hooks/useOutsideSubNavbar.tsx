import { useEffect } from 'react'

const useOutsideSubNavbar = (ref, twoRef, fun) => {
  useEffect(() => {
    function handleClickOutside (e) {
      if (
        ref.current &&
        !ref.current.contains(e.target) &&
        !twoRef.current.contains(e.target)
      ) {
        fun()
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [ref])
}

export { useOutsideSubNavbar }
