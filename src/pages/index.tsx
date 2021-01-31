import React from 'react'
import PosCard from '@molecules/PostCard'
import { Container } from '@pageStyles/index'

export async function getStaticProps() {
  const data = await fetch(process.env.notion_table_posts).then(res =>
    res.json()
  )

  if (!data) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      postListProps: data
    }
  }
}

const Home = ({ postListProps }) => {
  const postListFilter = postListProps.filter(({ status }) => {
    return status === 'ativo'
  })

  const postListRender = postListFilter.map(
    ({ id, data, titulo, descricao, foto, video }) => {
      return (
        <PosCard
          key={id}
          youtubeUrl={video}
          photoUrl={foto}
          postDate={data}
          postTitle={titulo}
          postSmallDesc={descricao}
        />
      )
    }
  )
  return <Container>{postListRender}</Container>
}

export default Home
