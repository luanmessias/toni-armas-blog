import React from 'react'

type SvgPropTypes = {
  props: {
    width: number
    height: string
    viewBox: string
    fill: string
  }
}

const lampOffSVG = (props: SvgPropTypes | any): React.ReactElement => (
  <svg width={14} height={21} viewBox="0 0 14 21" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7 0C3.14 0 0 3.14 0 7C0 9.38 1.19 11.47 3 12.74V15C3 15.55 3.45 16 4 16H10C10.55 16 11 15.55 11 15V12.74C12.81 11.47 14 9.38 14 7C14 3.14 10.86 0 7 0ZM4 19C4 19.55 4.45 20 5 20H9C9.55 20 10 19.55 10 19V18H4V19ZM9 11.7L9.85 11.1C11.2 10.16 12 8.63 12 7C12 4.24 9.76 2 7 2C4.24 2 2 4.24 2 7C2 8.63 2.8 10.16 4.15 11.1L5 11.7V14H9V11.7Z"
      fill="#646464"
    />
  </svg>
)

export default lampOffSVG