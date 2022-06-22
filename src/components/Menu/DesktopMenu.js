
import React from 'react'
import styled from 'styled-components'
import { CONTAINER } from 'constants/constants'
import { mediaQueries } from 'constants/mediaQueries'
import menus from 'constants/menus'
import OrderButton from 'components/Menu/OrderButton'

const Wrapper = styled('div')`
  margin: 0 0 0 auto;
  max-width: ${CONTAINER}px;
  align-self: center;
  display: flex;
  position: relative;
  @media ${mediaQueries.laptopS} {
    display: none;
  }
`

const MenuList = styled('nav')`
  display: grid;
  align-items: center;
  grid-template-columns: ${({ length }) => `repeat(${length}, min-content)`};
  grid-gap: 30px;
`

const MenuItem = styled('div')`
  height: min-content;
  color: ${props => props.theme.color.primary};
  line-height: 20px;
  cursor: pointer;
  white-space: nowrap;
  text-decoration: none;
  display: flex;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSize.primary};
  font-weight: 500;
  transition: ${props => props.theme.transition};
  &.active {
    color: ${({ theme }) => theme.color.warning};
  }
  &:hover {
    color: ${({ theme }) => theme.color.warning};
  }
`

const Actions = styled.div`
  display: flex;
  margin-left: 30px;
`

const defaultButtonProps = {
  height: '68px',
  type: 'button',
  uppercase: true,
  fontSize: '16px'
}

const DesktopMenu = () => {
  return (
    <Wrapper>
      <MenuList length={menus.length}>
        {menus.map((item, index) => {
          const url = item.url
          const label = item.label
          return (
            <a href={`#${url}`} key={index}>
              <MenuItem>
                <span>{label}</span>
              </MenuItem>
            </a>
          )
        })}
      </MenuList>
      <Actions>
        <OrderButton />
      </Actions>
    </Wrapper>
  )
}

export default DesktopMenu
