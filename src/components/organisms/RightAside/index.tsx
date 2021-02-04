import React from 'react'
import ToggleThemeLamp from '@atoms/ToggleThemeLamp'
import ArrowUp from '@atoms/ArrowUp'
import HomeButton from '@atoms/HomeButton'
import SearchButton from '@atoms/SearchButton'
import { Container } from './styles'

const RightAside = (): React.ReactElement => {
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
