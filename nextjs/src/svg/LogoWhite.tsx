import React from 'react'

type SvgPropTypes = {
  props: {
    width: number
    height: string
    viewBox: string
    fill: string
  }
}

const LogoWhite = ({ props }: SvgPropTypes): JSX.Element => (
  <svg width={136} height={64} viewBox="0 0 136 64" fill="none" {...props}>
    <path
      d="M19.1074 9.68246H116.893L116.855 43.6301H19.0696L19.1074 9.68246Z"
      fill="white"
    />
    <path
      d="M67.4128 63.9987L19.0696 43.6301H116.855L67.4128 63.9987Z"
      fill="white"
    />
    <path d="M136 9.68246H109.025V19.8668H129.256L136 9.68246Z" fill="white" />
    <path
      d="M128.132 20.9983H104.529V32.3142H122.512L128.132 20.9983Z"
      fill="white"
    />
    <path
      d="M121.388 33.4458H98.9091V43.6301L116.855 43.6301L121.388 33.4458Z"
      fill="white"
    />
    <path d="M0 9.68246H26.9752V19.8668H6.7438L0 9.68246Z" fill="white" />
    <path
      d="M7.86777 20.9983H31.4711V32.3142H13.4876L7.86777 20.9983Z"
      fill="white"
    />
    <path
      d="M14.6116 33.4458H37.0909V43.6301L19.0696 43.6301L14.6116 33.4458Z"
      fill="white"
    />
    <path
      d="M45.2942 49.0032H42.8142L46.1845 40.044H48.7281L52.0984 49.0032H49.6184L49.0461 47.4034H45.8665L45.2942 49.0032ZM46.4388 45.7395H48.4737L47.4563 42.7318L46.4388 45.7395Z"
      fill="black"
    />
    <path
      d="M52.7338 40.044H58.0755C58.9658 40.044 59.6101 40.2488 60.0086 40.6583C60.4156 41.0594 60.6191 41.7078 60.6191 42.6038V43.7557C60.6191 44.4639 60.5004 45.0142 60.263 45.4067C60.0341 45.7992 59.6653 46.0595 59.1565 46.1875L60.7463 49.0032H58.2663L56.8037 46.3155H55.0231V49.0032H52.7338V40.044ZM58.3298 42.6038C58.3298 42.0918 58.0755 41.8358 57.5668 41.8358H55.0231V44.5236H57.5668C58.0755 44.5236 58.3298 44.2676 58.3298 43.7557V42.6038Z"
      fill="black"
    />
    <path
      d="M69.5184 44.0117L67.7378 47.2114H65.9573L64.1767 44.0117V49.0032H61.8875V40.044H64.3039L66.8475 44.7796L69.3912 40.044H71.8076V49.0032H69.5184V44.0117Z"
      fill="black"
    />
    <path
      d="M74.9286 49.0032H72.4485L75.8188 40.044H78.3625L81.7328 49.0032H79.2528L78.6804 47.4034H75.5009L74.9286 49.0032ZM76.0732 45.7395H78.1081L77.0907 42.7318L76.0732 45.7395Z"
      fill="black"
    />
    <path
      d="M82.1011 47.1474C84.4243 47.2754 85.9971 47.3394 86.8196 47.3394C87.0146 47.3394 87.1672 47.2839 87.2774 47.173C87.3961 47.0535 87.4555 46.8957 87.4555 46.6994V45.5475H84.5303C83.64 45.5475 82.9914 45.347 82.5844 44.946C82.1859 44.5364 81.9867 43.8837 81.9867 42.9877V42.6038C81.9867 41.7078 82.1859 41.0594 82.5844 40.6583C82.9914 40.2488 83.64 40.044 84.5303 40.044H88.9944V41.8358H85.039C84.5303 41.8358 84.2759 42.0918 84.2759 42.6038V42.8598C84.2759 43.3717 84.5303 43.6277 85.039 43.6277H87.3283C88.1592 43.6277 88.7697 43.8239 89.1597 44.2164C89.5497 44.6089 89.7448 45.2233 89.7448 46.0595V46.6994C89.7448 47.5356 89.5497 48.15 89.1597 48.5425C88.7697 48.935 88.1592 49.1312 87.3283 49.1312C86.8959 49.1312 86.438 49.1227 85.9547 49.1056L84.7847 49.0544C83.9198 49.0118 83.0253 48.952 82.1011 48.8752V47.1474Z"
      fill="black"
    />
    <path
      d="M39.0756 37.6811H33.2644V19.487H26.4846V14.9385H45.8554V19.487H39.0756V37.6811Z"
      fill="black"
    />
    <path
      d="M62.6472 21.1115C62.6472 19.8119 62.0015 19.1621 60.7101 19.1621H55.2217C53.9303 19.1621 53.2846 19.8119 53.2846 21.1115V31.5081C53.2846 32.8077 53.9303 33.4575 55.2217 33.4575H60.7101C62.0015 33.4575 62.6472 32.8077 62.6472 31.5081V21.1115ZM68.4584 31.5081C68.4584 33.7824 67.9419 35.4393 66.9088 36.479C65.8972 37.497 64.2614 38.006 62.0015 38.006H53.9303C51.6704 38.006 50.0239 37.497 48.9908 36.479C47.9792 35.4393 47.4734 33.7824 47.4734 31.5081V21.1115C47.4734 18.8372 47.9792 17.1911 48.9908 16.1731C50.0239 15.1334 51.6704 14.6136 53.9303 14.6136H62.0015C64.2614 14.6136 65.8972 15.1334 66.9088 16.1731C67.9419 17.1911 68.4584 18.8372 68.4584 21.1115V31.5081Z"
      fill="black"
    />
    <path
      d="M91.3956 37.6811H85.2616L77.5132 24.0355V37.6811H71.702V14.9385H77.8361L85.5844 28.5841V14.9385H91.3956V37.6811Z"
      fill="black"
    />
    <path
      d="M105.939 37.6811H94.3164V33.1326H97.222V19.487H94.3164V14.9385H105.939V19.487H103.033V33.1326H105.939V37.6811Z"
      fill="black"
    />
    <path d="M46.4837 0H82.4454V9.68245H34.5283L46.4837 0Z" fill="white" />
    <path d="M89.516 0H53.5542V9.68245H101.471L89.516 0Z" fill="white" />
  </svg>
)

export default LogoWhite
