import React from 'react'
import Link from 'next/link'
import CartSVG from '@svg/Cart'
import { Container } from './styles'

const ShoppingButton = (): React.ReactElement => {
  return (
    <>
      <Container>
        <Link href="https://www.lojatoniarmas.com.br/">
          <a
            href="https://www.lojatoniarmas.com.br/"
            rel="noreferrer"
            target="_blank"
            aria-label="Loja Toni Armas"
          >
            <CartSVG />
          </a>
        </Link>
      </Container>
    </>
  )
}

export default ShoppingButton
