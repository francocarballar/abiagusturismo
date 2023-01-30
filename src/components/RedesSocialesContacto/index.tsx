import React from 'react'
import styles from './RedesSocialesContacto.module.css'
import { IconFacebook } from '@components/Icons/IconFacebook'
import { IconInstagram } from '@components/Icons/IconInstagram'
import { IconWhatsapp } from '@components/Icons/IconWhatsapp'
import { IconLinkedin } from '@components/Icons/IconLinkedin'
import { type SocialMedia } from '@src/types'

function RedesSocialesContacto ({ color }: SocialMedia) {
  return (
    <>
      <div className={styles.div__social_media}>
        <ul>
          <li>
            <a
              rel='noreferrer'
              href='https://www.facebook.com/abiagusturismo'
              target='_blank'
              style={color}
            >
              <IconFacebook />
              Facebook
            </a>
          </li>
          <li>
            <a
              rel='noreferrer'
              href='https://www.instagram.com/abiagusturismo'
              target='_blank'
              style={color}
            >
              <IconInstagram />
              Instagram
            </a>
          </li>
          <li>
            <a
              rel='noreferrer'
              href='https://api.whatsapp.com/send?phone=+5492614725286&text=Hola!%20Gracias%20contactarte%20con%20nosotros!'
              target='_blank'
              style={color}
            >
              <IconWhatsapp />
              WhatsApp
            </a>
          </li>
          <li>
            <a
              rel='noreferrer'
              href='https://linkedin.com/in/abiagusturismo'
              target='_blank'
              style={color}
            >
              <IconLinkedin />
              Linkedin
            </a>
          </li>
        </ul>
      </div>
    </>
  )
}

export { RedesSocialesContacto }
