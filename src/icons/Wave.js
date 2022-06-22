import SvgIcon from './SvgIcon'
import React from 'react'

const Wave = ({ color, ...props }) => {
  return (
    <SvgIcon fill={color} viewBox={'0 0 500 150'} preserveAspectRatio={'none'} xmlns={'http://www.w3.org/2000/svg'} {...props}>
      <path
        d={'M0.00,92.27 C216.83,192.92 304.30,8.39 500.00,109.03 L500.00,0.00 L0.00,0.00 Z'}
        style={{ stroke: 'none', fill: '#fff' }}
      />
    </SvgIcon>
  )
}
export default Wave
