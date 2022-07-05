import React from 'react'
import styles from './TitleContainer.module.css'

function TitleContainer (props) {
  return (
    <div className={styles.titleContainer}>
      <h1>{props.title}</h1>
    </div>
  )
}

export { TitleContainer }
