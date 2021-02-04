import React from 'react'

type SvgPropTypes = {
  props: {
    width: number
    height: string
    viewBox: string
    fill: string
  }
}

const PersonSVG = (props: SvgPropTypes | any): React.ReactElement => (
  <svg width={20} height={14} viewBox="0 0 20 14" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7 7C8.93005 7 10.5 5.42999 10.5 3.5C10.5 1.57001 8.93005 0 7 0C5.06995 0 3.5 1.57001 3.5 3.5C3.5 5.42999 5.06995 7 7 7ZM7 2C7.82996 2 8.5 2.67001 8.5 3.5C8.5 4.32999 7.82996 5 7 5C6.17004 5 5.5 4.32999 5.5 3.5C5.5 2.67001 6.17004 2 7 2ZM2.77002 12H7.05005C7.02002 12.16 7 12.33 7 12.5V14H0V12.5C0 10.17 4.66003 9 7 9C7.56006 9 8.25 9.07001 8.97998 9.20001C8.27002 9.67999 7.68005 10.28 7.33997 11.01C7.28491 11.01 7.22754 11.0075 7.16992 11.005C7.11255 11.0025 7.05493 11 7 11C5.46997 11 3.76001 11.5 2.77002 12ZM14.5 9.5C12.66 9.5 9 10.51 9 12.5V14H20V12.5C20 10.51 16.34 9.5 14.5 9.5ZM17 5.5C17 6.44 16.47 7.25 15.71 7.67999C15.35 7.88 14.9399 8 14.5 8C14.0601 8 13.65 7.88 13.29 7.67999C12.53 7.25 12 6.44 12 5.5C12 4.12 13.12 3 14.5 3C15.88 3 17 4.12 17 5.5Z"
      fill="black"
      fillOpacity={0.54}
    />
  </svg>
)

export default PersonSVG
