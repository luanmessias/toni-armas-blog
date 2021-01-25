import React from 'react'
import { useQuery } from '@apollo/client'
import { Container } from './styles'
import QUERY_COUNTRIES from './query.graphql'

const PostList = (): JSX.Element => {
  const { data, loading, error } = useQuery(QUERY_COUNTRIES)

  if (loading) {
    return <p>loading...</p>
  }

  if (error) {
    return <p>:( an error happened</p>
  }

  return (
    <>
      <Container>
        {data.blogPosts.map(post => (
          <div key={post.id}>{post.Titulo}</div>
        ))}
      </Container>
    </>
  )
}

export default PostList
