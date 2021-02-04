import React from 'react'
import Logo from '@atoms/Logo'
import MainMenu from '@molecules/MainMenu'
import SocialLinks from '@molecules/SocialLinks'
import { useMobileMenuContext } from '@context/MobileMenu'
import { Container } from './styles'

const LeftAside = (): React.ReactElement => {
  const { mobileMenu } = useMobileMenuContext()

  return (
    <>
      <Container data-active={mobileMenu}>
        <Logo />
        <MainMenu />
        <SocialLinks />
      </Container>
    </>
  )
}

export default LeftAside
