import React from 'react'
import Image from 'next/image'
import { Carousel } from 'flowbite-react'
import { useWindowSize } from 'usehooks-ts'
import { type DataCarousel } from '@src/types'
import { IconArrow } from '@components/Icons/IconArrow'

function ComponentCarousel ({ data }: DataCarousel) {
  const { width } = useWindowSize()
  return (
    <>
      {width <= 320 ? (
        <div className='w-full h-[166px] max-w-full'>
          <Carousel
            leftControl={
              <IconArrow
                src='/media/icon/left-arrow.svg'
                alt='Flecha izquierda de color blanco'
                size={40}
              />
            }
            rightControl={
              <IconArrow
                src='/media/icon/right-arrow.svg'
                alt='Flecha derecha de color blanco'
                size={40}
              />
            }
          >
            {data.map(d => (
              <Image
                priority
                key={d.id}
                src={d.responsive[0].mobile.img['320px']}
                alt={d.alt}
                width={260}
                height={260}
              />
            ))}
          </Carousel>
        </div>
      ) : width <= 375 ? (
        <div className='w-full h-[202px] max-w-full'>
          <Carousel
            leftControl={
              <IconArrow
                src='/media/icon/left-arrow.svg'
                alt='Flecha izquierda de color blanco'
                size={40}
              />
            }
            rightControl={
              <IconArrow
                src='/media/icon/right-arrow.svg'
                alt='Flecha derecha de color blanco'
                size={40}
              />
            }
          >
            {data.map(d => (
              <Image
                priority
                key={d.id}
                src={d.responsive[0].mobile.img['375px']}
                alt={d.alt}
                width={315}
                height={315}
              />
            ))}
          </Carousel>
        </div>
      ) : width <= 425 ? (
        <div className='w-full h-[234px] max-w-full'>
          <Carousel
            leftControl={
              <IconArrow
                src='/media/icon/left-arrow.svg'
                alt='Flecha izquierda de color blanco'
                size={40}
              />
            }
            rightControl={
              <IconArrow
                src='/media/icon/right-arrow.svg'
                alt='Flecha derecha de color blanco'
                size={40}
              />
            }
          >
            {data.map(d => (
              <Image
                priority
                key={d.id}
                src={d.responsive[0].mobile.img['425px']}
                alt={d.alt}
                width={365}
                height={365}
              />
            ))}
          </Carousel>
        </div>
      ) : width <= 505 ? (
        <div className='w-full h-[285px] max-w-full'>
          <Carousel
            leftControl={
              <IconArrow
                src='/media/icon/left-arrow.svg'
                alt='Flecha izquierda de color blanco'
                size={40}
              />
            }
            rightControl={
              <IconArrow
                src='/media/icon/right-arrow.svg'
                alt='Flecha derecha de color blanco'
                size={40}
              />
            }
          >
            {data.map(d => (
              <Image
                priority
                key={d.id}
                src={d.responsive[0].mobile.img['505px']}
                alt={d.alt}
                width={445}
                height={445}
              />
            ))}
          </Carousel>
        </div>
      ) : width <= 600 ? (
        <div className='w-full h-[346px] max-w-full'>
          <Carousel
            leftControl={
              <IconArrow
                src='/media/icon/left-arrow.svg'
                alt='Flecha izquierda de color blanco'
                size={40}
              />
            }
            rightControl={
              <IconArrow
                src='/media/icon/right-arrow.svg'
                alt='Flecha derecha de color blanco'
                size={40}
              />
            }
          >
            {data.map(d => (
              <Image
                priority
                key={d.id}
                src={d.responsive[1].tablet.img['600px']}
                alt={d.alt}
                width={540}
                height={540}
              />
            ))}
          </Carousel>
        </div>
      ) : width <= 768 ? (
        <div className='w-full h-[453px] max-w-full'>
          <Carousel
            leftControl={
              <IconArrow
                src='/media/icon/left-arrow.svg'
                alt='Flecha izquierda de color blanco'
                size={40}
              />
            }
            rightControl={
              <IconArrow
                src='/media/icon/right-arrow.svg'
                alt='Flecha derecha de color blanco'
                size={40}
              />
            }
          >
            {data.map(d => (
              <Image
                priority
                key={d.id}
                src={d.responsive[1].tablet.img['768px']}
                alt={d.alt}
                width={708}
                height={708}
              />
            ))}
          </Carousel>
        </div>
      ) : width <= 800 ? (
        <div className='w-full h-[474px] max-w-full'>
          <Carousel
            leftControl={
              <IconArrow
                src='/media/icon/left-arrow.svg'
                alt='Flecha izquierda de color blanco'
                size={40}
              />
            }
            rightControl={
              <IconArrow
                src='/media/icon/right-arrow.svg'
                alt='Flecha derecha de color blanco'
                size={40}
              />
            }
          >
            {data.map(d => (
              <Image
                priority
                key={d.id}
                src={d.responsive[1].tablet.img['800px']}
                alt={d.alt}
                width={740}
                height={740}
              />
            ))}
          </Carousel>
        </div>
      ) : width <= 1024 ? (
        <div className='w-full h-[540px] max-w-full'>
          <Carousel
            leftControl={
              <IconArrow
                src='/media/icon/left-arrow.svg'
                alt='Flecha izquierda de color blanco'
                size={40}
              />
            }
            rightControl={
              <IconArrow
                src='/media/icon/right-arrow.svg'
                alt='Flecha derecha de color blanco'
                size={40}
              />
            }
          >
            {data.map(d => (
              <Image
                priority
                key={d.id}
                src={d.responsive[1].tablet.img['1024px']}
                alt={d.alt}
                width={844}
                height={844}
              />
            ))}
          </Carousel>
        </div>
      ) : width <= 1366 ? (
        <div className='w-full h-[586px] max-w-full'>
          <Carousel
            leftControl={
              <IconArrow
                src='/media/icon/left-arrow.svg'
                alt='Flecha izquierda de color blanco'
                size={40}
              />
            }
            rightControl={
              <IconArrow
                src='/media/icon/right-arrow.svg'
                alt='Flecha derecha de color blanco'
                size={40}
              />
            }
          >
            {data.map(d => (
              <Image
                priority
                key={d.id}
                src={d.responsive[2].desktop.img['1366px']}
                alt={d.alt}
                width={916}
                height={916}
              />
            ))}
          </Carousel>
        </div>
      ) : width <= 1440 ? (
        <div className='w-full h-[634px] max-w-full'>
          <Carousel
            leftControl={
              <IconArrow
                src='/media/icon/left-arrow.svg'
                alt='Flecha izquierda de color blanco'
                size={40}
              />
            }
            rightControl={
              <IconArrow
                src='/media/icon/right-arrow.svg'
                alt='Flecha derecha de color blanco'
                size={40}
              />
            }
          >
            {data.map(d => (
              <Image
                priority
                key={d.id}
                src={d.responsive[2].desktop.img['1440px']}
                alt={d.alt}
                width={990}
                height={990}
              />
            ))}
          </Carousel>
        </div>
      ) : (
        <div className='w-full h-[634px] max-w-full'>
          <Carousel
            leftControl={
              <IconArrow
                src='/media/icon/left-arrow.svg'
                alt='Flecha izquierda de color blanco'
                size={40}
              />
            }
            rightControl={
              <IconArrow
                src='/media/icon/right-arrow.svg'
                alt='Flecha derecha de color blanco'
                size={40}
              />
            }
          >
            {data.map(d => (
              <Image
                priority
                key={d.id}
                src={d.responsive[2].desktop.img['1440px']}
                alt={d.alt}
                width={990}
                height={990}
              />
            ))}
          </Carousel>
        </div>
      )}
    </>
  )
}

export { ComponentCarousel }
