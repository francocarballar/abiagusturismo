import React, { useState, useEffect } from 'react'
import styles from './DarkMode.module.css'

function DarkMode ({ styles }) {
  let body
  useEffect(() => {
    body = document.body
  })
  const darkMode = () => {
    body.classList.toggle('dark')
    if (body.classList.contains('dark')) {
      localStorage.setItem('theme', 'true')
      document.documentElement.style.setProperty('--primary-color', '#1c1c3a')
      document.documentElement.style.setProperty('--tertiary-color', '#141429')
      document.documentElement.style.setProperty('--title-secondary', '#C5D5E4')
      document.documentElement.style.setProperty('--text-color', '#fff')
      document.documentElement.style.setProperty(
        '--contact-text-color',
        '#C5D5E4'
      )
    } else if (!body.classList.contains('dark')) {
      localStorage.setItem('theme', 'false')
      document.documentElement.style.setProperty('--primary-color', '#333367')
      document.documentElement.style.setProperty('--tertiary-color', '#D0CECE')
      document.documentElement.style.setProperty('--title-secondary', '#424040')
      document.documentElement.style.setProperty('--text-color', '#000')
      document.documentElement.style.setProperty(
        '--contact-text-color',
        '#808080'
      )
    }
  }
  useEffect(() => {
    const body = document.body
    if (localStorage.getItem('theme') === 'true') {
      body.classList.add('dark')
      console.log(theme)
      document.documentElement.style.setProperty('--primary-color', '#1c1c3a')
      document.documentElement.style.setProperty('--tertiary-color', '#141429')
      document.documentElement.style.setProperty('--title-secondary', '#C5D5E4')
      document.documentElement.style.setProperty('--text-color', '#fff')
      document.documentElement.style.setProperty(
        '--contact-text-color',
        '#C5D5E4'
      )
    } else if (localStorage.getItem('theme') === 'false') {
      body.classList.remove('dark')
      document.documentElement.style.setProperty('--primary-color', '#333367')
      document.documentElement.style.setProperty('--tertiary-color', '#D0CECE')
      document.documentElement.style.setProperty('--title-secondary', '#424040')
      document.documentElement.style.setProperty('--text-color', '#000')
      document.documentElement.style.setProperty(
        '--contact-text-color',
        '#808080'
      )
    }
  })
  return (
    <label className='toggle-dark-mode' style={styles}>
      <span id='theme' onClick={darkMode}></span>
    </label>
  )
}

export { DarkMode }
