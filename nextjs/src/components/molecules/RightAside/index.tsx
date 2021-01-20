import React from 'react'
import ToggleThemeLamp from '@atoms/ToggleThemeLamp'
import ArrowUp from '@components/atoms/ArrowUp'
import HomeButton from '@components/atoms/HomeButton'
import SearchButton from '@components/atoms/SearchButton'
import { Container } from './styles'

const RightAside: React.FC = () => {
  return (
    <>
      <Container>
        <div>
          <HomeButton />
          <SearchButton />
        </div>
        <div>
          <ToggleThemeLamp />
          <ArrowUp />
        </div>
      </Container>
    </>
  )
}

export default RightAside
