import React from 'react'
import convertDate from '@utils/convertDate'
import checkPhoto from '@utils/checkPhoto'
import { createClient } from 'contentful'
import ArrowReturn from '@atoms/ArrowReturn'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import {
  Container,
  PostHeder,
  PostHeaderContent,
  PostDate,
  PostTitle,
  PostDesc,
  PostContainer,
  VideoWrapper,
  VideoContainer
} from '@pageStyles/postpage'

const PostPage = ({ post }) => {
  const formattedDate = convertDate(post.sys.createdAt)

  const bgImage = checkPhoto(
    post.fields.foto ? post.fields.foto.fields.file.url : null,
    post.fields.video
  )

  const embedVideo = () => {
    if (post.fields.video) {
      const { video } = post.fields
      const regex =
        /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/
      const vidArray = video.match(regex)
      const vidCode = vidArray[7]

      return (
        <VideoWrapper>
          <VideoContainer>
            <iframe
              src={`https://www.youtube.com/embed/${vidCode}`}
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </VideoContainer>
        </VideoWrapper>
      )
    }
  }

  return (
    <Container>
      <PostHeder
        style={{
          backgroundImage: `url(${bgImage})`
        }}
      >
        <ArrowReturn />
        <PostHeaderContent>
          <PostDate>{formattedDate}</PostDate>
          <PostTitle>{post.fields.titulo}</PostTitle>
          <PostDesc>{post.fields.descricao}</PostDesc>
        </PostHeaderContent>
      </PostHeder>

      <PostContainer>
        {documentToReactComponents(post.fields.conteudo)}
      </PostContainer>

      {embedVideo()}
    </Container>
  )
}
export async function getStaticProps(paths) {
  const { slug } = paths.params

  const client = createClient({
    space: process.env.contentful_space,
    accessToken: process.env.contentful_acces_token
  })

  const res = await client.getEntries({
    content_type: 'blogPost'
  })

  const post = res.items.find(({ fields }: any) => fields.slug === slug)

  if (!post) {
    return {
      notFound: true
    }
  }
  return {
    props: {
      post
    },
    revalidate: 30
  }
}

export async function getStaticPaths() {
  const client = createClient({
    space: process.env.contentful_space,
    accessToken: process.env.contentful_acces_token
  })

  const res = await client.getEntries({
    content_type: 'blogPost'
  })

  if (!res) {
    return {
      notFound: true
    }
  }

  const postListFilter = res.items.filter(({ fields }: any) => {
    return fields.ativo === true
  })

  const postParams = []
  postListFilter.map(({ fields }: any) => {
    return postParams.push({
      params: {
        slug: fields.slug
      }
    })
  })

  return {
    paths: postParams,
    fallback: 'blocking'
  }
}

export default PostPage
