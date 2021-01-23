import React from 'react'
import { useMobileMenuContext } from '@context/MobileMenu'
import { Container, Circle, TopBar, MidBar, BotBar } from './styles'

const MobMenuBars: React.FC = () => {
  const { mobileMenu, setMobileMenu } = useMobileMenuContext()

  return (
    <Circle onClick={() => setMobileMenu(!mobileMenu)}>
      <Container data-active={mobileMenu}>
        <TopBar />
        <MidBar />
        <BotBar />
      </Container>
    </Circle>
  )
}

export default MobMenuBars
