import styled from 'styled-components'
import React from 'react'

const Box = styled.div`
  position: relative;
`

const BoxContent = styled.div`
  position: relative;
  z-index: 1
`

const NextImage = styled.img``

function Image (props) {
  const { alt, src, children, imageProps, className = '', objectFit, style, objectPosition, ...restProps } = props
  return (
    <Box {...restProps} className={'.imageBox'}>
      {children && (
        <BoxContent>{children}</BoxContent>
      )}
      {src && (
        <NextImage
          alt={alt}
          src={src}
          className={['next-image', className].join(' ')}
          role={alt ? undefined : 'presentations'}
          style={{ objectFit, objectPosition, ...style }}
          {...imageProps}
        />
      )}
    </Box>
  )
}

Image.defaultProps = {
  objectFit: 'cover',
  objectPosition: 'center'
}

export default Image
