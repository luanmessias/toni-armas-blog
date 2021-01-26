import React from 'react'
import { gql, useQuery } from '@apollo/client'
import LoadingSpinner from '@atoms/LoadingSpinner'
import PosCard from '@molecules/PostCard'
import { Container } from './styles'

const GET_ALL_POSTS = gql`
  query {
    blogPosts {
      id
      created_at
      Titulo
      foto {
        formats
      }
      descricao
      resumo
      youtube_video_url
    }
  }
`

const PostList = (): JSX.Element => {
  const { data, loading, error } = useQuery(GET_ALL_POSTS)

  if (loading) {
    return <LoadingSpinner />
  }

  if (error) {
    return <p>:( an error happened</p>
  }

  return (
    <>
      <Container>
        {data.blogPosts.map(post => (
          <PosCard
            key={post.id}
            photo_url={`http://localhost:1337${post.foto.formats.large.url}`}
            post_date={post.created_at}
            post_title={post.Titulo}
            post_small_desc={post.resumo}
            post_full_desc={post.descricao}
          />
        ))}
      </Container>
    </>
  )
}

export default PostList
