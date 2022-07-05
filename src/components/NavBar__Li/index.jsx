import React from 'react'
import Link from 'next/link'
import styles from './NavBarLi.module.css'

function NavBarLi (props) {
  return (
    <React.Fragment>
      <li className={styles.li}>
        <Link href={props.path} onClick={props.clickAncla}>
          <a>{props.text}</a>
        </Link>
      </li>
    </React.Fragment>
  )
}

export { NavBarLi }
