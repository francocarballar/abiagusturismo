import React from 'react'
import styles from './DarkMode.module.css'
import { useDarkMode } from '@src/hooks/useDarkMode'

function DarkMode () {
  const { toggle } = useDarkMode()
  return (
    <label className={styles.toggle_dark_mode} onClick={toggle}>
      <span id={styles.theme}></span>
    </label>
  )
}

export { DarkMode }
