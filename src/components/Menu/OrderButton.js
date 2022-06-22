import React from 'react'

import Button from 'components/ui/Button'
import { phones } from 'constants/constants'

const defaultButtonProps = {
  height: '68px',
  type: 'button',
  uppercase: true,
  fontSize: '16px'
}

const OrderButton = ({ children, ...props }) => {
  return (
    <a href={`tel:${phones[0].value}`}>
      <Button
        {...defaultButtonProps}
        {...props}
        themeType={'gradient'}
      >
        {children || 'Позвонить'}
      </Button>
    </a>
  )
}

OrderButton.propTypes = {

}

export default OrderButton
