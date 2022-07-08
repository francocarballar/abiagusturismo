import React, { useState } from 'react'
import { useForm } from '@formspree/react'
import styles from './FormularioContacto.module.css'

function FormularioContacto (props) {
  const [stateMessage, setMessage] = useState(false)
  const [stateHandleSubmit, setHandleSubmit] = useForm('mwkyrwoe')
  const messageSubmit = {
    color: props.pColor
  }
  const functionMessageSubmit = event => {
    event.preventDefault()
    setHandleSubmit
    setMessage(true)
  }
  return (
    <React.Fragment>
      <form
        method='POST'
        className={styles.formulario}
        onSubmit={e => {
          functionMessageSubmit(e)
        }}
      >
        <label htmlFor='nombre'>
          <input
            type='text'
            id={styles.nombre}
            name='nombre'
            placeholder='Nombre'
            autoComplete='name'
            required
          />
        </label>
        <label htmlFor='correo'>
          <input
            type='email'
            id={styles.correo}
            name='correo'
            placeholder='Email'
            autoComplete='email'
            required
          />
        </label>
        <label htmlFor='telefono'>
          <input
            type='tel'
            id={styles.telefono}
            name='telefono'
            placeholder='Teléfono'
            autoComplete='tel'
            required
          />
        </label>
        <label htmlFor='mensaje'>
          <textarea
            type='text'
            id={styles.mensaje}
            name='mensaje'
            placeholder='Escribe tu mensaje aquí...'
            required
            cols='50'
            rows='4'
          ></textarea>
        </label>
        <label htmlFor='enviar' className={styles.label_enviar}>
          {stateMessage && (
            <p id={styles.message_submit} style={messageSubmit}>
              ¡Gracias por tu mensaje!
            </p>
          )}
          <input
            type='submit'
            id={styles.enviar}
            name='enviar'
            value='Enviar'
            disabled={stateHandleSubmit.submitting}
          />
        </label>
      </form>
    </React.Fragment>
  )
}

export { FormularioContacto }
