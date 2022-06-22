import React from 'react'
import styled from 'styled-components'
import Drip from 'assets/drip.png'

import Title from 'components/elements/Title'
import { Image } from 'components/Images'
import { mediaQueries } from 'constants/mediaQueries'

const Box = styled.div`
  padding: 35px;
  background-color: #fff;
  border-radius: 20px;
  display: grid;
  justify-items: center;
  & h3 {
    margin-top: 1em;
  }
  @media ${mediaQueries.tabletL} {
    padding: 20px;
  }
`

const Texts = styled.div`
  padding-top: 3em;
  border-radius: 20px;
  & p {
    color: ${props => props.theme.color.grey};
  }
`

const Li = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: min-content 1fr;
  grid-gap: 10px;
  margin-bottom: 2em;
`

const dripStyle = {
  minHeight: '15px', minWidth: '15px'
}

const ServiceItem = ({ data }) => {
  return (
    <Box>
      <Image
        src={data.image}
        alt={'banner'} style={{
          height: '250px'
          // width: '250px'
        }}
      />
      <Title as={'h3'}>{data.name}</Title>
      <Texts>
        <Li>
          <Image objectFit={'contain'} src={Drip} alt={'banner'} style={dripStyle} />
          <p>{data.text}</p>
        </Li>
        <div style={{ fontSize: '25px', marginLeft: '25px' }}>
          <p>Цена:  <span style={{ fontWeight: '600' }}>{data.price}</span> сум</p>
        </div>
      </Texts>
    </Box>
  )
}

export default ServiceItem
