import React from 'react'
import styles from './Reserva.module.css'
import { useForm } from '@formspree/react'
import { formReserva } from '@src/types'
import { CloseMenu } from '@components/Icons/CloseMenu'

function Reserva ({ stateReserva, setReserva }: formReserva) {
  const [handleSubmit, setHandleSubmit] = useForm('mnqwwgbn')
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
              <label htmlFor='excursion'>
                <select name='Excursión'>
                  <option value='Alta Montaña'>Alta Montaña</option>
                  <option value='Bodegas'>Bodegas</option>
                  <option value='City Tour'>City Tour</option>
                  <option value='Cacheuta__parque-termal'>
                    Cacheuta (Parque termal)
                  </option>
                  <option value='Cacheuta__spa'>Cacheuta (Spa)</option>
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

export { Reserva }
