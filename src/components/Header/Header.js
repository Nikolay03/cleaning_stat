import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'

import Container from 'components/ui/Container'
import DesktopMenu from 'components/Menu/DesktopMenu'
import { HEADER_HEIGHT } from 'constants/constants'
import HeaderInfo, { HEADER_INFO_SIZE } from 'components/Header/HeaderInfo'
import MobileMenu from 'components/Menu/MobileMenu'
import Logo from 'components/elements/Logo'

const StyledHeader = styled.header`
  z-index: 1;
  position: fixed;
  left: 0;
  right: 0;
  height: calc(${HEADER_HEIGHT}px + ${HEADER_INFO_SIZE}px);
  transition: background-color 1.4s ease, box-shadow 300ms ease;
`

const StyledContainer = styled(Container)`
  display: flex;
  padding: 0px 15px;
  height: calc(100% - ${HEADER_INFO_SIZE}px);
  justify-content: space-between;
  align-items: center;
`

const Flex = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`

const Header = props => {
  const headerRef = useRef()
  useEffect(() => {
    const onScroll = () => {
      window.pageYOffset > 0 ? headerRef.current.classList.add('activeHeader') : headerRef.current.classList.remove('activeHeader')
    }
    // clean up code
    window.removeEventListener('scroll', onScroll)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return (
    <StyledHeader ref={headerRef}>
      <HeaderInfo />
      <StyledContainer>
        <Flex>
          <a href={''}><Logo /></a>
          <DesktopMenu />
          <MobileMenu />
        </Flex>
      </StyledContainer>
    </StyledHeader>
  )
}

export default Header
