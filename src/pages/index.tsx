import React, { useState } from 'react'
import PosCard from '@molecules/PostCard'
import { Container, PaginateContainer } from '@pageStyles/index'
import { useGetPostListContext } from '@context/GetPostList'
import ReactPaginate from 'react-paginate'

const Home = () => {
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
