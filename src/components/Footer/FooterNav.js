import React from 'react'
import styled from 'styled-components'

import Container from 'components/ui/Container'
import Title from 'components/elements/Title'
import menus from 'constants/menus'
import SocialItems from 'components/Menu/SocialItems'
import { mediaQueries } from 'constants/mediaQueries'

const SimpleGrid = styled.div`
  display: grid;
  grid: 1fr / 1fr 1fr 1fr;
  @media ${mediaQueries.tabletL} {
    grid-template-columns: repeat(2, 1fr);
  }
  @media ${mediaQueries.mobileXL} {
    grid-template-columns: 1fr;
  }
`

const Block = styled.div`
  border-width: ${({ padding }) => padding ? '0px 0px 0px 1px' : '0px'};
  border-style: solid;
  border-color: #1B2529;
  padding: ${({ padding }) => padding ? '15px 15px 15px 50px' : '10px'};
  & h5 {
    margin-bottom: 35px;
  }
  @media ${mediaQueries.mobileXL} {
    grid-template-columns: repeat(2, 1fr);
    padding: 10px 10px 30px;
    border: none;
    & h5 {
      text-align: center;
    }
  }
`

const SocialsBlock = styled(Block)`
  @media ${mediaQueries.tabletL} {
    grid-column: 1 / 3;
    grid-row: 1;
    grid-template-columns: repeat(2, 1fr);
    padding: 10px 10px 20px;
    border-width: ${({ padding }) => padding ? '0px 0px 1px 0px' : '0px'};
    & h5 {
      text-align: center;
    }
  }
  @media ${mediaQueries.mobileXL} {
    grid-column: 1 / 1;
  }
`

const MenuBlock = styled(Block)`
  @media ${mediaQueries.mobileXL} {
    grid-row: 2
  }
`

const Texts = styled.div`
  & p {
    color: ${props => props.theme.color.secondary};
    font-size: ${({ theme }) => theme.fontSize.micro};
    margin-bottom: 15px;
  }
  @media ${mediaQueries.mobileXL} {
    & p {
      text-align: center;
      &:last-child{
        margin-bottom: 0px;
      }
    }
  }
`

const MenuList = styled.div`
  display: grid;
  grid-gap: 30px;
  grid-template-columns: min-content min-content;
  @media ${mediaQueries.mobileXL} {
    justify-content: center;
  }
`

const MenuItem = styled('div')`
  height: min-content;
  color: ${props => props.theme.color.secondary};
  line-height: 20px;
  white-space: nowrap;
  text-decoration: none;
  display: flex;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSize.micro};
  font-weight: 500;
  transition: ${props => props.theme.transition};
  &.active {
    color: ${({ theme }) => theme.color.white};
  }
  &:hover {
    color: ${({ theme }) => theme.color.white};
  }
`

const Socials = styled.div`
  display: grid;
  grid-gap: 30px;
  align-items: center;
  grid: 1fr / repeat(2, min-content);
  & svg {
    fill: ${({ theme }) => theme.background.secondary};
  }
  @media ${mediaQueries.tabletL} {
    grid-gap: 15%;
    justify-content: center;
  }
`

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.background.secondary};
`

const FooterNav = props => {
  return (
    <Wrapper>
      <Container>
        <SimpleGrid>
          <Block>
            <Title as={'h5'} color={'white'}>Часы работы</Title>
            <Texts>
              <p>Пн – Вс 8:00 – 22:00</p>
            </Texts>
          </Block>
          <MenuBlock padding>
            <Title as={'h5'} color={'white'}>Компания</Title>
            <MenuList>
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
          </MenuBlock>
          <SocialsBlock padding>
            <Title as={'h5'} color={'white'}>Соц. сети</Title>
            <Socials>
              <SocialItems gradient size={'30'} />
            </Socials>
          </SocialsBlock>
        </SimpleGrid>
      </Container>
    </Wrapper>
  )
}

export default FooterNav
