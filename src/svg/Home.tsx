import React from 'react'

type SvgPropTypes = {
  props: {
    width: number
    height: string
    viewBox: string
    fill: string
  }
}

const HomeIconSVG = (props: SvgPropTypes | any): React.ReactElement => (
  <svg width={20} height={18} viewBox="0 0 20 18" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3 9.5H0L10 0.5L20 9.5H17V17.5H11V11.5H9V17.5H3V9.5ZM15 7.69L10 3.19L5 7.69V15.5H7V9.5H13V15.5H15V7.69Z"
      fill="#646464"
    />
  </svg>
)

export default HomeIconSVG
