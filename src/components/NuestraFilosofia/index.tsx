import React from 'react'
import styles from './NuestraFilosofia.module.css'

function NuestraFilosofia () {
  return (
    <section className={styles.section__nuestra_filosofia}>
      <h2>NUESTRA FILOSOFÍA</h2>
      <div>
        <p>
          Nos proponemos brindar el mejor servicio a nuestros clientes,
          ofreciendo excelentes recursos, materiales y humanos. Ante todo
          tenemos la voluntad de hacer cada día un poco mejor las cosas y
          escuchar sus opiniones o sugerencias, para que así sea.
        </p>
        <p>
          Queremos informar, mostrar y compartir lo bello y grandioso de
          Mendoza, Argentina y el exterior. Para disfrutar, animarse a viajar y
          tener siempre las ganas de regresar y revivir lindos momentos en
          hermosos lugares...
        </p>
        <p>
          Pretendemos además contribuir al desarrollo de nuestra provincia y de
          nuestra nación, y sobre todo de nuestra sociedad a través del turismo.
        </p>
      </div>
    </section>
  )
}

export { NuestraFilosofia }
