import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import HomeIconSVG from '@svg/Home'
import PersonSVG from '@svg/Person'
import TargetSVG from '@svg/Target'
import CartSVG from '@svg/Cart'
import { useMobileMenuContext } from '@context/MobileMenu'
import { Container, MenuItem } from './styles'

const MainMenu = (): JSX.Element => {
  const [isHomePage, setIsHomePage] = useState(false)
  const [isWhoWeAre, setIsWhoWeAre] = useState(false)
  const { setMobileMenu } = useMobileMenuContext()

  const router = useRouter()

  useEffect(() => {
    setMobileMenu(false)
    if (router.pathname !== '/') {
      setIsHomePage(false)
    } else {
      setIsHomePage(true)
    }

    if (router.pathname !== '/quem-somos') {
      setIsWhoWeAre(false)
    } else {
      setIsWhoWeAre(true)
    }
  }, [router, setMobileMenu])

  return (
    <>
      <Container>
        <MenuItem data-active={isHomePage}>
          <HomeIconSVG />
          <Link href="/">
            <a aria-label="Pagina principal" rel="noreferrer" href="/">
              Home
            </a>
          </Link>
        </MenuItem>
        <MenuItem data-active={isWhoWeAre}>
          <PersonSVG />
          <Link href="quem-somos">
            <a aria-label="Quem somos" rel="noreferrer" href="quem-somos">
              Quem Somos
            </a>
          </Link>
        </MenuItem>
        <MenuItem>
          <TargetSVG />
          <Link href="/">
            <a aria-label="Curso de Tiro" rel="noreferrer" href="/">
              Curso de Tiro
            </a>
          </Link>
        </MenuItem>
        <MenuItem>
          <CartSVG />
          <Link href="https://www.lojatoniarmas.com.br/">
            <a
              href="https://www.lojatoniarmas.com.br/"
              rel="noreferrer"
              target="_blank"
              aria-label="Loja Toni Armas"
            >
              Nossa loja
            </a>
          </Link>
        </MenuItem>
      </Container>
    </>
  )
}

export default MainMenu
