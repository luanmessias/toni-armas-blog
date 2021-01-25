import React from 'react'
import convertDate from '@utils/convertDate'
import readingTime from '@utils/readingTime'
import Link from 'next/link'
import {
  Container,
  CircleMask,
  PostDate,
  Title,
  SmallDesc,
  ReadPostLink
} from './styles'

type PostCardProps = {
  photo_url: string
  post_date: string
  post_title: string
  post_small_desc: string
  post_full_desc: string
}

const PostCard = ({
  photo_url,
  post_date,
  post_title,
  post_small_desc,
  post_full_desc
}: PostCardProps): JSX.Element => {
  const formattedDate = convertDate(post_date)

  const timetoRead = readingTime(post_full_desc)

  return (
    <>
      <Container>
        <CircleMask style={{ backgroundImage: `url(${photo_url})` }} />
        <PostDate>{`${formattedDate} | ${timetoRead}`}</PostDate>
        <Title>{post_title}</Title>
        <SmallDesc>{post_small_desc}</SmallDesc>
        <Link href="/">
          <ReadPostLink href="/">LER POSTAGEM</ReadPostLink>
        </Link>
      </Container>
    </>
  )
}

export default PostCard
