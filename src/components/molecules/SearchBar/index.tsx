import React from 'react'
import { useSearchFormContext } from '@context/SearchFrorm'
import { Container, SearchTitle, SearchInput } from './styles'

const SearchBar = (): React.ReactElement => {
  const { searchForm } = useSearchFormContext()

  return (
    <>
      <Container data-active={searchForm}>
        <SearchTitle>Buscar postagem</SearchTitle>
        <form>
          <SearchInput type="text" />
        </form>
      </Container>
    </>
  )
}

export default SearchBar
