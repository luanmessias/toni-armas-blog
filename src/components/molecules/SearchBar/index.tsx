import React, { useState, useEffect } from 'react'
import { useSearchFormContext } from '@context/SearchFrorm'
import { useGetPostListContext } from '@context/GetPostList'
import {
  Container,
  SearchTitle,
  SearchInput,
  SearchResultContainer
} from './styles'
import SearchResultCard from '@molecules/SearchResultCard'

const SearchBar = (): React.ReactElement => {
  const [searchTerm, setSearchTerm] = useState('')
  const [showResult, setShowResult] = useState(false)
  const [searchResults, setSearchResults] = useState([])
  const { searchForm } = useSearchFormContext()
  const { postList } = useGetPostListContext()

  const handleChange = event => {
    const inputValue = event.target.value.toLowerCase()
    setSearchTerm(inputValue)
    setSearchResults([])
  }

  useEffect(() => {
    const results = postList.filter(({ titulo }: any) =>
      titulo.toLowerCase().includes(searchTerm)
    )

    if (searchTerm === '') {
      setSearchResults([])
      setShowResult(false)
    } else {
      setSearchResults(results)
      setShowResult(true)
    }
  }, [searchTerm])

  const searchResultRender = searchResults.map(
    ({ id, data, titulo, descricao, foto, video }, index) => {
      return (
        <SearchResultCard
          key={index}
          postId={id}
          youtubeUrl={video}
          photoUrl={foto}
          postDate={data}
          postTitle={titulo}
          postSmallDesc={descricao}
        />
      )
    }
  )

  return (
    <>
      <Container data-active={searchForm}>
        <SearchTitle>Buscar postagem</SearchTitle>
        <SearchInput
          type="text"
          placeholder="Digite sua busca"
          onChange={handleChange}
        />
        <SearchResultContainer data-active={showResult}>
          {searchResultRender}
        </SearchResultContainer>
      </Container>
    </>
  )
}

export default SearchBar
