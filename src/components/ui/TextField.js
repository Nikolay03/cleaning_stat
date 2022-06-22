import React from 'react'
import styled from 'styled-components'

// Component
const Wrap = styled('div')`
  display: flex;
  flex-flow: column nowrap;
`

const InputWrap = styled('div')`
  position: relative;
  width: ${({ fullWidth }) => fullWidth && '100%'};
`
const Sub = styled('span')`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-weight: 500;
  svg {
    max-width: 15px;
    max-height: 15px;
  }
`
const Prefix = styled(Sub)`
  left: 0;
`
const Suffix = styled(Sub)`
  right: 5px;
`

const StyledTextField = styled('input')`
  padding: 16px ${({ suffix }) => (suffix ? '45px' : '24px')} 16px ${({ prefix }) => (prefix ? '35px' : '24px')};
  height: ${({ size }) => (size === 'small' ? '36px' : '50px')};
  border: 1px solid transparent;
  font-weight: 500;
  background: #fff;
  width: ${({ fullWidth }) => fullWidth && '100%'};
  border-radius: ${({ theme }) => theme.borderRadius.primary};
  font-size: 16px;
  color: ${({ theme }) => theme.color.primary};
  &:focus {
    background: #fff;
    border-color: ${({ theme }) => theme.background.button};
  }
  &:disabled {
    ${({ theme }) => theme.color.disabled};
  }
  svg {
    max-width: 20px;
    max-height: 20px;
  }
  &::placeholder {
    color: ${({ theme }) => theme.color.secondary};
  }
  svg {
    max-width: 20px;
    max-height: 20px;
    color: ${({ theme }) => theme.color.primary};
  }
  ${({ styles }) => styles};
`

const TextField = (props) => {
  const {
    required = false,
    type,
    placeholder,
    labelRight,
    fullWidth,
    onChange,
    defaultValue,
    multiline,
    prefix,
    description,
    suffix,
    size,
    disabled,
    styles,
    ...defaultProps
  } = props

  // Input
  const typeInput = (
    <StyledTextField
      prefix={prefix}
      suffix={suffix}
      step={'any'}
      onChange={onChange}
      size={size}
      placeholder={placeholder || 'Введите текст'}
      defaultValue={defaultValue}
      disabled={disabled}
      styles={styles}
      required={required}
      fullWidth={fullWidth}
      autoComplete={'off'}
      {...defaultProps}
    />
  )

  // Render
  return (
    <Wrap>
      <InputWrap fullWidth={fullWidth}>
        {prefix && <Prefix>{prefix}</Prefix>}
        {typeInput}
        {suffix && <Suffix>{suffix}</Suffix>}
      </InputWrap>
    </Wrap>
  )
}

export default TextField
