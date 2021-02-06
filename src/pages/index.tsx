import React from 'react'
import PosCard from '@molecules/PostCard'
import { Container } from '@pageStyles/index'
import { useGetPostListContext } from '@context/GetPostList'
import { PostPropTypes } from '@proptypes/PostPropTypes'

const Home = () => {
  const { postList } = useGetPostListContext()

  const postListRender = postList
    .filter(({ status }: any) => status === 'ativo')
    .map(({ id, data, titulo, descricao, foto, video }: any, index) => {
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
