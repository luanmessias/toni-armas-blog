import React, { useState, useEffect } from 'react'
import { useSearchFormContext } from '@context/SearchFrorm'
import { useGetPostListContext } from '@context/GetPostList'
import SearchResultCard from '@molecules/SearchResultCard'
import { useRouter } from 'next/router'
import CloseSearch from '@atoms/CloseSearch'

import {
  Container,
  Content,
  SearchTitle,
  SearchInput,
  SearchResultContainer,
  CloseSearchButton
} from './styles'

const SearchBar = (): React.ReactElement => {
  const [searchTerm, setSearchTerm] = useState('')
  const [showResult, setShowResult] = useState(false)
  const [searchResults, setSearchResults] = useState([])
  const { searchForm, setSearchForm } = useSearchFormContext()
  const { postList } = useGetPostListContext()
  const router = useRouter()

  useEffect(() => {
    if (searchForm) {
      setSearchForm(!searchForm)
      setSearchResults([])
      setSearchTerm('')
    }
  }, [router.asPath])

  const handleChange = event => {
    const inputValue = event.target.value.toLowerCase()
    setSearchTerm(inputValue)
    setSearchResults([])
  }

  useEffect(() => {
    const results = postList.filter((post: any) => {
      const { titulo } = post.fields
      return titulo.toLowerCase().includes(searchTerm)
    })

    if (searchTerm === '') {
      setSearchResults([])
      setShowResult(false)
    } else {
      setSearchResults(results)
      setShowResult(true)
    }
  }, [searchTerm])

  const searchResultRender = searchResults.map((post: any, index) => {
    return <SearchResultCard key={index} post={post} />
  })

  return (
    <Container data-active={searchForm}>
      <Content>
        <CloseSearchButton onClick={() => setSearchTerm('')}>
          <CloseSearch />
        </CloseSearchButton>
        <SearchTitle>Buscar postagem</SearchTitle>
        <SearchInput
          type="text"
          placeholder="Digite sua busca"
          onChange={handleChange}
          value={searchTerm}
        />
        <SearchResultContainer data-active={showResult}>
          {searchResultRender}
        </SearchResultContainer>
      </Content>
    </Container>
  )
}

export default SearchBar
