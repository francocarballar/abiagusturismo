import React from 'react'
import Image from 'next/image'
import { ButtonMercadoPago } from '@components/ButtonMercadoPago'
import { useWindowSize } from 'usehooks-ts'

function ContainerCombos ({ array }): JSX.Element {
  const { width } = useWindowSize()
  return (
    <>
      {width <= 320
        ? array.map(c => (
            <figure
              className='flex flex-col justify-center items-center p-4'
              key={c.id}
            >
              <Image
                priority
                width={260}
                height={260}
                src={c.responsive[0].mobile.img['320px']}
                alt={c.alt}
              />
              <ButtonMercadoPago link={c['payment-link']} />
            </figure>
          ))
        : width <= 375
        ? array.map(c => (
            <figure
              className='flex flex-col justify-center items-center p-4'
              key={c.id}
            >
              <Image
                priority
                width={315}
                height={315}
                src={c.responsive[0].mobile.img['375px']}
                alt={c.alt}
              />
              <ButtonMercadoPago link={c['payment-link']} />
            </figure>
          ))
        : width <= 425
        ? array.map(c => (
            <figure
              className='flex flex-col justify-center items-center p-4'
              key={c.id}
            >
              <Image
                priority
                width={365}
                height={365}
                src={c.responsive[0].mobile.img['425px']}
                alt={c.alt}
              />
              <ButtonMercadoPago link={c['payment-link']} />
            </figure>
          ))
        : width <= 505
        ? array.map(c => (
            <figure
              className='flex flex-col justify-center items-center p-4'
              key={c.id}
            >
              <Image
                priority
                width={345}
                height={345}
                src={c.responsive[0].mobile.img['505px']}
                alt={c.alt}
              />
              <ButtonMercadoPago link={c['payment-link']} />
            </figure>
          ))
        : width <= 600
        ? array.map(c => (
            <figure
              className='flex flex-col justify-center items-center p-4'
              key={c.id}
            >
              <Image
                priority
                width={540}
                height={540}
                src={c.responsive[1].tablet.img['600px']}
                alt={c.alt}
              />
              <ButtonMercadoPago link={c['payment-link']} />
            </figure>
          ))
        : width <= 768
        ? array.map(c => (
            <figure
              className='flex flex-col justify-center items-center p-4'
              key={c.id}
            >
              <Image
                priority
                width={339}
                height={339}
                src={c.responsive[1].tablet.img['768px']}
                alt={c.alt}
              />
              <ButtonMercadoPago link={c['payment-link']} />
            </figure>
          ))
        : width <= 800
        ? array.map(c => (
            <figure
              className='flex flex-col justify-center items-center p-4'
              key={c.id}
            >
              <Image
                priority
                width={355}
                height={355}
                src={c.responsive[1].tablet.img['800px']}
                alt={c.alt}
              />
              <ButtonMercadoPago link={c['payment-link']} />
            </figure>
          ))
        : width <= 1024
        ? array.map(c => (
            <figure
              className='flex flex-col justify-center items-center p-4'
              key={c.id}
            >
              <Image
                priority
                width={298}
                height={298}
                src={c.responsive[1].tablet.img['1024px']}
                alt={c.alt}
              />
              <ButtonMercadoPago link={c['payment-link']} />
            </figure>
          ))
        : width <= 1366
        ? array.map(c => (
            <figure
              className='flex flex-col justify-center items-center p-4'
              key={c.id}
            >
              <Image
                priority
                width={411}
                height={411}
                src={c.responsive[2].desktop.img['1366px']}
                alt={c.alt}
              />
              <ButtonMercadoPago link={c['payment-link']} />
            </figure>
          ))
        : width <= 1440
        ? array.map(c => (
            <figure
              className='flex flex-col justify-center items-center p-4'
              key={c.id}
            >
              <Image
                priority
                width={435}
                height={435}
                src={c.responsive[2].desktop.img['1440px']}
                alt={c.alt}
              />
              <ButtonMercadoPago link={c['payment-link']} />
            </figure>
          ))
        : array.map(c => (
            <figure
              className='flex flex-col justify-center items-center p-4'
              key={c.id}
            >
              <Image
                priority
                width={435}
                height={435}
                src={c.responsive[2].desktop.img['1440px']}
                alt={c.alt}
              />
              <ButtonMercadoPago link={c['payment-link']} />
            </figure>
          ))}
    </>
  )
}

export { ContainerCombos }
