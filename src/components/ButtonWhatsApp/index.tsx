import React from 'react'
import styles from './ButtonWhatsApp.module.css'

function ButtonWhatsApp () {
  return (
    <a
      href='https://api.whatsapp.com/send?phone=+5492614725286&text=Hola!%20Quería%20reservar%20una%20excursión!" target="_blank" data-content="https://api.whatsapp.com/send?phone=+5492614725286&text=Hola!%20Quería%20hacerte%20una%20consulta!'
      target='_blank'
      rel='noreferrer'
      className={styles.button_whatsapp}
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='24'
        height='24'
        viewBox='0 0 24 24'
      >
        <path d='M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-5.971 18l.844-3.081c-.52-.902-.794-1.925-.794-2.973.001-3.279 2.668-5.946 5.946-5.946 1.591.001 3.084.62 4.206 1.744 1.123 1.124 1.741 2.618 1.74 4.207-.001 3.279-2.669 5.946-5.946 5.946-.995 0-1.976-.25-2.844-.724l-3.152.827zm3.298-1.903c.838.497 1.638.796 2.696.796 2.724 0 4.943-2.217 4.944-4.942.001-2.731-2.208-4.945-4.94-4.946-2.726 0-4.943 2.217-4.944 4.942 0 1.112.326 1.946.873 2.817l-.499 1.824 1.87-.491zm5.694-2.732c-.037-.062-.136-.099-.285-.174-.149-.074-.879-.434-1.015-.483-.136-.05-.235-.074-.334.074-.099.149-.384.483-.47.583-.087.099-.173.112-.322.037-.149-.074-.627-.231-1.195-.737-.442-.394-.74-.881-.827-1.029-.087-.149-.009-.229.065-.303l.223-.26.149-.248c.05-.099.025-.186-.012-.26l-.458-1.103c-.121-.29-.243-.25-.334-.255l-.286-.007c-.099 0-.26.037-.396.186s-.52.508-.52 1.24c0 .731.532 1.438.607 1.537.074.099 1.048 1.6 2.538 2.243.354.153.631.245.847.313.356.113.68.097.936.059.285-.043.879-.359 1.003-.706.123-.348.123-.645.086-.707z' />
      </svg>
    </a>
  )
}

export { ButtonWhatsApp }