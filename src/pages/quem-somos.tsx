import React from 'react'
import checkPhoto from '@utils/checkPhoto'
import ArrowReturn from '@atoms/ArrowReturn'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { contentfulClient } from '@utils/contentfulConect'
import { useRouter } from 'next/router'
import {
  Container,
  PostHeder,
  PostHeaderContent,
  PostTitle,
  PostDesc,
  PostContainer,
  VideoWrapper,
  VideoContainer
} from '@pageStyles/postpage'

export async function getStaticProps() {
  const { items } = await contentfulClient.getEntries({
    content_type: 'quem-somos'
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

const QuemSomos = ({ post }) => {
  const router = useRouter()

  if (router.isFallback) {
    return <div>Loading...</div>
  }

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

export default QuemSomos
