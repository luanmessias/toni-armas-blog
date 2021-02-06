import React from 'react'
import { useRouter } from 'next/router'
import ArrowUpSVG from 'src/svg/ArrowUp'
import { Container } from './styles'

const ArrowReturn = () => {
  const router = useRouter()

  return (
    <Container onClick={() => router.back()}>
      <ArrowUpSVG />
    </Container>
  )
}

export default ArrowReturn
