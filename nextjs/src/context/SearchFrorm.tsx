import React, { createContext, useState, useContext } from 'react'
import SearchBar from '@molecules/SearchBar'

const SearchFormContext = createContext({})

const SearchFormProvider = ({ children }): JSX.Element => {
  const [searchForm, setSearchForm] = useState(false)

  return (
    <>
      <SearchFormContext.Provider value={{ searchForm, setSearchForm }}>
        <SearchBar />
        {children}
      </SearchFormContext.Provider>
    </>
  )
}

const useSearchFormContext = (): any => {
  const context = useContext(SearchFormContext)
  if (!context)
    throw new Error('useSearchForm must be used within a SearchFormProviders')
  return context
}

export { useSearchFormContext, SearchFormProvider }
