import React from 'react'
import './TitleContainer.css'

function TitleContainer (props) {
  return (
    <div className='titleContainer'>
      <h1>{props.title}</h1>
    </div>
  )
}

export { TitleContainer }
