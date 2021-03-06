import Logo from '@atoms/Logo'
import MobMenuBars from '@atoms/MobMenuBars'
import React from 'react'
import { Container } from './styles'

const HeaderMobile = (): React.ReactElement => {
  return (
    <Container>
      <Logo />
      <MobMenuBars />
    </Container>
  )
}

export default HeaderMobile
