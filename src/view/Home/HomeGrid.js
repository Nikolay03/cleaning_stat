import React from 'react'
import styled from 'styled-components'

import BannerSection from 'view/Home/BannerSection/BanerSection'
import { mediaQueries } from 'constants/mediaQueries'
import PartnersSection from 'view/Home/PartnersSection/PartnersSection'
import ServicesSection from 'view/Home/ServicesSection/ServicesSection'
import * as ROUTES from 'constants/routes'
import GetCallBanner from 'components/GetCallBanner/GetCallBanner'
import BgBanner from 'assets/bg_banner.png'
import Office from 'assets/office.jpg'
import FabButton from '../../components/ui/FabButton'
import { Phone } from 'react-feather'

const Wrapper = styled.div`
  padding: 160px 0px 120px 0px;
  background-image: url(${BgBanner});
  background-position: top left;
  background-repeat: no-repeat;
  background-size: cover;
  max-width: 100vw;
  position: relative;
  overflow: hidden;
  &:before {
    content: '';
    width: 55%;
    height: 55%;
    position: absolute;
    right: -10%;
    top: -20%;
    background: #fff;
    opacity: 0.9;
  };
  &:after {
    content: '';
    width: 55%;
    height: 55%;
    position: absolute;
    right: -10%;
    top: -20%;
    background-image: url(${Office});
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 50%;
    z-index: -1;
  }
  @media ${mediaQueries.laptopS} {
    padding: 100px 0px 60px 0px;
  }
`

const GetCall = styled.div`
  margin-top: 80px;
  @media ${mediaQueries.laptopS} {
    margin-top: 50px;
  }
`

const HomeGrid = props => {
  return (
    <>
      <Wrapper id={ROUTES.HOME}>
        <BannerSection />
      </Wrapper>
      <ServicesSection />
      <GetCall>
        <GetCallBanner />
      </GetCall>
      <PartnersSection />
    </>
  )
}

export default HomeGrid
