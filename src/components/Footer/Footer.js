import React from 'react'
import styled from 'styled-components'

import FooterNav from 'components/Footer/FooterNav'
import Wave from 'icons/Wave'

const WaveContainer = styled.div`
  display: inline-block;
  position: relative;
  width: 100%;
  padding-bottom: 150px;
  vertical-align: middle;
  overflow: hidden;
  background-color: ${({ theme }) => theme.background.secondary};
  & svg {
    display: inline-block;
    position: absolute;
    width: 100%;
    height: 100%;
  }
`

const Footer = props => {
  return (
    <div>
      <WaveContainer>
        <Wave color={'red'} />
      </WaveContainer>
      <FooterNav />
    </div>
  )
}

export default Footer
