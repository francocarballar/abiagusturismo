import React from 'react'
import styles from '@components/Reserva/Reserva.module.css'
import { useForm } from '@formspree/react'
import { type formReserva } from '@src/types'
import { CloseMenu } from '@components/Icons/CloseMenu'

function CotizarServicios ({ stateReserva, setReserva }: formReserva) {
  const [handleSubmit, setHandleSubmit] = useForm('mnqwkzyz')
  return (
    <>
      {stateReserva && (
        <div className={styles.div_container}>
          <section className={styles.section__modal}>
            <span className={styles.close} onClick={setReserva}>
              <CloseMenu />
            </span>
            {handleSubmit.succeeded && (
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
              <label htmlFor='servicios'>
                <select name='Servicios'>
                  <option value='Traslados'>Traslados</option>
                  <option value='Hoteles'>Hoteles</option>
                  <option value='Restaurantes'>Restaurantes</option>
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
                  disabled={handleSubmit.submitting}
                />
              </label>
            </form>
          </section>
        </div>
      )}
    </>
  )
}

export { CotizarServicios }
