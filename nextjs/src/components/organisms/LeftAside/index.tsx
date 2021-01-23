import React from 'react'
import Logo from '@atoms/Logo'
import MainMenu from '@molecules/MainMenu'
import SocialLinks from '@molecules/SocialLinks'
import { Container } from './styles'

const LeftAside: React.FC = () => {
  return (
    <>
      <Container>
        <Logo />
        <MainMenu />
        <SocialLinks />
      </Container>
    </>
  )
}

export default LeftAside
