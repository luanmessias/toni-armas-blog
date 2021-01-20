import React from 'react'
import SearchSVG from 'src/svg/Search'
import { Container } from './styles'

const SearchButton: React.FC = () => {
  return (
    <>
      <Container>
        <SearchSVG />
      </Container>
    </>
  )
}

export default SearchButton
