import React from 'react'
import convertDate from '@utils/convertDate'
import checkPhoto from '@utils/checkPhoto'
import { createClient } from 'contentful'
import ArrowReturn from '@atoms/ArrowReturn'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { PostPropTypes, PostFieldsPropTypes } from '@proptypes/PostPropTypes'

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

const client = createClient({
  space: process.env.contentful_space,
  accessToken: process.env.contentful_acces_token
})
export const getStaticPaths = async () => {
  const { items } = await client.getEntries({
    content_type: 'blogPost'
  })

  const paths = items.map((item: any) => {
    return {
      params: { slug: item.fields.slug }
    }
  })

  return {
    paths,
    fallback: true
  }
}

export async function getStaticProps({ params }) {
  const { items } = await client.getEntries({
    content_type: 'blogPost',
    'fields.slug': params.slug
  })

  if (!items.length) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }

  return {
    props: {
      post: items[0]
    },
    revalidate: 10
  }
}

const PostPage = ({ post }) => {
  if (!post) return <div>Loading...</div>

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

export default PostPage
