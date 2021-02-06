import React from 'react'

import { SvgPropTypes } from '@proptypes/SvgPropTypes'

const MenuBarsSVG = (props: SvgPropTypes | null): React.ReactElement => (
  <svg width={18} height={12} viewBox="0 0 18 12" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0 2V0H18V2H0ZM0 7H18V5H0V7ZM0 12H18V10H0V12Z"
      fill="black"
      fillOpacity={1}
    />
  </svg>
)

export default MenuBarsSVG
