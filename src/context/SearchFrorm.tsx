import React, { createContext, useEffect, useState, useContext } from 'react'
import Router from 'next/router'
import SearchBar from '@molecules/SearchBar'

type ChildrenPropTtypes = {
  children: React.ReactNode
}

type ContextType = {
  searchForm: boolean
  setSearchForm: (darkMode: boolean) => void
}

const SearchFormContext = createContext<ContextType | null>(null)

const SearchFormProvider = ({
  children
}: ChildrenPropTtypes): React.ReactElement => {
  const [searchForm, setSearchForm] = useState(false)

  useEffect(() => {
    Router.events.on('routeChangeStart', setSearchForm(false))
  }, [])

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
