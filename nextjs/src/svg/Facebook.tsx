import React from 'react'

type SvgPropTypes = {
  props: {
    width: number
    height: string
    viewBox: string
    fill: string
  }
}

const FacebookSVG = (props: SvgPropTypes | any): JSX.Element => (
  <svg width={18} height={32} viewBox="0 0 18 32" fill="none" {...props}>
    <path
      d="M11.6025 31.9998V17.4031H16.502L17.2355 11.7145H11.6025V8.08252C11.6025 6.43557 12.0599 5.31309 14.4218 5.31309L17.4341 5.3117V0.223909C16.9129 0.154836 15.1249 0 13.0446 0C8.70154 0 5.72815 2.65091 5.72815 7.51942V11.7147H0.815918V17.4033H5.72799V32L11.6025 31.9998Z"
      fill="white"
    />
  </svg>
)

export default FacebookSVG
