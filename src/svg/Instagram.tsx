import React from 'react'

type SvgPropTypes = {
  props: {
    width: number
    height: string
    viewBox: string
    fill: string
  }
}

const InstagramSVG = (props: SvgPropTypes | any): React.ReactElement => (
  <svg width={30} height={30} viewBox="0 0 30 30" fill="none" {...props}>
    <path
      d="M10.0013 15C10.0013 12.2387 12.2392 9.9996 15.0005 9.9996C17.7618 9.9996 20.0009 12.2387 20.0009 15C20.0009 17.7613 17.7618 20.0004 15.0005 20.0004C12.2392 20.0004 10.0013 17.7613 10.0013 15ZM7.29817 15C7.29817 19.254 10.7465 22.7023 15.0005 22.7023C19.2545 22.7023 22.7028 19.254 22.7028 15C22.7028 10.746 19.2545 7.29768 15.0005 7.29768C10.7465 7.29768 7.29817 10.746 7.29817 15ZM21.2077 6.99228C21.2076 7.34829 21.313 7.69634 21.5107 7.99243C21.7083 8.28852 21.9894 8.51934 22.3182 8.65571C22.6471 8.79208 23.009 8.82787 23.3582 8.75855C23.7074 8.68924 24.0282 8.51793 24.28 8.2663C24.5318 8.01467 24.7034 7.69401 24.773 7.34487C24.8426 6.99573 24.8071 6.6338 24.671 6.30483C24.5349 5.97587 24.3043 5.69466 24.0084 5.49675C23.7124 5.29885 23.3645 5.19314 23.0084 5.193H23.0077C22.5305 5.19322 22.0729 5.38284 21.7354 5.7202C21.3979 6.05756 21.2081 6.51508 21.2077 6.99228ZM8.94049 27.2096C7.47805 27.143 6.68317 26.8994 6.15493 26.6936C5.45461 26.421 4.95493 26.0963 4.42957 25.5716C3.90421 25.047 3.57901 24.5478 3.30757 23.8475C3.10165 23.3195 2.85805 22.5244 2.79157 21.0619C2.71885 19.4808 2.70433 19.0058 2.70433 15.0001C2.70433 10.9944 2.72005 10.5208 2.79157 8.93832C2.85817 7.47588 3.10357 6.68232 3.30757 6.15276C3.58021 5.45244 3.90493 4.95276 4.42957 4.4274C4.95421 3.90204 5.45341 3.57684 6.15493 3.3054C6.68293 3.09948 7.47805 2.85588 8.94049 2.7894C10.5216 2.71668 10.9966 2.70216 15.0005 2.70216C19.0044 2.70216 19.4798 2.71788 21.0623 2.7894C22.5247 2.856 23.3183 3.1014 23.8478 3.3054C24.5482 3.57684 25.0478 3.90276 25.5732 4.4274C26.0986 4.95204 26.4226 5.45244 26.6952 6.15276C26.9011 6.68076 27.1447 7.47588 27.2112 8.93832C27.2839 10.5208 27.2984 10.9944 27.2984 15.0001C27.2984 19.0058 27.2839 19.4795 27.2112 21.0619C27.1446 22.5244 26.8998 23.3192 26.6952 23.8475C26.4226 24.5478 26.0978 25.0475 25.5732 25.5716C25.0486 26.0958 24.5482 26.421 23.8478 26.6936C23.3198 26.8996 22.5247 27.1432 21.0623 27.2096C19.4812 27.2824 19.0062 27.2969 15.0005 27.2969C10.9948 27.2969 10.5211 27.2824 8.94049 27.2096ZM8.81629 0.09084C7.21945 0.16356 6.12829 0.41676 5.17537 0.78756C4.18849 1.17048 3.35305 1.6842 2.51821 2.51772C1.68337 3.35124 1.17097 4.188 0.788048 5.17488C0.417248 6.1284 0.164048 7.21896 0.0913283 8.8158C0.0174083 10.4152 0.000488281 10.9265 0.000488281 15C0.000488281 19.0735 0.0174083 19.5848 0.0913283 21.1842C0.164048 22.7812 0.417248 23.8716 0.788048 24.8251C1.17097 25.8114 1.68349 26.6491 2.51821 27.4823C3.35293 28.3154 4.18849 28.8284 5.17537 29.2124C6.13009 29.5832 7.21945 29.8364 8.81629 29.9092C10.4165 29.9819 10.927 30 15.0005 30C19.074 30 19.5853 29.9831 21.1847 29.9092C22.7816 29.8364 23.8721 29.5832 24.8256 29.2124C25.8119 28.8284 26.6479 28.3158 27.4828 27.4823C28.3176 26.6488 28.8289 25.8114 29.2129 24.8251C29.5837 23.8716 29.8381 22.781 29.9096 21.1842C29.9824 19.5836 29.9993 19.0735 29.9993 15C29.9993 10.9265 29.9824 10.4152 29.9096 8.8158C29.8369 7.21884 29.5837 6.1278 29.2129 5.17488C28.8289 4.1886 28.3163 3.35256 27.4828 2.51772C26.6492 1.68288 25.8119 1.17048 24.8268 0.78756C23.8721 0.41676 22.7815 0.16236 21.1859 0.09084C19.5865 0.01812 19.0752 0 15.0017 0C10.9282 0 10.4165 0.01692 8.81629 0.09084Z"
      fill="white"
    />
  </svg>
)

export default InstagramSVG