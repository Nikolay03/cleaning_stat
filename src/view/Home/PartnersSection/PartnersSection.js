import React from 'react'
import Carousel from 'react-multi-carousel'
import styled from 'styled-components'
import { AnimationOnScroll } from 'react-animation-on-scroll'

import Container from 'components/ui/Container'
import { mediaQueries } from 'constants/mediaQueries'
import { Image } from 'components/Images'
import Title from 'components/elements/Title'
import * as ROUTES from 'constants/routes'
import Conservatory from 'assets/partners/conservatory.jpg'
import Aprel from 'assets/partners/aprel.jpg'
import Chinobod from 'assets/partners/chinobod.jpg'
import Navoi from 'assets/partners/navoi.jpg'
import Oqtepa from 'assets/partners/oqtepa.jpg'
import Zarafshon from 'assets/partners/zarafshon.jpg'

const StyledCont = styled(Container)`
  padding-top: 90px;
  & h2 {
    margin-bottom: 40px;
    text-align: center;
  }
  @media ${mediaQueries.laptopS} {
    padding-bottom: 90px;
    padding-bottom: 0px;
  }
  @media ${mediaQueries.tabletL} {
    padding-top: 40px;
  }
`
const SliderCont = styled('div')`
`

const SlideCont = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 60px 60px 100px 60px;
  & h5 {
    text-align: center;
    font-weight: 600;
  }
`

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 1 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 1 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
}

const images = [
  {
    src: Conservatory,
    title: 'Консерватория',
    alt: 'Консерватория'
  },
  {
    src: Aprel,
    alt: 'April Verdant Restaurant',
    title: 'April Verdant Restaurant'
  },
  {
    src: Navoi,
    alt: 'Большой театр имени Алишера Навои',
    title: 'Большой театр имени Алишера Навои'
  },
  {
    src: Oqtepa,
    alt: 'OQTEPA LAVASH',
    title: 'OQTEPA LAVASH'
  },
  {
    src: Chinobod,
    alt: 'Санаторий Чинабад',
    title: 'Санаторий Чинабад'
  },
  {
    src: Zarafshon,
    alt: 'Концертный зал «Зарафшан»',
    title: 'Концертный зал «Зарафшан»'
  }
]

const PartnersSection = props => {
  return (
    <StyledCont as={'section'} id={ROUTES.PARTNERS}>
      <AnimationOnScroll animateIn={'animate__fadeInUp'} animateOnce>
        <Title as={'h2'}>Наши клиенты</Title>
      </AnimationOnScroll>
      <AnimationOnScroll animateIn={'animate__fadeInUp'} animateOnce delay={100}>
        <SliderCont>
          <Carousel
            responsive={responsive}
            swipeable={false}
            draggable={false}
            showDots
            arrows={false}
            dotListClass={'react-cert-carousel-dot-list'}
            containerClass={'react-cert-carousel-list'}
            transitionDuration={500}
          >
            {[...images].map(i => (
              <SlideCont key={i.alt}>
                <Image src={i.src} alt={i.alt} style={{ width: '125px', height: '125px', marginBottom: '20px', borderRadius: '100%' }} objectFit={'cover'} />
                <Title as={'h5'}>{i.title}</Title>
              </SlideCont>
            ))}
          </Carousel>
        </SliderCont>
      </AnimationOnScroll>
    </StyledCont>
  )
}

export default PartnersSection
