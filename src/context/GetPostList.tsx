import React, { createContext, useEffect, useState, useContext } from 'react'
import { contentfulClient } from '@utils/contentfulConect'

type ChildrenPropTtypes = {
  children: React.ReactNode
}

type ContextType = {
  postList: string[]
  preloader: boolean
}
const GetPostListContext = createContext<ContextType | null>(null)

const GetPostListProvider = ({
  children
}: ChildrenPropTtypes): React.ReactElement => {
  const [postList, setPostList] = useState([])
  const [preloader, setPreloader] = useState(true)

  useEffect(() => {
    contentfulClient
      .getEntries({
        content_type: 'blogPost'
      })
      .then(posts => setPostList(posts.items))
      .then(() => setPreloader(!preloader))
  }, [])

  return (
    <GetPostListContext.Provider value={{ postList, preloader }}>
      {children}
    </GetPostListContext.Provider>
  )
}

const useGetPostListContext = (): ContextType => {
  const context = useContext(GetPostListContext)
  if (!context) {
    throw new Error(
      'useGetPostListContext must be used within a GetPostListProvider'
    )
  }
  return context
}

export { useGetPostListContext, GetPostListProvider }
