import React from 'react'
import convertDate from '@utils/convertDate'
import cutString from '@utils/cutString'
import ytPhotoExtract from '@utils/ytPhotoExtract'
import Link from 'next/link'
import {
  Container,
  CircleMask,
  PostDate,
  Title,
  SmallDesc,
  TextContainer
} from './styles'

type PostCardProps = {
  postId: string
  photoUrl: string
  postDate: string
  postTitle: string
  postSmallDesc: string
  youtubeUrl: string
}

const SearchResultCard = ({
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

  const checkPhoto = (foto, video) => {
    if (video) {
      return ytPhotoExtract(youtubeUrl, 1)
    }

    if (!foto && !video) {
      return '/img/bg_top_mob.jpg'
    } else {
      const { url } = foto[0]
      return url
    }
  }

  return (
    <Link href={`/post/${postId}`}>
      <a href={`/post/${postId}`}>
        <Container>
          <CircleMask
            style={{
              backgroundImage: `url(${checkPhoto(photoUrl, youtubeUrl)})`
            }}
          />
          <TextContainer>
            <PostDate>{`${formattedDate}`}</PostDate>
            <Title>{trimmedTitle}</Title>
            <SmallDesc>{trimmedDesc}</SmallDesc>
          </TextContainer>
        </Container>
      </a>
    </Link>
  )
}

export default SearchResultCard
