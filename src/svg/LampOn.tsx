import React from 'react'

type SvgPropTypes = {
  props: {
    width: number
    height: string
    viewBox: string
    fill: string
  }
}

const lampOnSVG = (props: SvgPropTypes | any): React.ReactElement => (
  <svg width={14} height={21} viewBox="0 0 14 21" fill="none" {...props}>
    <path
      d="M4 20C4 20.55 4.45 21 5 21H9C9.55 21 10 20.55 10 20V19H4V20Z"
      fill="#646464"
    />
    <path
      d="M7 1C3.14 1 0 4.14 0 8C0 10.38 1.19 12.47 3 13.74V16C3 16.55 3.45 17 4 17H10C10.55 17 11 16.55 11 16V13.74C12.81 12.47 14 10.38 14 8C14 4.14 10.86 1 7 1Z"
      fill="#646464"
    />
    <path
      d="M6.60547 2.51562C9.55989 1.99468 11.9636 4.1094 12.8902 6.4846"
      stroke="#E7E7E7"
    />
  </svg>
)

export default lampOnSVG
