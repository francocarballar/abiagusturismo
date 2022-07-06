import React, { useState } from 'react'
import styles from './Reserva.module.css'
import { useForm } from '@formspree/react'

function Reserva ({ stateReserva, setReserva }) {
  const [stateConfirmation, setConfirmation] = useState(false)
  const [stateHandleSubmit, setHandleSubmit] = useForm('mnqwwgbn')
  const formularioSubmit = e => {
    const inputs = document.querySelectorAll('.formulario input')
    if (
      inputs[0].value === '' &&
      inputs[1].value === '' &&
      inputs[2].value === '' &&
      inputs[3].value === '' &&
      inputs[4].value === '' &&
      inputs[5].value === ''
    ) {
      setConfirmation(false)
    } else {
      setConfirmation(true)
    }
  }
  return (
    <React.Fragment>
      {stateReserva && (
        <div className={styles.div_container}>
          <section className={styles.section__modal}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              className={styles.close}
              onClick={setReserva}
            >
              <path
                d='M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z'
                className={styles.close__path}
              />
            </svg>
            {stateConfirmation && (
              <div className={styles.div__confirmation}>
                <p>¡Te enviamos un correo para confirmar tu reserva!</p>
              </div>
            )}
            <form
              method='POST'
              className={styles.formulario}
              onSubmit={setHandleSubmit}
            >
              <label htmlFor='nombre'>
                <input
                  type='text'
                  id='nombre'
                  name='Nombre'
                  placeholder='Nombre'
                  autoComplete='name'
                  required
                />
              </label>
              <label htmlFor='correo'>
                <input
                  type='email'
                  id='correo'
                  name='Correo'
                  placeholder='Email'
                  autoComplete='email'
                  required
                />
              </label>
              <label htmlFor='telefono'>
                <input
                  type='tel'
                  id='telefono'
                  name='Teléfono'
                  placeholder='Teléfono'
                  autoComplete='tel'
                  required
                />
              </label>
              <label htmlFor='dni'>
                <input
                  type='number'
                  id='dni'
                  name='DNI'
                  placeholder='Introduzca su DNI'
                  pattern='[0-9]{8}'
                  title='Debe poner 8 números'
                  required
                />
              </label>
              <label htmlFor='cantidad-personas'>
                <input
                  type='number'
                  id='cantidad-personas'
                  name='Cantidad de personas'
                  placeholder='Cantidad de personas'
                  required
                />
              </label>
              <label htmlFor='excursion'>
                <select name='Excursión'>
                  <option value='Alta Montaña'>Alta Montaña</option>
                  <option value='Bodegas'>Bodegas</option>
                  <option value='City Tour'>City Tour</option>
                  <option value='Cacheuta'>Cacheuta</option>
                  <option value='Cañón del Atuel'>Cañón del Atuel</option>
                  <option value='Cordón del Plata'>Cordón del Plata</option>
                  <option value='Valle de Uco'>Valle de Uco</option>
                  <option value='Villavicencio'>Villavicencio</option>
                </select>
              </label>
              <label htmlFor='date'>
                <input type='date' id='date' name='fecha de viaje' required />
              </label>
              <label htmlFor='enviar' className={styles.label_enviar}>
                <input
                  type='submit'
                  id={styles.enviar}
                  name='enviar'
                  value='Enviar'
                  disabled={stateHandleSubmit.submitting}
                  onClick={formularioSubmit}
                />
              </label>
            </form>
          </section>
        </div>
      )}
    </React.Fragment>
  )
}

export { Reserva }
