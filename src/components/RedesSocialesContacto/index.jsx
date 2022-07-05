import React from 'react'
import styles from './RedesSocialesContacto.module.css'

function RedesSocialesContacto () {
  return (
    <React.Fragment>
      <div className={styles.div__social_media}>
        <ul>
          <li>
            <a
              href='https://www.facebook.com/abiagusturismo'
              target='_blank'
              alt='Logotipo de Facebook'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
              >
                <path d='M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 10h-2v2h2v6h3v-6h1.82l.18-2h-2v-.833c0-.478.096-.667.558-.667h1.442v-2.5h-2.404c-1.798 0-2.596.792-2.596 2.308v1.692z' />
              </svg>
              Facebook
            </a>
          </li>
          <li>
            <a
              href='https://www.instagram.com/abiagusturismo'
              target='_blank'
              alt='Logotipo de Instagram'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
              >
                <path d='M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 7.082c1.602 0 1.792.006 2.425.035 1.627.074 2.385.845 2.46 2.459.028.633.034.822.034 2.424s-.006 1.792-.034 2.424c-.075 1.613-.832 2.386-2.46 2.46-.633.028-.822.035-2.425.035-1.602 0-1.792-.006-2.424-.035-1.63-.075-2.385-.849-2.46-2.46-.028-.632-.035-.822-.035-2.424s.007-1.792.035-2.424c.074-1.615.832-2.386 2.46-2.46.632-.029.822-.034 2.424-.034zm0-1.082c-1.63 0-1.833.007-2.474.037-2.18.1-3.39 1.309-3.49 3.489-.029.641-.036.845-.036 2.474 0 1.63.007 1.834.036 2.474.1 2.179 1.31 3.39 3.49 3.49.641.029.844.036 2.474.036 1.63 0 1.834-.007 2.475-.036 2.176-.1 3.391-1.309 3.489-3.49.029-.64.036-.844.036-2.474 0-1.629-.007-1.833-.036-2.474-.098-2.177-1.309-3.39-3.489-3.489-.641-.03-.845-.037-2.475-.037zm0 2.919c-1.701 0-3.081 1.379-3.081 3.081s1.38 3.081 3.081 3.081 3.081-1.379 3.081-3.081c0-1.701-1.38-3.081-3.081-3.081zm0 5.081c-1.105 0-2-.895-2-2 0-1.104.895-2 2-2 1.104 0 2.001.895 2.001 2s-.897 2-2.001 2zm3.202-5.922c-.397 0-.72.322-.72.72 0 .397.322.72.72.72.398 0 .721-.322.721-.72 0-.398-.322-.72-.721-.72z' />
              </svg>
              Instagram
            </a>
          </li>
          <li>
            <a
              href='https://api.whatsapp.com/send?phone=+5492614725286&text=Hola!%20Gracias%20contactarte%20con%20nosotros!'
              target='_blank'
              alt='Logotipo de WhatsApp'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
              >
                <path d='M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-5.971 18l.844-3.081c-.52-.902-.794-1.925-.794-2.973.001-3.279 2.668-5.946 5.946-5.946 1.591.001 3.084.62 4.206 1.744 1.123 1.124 1.741 2.618 1.74 4.207-.001 3.279-2.669 5.946-5.946 5.946-.995 0-1.976-.25-2.844-.724l-3.152.827zm3.298-1.903c.838.497 1.638.796 2.696.796 2.724 0 4.943-2.217 4.944-4.942.001-2.731-2.208-4.945-4.94-4.946-2.726 0-4.943 2.217-4.944 4.942 0 1.112.326 1.946.873 2.817l-.499 1.824 1.87-.491zm5.694-2.732c-.037-.062-.136-.099-.285-.174-.149-.074-.879-.434-1.015-.483-.136-.05-.235-.074-.334.074-.099.149-.384.483-.47.583-.087.099-.173.112-.322.037-.149-.074-.627-.231-1.195-.737-.442-.394-.74-.881-.827-1.029-.087-.149-.009-.229.065-.303l.223-.26.149-.248c.05-.099.025-.186-.012-.26l-.458-1.103c-.121-.29-.243-.25-.334-.255l-.286-.007c-.099 0-.26.037-.396.186s-.52.508-.52 1.24c0 .731.532 1.438.607 1.537.074.099 1.048 1.6 2.538 2.243.354.153.631.245.847.313.356.113.68.097.936.059.285-.043.879-.359 1.003-.706.123-.348.123-.645.086-.707z' />
              </svg>
              WhatsApp
            </a>
          </li>
          <li>
            <a
              href='https://linkedin.com/in/abiagusturismo'
              target='_blank'
              alt='Logotipo de Linkedin'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
              >
                <path d='M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 8c0 .557-.447 1.008-1 1.008s-1-.45-1-1.008c0-.557.447-1.008 1-1.008s1 .452 1 1.008zm0 2h-2v6h2v-6zm3 0h-2v6h2v-2.861c0-1.722 2.002-1.881 2.002 0v2.861h1.998v-3.359c0-3.284-3.128-3.164-4-1.548v-1.093z' />
              </svg>
              Linkedin
            </a>
          </li>
        </ul>
      </div>
    </React.Fragment>
  )
}

export { RedesSocialesContacto }
