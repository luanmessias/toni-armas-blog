import React from 'react'
import SearchSVG from 'src/svg/Search'
import { useSearchFormContext } from '@context/SearchFrorm'
import { Container } from './styles'

const SearchButton: React.FC = () => {
  const { searchForm, setSearchForm } = useSearchFormContext()

  return (
    <>
      <Container onClick={() => setSearchForm(!searchForm)}>
        <SearchSVG />
      </Container>
    </>
  )
}

export default SearchButton
