import React, { createContext, useEffect, useState, useContext } from 'react'
import axios from 'axios'

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

  useEffect(async () => {
    const res = await fetch(process.env.notion_table_posts)
    const data = await res.json()

    setPostList(data)
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
