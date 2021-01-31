const ytPhotoExtract = (url: string, quality: 1 | 2 | 3): string => {
  const regex = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/
  const vidArray = url.match(regex)
  const vidCode = vidArray[7]

  const qualityValue = () => {
    switch (quality) {
      case 1:
        return 'maxresdefault'
      case 2:
        return 'mqdefault'
      case 3:
        return 'sddefault'
      default:
        return 'maxresdefault'
    }
  }

  return `https://i.ytimg.com/vi_webp/${vidCode}/${qualityValue()}.webp`
}

export default ytPhotoExtract
