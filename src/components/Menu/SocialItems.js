import React from 'react'
import { Facebook } from 'react-feather'
import styled, { css } from 'styled-components'

import Telegram from 'icons/socials/Telegram'
import Instagram from 'icons/socials/Instagram'

const Link = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ size }) => size ? `${size}px` : '20px'};
  height: ${({ size }) => size ? `${size}px` : '20px'};
  ${({ gradient }) => gradient && css`
    border-radius: 100%;
    background: ${({ theme }) => theme.background.gradientButton};
  `}
`
const SocialItems = (props) => {
  return (
    <>
      <Link href={'https://t.me/shedevr_cleaning'} {...props}>
        <Telegram />
      </Link>
      {/* <Link href={''} {...props}> */}
      {/*  <Instagram /> */}
      {/* </Link> */}
      {/* <Link href={''} {...props}> */}
      {/*  <Facebook size={20} color={'transparent'} /> */}
      {/* </Link> */}
    </>
  )
}

export default SocialItems
