import ytPhotoExtract from '@utils/ytPhotoExtract'

const checkPhoto = (foto, video): string => {
  if (foto) {
    return `https:${foto}`
  }

  if (video) {
    return ytPhotoExtract(video, 1)
  }

  return '/img/post-bg-default.jpg'
}

export default checkPhoto
