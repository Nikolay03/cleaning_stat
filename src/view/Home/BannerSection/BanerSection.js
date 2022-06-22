import React from 'react'
import { AnimationOnScroll } from 'react-animation-on-scroll'
import styled from 'styled-components'

import Container from 'components/ui/Container'
import Image from 'components/Images/Image'
import BannerImg from 'assets/banner_img.png'
import RequestReport from 'view/Home/BannerSection/RequestReport/RequestReport'
import { mediaQueries } from 'constants/mediaQueries'

const SimpleGrid = styled.div`
  display: grid;
  align-items: center;
  grid: 1fr / 1fr 2fr;
  grid-gap: 80px;
  position: relative;
  @media ${mediaQueries.laptopS} {
    grid: 1fr / 1fr;
    justify-items: center;
  }
`

const Box = styled.div`
  @media ${mediaQueries.laptopS} {
    display: none;
  }
`

const Wrapper = styled.section`
  position: relative;
`
const BannerSection = props => {
  return (
    <Wrapper>
      <Container>
        <SimpleGrid>
          <RequestReport />
          <AnimationOnScroll animateIn={'animate__fadeInUp'} delay={700} animateOnce>
            <Box>
              <Image objectFit={'contain'} src={BannerImg} alt={'banner'} style={{ minHeight: '560px' }} />
            </Box>
          </AnimationOnScroll>
        </SimpleGrid>
      </Container>
    </Wrapper>
  )
}

export default BannerSection
