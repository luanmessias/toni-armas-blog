import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import HomeIconSVG from '@svg/Home'
import PersonSVG from '@svg/Person'
import TargetSVG from '@svg/Target'
import CartSVG from '@svg/Cart'
import { useMobileMenuContext } from '@context/MobileMenu'
import { Container, MenuItem } from './styles'

const MainMenu: React.FC = () => {
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
  }, [router])

  return (
    <>
      <Container>
        <MenuItem data-active={isHomePage}>
          <HomeIconSVG />
          <Link href="/">
            <a>Home</a>
          </Link>
        </MenuItem>
        <MenuItem data-active={isWhoWeAre}>
          <PersonSVG />
          <Link href="quem-somos">
            <a>Quem Somos</a>
          </Link>
        </MenuItem>
        <MenuItem>
          <TargetSVG />
          <Link href="/">
            <a>Curso de Tiro</a>
          </Link>
        </MenuItem>
        <MenuItem>
          <CartSVG />
          <Link href="https://www.lojatoniarmas.com.br/">
            <a target="_blank">Nossa loja</a>
          </Link>
        </MenuItem>
      </Container>
    </>
  )
}

export default MainMenu
