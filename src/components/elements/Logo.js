import React from 'react'
import styled from 'styled-components'
import logo from 'assets/logo.jpg'

import Image from 'components/Images/Image'
import { mediaQueries } from 'constants/mediaQueries'

const Box = styled.div`
  border-radius: 100%;
  width: 60px;
  height: 60px;
  border-radius: 100%;
  overflow: hidden;
  @media ${mediaQueries.laptopS} {
    & > div:not(:first-child){
      display: none;
    }
  }
`

const SimpleGrid = styled.div`
  display: grid;
  grid: 1fr/ min-content min-content;
  align-items: center;
  grid-gap: 15px;

`

const Text = styled.div`
  color: #6782b4;
  background-image: linear-gradient(315deg, #b1bfd8 0%, #6782b4 74%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 20px;
  & > :first-child {
    letter-spacing: 1px;
    font-weight: 700;
    font-size: 24px;
  }
  & > :last-child {
    margin-top: -2px;
    font-weight: 600;
    font-size: 12px;
  }
`
const Logo = props => {
  return (
    <SimpleGrid>
      <Box>
        <Image objectFit={'contain'} src={logo} alt={'banner'} style={{ height: '100%', width: '100%' }} />
      </Box>
      <Text>
        <p>
          SHEDEVR
        </p>
        <p>
          CLEANING
        </p>

      </Text>
    </SimpleGrid>
  )
}

Logo.propTypes = {

}

export default Logo
