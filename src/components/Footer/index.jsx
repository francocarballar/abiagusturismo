import React from 'react'
import './Footer.css'
import arrow from '../../assets/icon/arrow.png'

function Footer () {
  return (
    <React.Fragment>
      <footer className='footer'>
        <a href='#inicio'>
          <figure>
            <img
              src={arrow}
              rel='preload'
              alt='Esto en una flecha que al hacer clic te lleva al inicio de la página'
            />
          </figure>
        </a>
        <p>VOLVER ARRIBA</p>
        <h4>©2022 creado por Franco Carballar.</h4>
      </footer>
    </React.Fragment>
  )
}

export { Footer }
