import React, { useState } from 'react'
import { AnimationOnScroll } from 'react-animation-on-scroll'
import styled from 'styled-components'

import TextField from 'components/ui/TextField'
import FieldWrapper from 'components/ui/FieldWrapper'
import Button from 'components/ui/Button'
import Title from 'components/elements/Title'
import { mediaQueries } from 'constants/mediaQueries'
import { requestAction } from '../../../../containers/Home/actions'

const defaultButtonProps = {
  height: '68px',
  uppercase: true,
  width: '230px',
  fontSize: '16px'
}

const Box = styled.div`
  background: ${({ theme }) => theme.background.gradientButton};
  padding: 20px;
  border-radius: 20px;
`

const ButtonWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const RequestBox = styled.div`
  max-width: 670px;
  min-width: 460px;
  @media ${mediaQueries.laptopS} {
    min-width: 80%;
    max-width: 80%;
    & h1 {
      text-align: center;
    }
  }
  @media ${mediaQueries.mobileXL} {
    min-width: 100%;
    max-width: 100%;
  }
`

const RequestReport = props => {
  const [values, setValues] = useState({})

  const handleChange = (event) => {
    const name = event.target.name
    const value = event.target.value
    setValues(values => ({ ...values, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    requestAction(values)
  }
  return (
    <RequestBox>
      <AnimationOnScroll animateIn={'animate__fadeInUp'} delay={300} animateOnce>
        <FieldWrapper>
          <Title as={'h1'} withGradient style={{ textAlign: 'center' }}>УСЛУГИ ХИМЧИСТКИ И СТИРКИ</Title>
        </FieldWrapper>
      </AnimationOnScroll>
      <AnimationOnScroll animateIn={'animate__fadeInUp'} delay={500} animateOnce>
        <form onSubmit={handleSubmit}>
          <Box>
            <FieldWrapper>
              <Title as={'h4'} color={'white'}>Запросить расчет</Title>
            </FieldWrapper>
            <FieldWrapper>
              <TextField
                name={'name'}
                placeholder={'Введите имя'}
                onChange={handleChange}
                fullWidth
              />
            </FieldWrapper>
            <FieldWrapper>
              <TextField
                name={'phone'}
                placeholder={'Номер телефона'}
                onChange={handleChange}
                fullWidth
              />
            </FieldWrapper>
            <ButtonWrap>
              <Button
                {...defaultButtonProps}
                themeType={'secondary'}
              >
                Отправить
              </Button>
            </ButtonWrap>
          </Box>
        </form>
      </AnimationOnScroll>
    </RequestBox>
  )
}

export default RequestReport
