import React from 'react'
import { useSearchFormContext } from '@context/SearchFrorm'
import { Container } from './styles'

const SearchBar: React.FC = () => {
  const { searchForm } = useSearchFormContext()

  return (
    <>
      <Container data-active={searchForm}>
        <h1>asdas</h1>
        <form>
          <input type="text" />
          <button type="button">BUSCAR</button>
        </form>
      </Container>
    </>
  )
}

export default SearchBar
