import React from 'react'

import 'prismjs/themes/prism-tomorrow.css'

import { NotionRenderer } from 'react-notion'

const PostPage = ({ postTitle, postContent }) => {
  console.log(postTitle)
  return (
    <>
      {postTitle.titulo}
      <NotionRenderer blockMap={postContent} />
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
