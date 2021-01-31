import React from 'react'
import convertDate from '@utils/convertDate'
import cutString from '@utils/cutString'
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
  photoUrl: string
  postDate: string
  postTitle: string
  postSmallDesc: string
}

const PostCard = ({
  photoUrl,
  postDate,
  postTitle,
  postSmallDesc
}: PostCardProps): JSX.Element => {
  const formattedDate = convertDate(postDate)
  const trimmedTitle = cutString(postTitle, 15)
  const trimmedDesc = cutString(postSmallDesc, 15)

  const checkPhoto = foto => {
    if (!foto) {
      return '/img/bg_top_mob.jpg'
    } else {
      const { url } = foto[0]
      return url
    }
  }

  return (
    <>
      <Container>
        <CircleMask
          style={{ backgroundImage: `url(${checkPhoto(photoUrl)})` }}
        />
        <PostDate>{`${formattedDate}`}</PostDate>
        <Title>{trimmedTitle}</Title>
        <SmallDesc>{trimmedDesc}</SmallDesc>
        <Link href="/">
          <ReadPostLink href="/">LER POSTAGEM</ReadPostLink>
        </Link>
      </Container>
    </>
  )
}

export default PostCard
