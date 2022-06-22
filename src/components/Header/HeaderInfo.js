import React from 'react'
import styled from 'styled-components'
import { Phone } from 'react-feather'

import { CONTAINER_SIZE } from 'components/ui/Container'
import { mediaQueries } from 'constants/mediaQueries'
import SocialItems from 'components/Menu/SocialItems'
import { phones } from 'constants/constants'

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.background.secondary};
  //background-color: rgb(93, 115, 173);
`

const Box = styled.div`
  margin: 0 auto;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: ${CONTAINER_SIZE}px;
  max-width: 100%;
  padding: 0 15px;
  @media ${mediaQueries.laptopM} {
    width: 100%;
  }
`

const Phones = styled.div`
  display: flex;
  align-items: center;
  @media ${mediaQueries.laptopS} {
    & > div:not(:first-child){
      display: none;
    }
  }
`

const PhoneBox = styled.div`
  display: grid;
  align-items: center;
  grid-gap: 8px;
  grid: 1fr/ min-content min-content;
  &:not(:last-child) {
    margin-right: 60px;
  }
  & a {
    color: #fff;
    white-space: nowrap;
  };
  & svg {
    fill: #fff;
  }
`

const Socials = styled.div`
  display: grid;
  grid-gap: 15px;
  align-items: center;
  grid: 1fr / repeat(1, 1fr);
  & svg {
    fill: #fff;
  }
`

export const HEADER_INFO_SIZE = '24'

const HeaderInfo = props => {
  return (
    <Wrapper>
      <Box>
        <Phones>
          {phones.map((i, key) => {
            return (
              <PhoneBox key={key}>
                <Phone size={16} color={'#fff'} />
                <a href={`tel:${i.value}`}>{i.name}</a>
              </PhoneBox>
            )
          })}
        </Phones>
        <Socials>
          <SocialItems size={20} />
        </Socials>
      </Box>
    </Wrapper>
  )
}

export default HeaderInfo
