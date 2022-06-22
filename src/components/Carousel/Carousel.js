import MultiCarousel from 'react-multi-carousel'
import React from 'react'

import CarouselDot from 'components/Carousel/CarouselDot'
import CarouselArrow from 'components/Carousel/CarouselArrow'

export default function Carousel (props) {
  const { children, innerRef, ...restProps } = props

  return (
    <MultiCarousel
      autoPlay
      autoPlaySpeed={5000}
      arrows={false}
      customDot={<CarouselDot />}
      customLeftArrow={<CarouselArrow left={'calc(2% + 1px)'} />}
      customRightArrow={<CarouselArrow right={'calc(2% + 1px)'} transform={'rotate(180deg)'} />}
      deviceType={'desktop'}
      draggable={false}
      infinite
      itemClass={'carousel-item'}
      ssr
      renderDotsOutside
      ref={innerRef}
      {...restProps}
    >
      {children}
    </MultiCarousel>
  )
}
