import React, { createContext, useEffect, useState, useContext } from 'react'
import { contentfulClient } from '@utils/contentfulConect'

type ChildrenPropTtypes = {
  children: React.ReactNode
}

type ContextType = {
  pageList: string[]
  preloader: boolean
}
const GetPageListContext = createContext<ContextType | null>(null)

const GetPageListProvider = ({
  children
}: ChildrenPropTtypes): React.ReactElement => {
  const [pageList, setPageList] = useState([])
  const [preloader, setPreloader] = useState(true)

  useEffect(() => {
    contentfulClient
      .getEntries({
        content_type: 'paginas'
      })
      .then(posts => setPageList(posts.items))
      .then(() => setPreloader(!preloader))
  }, [])

  return (
    <GetPageListContext.Provider value={{ pageList, preloader }}>
      {children}
    </GetPageListContext.Provider>
  )
}

const useGetPageListContext = (): ContextType => {
  const context = useContext(GetPageListContext)
  if (!context) {
    throw new Error(
      'useGetPageListContext must be used within a GetPageListProvider'
    )
  }
  return context
}

export { useGetPageListContext, GetPageListProvider }
