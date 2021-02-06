import React from 'react'
import convertDate from '@utils/convertDate'
import cutString from '@utils/cutString'
import checkPhoto from '@utils/checkPhoto'

import Link from 'next/link'
import {
  Container,
  CircleMask,
  PostDate,
  Title,
  SmallDesc,
  ReadPostLink
} from './styles'

type PhotoPropTypes = {
  name: string
  url: string
  rawUrl: string
}

type PostCardProps = {
  postId: string
  photoUrl: PhotoPropTypes
  postDate: string
  postTitle: string
  postSmallDesc: string
  youtubeUrl: string
}

const PostCard = ({
  postId,
  photoUrl,
  postDate,
  postTitle,
  postSmallDesc,
  youtubeUrl
}: PostCardProps): React.ReactElement => {
  const formattedDate = convertDate(postDate)
  const trimmedTitle = cutString(postTitle, 80)
  const trimmedDesc = cutString(postSmallDesc, 80)
  const bgImage = checkPhoto(photoUrl, youtubeUrl)

  return (
    <>
      <Container>
        <CircleMask
          style={{
            backgroundImage: `url(${bgImage})`
          }}
        />
        <PostDate>{`${formattedDate}`}</PostDate>
        <Title>{trimmedTitle}</Title>
        <SmallDesc>{trimmedDesc}</SmallDesc>
        <Link href={`/post/${postId}`}>
          <ReadPostLink href={`/post/${postId}`}>LER POSTAGEM</ReadPostLink>
        </Link>
      </Container>
    </>
  )
}

export default PostCard
