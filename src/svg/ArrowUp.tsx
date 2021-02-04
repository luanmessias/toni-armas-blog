import React from 'react'

type SvgPropTypes = {
  props: {
    width: number
    height: string
    viewBox: string
    fill: string
  }
}

const ArrowUpSVG = (props: SvgPropTypes | any): React.ReactElement => (
  <svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <path
      d="M9 16L9 3.83L14.59 9.42L16 8L8 -3.49691e-07L-3.49691e-07 8L1.41 9.41L7 3.83L7 16L9 16Z"
      fill="#646464"
    />
  </svg>
)

export default ArrowUpSVG
