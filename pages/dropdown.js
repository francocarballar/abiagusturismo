import React, { useState } from 'react'
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle
} from 'reactstrap'

export default function DropdownPage () {
  const [dropdown, setDropdown] = useState(false)
  const openCloseDropdown = () => {
    setDropdown(!dropdown)
  }
  let stylesDropdown = {
    display: 'none'
  }
  const [styles, setStyles] = useState(stylesDropdown)
  const changeStylesDropdown = () => {
    stylesDropdown = {
      display: 'flex'
    }
    setStyles(stylesDropdown)
    console.log(styles)
  }
  return (
    <React.Fragment>
      <Dropdown isOpen={dropdown} toggle={openCloseDropdown} direction='down'>
        <DropdownToggle caret onClick={changeStylesDropdown}>
          Example
        </DropdownToggle>
        <DropdownMenu style={styles}>
          <DropdownItem>Ejemplo 1</DropdownItem>
          <DropdownItem>Ejemplo 2</DropdownItem>
          <DropdownItem>Ejemplo 3</DropdownItem>
          <DropdownItem>Ejemplo 4</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </React.Fragment>
  )
}
