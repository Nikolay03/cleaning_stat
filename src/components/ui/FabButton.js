import React from 'react'
import styled from 'styled-components'
import { phones } from '../../constants/constants'
import { mediaQueries } from '../../constants/mediaQueries'

const Fab = styled('a')`
  display: none;
  align-items: center;
  justify-content: center;
  color: rgba(0, 0, 0, 0.87);
  width: 56px;
  cursor: pointer;
  height: 56px;
  padding: 0;
  font-size: 0.875rem;
  min-width: 0;
  box-shadow: 0px 3px 5px -1px rgb(0 0 0 / 20%), 0px 6px 10px 0px rgb(0 0 0 / 14%), 0px 1px 18px 0px rgb(0 0 0 / 12%);
  box-sizing: border-box;
  min-height: 36px;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  font-weight: 500;
  line-height: 1.75;
  border-radius: 50%;
  letter-spacing: 0.02857em;
  text-transform: uppercase;
  z-index: 100;
  position: fixed;
  bottom: 20px;
  right: 20px;
  color: #fff !important;
  background: #6770e6 !important;
  opacity: 0.8;
  & svg {
    fill: #fff;
  }
  @media ${mediaQueries.laptopS} {
    display: flex;
  }
`
const FabButton = ({ children }) => {
  return (
    <Fab href={`tel:${phones[0].value}`}>
      {children}
    </Fab>
  )
}

export default FabButton
