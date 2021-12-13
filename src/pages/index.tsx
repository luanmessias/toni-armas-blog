import React, { useState } from 'react'
import PosCard from '@molecules/PostCard'
import { Container, PaginateContainer } from '@pageStyles/index'
import { useGetPostListContext } from '@context/GetPostList'
import ReactPaginate from 'react-paginate'
import { createClient } from 'contentful'

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY
  })

  const res = await client.getEntries({
    content_type: 'posts'
  })

  return {
    props: {
      posts: res.items
    }
  }
}

const Home = ({ posts }) => {
  console.log('🚀 ~ file: index.tsx ~ line 26 ~ Home ~ posts', posts)
  const { postList } = useGetPostListContext()
  const [pageNumber, setPageNumber] = useState(0)

  const postsPerPage = 12
  const pagesVisted = pageNumber * postsPerPage
  const pageCount = Math.ceil(postList.length / postsPerPage)
  const changePage = ({ selected }) => {
    setPageNumber(selected)
  }

  const displayPosts = postList
    .slice(pagesVisted, pagesVisted + postsPerPage)
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

  return (
    <>
      <Container>
        {displayPosts}

        <PaginateContainer>
          <ReactPaginate
            previousLabel={'<'}
            nextLabel={'>'}
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName={'paginate'}
            previousLinkClassName={'pagPrev'}
            nextLinkClassName={'pagNext'}
            disabledClassName={'pagDisabled'}
            activeClassName={'pagActive'}
            pageRangeDisplayed={2}
            marginPagesDisplayed={0}
          />
        </PaginateContainer>
      </Container>
    </>
  )
}

export default Home
