import React from 'react'
import Link from 'next/link'
import styles from './NavBarLi.module.css'

function NavBarLi (props) {
  return (
    <React.Fragment>
      <li className={styles.li}>
        <Link href={props.path}>
          <a onClick={props.clickAncla}>{props.text}</a>
        </Link>
      </li>
    </React.Fragment>
  )
}

export { NavBarLi }
