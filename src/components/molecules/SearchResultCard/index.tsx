import React from 'react'
import convertDate from '@utils/convertDate'
import cutString from '@utils/cutString'
import Link from 'next/link'
import { PostPropTypes } from '@proptypes/PostPropTypes'
import checkPhoto from '@utils/checkPhoto'

import {
  Container,
  CircleMask,
  PostDate,
  Title,
  SmallDesc,
  TextContainer
} from './styles'

type PostCardProps = {
  post: PostPropTypes
}

const SearchResultCard = ({ post }: PostCardProps): React.ReactElement => {
  const postSlug = post.fields.slug
  const postImage = checkPhoto(
    post.fields.foto ? post.fields.foto.fields.file.url : null,
    post.fields.video
  )
  const postDate = convertDate(post.sys.createdAt)
  const postTitle = cutString(post.fields.titulo, 80)
  const postDesc = cutString(post.fields.descricao, 80)

  return (
    <Link href={`/post/${postSlug}`}>
      <a href={`/post/${postSlug}`}>
        <Container>
          <CircleMask
            style={{
              backgroundImage: `url(${postImage})`
            }}
          />
          <TextContainer>
            <PostDate>{postDate}</PostDate>
            <Title>{postTitle}</Title>
            <SmallDesc>{postDesc}</SmallDesc>
          </TextContainer>
        </Container>
      </a>
    </Link>
  )
}

export default SearchResultCard
