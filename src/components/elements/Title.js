import React from 'react'
import styled from 'styled-components'

const styles = ({ theme, size }) => {
  switch (size) {
  case 'h1': return { fontSize: theme.fontSize.large, fontWeight: 900, letterSpacing: '-2.3px' }
  case 'h2': return { fontSize: theme.fontSize.biggest, fontWeight: 600 }
  case 'h3': return { fontSize: theme.fontSize.medium, fontWeight: 600 }
  case 'h4': return { fontSize: theme.fontSize.capital, fontWeight: 600 }
  case 'h5': return { fontSize: theme.fontSize.capitalMedium }
  default: return { fontSize: theme.fontSize.capital }
  }
}
const TitleStyled = styled.h1`
  color: ${({ theme, color }) => color === 'dark'
    ? theme.color.primary
    : color === 'white'
      ? theme.palette.white
      : theme.palette.secondary};
  line-height: 1.22;
  ${(props) => styles(props)}
`

const gradient = (withGradient) => {
  return withGradient
    ? {
      backgroundImage: 'linear-gradient(315deg, #b1bfd8 0%, #6782b4 74%)',
      '-webkit-background-clip': 'text',
      '-webkit-text-fill-color': 'transparent'
    }
    : {}
}

const Title = ({ as, color, children, style, withGradient, ...props }) => {
  return (
    <TitleStyled
      color={color}
      size={as}
      as={as}
      style={{ ...style, ...gradient(withGradient) }}
      {...props}
    >
      {children}
    </TitleStyled>
  )
}

Title.defaultProps = {
}

export default Title
