import React, { createContext, useState, useContext } from 'react'
import SearchBar from '@molecules/SearchBar'

type ChildrenPropTtypes = {
  children: React.ReactNode
}

type ContextType = {
  searchForm: boolean
  setSearchForm: (searchForm: boolean) => void
}

const SearchFormContext = createContext<ContextType | null>(null)

const SearchFormProvider = ({
  children
}: ChildrenPropTtypes): React.ReactElement => {
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

const useSearchFormContext = (): ContextType => {
  const context = useContext(SearchFormContext)
  if (!context) {
    throw new Error('useSearchForm must be used within a SearchFormProviders')
  }
  return context
}

export { useSearchFormContext, SearchFormProvider }
