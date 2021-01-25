import React from 'react'

type SvgPropTypes = {
  props: {
    width: number
    height: string
    viewBox: string
    fill: string
  }
}

const CartSVG = ({ props }: SvgPropTypes): JSX.Element => (
  <svg width={22} height={20} viewBox="0 0 22 20" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15.5464 11C16.2964 11 16.9563 10.59 17.2964 9.96997L20.8763 3.47998C21.2463 2.82001 20.7664 2 20.0063 2H5.2063L4.26636 0H0.996338V2H2.99634L6.59631 9.59003L5.24634 12.03C4.51636 13.37 5.47632 15 6.99634 15H18.9963V13H6.99634L8.09631 11H15.5464ZM5.00635 18C5.00635 16.9 5.89636 16 6.99634 16C8.09631 16 8.99634 16.9 8.99634 18C8.99634 19.1 8.09631 20 6.99634 20C5.89636 20 5.00635 19.1 5.00635 18ZM15.0063 18C15.0063 16.9 15.8964 16 16.9963 16C18.0963 16 18.9963 16.9 18.9963 18C18.9963 19.1 18.0963 20 16.9963 20C15.8964 20 15.0063 19.1 15.0063 18ZM18.3064 4H6.15637L8.52637 9H15.5464L18.3064 4Z"
      fill="black"
      fillOpacity={0.54}
    />
  </svg>
)

export default CartSVG
