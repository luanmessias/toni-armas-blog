import React from 'react'
import ArrowUpSVG from 'src/svg/ArrowUp'
import { Container } from './styles'

const ArrowUp = (): JSX.Element => {
  const scrollToTop = (): void => {
    const c = document.documentElement.scrollTop || document.body.scrollTop

    if (c > 0) {
      window.requestAnimationFrame(scrollToTop)
      window.scrollTo(0, c - c / 10)
    }
  }

  return (
    <>
      <Container onClick={scrollToTop}>
        <ArrowUpSVG />
      </Container>
    </>
  )
}

export default ArrowUp
