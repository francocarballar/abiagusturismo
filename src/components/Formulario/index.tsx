import React, { useState } from 'react'
import { Label, Textarea, Button, TextInput } from 'flowbite-react'

function Formulario () {
  const [image, setImage] = useState('')
  const [alt, setAlt] = useState('')
  const handleSubmit = e => {
    e.preventDefault()
    const img = image.split('/')
    const array = []
    const newItem = {
      id: array.length + 1,
      responsive: [
        {
          mobile: {
            img: {
              '320px': `https://res.cloudinary.com/abiagusturismo/image/upload/w_260,f_auto,ar_1:1,c_scale,q_auto,dpr_auto/${img[6]}/${img[7]}/${img[8]}`,
              '375px': `https://res.cloudinary.com/abiagusturismo/image/upload/w_315,f_auto,ar_1:1,c_scale,q_auto,dpr_auto/${img[6]}/${img[7]}/${img[8]}`,
              '425px': `https://res.cloudinary.com/abiagusturismo/image/upload/w_365,f_auto,ar_1:1,c_scale,q_auto,dpr_auto/${img[6]}/${img[7]}/${img[8]}`,
              '505px': `https://res.cloudinary.com/abiagusturismo/image/upload/w_445,f_auto,ar_1:1,c_scale,q_auto,dpr_auto/${img[6]}/${img[7]}/${img[8]}`
            }
          }
        },
        {
          tablet: {
            img: {
              '600px': `https://res.cloudinary.com/abiagusturismo/image/upload/w_540,f_auto,ar_1:1,c_scale,q_auto,dpr_auto/${img[6]}/${img[7]}/${img[8]}`,
              '768px': `https://res.cloudinary.com/abiagusturismo/image/upload/w_339,f_auto,ar_1:1,c_scale,q_auto,dpr_auto/${img[6]}/${img[7]}/${img[8]}`,
              '800px': `https://res.cloudinary.com/abiagusturismo/image/upload/w_355,f_auto,ar_1:1,c_scale,q_auto,dpr_auto/${img[6]}/${img[7]}/${img[8]}`,
              '1024px': `https://res.cloudinary.com/abiagusturismo/image/upload/w_298,f_auto,ar_1:1,c_scale,q_auto,dpr_auto/${img[6]}/${img[7]}/${img[8]}`
            }
          }
        },
        {
          desktop: {
            img: {
              '1366px': `https://res.cloudinary.com/abiagusturismo/image/upload/w_411,f_auto,ar_1:1,c_scale,q_auto,dpr_auto/${img[6]}/${img[7]}/${img[8]}`,
              '1440px': `https://res.cloudinary.com/abiagusturismo/image/upload/w_435,f_auto,ar_1:1,c_scale,q_auto,dpr_auto/${img[6]}/${img[7]}/${img[8]}`
            }
          }
        }
      ],
      alt: `${alt}`
    }
    array.push(newItem)
    console.log(array)
  }
  return (
    <form className='flex flex-col gap-4 min-w-[400px] text-3xl'>
      <div>
        <div className='mb-2 block'>
          <Label htmlFor='image' value='image' className='sm:text-3xl' />
        </div>
        <TextInput
          id='image'
          type='text'
          placeholder='1Alta-Monta%C3%B1a__Tunel-potrerillos_qhfela.jpg'
          required={true}
          shadow={true}
          sizing='lg'
          className='sm:text-3xl'
          onChange={e => setImage(e.target.value)}
        />
      </div>
      <div>
        <div className='mb-2 block'>
          <Label htmlFor='alt' value='alt' className='sm:text-3xl' />
        </div>
        <Textarea
          id='alt'
          // type='text'
          placeholder='Esto es un texto alternativo'
          required={true}
          shadow={true}
          // sizing='lg'
          rows={10}
          className='sm:text-3xl'
          onChange={e => setAlt(e.target.value)}
        />
      </div>
      <div className='flex items-center gap-2 sm:text-3xl'></div>
      <Button
        type='submit'
        size='xl'
        className='sm:text-3xl'
        onClick={handleSubmit}
      >
        Agregar
      </Button>
    </form>
  )
}

export { Formulario }
