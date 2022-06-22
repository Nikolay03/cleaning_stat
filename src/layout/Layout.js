import React from 'react'
import styled from 'styled-components'

import Header from 'components/Header'
import Footer from 'components/Footer'
import { HEADER_HEIGHT } from 'constants/constants'
import { HEADER_INFO_SIZE } from 'components/Header/HeaderInfo'

const Wrapper = styled.div`
  padding-top: ${({ withPadding }) => withPadding ? `${HEADER_HEIGHT}px` : `${HEADER_INFO_SIZE}px`};
`
// Component
const Layout = ({ children, withPadding = true }) => {
  return (
    <>
      <Header />
      <Wrapper withPadding={withPadding}>
        {children}
      </Wrapper>
      <Footer />
    </>
  )
}

export default Layout
