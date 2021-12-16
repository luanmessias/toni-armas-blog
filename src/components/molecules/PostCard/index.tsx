import React from 'react'
import convertDate from '@utils/convertDate'
import cutString from '@utils/cutString'
import checkPhoto from '@utils/checkPhoto'
import { PostPropTypes } from '@proptypes/PostPropTypes'

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
  post: PostPropTypes
}

const PostCard = ({ post }: PostCardProps): React.ReactElement => {
  const postSlug = post.fields.slug
  const postImage = checkPhoto(
    post.fields.foto ? post.fields.foto.fields.file.url : null,
    post.fields.video
  )
  const postDate = convertDate(post.sys.createdAt)
  const postTitle = cutString(post.fields.titulo, 80)
  const postDesc = cutString(post.fields.descricao, 80)

  return (
    <Container>
      <CircleMask
        style={{
          backgroundImage: `url(${postImage})`
        }}
      />
      <PostDate>{`${postDate}`}</PostDate>
      <Title>{postTitle}</Title>
      <SmallDesc>{postDesc}</SmallDesc>
      <Link href={`/post/${postSlug}`}>
        <ReadPostLink href={`/post/${postSlug}`}>LER POSTAGEM</ReadPostLink>
      </Link>
    </Container>
  )
}

export default PostCard
