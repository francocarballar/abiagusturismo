import React from 'react'
import Link from 'next/link'
import styles from './NavBarLi.module.css'
import { type PropsNavBarLi } from '@src/types'

function NavBarLi ({ path, text, clickAncla }: PropsNavBarLi) {
  return (
    <>
      <li className={styles.li}>
        <Link href={path} onClick={clickAncla}>
          {text}
        </Link>
      </li>
    </>
  )
}

export { NavBarLi }
