import React, { useState } from 'react'
import { useForm } from '@formspree/react'
import './FormularioContacto.css'

function FormularioContacto (props) {
  const [stateMessage, setMessage] = useState(false)
  const [stateHandleSubmit, setHandleSubmit] = useForm('mwkyrwoe')
  const messageSubmit = {
    color: props.pColor
  }
  return (
    <React.Fragment>
      <form
        method='POST'
        className='formulario'
        onSubmit={setHandleSubmit}
      >
        <label htmlFor='nombre'>
          <input
            type='text'
            id='nombre'
            name='nombre'
            placeholder='Nombre'
            autoComplete='name'
            required
          />
        </label>
        <label htmlFor='correo'>
          <input
            type='email'
            id='correo'
            name='correo'
            placeholder='Email'
            autoComplete='email'
            required
          />
        </label>
        <label htmlFor='telefono'>
          <input
            type='tel'
            id='telefono'
            name='telefono'
            placeholder='Teléfono'
            autoComplete='tel'
            required
          />
        </label>
        <label htmlFor='mensaje'>
          <textarea
            type='text'
            id='mensaje'
            name='mensaje'
            placeholder='Escribe tu mensaje aquí...'
            required
            cols='50'
            rows='4'
          ></textarea>
        </label>
        <label htmlFor='enviar' className='label-enviar'>
          {stateMessage && <p id='message-submit' style={messageSubmit}>¡Gracias por tu mensaje!</p>}
          <input
            type='submit'
            id='enviar'
            name='enviar'
            value='Enviar'
            disabled={stateHandleSubmit.submitting}
            onClick={() => setMessage(true)}
          />
        </label>
      </form>
    </React.Fragment>
  )
}

export { FormularioContacto }
