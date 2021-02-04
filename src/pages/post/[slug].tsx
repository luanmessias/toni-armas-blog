import React from 'react'
import { useRouter } from 'next/router'
import 'react-notion/src/styles.css'
import 'prismjs/themes/prism-tomorrow.css'

import { NotionRenderer } from 'react-notion'

const PostPage = ({ blockMap }) => {
  return (
    <>
      <NotionRenderer blockMap={blockMap} />
    </>
  )
}

export async function getStaticProps(paths) {
  const { slug } = paths.params
  const data = await fetch(`${process.env.notion_post_page}${slug}`).then(res =>
    res.json()
  )

  if (!data) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      blockMap: data
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
