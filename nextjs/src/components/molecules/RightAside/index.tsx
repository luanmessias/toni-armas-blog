import React from 'react'
import ToggleThemeLamp from '@atoms/ToggleThemeLamp'
import { Container } from './styles'

const RightAside: React.FC = () => {
  return (
    <>
      <Container>
        <div />
        <div>
          <ToggleThemeLamp />
        </div>
      </Container>
    </>
  )
}

export default RightAside
