import React from 'react'
import Image from 'next/image'
import styles from './IconArrow.module.css'
import { IconArrowType } from '@src/types'

function IconArrow ({ src, alt, size }: IconArrowType): JSX.Element {
  return (
    <Image
      src={src}
      alt={alt}
      width={size}
      height={size}
      className={styles.arrow}
    />
  )
}

export { IconArrow }
