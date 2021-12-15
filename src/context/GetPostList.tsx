import React, { createContext, useEffect, useState, useContext } from 'react'
import { createClient } from 'contentful'

type ChildrenPropTtypes = {
  children: React.ReactNode
}

type ContextType = {
  postList: string[]
}
const GetPostListContext = createContext<ContextType | null>(null)

const GetPostListProvider = ({
  children
}: ChildrenPropTtypes): React.ReactElement => {
  const [postList, setPostList] = useState([])

  const client = createClient({
    space: process.env.contentful_space,
    accessToken: process.env.contentful_acces_token
  })

  useEffect(() => {
    client
      .getEntries({
        content_type: 'blogPost'
      })
      .then(posts => setPostList(posts.items))
  }, [])

  return (
    <GetPostListContext.Provider value={{ postList }}>
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
