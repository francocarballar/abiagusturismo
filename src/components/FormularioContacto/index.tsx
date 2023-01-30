import React, { useEffect, useRef } from 'react'
import { useForm } from '@src/hooks/useFormspree'
import styles from './FormularioContacto.module.css'

function FormularioContacto ({ textColor }: { textColor: string }) {
  const [handleSubmit, setHandleSubmit] = useForm('mwkyrwoe')
  const formRef = useRef(null)
  const messageSubmit = {
    color: textColor
  }
  useEffect(() => {
    if (handleSubmit.succeeded) {
      formRef.current[0].value = ''
      formRef.current[1].value = ''
      formRef.current[2].value = ''
      formRef.current[3].value = ''
    }
  }, [handleSubmit])
  return (
    <>
      <form
        method='POST'
        className={styles.formulario}
        onSubmit={setHandleSubmit}
        ref={formRef}
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
            id={styles.mensaje}
            name='mensaje'
            placeholder='Escribe tu mensaje aquí...'
            required
            cols={50}
            rows={4}
          ></textarea>
        </label>
        <label htmlFor='enviar' className={styles.label_enviar}>
          {handleSubmit.succeeded && (
            <p id={styles.message_submit} style={messageSubmit}>
              ¡Gracias por tu mensaje!
            </p>
          )}
          <input
            type='submit'
            id={styles.enviar}
            name='enviar'
            value='Enviar'
            disabled={handleSubmit.submitting}
          />
        </label>
      </form>
    </>
  )
}

export { FormularioContacto }
