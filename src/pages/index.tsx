import React from 'react'
import PosCard from '@molecules/PostCard'
import { Container } from '@pageStyles/index'
import { useGetPostListContext } from '@context/GetPostList'

const Home = () => {
  const { postList } = useGetPostListContext()

  const postListRender = postList
    .filter(({ status }) => status === 'ativo')
    .map(({ id, data, titulo, descricao, foto, video }, index) => {
      return (
        <PosCard
          key={index}
          postId={id}
          youtubeUrl={video}
          photoUrl={foto}
          postDate={data}
          postTitle={titulo}
          postSmallDesc={descricao}
        />
      )
    })
  return <Container>{postListRender}</Container>
}

export default Home
