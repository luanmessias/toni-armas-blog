import ytPhotoExtract from '@utils/ytPhotoExtract'

const checkPhoto = (foto, video): string => {
  if (foto) {
    return `http:${foto}`
  }

  if (video) {
    return ytPhotoExtract(video, 1)
  }

  return '/img/bg_top_mob.jpg'
}

export default checkPhoto
