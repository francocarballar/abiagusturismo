import React from 'react'
import styles from './TitleContainer.module.css'

function TitleContainer ({ title }: { title: string }) {
  return (
    <div className={styles.titleContainer}>
      <h1>{title}</h1>
    </div>
  )
}

export { TitleContainer }
