import React from 'react'
import SearchSVG from 'src/svg/Search'
import { useSearchFormContext } from '@context/SearchFrorm'
import { Container } from './styles'

const SearchButton = (): React.ReactElement => {
  const { searchForm, setSearchForm } = useSearchFormContext()

  return (
    <>
      <Container
        data-active={searchForm}
        onClick={() => setSearchForm(!searchForm)}
      >
        <SearchSVG />
      </Container>
    </>
  )
}

export default SearchButton
