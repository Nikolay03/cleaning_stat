import React from 'react'
import styled from 'styled-components'

import Container from 'components/ui/Container'
import { Image } from 'components/Images'
import OrderButton from 'components/Menu/OrderButton'
import Title from 'components/elements/Title'
import Support from 'assets/support.png'

const Center = styled.div`
  display: flex;
  justify-content: center;
`

const ButtonWrapper = styled.div`
  padding: 0 20px;
  width: 100%;
`

const StyledCont = styled(Container)`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: center;
  & > :not(:last-child) {
    margin-bottom: 15px;
  }
  & h4 {
    padding-top: 30px;
  }
  & p {
    color: ${props => props.theme.color.grey};
    padding-bottom: 30px;
  }
`

const GetCallBanner = () => {
  return (
    <StyledCont>
      <Center>
        <Image objectFit={'contain'} src={Support} alt={'support'} style={{ width: '64px', height: '72px' }} />
      </Center>
      <Title as={'h4'}>Служба поддержки клиентов</Title>
      <p>На ваш звонок всегда ответят в течение нескольких секунд, 7 дней в неделю!</p>
      <OrderButton styles={{ width: '250px' }}>Позвоните нам</OrderButton>
    </StyledCont>
  )
}

export default GetCallBanner
