import React from 'react'
import convertDate from '@utils/convertDate'
import checkPhoto from '@utils/checkPhoto'
import { NotionRenderer } from 'react-notion'
import 'react-notion/src/styles.css'
import 'prismjs/themes/prism-tomorrow.css'

import {
  Container,
  PostHeder,
  PostHeaderContent,
  PostDate,
  PostTitle,
  PostDesc
} from '@pageStyles/postpage'
import ArrowReturn from '@atoms/ArrowReturn'

const PostPage = ({ postTitle, postContent }) => {
  const { data, titulo, descricao, foto, video } = postTitle
  const formattedDate = convertDate(data)
  const bgImage = checkPhoto(foto, video)

  return (
    <>
      <PostHeder
        style={{
          backgroundImage: `url(${bgImage})`
        }}
      >
        <ArrowReturn />
        <PostHeaderContent>
          <PostDate>{formattedDate}</PostDate>
          <PostTitle>{titulo}</PostTitle>
          <PostDesc>{descricao}</PostDesc>
        </PostHeaderContent>
      </PostHeder>

      <Container>
        <NotionRenderer blockMap={postContent} />
      </Container>
    </>
  )
}

export async function getStaticProps(paths) {
  const { slug } = paths.params

  // Get post data
  const dataPost = await fetch(
    `${process.env.notion_post_page}${slug}`
  ).then(res => res.json())

  // Get table data
  const dataTable = await fetch(process.env.notion_table_posts).then(res =>
    res.json()
  )

  if (!dataPost || !dataTable) {
    return {
      notFound: true
    }
  }

  const dataTableFiltered = dataTable.find(({ id }) => {
    return id === slug
  })

  return {
    props: {
      postTitle: dataTableFiltered,
      postContent: dataPost
    }
  }
}

export async function getStaticPaths() {
  const data = await fetch(process.env.notion_table_posts).then(res =>
    res.json()
  )

  if (!data) {
    return {
      notFound: true
    }
  }

  const postListFilter = data.filter(({ status }) => {
    return status === 'ativo'
  })

  const postParams = []
  postListFilter.map(({ id }) => {
    return postParams.push({
      params: {
        slug: id
      }
    })
  })

  return {
    paths: postParams,
    fallback: false
  }
}

export default PostPage
